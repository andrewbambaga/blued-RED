/*
  blued, RED — "Text 'blued RED' on WhatsApp"
  ------------------------------------------------------------
  1. Put your WhatsApp number between the quotes below.
     Any format works: "0712 345 678", "+255 712 345 678", "255712345678".
  2. Add to index.html, just before </body>:
         <script src="whatsapp.js"></script>

  A line appears under the download button. Tapping it opens WhatsApp
  with "blued RED" already typed, so fans only press send.
  Taps are counted in GoatCounter as "whatsapp".
  While the number below is empty, nothing shows on the site.
*/
var WHATSAPP_NUMBER = "";
var WHATSAPP_MESSAGE = "blued RED";

(function () {
  "use strict";

  var digits = String(WHATSAPP_NUMBER).replace(/\D/g, "");
  if (/^0\d{9}$/.test(digits)) digits = "255" + digits.slice(1);   // Tanzanian 07xx… → 2557xx…
  if (digits.length < 9) return;

  var href = "https://wa.me/" + digits + "?text=" + encodeURIComponent(WHATSAPP_MESSAGE);

  var css = `
.wa-line{display:inline-flex;align-items:center;gap:10px;margin-top:4px;padding:10px 16px 10px 12px;text-decoration:none;color:var(--paper,#ecebf2);border:1px solid var(--line,#24243a);font:500 15px/1.3 "Archivo Narrow","Arial Narrow",Arial,sans-serif;letter-spacing:.02em;transition:border-color .2s,background .2s}
.wa-line:hover{border-color:var(--paper,#ecebf2);background:rgba(255,255,255,.04)}
.wa-line:focus-visible{outline:2px solid var(--paper,#ecebf2);outline-offset:3px}
.wa-line svg{width:20px;height:20px;flex:none}
.wa-line b{font-weight:600;font-style:italic;font-family:"Bodoni Moda",Didot,Georgia,serif;font-size:17px;letter-spacing:0}
.wa-line b .wa-r{font-style:normal;font-weight:700;letter-spacing:.08em}
.wa-line b .wa-b{color:#8ea4ff}.wa-line b .wa-r{color:#ff8a8a}
.wa-sub{display:block;font:400 12px/1.4 "JetBrains Mono",ui-monospace,Menlo,monospace;color:var(--muted,#9594a8);letter-spacing:.02em}
@media (max-width:520px){.wa-line{width:100%;justify-content:flex-start}}
`;
  var st = document.createElement("style");
  st.textContent = css;
  document.head.appendChild(st);

  var a = document.createElement("a");
  a.className = "wa-line";
  a.href = href;
  a.target = "_blank";
  a.rel = "noopener";
  a.addEventListener("click", function () {
    if (window.goatcounter && window.goatcounter.count) {
      try { window.goatcounter.count({ path: "whatsapp", title: "Text blued RED on WhatsApp", event: true }); } catch (e) {}
    }
  });
  a.innerHTML =
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" aria-hidden="true">' +
      '<path d="M20 11.5a8 8 0 0 1-11.6 7.1L4 20l1.4-4.2A8 8 0 1 1 20 11.5z"/></svg>' +
    '<span>Or text <b>“<span class="wa-b">blued,</span> <span class="wa-r">RED</span>”</b> on WhatsApp' +
    '<span class="wa-sub">The album comes straight back to your chat</span></span>';

  // place it under the download button
  var dl = document.querySelector(".dl");
  if (dl) dl.appendChild(a);
  else document.body.appendChild(a);
})();
