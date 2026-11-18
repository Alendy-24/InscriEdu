<script setup>
import { ref } from 'vue'
import { useSlideContext, useNav } from '@slidev/client'
const { $renderContext } = useSlideContext()
const { isPrintMode } = useNav()
const selected = ref(0)
const cards = [
  { icon: '◎', title: 'Opciones relevantes', text: 'Explora desde tus intereses.', detail: 'Las recomendaciones explican coincidencias, diferencias y datos pendientes según tus preferencias.' },
  { icon: '⇄', title: 'Comparación clara', text: 'Pon tus opciones lado a lado.', detail: 'Contrasta ubicación, modalidad y formación sin perder de vista la procedencia de los datos.' },
  { icon: '↗', title: 'Apoyos con contexto', text: 'Entiende qué debes confirmar.', detail: 'Consulta requisitos, cobertura, vigencia y fuentes oficiales de oportunidades de financiación.' },
]
</script>

<template>
  <div class="value-cards" @keydown.stop>
    <button v-for="(card, i) in cards" :key="card.title" type="button" class="value-card" :class="{ selected: selected === i }" :aria-expanded="selected === i || isPrintMode || $renderContext === 'export'" @click="selected = i">
      <span class="value-icon">{{ card.icon }}</span><h2>{{ card.title }}</h2><p>{{ card.text }}</p>
      <div class="card-detail" :class="{ revealed: selected === i || isPrintMode || $renderContext === 'export' }">{{ card.detail }}</div>
      <span class="card-action">{{ selected === i ? 'Estás viendo este beneficio' : 'Explorar beneficio →' }}</span>
    </button>
  </div>
</template>
