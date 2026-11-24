import "dotenv/config";
import { app } from "./app.js";

const port = Number(process.env.PORT ?? 3001);

app.listen(port, () => {
  console.log(`StuPlan data integration disponible en http://localhost:${port}`);
  // Calienta los cachés para que la primera búsqueda y los filtros no esperen a datos.gov.co.
  for (const ruta of ['/api/programs?page=1&limit=12&order=source', '/api/programs/filters', '/api/institutions?page=1&limit=12&includeModalities=true']) {
    fetch(`http://127.0.0.1:${port}${ruta}`).catch(() => {});
  }
});