<template>
  <div class="be-simple">
    <div class="kpi-grid">
      <article class="kpi-card highlight">
        <span>Punto de Equilibrio</span>
        <strong>26 IES</strong>
        <p>Mezcla 60/40 (ticket promedio de $2,4 M) para cubrir costos fijos.</p>
      </article>

      <article class="kpi-card">
        <span>Equilibrio Mensual</span>
        <strong>Mes 20</strong>
        <p>El flujo de caja mensual pasa a positivo (+$2,1 M/mes).</p>
      </article>

      <article class="kpi-card">
        <span>Recuperación (Payback)</span>
        <strong>Mes 33</strong>
        <p>Se recupera toda la inversión acumulada del proyecto.</p>
      </article>

      <article class="kpi-card dark">
        <span>Rentabilidad (36m)</span>
        <strong>23,5 % TIR</strong>
        <p>VPN positivo de $64,3 M COP (tasa de descuento: 15 %).</p>
      </article>
    </div>

    <div class="cashflow-strip">
      <div class="cf-item">
        <span>Flujo Neto Año 1</span>
        <strong>-$394,6 M</strong>
      </div>
      <span class="arrow">→</span>
      <div class="cf-item">
        <span>Flujo Neto Año 2</span>
        <strong>-$22,3 M</strong>
      </div>
      <span class="arrow">→</span>
      <div class="cf-item positive">
        <span>Flujo Neto Año 3</span>
        <strong>+$655,6 M</strong>
      </div>
      <div class="cf-divider"></div>
      <div class="cf-item positive">
        <span>Relación Beneficio / Costo</span>
        <strong>1,06x</strong>
      </div>
    </div>
  </div>
</template>

<style scoped>
.be-simple {
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-top: 24px;
  color: var(--brand-navy, #102653);
}
.kpi-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 18px;
}
.kpi-card {
  background: #f8fafc;
  border: 1px solid #bcc9dd;
  border-radius: 16px;
  padding: 36px 22px;
  min-height: 235px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 14px;
}
.kpi-card.highlight {
  background: #edf2fa;
  border: 2px solid #2862ed;
}
.kpi-card.dark {
  background: var(--brand-navy, #102653);
  color: white;
  border-color: var(--brand-navy, #102653);
}
.kpi-card span {
  font-size: 13px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  opacity: 0.75;
}
.kpi-card strong {
  font-size: 42px;
  line-height: 1.05;
  color: #2862ed;
}
.kpi-card.dark strong {
  color: #60a5fa;
}
.kpi-card p {
  font-size: 15.5px;
  line-height: 1.4;
  margin: 0;
  opacity: 0.9;
}
.cashflow-strip {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #edf2fa;
  border: 1px solid #bcc9dd;
  border-radius: 14px;
  padding: 20px 28px;
}
.cf-item {
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.cf-item span {
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  opacity: 0.7;
}
.cf-item strong {
  font-size: 24px;
  color: var(--brand-navy, #102653);
}
.cf-item.positive strong {
  color: #2862ed;
}
.cf-divider {
  width: 1px;
  height: 40px;
  background: #bcc9dd;
}
.arrow {
  font-size: 22px;
  font-weight: 700;
  color: #2862ed;
}
</style>