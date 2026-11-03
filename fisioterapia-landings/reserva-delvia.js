/* Widget flotante de reserva (Delvia) para Recocap Fisioterapia. */
(function () {
  var URL = "https://app.delvia.es/negocio/e0000001-0000-0000-0000-000000000003";
  if (document.getElementById("rcp-reserva")) return;

  var css = "" +
    "#rcp-reserva{all:initial}" +
    ".rcp-fab{position:fixed;right:20px;bottom:20px;z-index:2147483000;display:flex;align-items:center;gap:10px;background:#f47b20;color:#fff;" +
    "font:700 16px/1.2 system-ui,-apple-system,Segoe UI,Roboto,sans-serif;padding:14px 20px 14px 16px;border-radius:999px;text-decoration:none;" +
    "box-shadow:0 10px 30px rgba(0,0,0,.28);border:3px solid #fff;cursor:pointer;transition:transform .2s}" +
    ".rcp-fab:hover{transform:translateY(-2px) scale(1.03)}" +
    ".rcp-fab:focus-visible{outline:3px solid #3d5a4e;outline-offset:3px}" +
    ".rcp-fab .rcp-ico{width:30px;height:30px;border-radius:50%;background:#3d5a4e;display:grid;place-items:center;font-size:16px;flex:0 0 30px}" +
    ".rcp-fab small{display:block;font-weight:500;font-size:12px;opacity:.95}" +
    ".rcp-fab::after{content:'';position:absolute;inset:-3px;border-radius:999px;border:3px solid #f47b20;animation:rcp-pulse 2.4s infinite;pointer-events:none}" +
    "@keyframes rcp-pulse{0%{opacity:.8;transform:scale(1)}80%,100%{opacity:0;transform:scale(1.18)}}" +
    "@media (prefers-reduced-motion:reduce){.rcp-fab::after{animation:none;display:none}}" +
    ".rcp-panel{position:fixed;right:20px;bottom:96px;z-index:2147483001;width:min(420px,calc(100vw - 32px));height:min(640px,calc(100vh - 130px));" +
    "background:#fff;border-radius:18px;box-shadow:0 20px 60px rgba(0,0,0,.35);display:none;flex-direction:column;overflow:hidden;font:15px/1.4 system-ui,sans-serif;color:#24342e}" +
    ".rcp-panel.rcp-open{display:flex}" +
    ".rcp-head{background:#3d5a4e;color:#fff;padding:12px 14px 12px 18px;display:flex;align-items:center;justify-content:space-between;gap:8px}" +
    ".rcp-head strong{font-size:16px}" +
    ".rcp-close{background:transparent;border:0;color:#fff;font-size:26px;line-height:1;cursor:pointer;padding:4px 8px;border-radius:8px}" +
    ".rcp-close:focus-visible{outline:2px solid #fff}" +
    ".rcp-panel iframe{flex:1;width:100%;border:0;background:#f6f6f6}" +
    ".rcp-foot{padding:10px 16px;font-size:13px;border-top:1px solid #e5e5e5;text-align:center}" +
    ".rcp-foot a{color:#3d5a4e;font-weight:700}" +
    "@media (max-width:600px){.rcp-fab{right:12px;bottom:12px;left:12px;justify-content:center}" +
    ".rcp-panel{right:0;left:0;bottom:0;width:100%;height:100%;border-radius:0}}";

  var style = document.createElement("style");
  style.textContent = css;
  document.head.appendChild(style);

  var root = document.createElement("div");
  root.id = "rcp-reserva";

  var fab = document.createElement("a");
  fab.className = "rcp-fab";
  fab.href = URL;
  fab.target = "_blank";
  fab.rel = "noopener";
  fab.setAttribute("aria-haspopup", "dialog");
  fab.setAttribute("aria-expanded", "false");
  fab.innerHTML = '<span class="rcp-ico" aria-hidden="true">✚</span><span>¡Ponle solución!<small>Reserva tu cita en Recocap</small></span>';

  var panel = document.createElement("div");
  panel.className = "rcp-panel";
  panel.setAttribute("role", "dialog");
  panel.setAttribute("aria-modal", "false");
  panel.setAttribute("aria-label", "Reservar cita en Recocap Fisioterapia");
  panel.innerHTML =
    '<div class="rcp-head"><strong>Ponle solución: reserva tu cita</strong>' +
    '<button type="button" class="rcp-close" aria-label="Cerrar">×</button></div>' +
    '<div class="rcp-foot">¿No se carga? <a href="' + URL + '" target="_blank" rel="noopener">Abrir la reserva en una pestaña nueva</a></div>';

  var iframe = null;
  function open() {
    if (!iframe) {
      iframe = document.createElement("iframe");
      iframe.src = URL;
      iframe.title = "Reserva de cita en Recocap Fisioterapia (Delvia)";
      iframe.loading = "lazy";
      panel.insertBefore(iframe, panel.lastChild);
    }
    panel.classList.add("rcp-open");
    fab.setAttribute("aria-expanded", "true");
    if (window.matchMedia("(max-width:600px)").matches) fab.style.display = "none";
    panel.querySelector(".rcp-close").focus();
  }
  function close() {
    panel.classList.remove("rcp-open");
    fab.setAttribute("aria-expanded", "false");
    fab.style.display = "";
    fab.focus();
  }

  fab.addEventListener("click", function (e) {
    if (e.ctrlKey || e.metaKey || e.shiftKey) return;
    e.preventDefault();
    panel.classList.contains("rcp-open") ? close() : open();
  });
  panel.querySelector(".rcp-close").addEventListener("click", close);
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && panel.classList.contains("rcp-open")) close();
  });

  root.appendChild(panel);
  root.appendChild(fab);
  var spacer = document.createElement("div");
  spacer.style.height = "84px";
  spacer.setAttribute("aria-hidden", "true");
  document.body.appendChild(spacer);
  document.body.appendChild(root);
})();
