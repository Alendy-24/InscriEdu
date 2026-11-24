import { cachedRequest, conReintentos } from './local-cache.js';
const PAGE_SIZE = 12;
const baseUrl = (import.meta.env.VITE_DATA_INTEGRATION_URL ?? "").trim().replace(/\/+$/, "");

export async function getInstitutions(filters, page, signal) {
    const query = new URLSearchParams({ page: String(page), limit: String(PAGE_SIZE), includeModalities: "true" });
    for (const [key, value] of Object.entries(filters)) {
        if (value?.trim()) query.set(key, value.trim());
    }

    // El endpoint existente de data-integration consulta los catálogos públicos del MEN.
    const url = `${baseUrl}/api/institutions?${query}`;
    const payload = await cachedRequest(url, requestSignal => conReintentos(async s => {
    const response = await fetch(url, { signal: s });
    if (!response.ok) throw new Error("No fue posible consultar las instituciones");
    return response.json();
}, requestSignal), { signal });
    if (!Array.isArray(payload.data)) throw new Error("Respuesta de instituciones no válida");

    if (typeof payload.hasMore !== "boolean") throw new Error("Respuesta de paginación no válida");

    return { institutions: payload.data, hasMore: payload.hasMore };
}

export async function getInstitutionByCode(code, signal) {
    if (!/^\d+$/.test(String(code))) throw new Error('Código de institución inválido');
    const url = `${baseUrl}/api/institutions/${encodeURIComponent(code)}`;
    const institution = await cachedRequest(url, requestSignal => conReintentos(async s => {
    const response = await fetch(url, { signal: s });
    if (!response.ok) throw new Error('No fue posible consultar el detalle de la institución');
    return response.json();
}, requestSignal), { signal });
    if (!institution || typeof institution.name !== 'string') throw new Error('Detalle de institución no válido');
    return institution;
}
