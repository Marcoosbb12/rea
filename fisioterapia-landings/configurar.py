#!/usr/bin/env python3
"""Sustituye los marcadores {{...}} por los datos reales del centro.

Uso:
  python3 configurar.py \
    --nombre "Fisioterapia Ejemplo" \
    --web "https://www.tu-web.es" \
    --telefono "+34 600 000 000" \
    --localidad "Almoradí" \
    --landings "https://guias.tu-web.es"

--web       Tu página web principal (a la que enlazan todos los botones).
--landings  Dominio donde publicarás estas páginas (para canonical y sitemap).
--localidad Pueblo donde está físicamente tu centro.
"""
import argparse, pathlib

p = argparse.ArgumentParser()
p.add_argument("--nombre", required=True)
p.add_argument("--web", required=True)
p.add_argument("--telefono", required=True)
p.add_argument("--localidad", required=True)
p.add_argument("--landings", required=True)
a = p.parse_args()

valores = {
    "{{NOMBRE_CENTRO}}": a.nombre,
    "{{URL_WEB}}": a.web.rstrip("/") + "/",
    "{{TELEFONO}}": a.telefono,
    "{{LOCALIDAD_CENTRO}}": a.localidad,
    "{{URL_LANDINGS}}": a.landings.rstrip("/"),
}
raiz = pathlib.Path(__file__).parent
for f in list(raiz.glob("*/index.html")) + [raiz / "index.html", raiz / "sitemap.xml", raiz / "robots.txt"]:
    s = f.read_text(encoding="utf-8")
    for k, v in valores.items():
        s = s.replace(k, v)
    f.write_text(s, encoding="utf-8")
    print("actualizado:", f.relative_to(raiz))
