# EduPlan · Descubrir lo que es para ti

Pitch de 15 diapositivas en Slidev, formato 16:9. El arco comienza con dos situaciones ficticias, pasa por la evidencia del DANE y termina con una invitación a explorar la plataforma.

## Presentar desde WSL

En un PC nuevo, instala Node.js 22.12+, JDK 21 y Docker con Compose. En WSL, usa Node y npm de Linux. Desde la raíz del repositorio, ejecuta en una terminal:

```bash
npm ci --include=optional
npm run dev
```

En otra terminal, también desde la raíz:

```bash
cd pitch-eduplan
npm run dev
```

Para la primera instalación del pitch, ejecuta `npm ci --include=optional` en la segunda terminal antes de iniciar Slidev. Si alternas entre Windows y WSL y falta un módulo nativo, repite la instalación en el entorno desde el que presentarás.

- Vista del público: http://localhost:3030/
- Vista del expositor: http://localhost:3030/presenter/
- Demo: http://localhost:3030/8
- Flechas o espacio para avanzar. `f` para pantalla completa.

La demo abre el comparador automáticamente al llegar a la diapositiva 8 en la vista del público. Usa el selector para cambiar de sección. Para mostrar perfil y recomendaciones, prepara una sesión dentro de esa misma vista antes de proyectar. El modo expositor muestra una captura de referencia. Si falla la carga, puedes usar **Abrir en otra pestaña** o **Respaldo** para mostrar el video y las capturas locales.

## Editar y exportar

El [guion rápido](GUION.md) tiene una intervención por diapositiva. Las notas del modo expositor están en `slides.md`. Las composiciones del rediseño están en `styles/story.css` y la demo en `components/DemoApp.vue`. Los archivos de imagen y video se sirven localmente desde `public/`.

```bash
npm run export:pdf
npm run export:pptx
```

Ejecuta las exportaciones en secuencia. Ambas usan una captura en la diapositiva 8. El PPTX conserva las notas y renderiza el diseño como imágenes. Markdown, CSS y Vue son los archivos editables.

## Evidencia y créditos

- [DANE, ECV 2025, tabla 12, p. 19](https://www.dane.gov.co/files/operaciones/ECV/bol-ECV-2025.pdf). Nivel educativo superior alcanzado entre personas de 17 a 21 años.
- [Triángulo de St. Gallen](https://alexandria.unisg.ch/entities/publication/ee4ea880-7b4a-44c1-842c-8f8c174b5543). El modelo B2B2C de EduPlan se presenta como hipótesis.
- [Fotografías y licencias](public/brand/story-credits.md). Las imágenes muestran un patio escolar de Bogotá y un paisaje rural del Valle del Cauca. Los recorridos narrados son ficticios.
- Los porcentajes y sus denominadores se verificaron en el CSV original. Consulta [VALIDATION.md](VALIDATION.md).

## Verificar

Con EduPlan y Slidev activos, `npm run check` recorre las 15 diapositivas y prueba la demo y su respaldo. `node scripts/check-demo.mjs` recorre las rutas públicas y verifica la redirección de perfil y recomendaciones al acceso.


## Identidad visual

El logo original del brief está en `public/brand/eduplan-lockup.png`. `components/BrandMark.vue` presenta tres variantes: completa, horizontal e isotipo recortado mediante CSS. Para cambiar de marca, actualiza `config/brand.ts` y sustituye el recurso indicado por `logo`. Revisa también el título de Slidev y las menciones narrativas en `slides.md`.

Los colores compartidos y las variantes de marca están en `styles/brand.css`. Las composiciones específicas de las escenas están en `styles/story.css`.







## Preparar la comparación en vivo

Abre la diapositiva 8 en la vista del público. En el selector de EduPlan elige **Programas**, pulsa **Comparar** en dos opciones y selecciona **Comparar** en el mismo selector. La aplicación conserva la selección para esa cuenta o para el invitado en ese navegador. Ensaya en la misma ventana y con la misma cuenta que usarás al presentar. El PDF incluye una captura real de respaldo.


