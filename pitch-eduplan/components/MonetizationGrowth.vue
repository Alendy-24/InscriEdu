<template>
  <div class="mon-simple">
    <div class="plans-row">
      <article class="plan-pill">
        <span>Plan Institucional</span>
        <strong>$2 M <small>COP / mes</small></strong>
        <p>Publicación de programas y becas · Meta: 40 IES</p>
      </article>

      <article class="plan-pill">
        <span>Plan Destacado</span>
        <strong>$3 M <small>COP / mes</small></strong>
        <p>Visibilidad patrocinada y analítica · Meta: 20 IES</p>
      </article>

      <article class="plan-pill dark">
        <span>Ingresos Acumulados (36m)</span>
        <strong>$2.247 M <small>COP</small></strong>
        <p>100 % gratis e imparcial para el estudiante</p>
      </article>
    </div>

    <div class="growth-bar">
      <div class="year-step">
        <span>Año 1</span>
        <strong>12 IES</strong>
        <small>$150 M ingresos</small>
      </div>
      <span class="arrow">→</span>
      <div class="year-step">
        <span>Año 2</span>
        <strong>36 IES</strong>
        <small>$693 M ingresos</small>
      </div>
      <span class="arrow">→</span>
      <div class="year-step active">
        <span>Año 3 (Mes 36)</span>
        <strong>60 IES</strong>
        <small>$1.404 M ingresos</small>
      </div>
    </div>
  </div>
</template>

<style scoped>
.mon-simple {
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-top: 24px;
  color: var(--brand-navy, #102653);
}
.plans-row {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}
.plan-pill {
  background: #f8fafc;
  border: 1px solid #bcc9dd;
  border-radius: 16px;
  padding: 34px 26px;
  min-height: 225px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
}
.plan-pill.dark {
  background: var(--brand-navy, #102653);
  color: white;
  border-color: var(--brand-navy, #102653);
}
.plan-pill span {
  font-size: 13px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  opacity: 0.75;
}
.plan-pill strong {
  font-size: 40px;
  color: #2862ed;
  line-height: 1.05;
}
.plan-pill.dark strong {
  color: #60a5fa;
}
.plan-pill strong small {
  font-size: 18px;
  font-weight: 500;
}
.plan-pill p {
  font-size: 15.5px;
  line-height: 1.4;
  margin: 4px 0 0;
  opacity: 0.9;
}
.growth-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #edf2fa;
  border: 1px solid #bcc9dd;
  border-radius: 14px;
  padding: 22px 32px;
}
.year-step {
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.year-step span {
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  opacity: 0.7;
}
.year-step strong {
  font-size: 28px;
  color: var(--brand-navy, #102653);
}
.year-step.active strong {
  color: #2862ed;
}
.year-step small {
  font-size: 14.5px;
  opacity: 0.85;
}
.arrow {
  font-size: 26px;
  font-weight: 700;
  color: #2862ed;
}
</style>