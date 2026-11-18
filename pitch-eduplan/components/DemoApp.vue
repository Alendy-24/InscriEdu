<script setup>
import BrandMark from './BrandMark.vue'
import { computed, ref, watch } from 'vue'
import { useIsSlideActive, useNav, useSlideContext } from '@slidev/client'
import { appOrigin, backupMedia, demoRoutes } from '../config/demo'

const { next, isPrintMode } = useNav()
const { $renderContext } = useSlideContext()
const active = useIsSlideActive()
const props = defineProps({ initialPath: { type: String, default: '/programas' }, heading: { type: String, default: '' } })
const path = ref(props.initialPath)
const protectedView = computed(() => ['/perfil', '/recomendaciones'].includes(props.initialPath))
const revision = ref(0)
const backup = ref(false)
const captureIndex = ref(0)
const showVideo = ref(true)
const status = ref('loading')
const isAudience = computed(() => $renderContext.value === 'slide' && !isPrintMode.value)
const frameSrc = computed(() => new URL(path.value, appOrigin).href)
const capture = computed(() => backupMedia.captures[(captureIndex.value + (props.initialPath === '/comparar' ? 1 : 0)) % backupMedia.captures.length])

watch([active, isAudience, backup, revision, frameSrc], (_, __, onCleanup) => {
  if (!active.value || !isAudience.value || backup.value) return

  status.value = 'loading'
  const controller = new AbortController()
  const timer = setTimeout(() => {
    status.value = 'unavailable'
    controller.abort()
  }, 5000)

  onCleanup(() => {
    clearTimeout(timer)
    controller.abort()
  })

  fetch(frameSrc.value, { mode: 'no-cors', cache: 'no-store', signal: controller.signal })
    .then(() => {
      if (!controller.signal.aborted) status.value = 'ready'
    })
    .catch(() => {
      if (!controller.signal.aborted) status.value = 'unavailable'
    })
    .finally(() => clearTimeout(timer))
}, { immediate: true })

function openRoute(event) {
  path.value = event.target.value
  backup.value = false
}
</script>

<template>
  <section class="product-demo" aria-label="Demostración de EduPlan">
    <header class="browser-bar">
      <div class="browser-tab">
        <BrandMark variant="horizontal" />
        
      </div>
      <template v-if="isAudience">
        <select :value="path" aria-label="Ir a una sección de EduPlan" @change="openRoute">
          <option v-for="route in demoRoutes" :key="route.path" :value="route.path">
            {{ route.label }}
          </option>
        </select>
        <nav aria-label="Controles de la demostración">
          <a :href="frameSrc" target="_blank" rel="noopener noreferrer">Abrir en otra pestaña ↗</a>
          <button type="button" :aria-pressed="backup" @click="backup = !backup">
            {{ backup ? 'Volver a la app' : 'Respaldo' }}
          </button>
          <button type="button" class="browser-next" @click="next">Continuar →</button>
        </nav>
      </template>
      <span v-else class="capture-label">{{ protectedView ? 'Ruta protegida' : 'Captura del producto · ' + backupMedia.capturedAt }}</span>
    </header>

    <div class="browser-view">
      <div v-if="protectedView && !isAudience" class="protected-summary"><h2>{{ heading }}</h2><p>{{ initialPath === '/perfil' ? 'Intereses · Nivel académico · Ubicación · Modalidad' : 'Perfil académico → Afinidad explicada → Programas sugeridos' }}</p><p>Vista en vivo disponible con sesión en EduPlan.</p></div>
      <template v-else-if="!isAudience || backup">
        <div v-if="isAudience && showVideo && backupMedia.video" class="media-view">
          <video controls preload="metadata" :poster="backupMedia.poster || undefined" :src="backupMedia.video" @error="showVideo = false" />
          <button type="button" @click="showVideo = false">Ver capturas</button>
        </div>
        <div v-else-if="capture" class="media-view">
          <img :src="capture.src" :alt="capture.alt" />
          <button v-if="isAudience && backupMedia.captures.length > 1" type="button" @click="captureIndex = (captureIndex + 1) % backupMedia.captures.length">
            {{ capture.label }} · Siguiente captura →
          </button>
        </div>
      </template>
      <template v-else-if="active">
        <iframe v-if="status === 'ready'" :key="revision" :src="frameSrc" title="EduPlan interactivo" @error="status = 'unavailable'" />
        <div v-else class="browser-message" role="status">
          <p v-if="status === 'loading'">Conectando con EduPlan…</p>
          <template v-else>
            <h2>EduPlan no responde en el puerto 3005</h2>
            <p>Abre la aplicación por separado o muestra el recorrido grabado.</p>
            <button type="button" @click="revision++">Reintentar</button>
            <button type="button" @click="backup = true">Ver respaldo</button>
          </template>
        </div>
      </template>
    </div>
  </section>
</template>

<style scoped>
.product-demo {
  position: absolute;
  inset: 22px 26px 57px;
  display: grid;
  grid-template-rows: auto minmax(0, 1fr);
  overflow: hidden;
  background: #edf2fa;
  border: 1px solid #bcc9dd;
  border-radius: 14px;
  box-shadow: 0 14px 48px #10265322;
  color: var(--brand-navy);
}

.browser-bar {
  display: flex;
  align-items: center;
  gap: 14px;
  min-height: 49px;
  padding: 7px 13px;
  background: var(--brand-navy);
  color: white;
  font-size: 15px;
  line-height: 1.3;
}

.browser-tab, .browser-bar nav {
  display: flex;
  align-items: center;
  gap: 10px;
}

.browser-tab img {
  width: 23px;
  height: 23px;
  object-fit: contain;
  background: white;
  border-radius: 4px;
}

.browser-bar nav, .capture-label {
  margin-left: auto;
}

.browser-bar :is(a, button, select) {
  padding: 5px 9px;
  border: 1px solid #ffffff55;
  border-radius: 5px;
  color: inherit;
  background: var(--brand-navy);
  font: inherit;
  text-decoration: none;
}

.browser-bar .browser-next {
  background: #2862ed;
  border-color: #2862ed;
}

.browser-view {
  position: relative;
  min-height: 0;
}

.browser-view iframe {
  display: block;
  width: 100%;
  height: 100%;
  border: 0;
  background: white;
}

.media-view {
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100%;
  gap: 8px;
  padding: 8px;
}

.media-view :is(img, video) {
  width: 100%;
  flex: 1 1 0;
  min-height: 0;
  object-fit: contain;
}

.media-view button, .browser-message button {
  padding: 5px 12px;
  border: 1px solid #bcc9dd;
  border-radius: 5px;
  background: white;
  color: var(--brand-navy);
  font-size: 15px;
}

.browser-message {
  padding: 15% 24px 20px;
  text-align: center;
}

.browser-message button + button {
  margin-left: 10px;
}
</style>



