<script setup>
import { ref } from 'vue'
import { useNav } from '@slidev/client'
const { isPrintMode } = useNav()
const selected = ref(0)
const steps = [
  { title: 'Tu perfil', route: '/perfil', body: 'Define intereses, nivel académico, modalidad y ubicación preferida.', result: 'Un punto de partida personal.' },
  { title: 'Afinidad', route: '/recomendaciones', body: 'Revisa programas recomendados y las razones que explican su afinidad.', result: 'Entiende por qué aparece una opción.' },
  { title: 'Exploración', route: '/programas', body: 'Busca por carrera y aplica filtros sobre el catálogo disponible.', result: 'Amplía o precisa tu búsqueda.' },
  { title: 'Comparación', route: '/comparar', body: 'Contrasta hasta tres programas y revisa los datos que faltan.', result: 'Haz visibles las diferencias.' },
  { title: 'Apoyos', route: '/becas', body: 'Consulta becas y financiación; confirma requisitos y fechas en la fuente.', result: 'Prepara las preguntas del siguiente paso.' },
]
</script>

<template>
  <div class="journey" @keydown.stop>
    <div class="journey-track" aria-label="Pasos del recorrido">
      <button v-for="(step, i) in steps" :key="step.title" type="button" :class="{ active: selected === i }" :aria-pressed="selected === i" @click="selected = i"><span>{{ i + 1 }}</span><strong>{{ step.title }}</strong></button>
    </div>
    <div v-if="!isPrintMode" class="journey-detail" aria-live="polite"><div><p class="eyebrow">PASO {{ selected + 1 }} · {{ steps[selected].route }}</p><h2>{{ steps[selected].result }}</h2><p>{{ steps[selected].body }}</p></div><span class="journey-watermark">0{{ selected + 1 }}</span></div>
    <div v-if="isPrintMode" class="journey-summary"><p v-for="step in steps" :key="step.title"><strong>{{ step.title }}:</strong> {{ step.body }}</p></div>
  </div>
</template>
