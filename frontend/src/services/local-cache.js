// Caché local de respuestas del catálogo.
// Guarda en localStorage (sobrevive a recargas) y mantiene una copia en memoria.
const PREFIX = 'eduplan:cache:v1:';
const FRESCO_MS = 10 * 60 * 1000;        // 10 min: se usa tal cual, sin revalidar
const MAX_EDAD_MS = 24 * 60 * 60 * 1000; // 24 h: pasado esto se descarta
const memoria = new Map();               // guarda el texto JSON, así cada lectura da un objeto nuevo
const enCurso = new Map();

function almacen() {
  try { return window.localStorage; } catch { return null; }
}

function leer(clave) {
  try {
    const texto = memoria.get(clave) ?? almacen()?.getItem(PREFIX + clave);
    if (!texto) return null;
    const entrada = JSON.parse(texto);
    if (typeof entrada?.guardadoEn !== 'number') return null;
    memoria.set(clave, texto);
    return entrada;
  } catch { return null; }
}

export function clearLocalCache() {
  memoria.clear();
  try {
    const store = almacen();
    if (store) Object.keys(store).filter(k => k.startsWith(PREFIX)).forEach(k => store.removeItem(k));
  } catch { /* sin acceso a localStorage: nada que limpiar */ }
}

function guardar(clave, datos) {
  const texto = JSON.stringify({ guardadoEn: Date.now(), datos });
  memoria.set(clave, texto);
  const store = almacen();
  if (!store) return;
  try { store.setItem(PREFIX + clave, texto); }
  catch {
    // Cuota llena: limpiamos lo nuestro y reintentamos una vez.
    clearLocalCache();
    memoria.set(clave, texto);
    try { store.setItem(PREFIX + clave, texto); } catch { /* queda solo en memoria */ }
  }
}

function refrescar(clave, pedir) {
  if (enCurso.has(clave)) return;
  const tarea = pedir().then(datos => guardar(clave, datos)).catch(() => {}).finally(() => enCurso.delete(clave));
  enCurso.set(clave, tarea);
}

// pedir(signal) debe devolver los datos ya parseados o lanzar un error.
export async function cachedRequest(clave, pedir, { signal, frescoMs = FRESCO_MS } = {}) {
  const entrada = leer(clave);
  const edad = entrada ? Date.now() - entrada.guardadoEn : Infinity;
  if (entrada && edad < MAX_EDAD_MS) {
    if (edad >= frescoMs) refrescar(clave, () => pedir());
    return entrada.datos;
  }
  const datos = await pedir(signal);
  guardar(clave, datos);
  return datos;
}

export async function conReintentos(pedir, signal, { intentos = 3, esperaMs = 700 } = {}) {
  for (let intento = 1; ; intento++) {
    try { return await pedir(signal); }
    catch (error) {
      if (error?.name === 'AbortError' || error?.noReintentar || intento >= intentos) throw error;
      await esperar(esperaMs * intento, signal);
    }
  }
}

function esperar(ms, signal) {
  return new Promise((resolve, reject) => {
    if (signal?.aborted) return reject(new DOMException('Cancelado', 'AbortError'));
    const alCancelar = () => { clearTimeout(timer); reject(new DOMException('Cancelado', 'AbortError')); };
    const timer = setTimeout(() => { signal?.removeEventListener('abort', alCancelar); resolve(); }, ms);
    signal?.addEventListener('abort', alCancelar, { once: true });
  });
}