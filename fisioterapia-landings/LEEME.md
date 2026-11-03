# Páginas satélite de fisioterapia — Vega Baja

11 páginas (una por pueblo), cada una sobre una lesión distinta y con un estilo visual distinto.
Todas enlazan a tu web principal con botones de "Pedir cita".

| Pueblo | Lesión | Estilo |
|---|---|---|
| Catral | Dolor lumbar | Suizo minimalista |
| Cox | Dolor cervical | Oscuro / neón tecnológico |
| Daya Nueva | Esguince de tobillo | Deportivo agresivo |
| Daya Vieja | Dolor de rodilla | Periódico clásico |
| Dolores | Dolor de hombro | Pastel redondeado |
| Formentera del Segura | Fascitis plantar | Brutalista |
| Rafal | Codo de tenista | Retro años 70 |
| Redován | Ciática | Zen japonés |
| Rojales | Túnel carpiano | Cuaderno a mano |
| San Fulgencio | Rotura fibrilar | Glassmorphism |
| San Isidro | Cefalea tensional | Bauhaus |

## Publicar

Ya están rellenados los datos de Recocap Fisioterapia y la dirección
`https://guias-fisioterapia-vegabaja.netlify.app`.

1. Entra en https://app.netlify.com/drop y arrastra el ZIP (o la carpeta) con las páginas.
2. En el sitio nuevo: *Project configuration → Change project name* → `guias-fisioterapia-vegabaja`.
3. En Google Search Console, añade el sitio y envía `sitemap.xml`.

Si usas otra dirección, vuelve a ejecutar `configurar.py` con `--landings` nuevo
(sobre una copia limpia del repositorio, con los marcadores).

## Notas SEO

- No hay redirección automática a propósito: Google no indexa páginas que redirigen al instante
  (y las trata como "doorway pages"). Se usan enlaces y botones visibles, que sí transmiten visitas y autoridad.
- Cada página tiene contenido propio, `title`/`description` locales, `canonical`, Open Graph y
  datos estructurados (MedicalWebPage, FAQPage y Physiotherapy con `areaServed` del pueblo).
- Revisa el contenido médico con tu equipo antes de publicarlo.
