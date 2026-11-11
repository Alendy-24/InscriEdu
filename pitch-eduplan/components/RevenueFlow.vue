<script setup>
import { ref, computed } from 'vue'
const step = ref(0)
const stages = [
  { name: 'Utilidad', text: 'Validar qué valor aporta a estudiantes.' },
  { name: 'Oferta', text: 'Definir quién pagaría y por qué.' },
  { name: 'Ingreso', text: 'Validar mecanismo, precio y cobro.' },
  { name: 'Operación', text: 'Evaluar costos y reinversión.' },
]
const current = computed(() => stages[step.value])
function advance() { step.value = (step.value + 1) % stages.length }
</script>

<template>
  <div class="revenue-flow" @keydown.stop>
    <div class="flow-top"><span class="proposal-tag">PROPUESTA · NO ES UN FLUJO DE COBRO IMPLEMENTADO</span><button type="button" class="pitch-button" @click="advance">{{ step === 3 ? 'Reiniciar recorrido ↺' : 'Recorrer flujo →' }}</button></div>
    <div class="flow-stages"><template v-for="(stage, i) in stages" :key="stage.name"><div class="flow-stage" :class="{ active: step === i, completed: step > i }"><span>0{{ i + 1 }}</span><h3>{{ stage.name }}</h3><p>{{ stage.text }}</p></div><span v-if="i < stages.length - 1" class="flow-arrow" :class="{ active: step > i }">→</span></template></div>
    <div class="flow-status" aria-live="polite"><span class="dot"></span><strong>{{ current.name }}:</strong> {{ current.text }}</div>
    <p class="slide-footnote">Pendientes: pagador · mecanismo de ingresos · precio · estructura de costos. Sin cifras comerciales verificadas.</p>
  </div>
</template>
