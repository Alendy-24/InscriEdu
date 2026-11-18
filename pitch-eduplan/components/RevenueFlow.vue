<template>
  <div class="rev-wrapper">
    <div class="rev-cards">
      <article class="rev-card">
        <span class="rev-num">VÍA 01 · LICENCIAMIENTO</span>
        <h3>Colegios e instituciones</h3>
        <p>Licencia de StuPlan para ofrecer orientación con una cuenta por estudiante.</p>
      </article>

      <article class="rev-card highlight">
        <span class="rev-num">VÍA 02 · SUSCRIPCIÓN Y CAMPAÑAS</span>
        <h3>Universidades (IES)</h3>
        <p>Planes institucionales y campañas patrocinadas separadas del matching por afinidad.</p>
      </article>

      <article class="rev-card">
        <span class="rev-num">VÍA 03 · ALIANZAS</span>
        <h3>Organizaciones de financiación</h3>
        <p>Acuerdos de difusión para conectar becas y apoyos con perfiles compatibles.</p>
      </article>
    </div>

    <div class="rev-destination">
      <div class="rev-brand">
        <span>Sostenibilidad</span>
        <strong>StuPlan</strong>
      </div>
      <span class="rev-arrow" aria-hidden="true">→</span>
      <div class="rev-pillars">
        <span>Infraestructura</span>
        <span>Datos</span>
        <span>Desarrollo</span>
        <span>Soporte</span>
        <span>Crecimiento</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.rev-wrapper {
  display: flex;
  flex-direction: column;
  gap: 22px;
  margin-top: 20px;
}
.rev-cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}
.rev-card {
  background: #f8fafc;
  border: 1px solid #bcc9dd;
  border-radius: 16px;
  padding: 32px 24px;
  min-height: 215px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  color: var(--brand-navy, #102653);
}
.rev-card.highlight {
  background: #edf2fa;
  border: 2px solid #2862ed;
}
.rev-num {
  font-size: 11.5px;
  font-weight: 700;
  letter-spacing: 0.06em;
  color: #2862ed;
  text-transform: uppercase;
}
.rev-card h3 {
  font-size: 22px;
  margin: 0;
  line-height: 1.2;
}
.rev-card p {
  font-size: 15.5px;
  line-height: 1.45;
  margin: 0;
  opacity: 0.9;
}
.rev-destination {
  display: flex;
  align-items: center;
  gap: 20px;
  background: var(--brand-navy, #102653);
  color: white;
  border-radius: 14px;
  padding: 18px 28px;
}
.rev-brand {
  display: flex;
  flex-direction: column;
}
.rev-brand span {
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  opacity: 0.75;
}
.rev-brand strong {
  font-size: 24px;
  color: #60a5fa;
}
.rev-arrow {
  font-size: 24px;
  font-weight: 700;
  color: #60a5fa;
}
.rev-pillars {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-left: auto;
}
.rev-pillars span {
  background: #ffffff1a;
  border: 1px solid #ffffff33;
  padding: 6px 14px;
  border-radius: 99px;
  font-size: 14px;
  font-weight: 600;
}
</style>