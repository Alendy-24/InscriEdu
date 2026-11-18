---
theme: default
title: StuPlan · Descubrir lo que es para ti
titleTemplate: '%s'
favicon: /brand/logo.svg
author: Equipo StuPlan
lang: es
aspectRatio: 16/9
canvasWidth: 1280
colorSchema: light
transition: fade
wakeLock: false
fonts:
  sans: DM Sans
  serif: Libre Baskerville
  provider: none
class: story-cover
---

<div class="clean-cover"><BrandMark variant="full" /><section><h1>El talento está en todas partes.</h1><div class="cover-team"><span>Salomé Ávila · Daniel Cedeño · Jose Cepeda</span><span>Alejandro Corredor · Sebastian Ramirez</span></div></section></div>

<!--
Presenta al equipo y abre con la idea de que el talento está en todas partes, aunque las oportunidades sean más difíciles de encontrar en algunos lugares.

Apoyo para el expositor: 0:40. Invita a imaginar a dos estudiantes colombianos que están terminando el colegio. Ambos quieren estudiar una carrera. Presenta al equipo y abre la historia en la siguiente diapositiva. Los dos estudiantes de la siguiente diapositiva son personajes ficticios.
-->

---
class: story-paths
---

<h1>Las oportunidades no llegan igual</h1>
<p class="story-lead">Dos realidades frente a una misma decisión.</p>

<div class="student-realities">
  <section class="student-reality student-reality--rural">
    <h2>En una zona rural</h2>
    <ul>
      <li>Busca orientación a distancia.</li>
      <li>Calcula el costo del transporte.</li>
      <li>Consulta becas cuando tiene conexión.</li>
    </ul>
  </section>
  <img src="/brand/dos-realidades.png" alt="Dos estudiantes. Una flecha señala el transporte, la conexión y los costos. La otra señala la orientación y las instituciones cercanas.">
  <section class="student-reality">
    <h2>En una ciudad</h2>
    <ul>
      <li>Recibe orientación en su colegio.</li>
      <li>Visita instituciones cercanas.</li>
      <li>Explora programas y apoyos.</li>
    </ul>
  </section>
</div>

<p class="story-source">28,7 puntos de brecha en nivel superior alcanzado · DANE ECV 2025, 17–21 años.</p>

<!--
Compara los recorridos urbano y rural. Habla de orientación, distancias y conectividad como condiciones que pueden cambiar la búsqueda.

Apoyo para el expositor: 0:40. DANE ECV 2025, tabla 12, p. 19: 44,7 % en cabeceras y 16,0 % en centros poblados y rural disperso. Indicador de nivel superior alcanzado, no causalidad. https://www.dane.gov.co/files/operaciones/ECV/bol-ECV-2025.pdf
Narra en paralelo la búsqueda, la visita y la financiación. El estudiante rural tiene aspiraciones y capacidad de decisión. Sus circunstancias pueden exigir más tiempo o recursos para responder las mismas preguntas.
-->

---
class: story-need
---

<h1>¿Qué nos dijeron los estudiantes?</h1><div class="need-pair survey-rings"><section><div class="survey-ring" style="--share:71.0%;--ring-color:var(--brand-blue)"><strong>71,0 %</strong></div><p>Con dudas o varias opciones de carrera</p><small>76 de 107</small></section><section><div class="survey-ring" style="--share:83.2%;--ring-color:var(--brand-gold)"><strong>83,2 %</strong></div><p>Con información limitada sobre financiación</p><small>89 de 107</small></section></div><p class="story-source">Encuesta exploratoria · 107 respuestas · 17–25 de agosto de 2026.</p>

<!--
En nuestra encuesta exploratoria, 76 de 107 tenían dudas o varias opciones y 89 de 107 tenían información limitada sobre financiación.

Apoyo para el expositor: Explica que el 71,0 % reúne 40 con una idea incierta, 31 con varias opciones y 5 sin decisión. El 83,2 % reúne 43 que no saben bien cómo aplicar, 37 que conocen poco y 9 que no conocen opciones. La encuesta es exploratoria.
-->

---
class: story-bridge
---

<h1>De la duda a una decisión informada</h1>
<div class="problem-response"><section><h2>El problema</h2><p>Elegir cuesta más cuando los programas y los apoyos se consultan en lugares distintos.</p></section><span aria-hidden="true">→</span><section><h2>La respuesta de StuPlan</h2><p>Usar las preferencias del estudiante para enfocar la búsqueda y reunir programas, comparación y financiación.</p></section></div>

<!--
Cuando la información está dispersa, elegir cuesta. StuPlan reúne programas, comparación y apoyos, y permite explorar según preferencias.

Apoyo para el expositor: Conecta la encuesta con el producto. La duda sobre qué estudiar orientó la búsqueda por intereses y la comparación. La poca claridad sobre financiación motivó un espacio para consultar apoyos y sus requisitos.
-->

---
class: story-product
---

<div class="story-product-copy"><BrandMark variant="horizontal" /><h1>Descubrir lo que es para ti.</h1><p class="story-lead">De información dispersa a oportunidades educativas relevantes para ti.</p></div><figure><img src="/demo/programas.png" alt="Catálogo y filtros de programas en StuPlan"></figure>

<!--
La idea es pasar de buscar en varias fuentes a descubrir opciones relevantes desde un solo lugar.

Apoyo para el expositor: 0:35. Revela StuPlan por primera vez como respuesta a la búsqueda dispersa. Señala el catálogo y los filtros de la captura real. Explica que las preferencias permiten enfocar la búsqueda.
-->

---
class: demo-slide profile-demo
---

<h1 class="embedded-title">Un perfil que entiende lo que buscas</h1><DemoApp initial-path="/perfil" heading="Un perfil que entiende lo que buscas" />

<!--
Con la sesión preparada, muestra intereses, nivel, ubicación y modalidad. Explica que esas preferencias ayudan a enfocar la búsqueda.

Apoyo para el expositor: Abre el perfil en la misma ventana del público y prepara la sesión antes de proyectar. Muestra intereses, nivel, modalidad y ubicación. Con esos datos, StuPlan puede orientar la exploración. El acceso está protegido.
-->

---
class: demo-slide profile-demo
---

<h1 class="embedded-title">Recomendaciones pensadas para ti</h1><DemoApp initial-path="/recomendaciones" heading="Recomendaciones pensadas para ti" />

<!--
Abre una recomendación y explica qué criterios coinciden con el perfil. La afinidad orienta la exploración.

Apoyo para el expositor: Explica el recorrido: perfil académico → criterios de afinidad → programas recomendados. Abre la explicación de una opción en una sesión preparada. La afinidad es orientativa y la admisión depende de la institución.
-->

---
class: demo-slide profile-demo
---

<h1 class="embedded-title">Encuentra y compara tu futuro</h1><DemoApp initial-path="/comparar" heading="Encuentra y compara tu futuro" />

<!--
Muestra dos programas preparados. Contrasta ubicación, modalidad y duración, y explica qué diferencia podría cambiar la decisión.

Apoyo para el expositor: Antes de presentar, entra a Programas desde el selector de la demo, añade dos programas con Comparar y vuelve a Comparar. StuPlan guarda la selección por sesión de usuario o invitado en ese contexto del navegador. Ayuda al jurado a leer una diferencia que importe para su caso.
-->

---
class: story-interest
---

<h1>Los estudiantes validan la necesidad</h1><p class="story-lead">Funciones que las personas encuestadas consideraron útiles</p><div class="interest-bars"><div><div class="metric-label"><span>Buscar carreras según sus intereses</span><strong>66,4 %</strong></div><div class="metric-track"><span style="width:66.4%"></span></div><small>71 de 107</small></div><div><div class="metric-label"><span>Comparar universidades y programas académicos</span><strong>61,7 %</strong></div><div class="metric-track"><span style="width:61.7%"></span></div><small>66 de 107</small></div></div><p class="story-source">Encuesta exploratoria · 107 respuestas · selección múltiple · 17–25 de agosto de 2026.</p>

<!--
Entre 107 respuestas, 71 eligieron búsqueda por intereses y 66 eligieron comparación. Fue una pregunta de selección múltiple sobre funciones útiles.

Apoyo para el expositor: Estas dos cifras describen interés declarado. Cada persona podía escoger más de una opción. Pasa de lo que consideran útil a cómo lo observarías en un piloto.
-->

---
class: story-market
---

<h1>El mercado que queremos alcanzar</h1><p class="story-lead">Mercado de usuarios · referencias provisionales</p><div class="market-layout"><div class="market-nested" role="img" aria-label="Esquema conceptual de TAM, SAM y SOM"><div class="market-tam"><b>TAM</b><strong>512.502</strong></div><div class="market-sam"><b>SAM</b><strong>44.847</strong></div><div class="market-som"><b>SOM</b><strong>≈ 450</strong></div></div><dl class="market-explain"><div><dt>TAM · Colombia</dt><dd>Alcance nacional de referencia. Estudiantes que aprobaron grado 11 en 2024.</dd></div><div><dt>SAM · Bogotá oficial</dt><dd>Segmento inicial de referencia. Matrícula oficial de grado 11 en noviembre de 2024.</dd></div><div><dt>SOM · Piloto</dt><dd>Meta inicial de usuarios para probar StuPlan.</dd></div></dl></div><p class="institution-market"><strong>Posibles clientes:</strong> colegios con grado 11 en Bogotá. Tamaño comercial y disposición a pagar pendientes de validar.</p><p class="story-source">MEN / SIMAT y SED Bogotá · Esquema conceptual sin escala. Aprobación y matrícula son poblaciones distintas.</p>

<!--
Colombia y Bogotá aportan referencias distintas de aprobaciones y matrícula. El piloto propone llegar a unos 450 usuarios.

Apoyo para el expositor: 0:50. Estas referencias no forman un embudo proporcional. Mercado B2B aún por estimar. El boletín de matrícula oficial describe estudiantes y niveles, sin un recuento utilizable de compradores potenciales con grado 11. https://oape.educacionbogota.edu.co/sites/default/files/2026-02/2025_Oficial_Boletin.pdf MEN, ficha Bachilleres: https://portalsineb.mineducacion.gov.co/1782/articles-412165_Trayectoria_06_V2024.pdf
SED Bogotá, boletín noviembre 2024: https://oape.educacionbogota.edu.co/sites/default/files/2025-07/11.Noviembre%202024-%20Boletin_Mensual.pdf
SNIES 2025 describe matrícula superior, una población diferente: https://snies.mineducacion.gov.co/1778/w3-article-430063.html
-->

---
class: story-school
---

<h1>Los colegios también reciben valor</h1><div class="school-visual"><img src="/brand/story-bogota.jpg" alt="Patio escolar en Bogotá"><img src="/brand/story-urban.jpg" alt="Estudiantes en un taller escolar"></div><div class="school-outcomes"><p><strong>Colegio</strong><br>Herramientas de orientación para su cohorte de grado 11.</p><p><strong>Estudiantes</strong><br>Exploran programas, comparan opciones y descubren apoyos.</p></div>

<!--
Un colegio podría usar StuPlan para acompañar a su cohorte de grado once mientras cada estudiante explora sus opciones.

Apoyo para el expositor: El colegio podría contratar una licencia o servicio por cohorte. Usa las fotos como contexto ilustrativo. No hay un contrato confirmado con las instituciones fotografiadas.
-->

---
class: story-national
---

<h1>StuPlan ya funciona y puede escalar</h1>
<p class="story-lead">Cualquier persona puede explorar el catálogo. El acceso es gratuito para estudiantes.</p>

<div class="national-model">
  <div class="national-triangle"><svg class="business-triangle" viewBox="0 0 1060 455" role="img" aria-labelledby="business-title business-description">
  <title id="business-title">Triángulo del modelo de negocio de StuPlan</title>
  <desc id="business-description">Cualquier persona puede explorar programas, comparar opciones y consultar becas gratis. StuPlan organiza información de fuentes oficiales con búsqueda y filtros. Las universidades podrían pagar por visibilidad para sus programas y eventos mediante campañas identificadas.</desc>
  <path class="business-triangle-main" d="M530 58 315 264 530 318 745 264Z"/>
  <path class="business-triangle-income" d="M315 264 530 318V435H137Z"/>
  <path class="business-triangle-operation" d="M745 264 530 318V435H923Z"/>
  <path class="business-triangle-dividers" d="M315 264 530 318 745 264M530 318V435"/>
  <g class="business-triangle-copy">
    <text x="530" y="151"><tspan x="530">Programas,</tspan><tspan x="530" dy="30">comparación y becas</tspan><tspan x="530" dy="30">en un solo lugar</tspan></text>
    <text x="381" y="348"><tspan x="381">Campañas</tspan><tspan x="381" dy="28">universitarias</tspan><tspan x="381" dy="28">patrocinadas</tspan></text>
    <text x="679" y="348"><tspan x="679">Fuentes oficiales</tspan><tspan x="679" dy="28">organizadas con</tspan><tspan x="679" dy="28">búsqueda y filtros</tspan></text>
  </g>
  <g class="business-triangle-node">
    <circle cx="530" cy="66" r="49"/>
    <text x="530" y="74">¿Qué?</text>
    <circle cx="530" cy="282" r="59"/>
    <text x="530" y="279">¿Quién?</text>
    <text class="business-triangle-audience" x="530" y="304">Cualquier persona</text>
    <circle cx="137" cy="402" r="49"/>
    <text x="137" y="410">¿Por qué?</text>
    <circle cx="923" cy="402" r="49"/>
    <text x="923" y="410">¿Cómo?</text>
  </g>
</svg></div>
  <section>
    <h2>De Bogotá al país</h2>
    <p>Proponemos un piloto con la Secretaría de Educación de Bogotá y replicarlo con alcaldías que quieran acercar StuPlan a sus estudiantes.</p>
    <h2>Quién pagaría y por qué</h2>
    <p>Las universidades podrían pagar por campañas identificadas para dar visibilidad a sus programas y eventos.</p>
  </section>
</div>

<p class="technical-line"><strong>Cómo funciona.</strong> React muestra el catálogo del SNIES con filtros por municipio. Spring Boot gestiona las cuentas y PostgreSQL guarda sus datos.</p>

<!--
StuPlan funciona hoy: permite buscar y comparar programas y consultar becas. La propuesta de expansión es pilotear con la Secretaría de Educación de Bogotá y ofrecer el mismo modelo a otras alcaldías. El catálogo nacional permite ajustar la búsqueda por municipio sin construir un producto distinto para cada ciudad.

Los convenios públicos son una vía propuesta de difusión y acompañamiento. Las campañas universitarias son la fuente comercial del escenario base. Se mostrarían como patrocinadas y quedarían fuera del orden de recomendaciones por afinidad.
-->

---
class: story-financial
---

<h1>¿Cuándo se recupera la inversión?</h1>
<p class="story-lead">Escenario ilustrativo a 24 meses · Cifras en pesos colombianos</p>

<div class="financial-inputs">
  <div><span>Inversión inicial</span><strong>$6 millones</strong><small>Preparación del piloto y lanzamiento</small></div>
  <div><span>Costos fijos al mes</span><strong>$1 millón</strong><small>Infraestructura, mantenimiento y soporte</small></div>
  <div><span>Precio por campaña</span><strong>$750.000</strong><small>$250.000 de costo directo · $500.000 de margen</small></div>
</div>

<div class="financial-results">
  <div><strong>2 campañas/mes</strong><span>Punto de equilibrio operativo</span></div>
  <div><strong>Mes 20</strong><span>Recuperación de la inversión</span></div>
  <div><strong>+$700.316</strong><span>VPN a 24 meses · tasa del 1 % mensual</span></div>
</div>

<p class="financial-ramp"><strong>Ventas supuestas.</strong> 0 campañas en los meses 1–2, 2 al mes en los meses 3–4 y 3 al mes desde el mes 5.</p>

<!--
La inversión de $6 millones se registra en el mes cero. Como ejemplo, se puede distribuir en $3 millones de ajustes y pruebas, $2 millones de preparación del piloto y $1 millón de contingencia. El precio de $750.000 y el costo directo de $250.000 dejan $500.000 por campaña para cubrir costos fijos. Dos campañas al mes cubren $1 millón de operación. En el escenario, el primer mes de equilibrio operativo es el 3.

Flujo neto: −$1 millón al mes en los meses 1 y 2, $0 en los meses 3 y 4 y +$500.000 al mes desde el mes 5. El acumulado llega a cero en el mes 20. Al descontar los flujos a 1 % mensual, el VPN de 24 meses es $700.315,79. El ejercicio usa supuestos sin validar, antes de impuestos y sin valor residual. Los ingresos proyectados provienen de campañas universitarias. No se proyectan cobros por licencias ni ingresos de convenios públicos.
-->

---
class: story-cover
---

<div class="clean-cover"><BrandMark variant="full" /><section><h1>Gracias</h1><p>Descubrir oportunidades cambia futuros.</p></section></div>

<!--
Agradece al público y cierra con la frase «Descubrir oportunidades cambia futuros».

Apoyo para el expositor: 0:30. Vuelve a los dos estudiantes. Cierra con la idea de hacer más fácil descubrir oportunidades. Agradece al público y abre el espacio para preguntas. Deja una pausa antes de las preguntas.
-->

