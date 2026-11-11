<script setup lang="ts">
import { computed, ref } from 'vue'
import { useNav } from '@slidev/client'

const { isPrintMode } = useNav()
const institutions = ref(3)
const monthly = ref(500000)
const months = ref(6)
const format = new Intl.NumberFormat('es-CO')
const total = computed(() =>
  Math.max(0, institutions.value) * Math.max(0, monthly.value) * Math.max(0, months.value),
)
</script>

<template>
  <div class="pitch-finance">
    <div class="finance-streams">
      <section><h2>Financiación inicial</h2><p>Convocatorias, capital semilla y proyectos piloto por explorar.</p></section>
      <section><h2>Ingresos recurrentes</h2><p>Servicios B2B de información y orientación por validar.</p></section>
      <section><h2>Costos principales</h2><p>Infraestructura, datos, desarrollo, soporte y operación comercial.</p></section>
    </div>
    <section class="finance-example">
      <h2>Escenario ilustrativo · hipótesis</h2>
      <div class="finance-formula">
        <label>Instituciones<input v-if="!isPrintMode" v-model.number="institutions" type="number" min="0"><b v-else>{{ institutions }}</b></label>
        <span aria-hidden="true">×</span>
        <label>Tarifa mensual (COP)<input v-if="!isPrintMode" v-model.number="monthly" type="number" min="0" step="50000"><b v-else>{{ format.format(monthly) }}</b></label>
        <span aria-hidden="true">×</span>
        <label>Meses contratados<input v-if="!isPrintMode" v-model.number="months" type="number" min="0"><b v-else>{{ months }}</b></label>
        <span aria-hidden="true">=</span>
        <div class="finance-total" aria-live="polite"><span>Ingresos brutos</span><strong>COP {{ format.format(total) }}</strong></div>
      </div>
      <p>Antes de costos e impuestos. Supuestos de precio, clientes y duración por validar.</p>
    </section>
  </div>
</template>
