// Solo el origen local de desarrollo. No incluir tokens ni credenciales aquí.
export const appOrigin = 'http://localhost:3005'
export const demoRoutes = [
  { label: 'Programas', path: '/programas' },
  { label: 'Perfil', path: '/perfil' },
  { label: 'Recomendaciones', path: '/recomendaciones' },
  { label: 'Comparar', path: '/comparar' },
  { label: 'Becas', path: '/becas' },
]

// Añadir únicamente capturas propias sin datos personales y un video real.
// Las rutas son relativas a public/. Dejar null si el recurso aún no existe.
export const backupMedia: {
  captures: { src: string; label: string; alt: string }[]
  video: string | null
  poster: string | null
  capturedAt: string | null
} = {
  captures: [
    { src: '/demo/programas.png', label: 'Programas · filtro de pregrado', alt: 'Captura real del catálogo de programas de EduPlan con el filtro Pregrado seleccionado' },
    { src: '/demo/comparacion.png', label: 'Comparación de programas', alt: 'Captura real del comparador de EduPlan con dos programas seleccionados' },
    { src: '/demo/becas.png', label: 'Becas y oportunidades', alt: 'Captura real de la sección de becas y financiación de EduPlan' },
  ],
  video: '/demo/recorrido.webm',
  poster: '/demo/programas.png',
  capturedAt: '2026-11-04',
}
