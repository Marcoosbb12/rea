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

## Antes de publicar

```bash
python3 configurar.py --nombre "Tu Centro" --web "https://tu-web.es" \
  --telefono "+34 ..." --localidad "Pueblo del centro" --landings "https://donde-publiques.es"
```

Después sube la carpeta a cualquier hosting estático (Netlify, GitHub Pages, Cloudflare Pages…)
y da de alta el `sitemap.xml` en Google Search Console.

## Notas SEO

- No hay redirección automática a propósito: Google no indexa páginas que redirigen al instante
  (y las trata como "doorway pages"). Se usan enlaces y botones visibles, que sí transmiten visitas y autoridad.
- Cada página tiene contenido propio, `title`/`description` locales, `canonical`, Open Graph y
  datos estructurados (MedicalWebPage, FAQPage y Physiotherapy con `areaServed` del pueblo).
- Revisa el contenido médico con tu equipo antes de publicarlo.
