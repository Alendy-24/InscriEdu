<script setup>
import { ref } from 'vue'
const view = ref('capex')
</script>

<template>
  <div class="pitch-card" @keydown.stop>
    <div class="toggle-bar">
      <button type="button" :class="{ active: view === 'capex' }" @click="view = 'capex'">
        1. Inversión Inicial
      </button>
      <button type="button" :class="{ active: view === 'opex' }" @click="view = 'opex'">
        2. Costos Operativos
      </button>
    </div>

    <!-- VISTA 1: INVERSIÓN -->
    <div v-if="view === 'capex'" class="metrics-grid">
      <article class="metric-box highlight">
        <span>CAPEX Inicial</span>
        <strong>$35,6 M</strong>
        <p>Equipos, mobiliario remoto, constitución y lanzamiento.</p>
      </article>
      <article class="metric-box">
        <span>Capital de Trabajo</span>
        <strong>$235 M</strong>
        <p>Reserva inicial de liquidez aportada para operar.</p>
      </article>
      <article class="metric-box">
        <span>Modalidad</span>
        <strong>100 % Remoto</strong>
        <p>Compras escalonadas según crece el equipo.</p>
      </article>
    </div>

    <!-- VISTA 2: COSTOS MENSUALES -->
    <div v-else class="metrics-grid">
      <article class="metric-box">
        <span>Arranque (Mes 1–6)</span>
        <strong>$35,4 M <small>/mes</small></strong>
        <p>Equipo base inicial de 4 personas.</p>
      </article>
      <article class="metric-box">
        <span>Expansión (Mes 7–18)</span>
        <strong>$50,9 – $55,4 M</strong>
        <p>Crecimiento gradual de 7 a 8 personas.</p>
      </article>
      <article class="metric-box highlight">
        <span>Madurez (Mes 19–36)</span>
        <strong>$62,4 M <small>/mes</small></strong>
        <p>Equipo completo (10 personas · 87 % nómina).</p>
      </article>
    </div>

    <div class="bottom-strip">
      <template v-if="view === 'capex'">
        <span><strong>Equipos de cómputo:</strong> $22,7 M</span>
        <span class="dot">·</span>
        <span><strong>Lanzamiento y marca:</strong> $6,5 M</span>
        <span class="dot">·</span>
        <span><strong>Mobiliario teletrabajo:</strong> $5,8 M</span>
        <span class="dot">·</span>
        <span><strong>Constitución legal:</strong> $0,5 M</span>
      </template>
      <template v-else>
        <span><strong>Nómina y prestaciones:</strong> 86,7 %</span>
        <span class="dot">·</span>
        <span><strong>Servicios profesionales:</strong> 9,2 %</span>
        <span class="dot">·</span>
        <span><strong>Marketing:</strong> 2,4 %</span>
        <span class="dot">·</span>
        <span><strong>Nube, software y admin:</strong> 1,7 %</span>
      </template>
    </div>
  </div>
</template>

<style scoped>
.pitch-card {
  display: flex;
  flex-direction: column;
  gap: 22px;
  margin-top: 18px;
  color: var(--brand-navy, #102653);
}
.toggle-bar {
  display: flex;
  gap: 12px;
}
.toggle-bar button {
  padding: 10px 22px;
  border-radius: 99px;
  border: 1px solid #bcc9dd;
  background: white;
  color: inherit;
  font-weight: 700;
  font-size: 15px;
  cursor: pointer;
}
.toggle-bar button.active {
  background: #2862ed;
  color: white;
  border-color: #2862ed;
}
.metrics-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}
.metric-box {
  background: #f8fafc;
  border: 1px solid #bcc9dd;
  border-radius: 16px;
  padding: 34px 26px;
  min-height: 215px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 12px;
}
.metric-box.highlight {
  background: var(--brand-navy, #102653);
  color: white;
  border-color: var(--brand-navy, #102653);
}
.metric-box span {
  font-size: 13px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  opacity: 0.75;
}
.metric-box strong {
  font-size: 42px;
  line-height: 1.05;
  color: #2862ed;
}
.metric-box.highlight strong {
  color: #60a5fa;
}
.metric-box strong small {
  font-size: 20px;
  font-weight: 500;
}
.metric-box p {
  font-size: 16px;
  line-height: 1.4;
  margin: 0;
  opacity: 0.9;
}
.bottom-strip {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #edf2fa;
  border: 1px solid #bcc9dd;
  border-radius: 12px;
  padding: 16px 24px;
  font-size: 14.5px;
}
.dot {
  color: #2862ed;
  font-weight: 900;
}
</style>