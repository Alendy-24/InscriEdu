import assert from 'node:assert/strict'
import { mkdir } from 'node:fs/promises'
import { chromium } from 'playwright-chromium'

await mkdir('qa/redesign', { recursive: true })
const browser = await chromium.launch()
try {
  const page = await browser.newPage({ viewport: { width: 1920, height: 1080 }, reducedMotion: 'reduce' })
  const base = process.env.SLIDEV_URL || 'http://localhost:3030'
  const errors = []
  page.on('pageerror', error => errors.push(error.message))
  for (let slide = 1; slide <= 15; slide++) {
    await page.goto(base + '/' + slide + (slide === 1 ? '?clicks=1' : ''))
    const layout = page.locator('.slidev-page-' + slide + ' .slidev-layout').first()
    await layout.waitFor()
    await page.evaluate(() => document.fonts.ready)
    for (const image of await layout.locator('img').all()) {
      await image.evaluate(el => el.decode())
    }
    if (slide === 6 || slide === 7) {
      const frame = page.frameLocator('iframe[title="EduPlan interactivo"]')
      await frame.getByLabel('Correo electrónico', { exact: true }).waitFor()
    }
    if (slide === 8) {
      await page.frameLocator('iframe[title="EduPlan interactivo"]').getByRole('heading', { name: 'Comparar programas' }).waitFor()
      await page.getByRole('button', { name: 'Respaldo', exact: true }).click()
      await page.locator('.media-view video').waitFor()
      await page.getByRole('button', { name: 'Ver capturas', exact: true }).click()
      await page.locator('.media-view img').waitFor()
      await page.getByRole('button', { name: 'Volver a la app', exact: true }).click()
      await page.frameLocator('iframe[title="EduPlan interactivo"]').getByRole('heading', { name: 'Comparar programas' }).waitFor()
    }
    await layout.screenshot({ path: 'qa/redesign/slide-' + String(slide).padStart(2, '0') + '.png' })
    console.log('Diapositiva ' + slide + ' verificada')
  }
  assert.deepEqual(errors, [])
} finally {
  await browser.close()
}








