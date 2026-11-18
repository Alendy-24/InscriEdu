<script setup>
import { ref } from 'vue'
import { useSlideContext, useNav } from '@slidev/client'
const { $renderContext } = useSlideContext()
const { isPrintMode } = useNav()
const selected = ref(0)
const dimensions = [
  { question: '¿Quién?', title: 'Personas que exploran su futuro', detail: 'Estudiantes y aspirantes a educación superior. Segmento prioritario y pagador: pendientes de validar.', tag: 'Público propuesto' },
  { question: '¿Qué?', title: 'Orientación con información', detail: 'Exploración de programas, recomendaciones explicadas, comparación y oportunidades de financiación.', tag: 'Propuesta del producto' },
  { question: '¿Cómo?', title: 'Conectar datos y preferencias', detail: 'Catálogo de fuentes oficiales, perfil personal y reglas de afinidad; requisitos y procedencia visibles.', tag: 'Capacidades implementadas' },
  { question: '¿Valor?', title: 'Sostenibilidad por definir', detail: 'Pagador, oferta de pago, precio y costos: pendientes de definir. No hay ingresos ni convenios verificados.', tag: 'Modelo económico pendiente' },
]
</script>

<template>
  <div class="business-model" @keydown.stop>
    <div class="model-dimensions"><button v-for="(item, i) in dimensions" :key="item.question" type="button" :class="{ active: selected === i }" :aria-pressed="selected === i" @click="selected = i"><span>0{{ i + 1 }}</span><strong>{{ item.question }}</strong><small>{{ item.tag }}</small></button></div>
    <section class="model-detail" aria-live="polite"><span class="model-center">EduPlan<span>MODELO DE NEGOCIO</span></span><div><p class="eyebrow">{{ dimensions[selected].question }}</p><h2>{{ dimensions[selected].title }}</h2><p>{{ dimensions[selected].detail }}</p></div></section>
    <div v-if="isPrintMode || $renderContext === 'export'" class="export-model"><p v-for="item in dimensions" :key="item.question"><strong>{{ item.question }}</strong> {{ item.detail }}</p></div>
  </div>
</template>
