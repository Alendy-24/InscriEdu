import assert from 'node:assert/strict'
import { mkdir, writeFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import { chromium } from 'playwright-chromium'

// Solo lectura de API públicas. La comparación se guarda en el navegador
// efímero de Playwright. No se crean cuentas ni se escriben perfiles en la DB.
const output = new URL('../qa/', import.meta.url)
await mkdir(output, { recursive: true })
const browser = await chromium.launch({ headless: true })
const context = await browser.newContext({ viewport: { width: 1600, height: 1000 } })
const page = await context.newPage()
await page.addInitScript(() => localStorage.setItem('slidev-wake-lock', 'false'))
const errors = []
page.on('pageerror', error => errors.push(error.message))
try {
  await page.goto((process.env.SLIDEV_URL || 'http://localhost:3030') + '/8', { waitUntil: 'networkidle' })
  const demo = page.locator('.slidev-page-8 .product-demo')
  await demo.getByLabel('Ir a una sección de EduPlan').selectOption('/programas')
  const frame = demo.frameLocator('iframe[title="EduPlan interactivo"]')
  await frame.getByRole('heading', { name: 'Programas académicos', exact: true }).waitFor()
  await frame.locator('button[aria-label^="Comparar "]').first().waitFor({ timeout: 60000 })
  const headers = await page.request.get('http://localhost:3005/')
  assert.equal(headers.status(), 200)
  assert.equal(headers.headers()['x-frame-options'], undefined)
  assert.equal(headers.headers()['content-security-policy'], undefined)
  await frame.locator('#program-level').selectOption('Pregrado')
  await frame.getByRole('button', { name: 'Quitar filtro Nivel: Pregrado', exact: true }).waitFor()
  const appFrame = page.frames().find(f => f.url().startsWith('http://localhost:3005/'))
  await appFrame.waitForURL('**/programas?*level=Pregrado*')
  await frame.locator('button[aria-label^="Comparar "]').first().waitFor({ timeout: 60000 })
  // Esperar a que termine la consulta filtrada, no capturar el indicador de carga.
  await frame.getByText('Consultando el catálogo…', { exact: true }).waitFor({ state: 'hidden', timeout: 60000 })
  await appFrame.evaluate(() => document.fonts.ready)
  await frame.locator('button[aria-label^="Comparar "]').nth(0).click()
  await frame.locator('button[aria-label^="Comparar "]').nth(0).click()
  await demo.getByLabel('Ir a una sección de EduPlan').selectOption('/comparar')
  await frame.getByRole('heading', { name: /Compar/ }).first().waitFor()
  await demo.screenshot({ path: fileURLToPath(new URL('iframe-comparison.png', output)) })
  for (const label of ['Perfil', 'Recomendaciones']) {
    await demo.getByLabel('Ir a una sección de EduPlan').selectOption({ label })
    await frame.getByRole('heading', { name: 'Bienvenido a EduPlan', exact: true }).waitFor()
    await frame.getByLabel('Correo electrónico', { exact: true }).fill('')
    await frame.getByLabel('Contraseña', { exact: true }).fill('')
  }
  await demo.getByLabel('Ir a una sección de EduPlan').selectOption('/becas')
  await frame.getByRole('heading', { name: /Becas y oportunidades/ }).waitFor()
  const scholarshipsFrame = page.frames().find(f => f.url().startsWith('http://localhost:3005/'))
  await scholarshipsFrame.evaluate(() => document.fonts.ready)
  await frame.getByRole('heading', { name: /Becas y oportunidades/ }).waitFor()
  const [popup] = await Promise.all([page.waitForEvent('popup'), demo.getByRole('link', { name: 'Abrir en otra pestaña ↗' }).click()])
  await popup.waitForLoadState('domcontentloaded')
  assert.equal(new URL(popup.url()).origin, 'http://localhost:3005')
  await popup.close()
  await demo.getByRole('button', { name: /Continuar/ }).click()
  await page.waitForURL('**/9')
  await page.goto((process.env.SLIDEV_URL || 'http://localhost:3030') + '/8')
  await page.locator('.slidev-page-8').frameLocator('iframe[title="EduPlan interactivo"]').getByText('2 de 3 programas', { exact: true }).waitFor()
  assert.deepEqual(errors, [])
  const report = {
    status: 'partial-pass',
    verified: ['iframe real', 'encabezados del frontend', 'programas con datos reales', 'filtro académico y URL', 'comparación de dos programas', 'rutas protegidas al login', 'campos de acceso interactivos', 'becas', 'pestaña alternativa'],
    pending: ['login con backend', 'persistencia de perfil', 'recomendaciones autenticadas'],
    reason: 'La prueba usa navegación pública y comprueba el formulario de acceso sin enviar credenciales.',
    errors,
  }
  await writeFile(new URL('demo-report.json', output), JSON.stringify(report, null, 2))
  console.log(JSON.stringify(report, null, 2))
} finally { await browser.close() }








