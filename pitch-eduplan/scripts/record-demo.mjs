import { chromium } from 'playwright-chromium'
import { mkdir } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'

// Graba solo el recorrido público real en un navegador nuevo, sin sesión.
// No intercepta API, no crea cuentas y no escribe en la base de datos.
const qa = new URL('../qa/video/', import.meta.url)
await mkdir(qa, { recursive: true })
const browser = await chromium.launch({ headless: true })
const context = await browser.newContext({
  viewport: { width: 1440, height: 900 },
  recordVideo: { dir: fileURLToPath(qa), size: { width: 1440, height: 900 } },
})
const page = await context.newPage()
const video = page.video()
try {
  await page.goto('http://localhost:3005/programas', { waitUntil: 'networkidle' })
  await page.locator('button[aria-label^="Comparar "]').first().waitFor({ timeout: 60000 })
  await page.waitForTimeout(2500)
  await page.locator('#program-level').selectOption('Pregrado')
  await page.getByText('Consultando el catálogo…', { exact: true }).waitFor({ state: 'hidden', timeout: 60000 })
  await page.waitForTimeout(2000)
  await page.locator('button[aria-label^="Comparar "]').first().click()
  await page.locator('button[aria-label^="Comparar "]').first().click()
  await page.goto('http://localhost:3005/comparar', { waitUntil: 'networkidle' })
  await page.waitForTimeout(2500)
  await page.evaluate(() => window.scrollBy({ top: 420, behavior: 'smooth' }))
  await page.waitForTimeout(2000)
  await page.goto('http://localhost:3005/becas', { waitUntil: 'networkidle' })
  await page.waitForTimeout(2500)
  await page.evaluate(() => window.scrollBy({ top: 440, behavior: 'smooth' }))
  await page.waitForTimeout(3000)
  await context.close()
  await video.saveAs(fileURLToPath(new URL('../public/demo/recorrido.webm', import.meta.url)))
  console.log('Grabación real guardada: public/demo/recorrido.webm (recorrido público, sin autenticación).')
} finally {
  await context.close()
  await browser.close()
}
