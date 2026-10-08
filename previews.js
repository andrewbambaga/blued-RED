/*
  blued, RED — song previews
  ------------------------------------------------------------
  Add to index.html, just before </body> (after lyrics.js):
      <script src="previews.js"></script>

  Put the clips in a folder called "previews" next to index.html:
      previews/01.mp3, previews/02.mp3 ... previews/10.mp3
  Each clip should be 15–20 seconds. A track without a clip shows
  "Preview soon" instead of a play button, so you can add them one by one.

  Every play is counted in GoatCounter as preview-01, preview-02, ...
*/
(function () {
  "use strict";

  var FOLDER = "previews/";   // where the clips live
  var EXT = ".mp3";
  var FADE_IN = 0.4;          // seconds
  var FADE_OUT = 1.5;         // seconds

  var css = `
.pv-row{grid-column:2;display:flex;flex-wrap:wrap;gap:8px;margin-top:8px}
.pv-row .lx-open-btn{margin-top:0}
.pv-btn{position:relative;overflow:hidden;display:inline-flex;align-items:center;gap:7px;padding:5px 12px 5px 9px;font:500 11px/1 "JetBrains Mono",ui-monospace,Menlo,monospace;letter-spacing:.1em;text-transform:uppercase;color:inherit;background:transparent;border:1px solid currentColor;border-radius:999px;cursor:pointer;transition:background .2s}
.pv-btn:hover{background:rgba(255,255,255,.06)}
.pv-btn svg{width:12px;height:12px;position:relative}
.pv-btn span{position:relative;font-variant-numeric:tabular-nums}
.pv-btn .pv-fill{position:absolute;left:0;top:0;bottom:0;width:0;background:currentColor;opacity:.22;pointer-events:none}
.pv-btn.pv-off{opacity:.45;cursor:default;border-style:dashed}
.side.blued .pv-btn{color:#8ea4ff}.side.red .pv-btn{color:#ff8a8a}
ol.tracks li.pv-playing .t{text-shadow:0 0 18px currentColor}

.pv-all{display:flex;justify-content:center;padding:22px 16px;border-top:1px solid var(--line,#24243a)}
.pv-all button{display:inline-flex;align-items:center;gap:10px;padding:12px 20px;font:600 14px/1 "Archivo Narrow","Arial Narrow",Arial,sans-serif;letter-spacing:.1em;text-transform:uppercase;color:#fff;border:0;cursor:pointer;background:linear-gradient(90deg,var(--blue,#2f5bff) 0 50%,var(--red,#ff2a2a) 50% 100%)}
.pv-all button svg{width:14px;height:14px}

.pv-bar{position:fixed;left:0;right:0;bottom:0;z-index:900;display:flex;align-items:center;gap:12px;padding:10px 16px calc(10px + env(safe-area-inset-bottom,0px));background:rgba(10,10,16,.92);backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px);border-top:1px solid rgba(255,255,255,.1);color:#fff;transform:translateY(110%);transition:transform .3s ease}
.pv-bar.pv-show{transform:none}
.pv-bar img{width:40px;height:40px;object-fit:cover;flex:none}
.pv-bar .pv-meta{min-width:0;flex:1}
.pv-bar .pv-t{font:600 15px/1.2 "Archivo Narrow","Arial Narrow",Arial,sans-serif;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.pv-bar .pv-s{font:400 11px/1.4 "JetBrains Mono",ui-monospace,Menlo,monospace;opacity:.65;letter-spacing:.06em;text-transform:uppercase}
.pv-bar .pv-track{position:absolute;left:0;right:0;top:0;height:2px;background:rgba(255,255,255,.12)}
.pv-bar .pv-prog{height:100%;width:0;background:linear-gradient(90deg,var(--blue,#2f5bff),var(--red,#ff2a2a))}
.pv-bar button{flex:none;width:38px;height:38px;display:grid;place-items:center;border-radius:50%;border:0;background:rgba(255,255,255,.12);color:#fff;cursor:pointer}
.pv-bar button:hover{background:rgba(255,255,255,.22)}
.pv-bar button svg{width:16px;height:16px}
.pv-btn:focus-visible,.pv-all button:focus-visible,.pv-bar button:focus-visible{outline:2px solid #fff;outline-offset:2px}
@media (prefers-reduced-motion:reduce){.pv-bar{transition:none}}
`;
  var st = document.createElement("style");
  st.textContent = css;
  document.head.appendChild(st);

  var I = {
    play: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M7 4.5v15l13-7.5z"/></svg>',
    stop: '<svg viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="6" width="12" height="12" rx="1.5"/></svg>',
    next: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M5 5v14l10-7zM17 5h2.5v14H17z"/></svg>'
  };

  function pad(n) { return (n < 10 ? "0" : "") + n; }

  /* ---------- collect the tracks from the page ---------- */
  var tracks = [];
  Array.prototype.forEach.call(document.querySelectorAll("ol.tracks li"), function (li, idx) {
    var noEl = li.querySelector(".no");
    var n = noEl ? parseInt(noEl.textContent, 10) : idx + 1;
    var tEl = li.querySelector(".t");
    var title = tEl ? (tEl.childNodes[0] ? tEl.childNodes[0].textContent : tEl.textContent).trim() : "Track " + n;
    var side = li.closest(".side.red") ? "RED" : "blued,";

    // share a row with the Lyrics button if lyrics.js is loaded
    var row = li.querySelector(".lx-btn-row");
    if (row) { row.classList.add("pv-row"); }
    else { row = document.createElement("span"); row.className = "pv-row"; li.appendChild(row); }

    var btn = document.createElement("button");
    btn.type = "button";
    btn.className = "pv-btn";
    btn.innerHTML = '<i class="pv-fill"></i>' + I.play + "<span>Preview</span>";
    btn.setAttribute("aria-label", "Play preview of " + title);
    row.insertBefore(btn, row.firstChild);

    var t = { n: n, title: title, side: side, li: li, btn: btn, src: FOLDER + pad(n) + EXT, ok: null };
    btn.addEventListener("click", function () { toggle(t); });
    tracks.push(t);
  });
  if (!tracks.length) return;

  /* check which clips exist, so missing ones say "Preview soon" */
  tracks.forEach(function (t) {
    fetch(t.src, { method: "HEAD" }).then(function (r) {
      t.ok = r.ok;
      if (!r.ok) markMissing(t);
    }).catch(function () { /* offline or file:// — let playback decide */ });
  });
  function markMissing(t) {
    t.ok = false;
    t.btn.classList.add("pv-off");
    t.btn.disabled = true;
    t.btn.innerHTML = '<i class="pv-fill"></i>' + I.play + "<span>Preview soon</span>";
  }

  /* ---------- "play all previews" sampler ---------- */
  var sides = document.querySelector(".sides");
  if (sides) {
    var all = document.createElement("div");
    all.className = "pv-all";
    all.innerHTML = '<button type="button">' + I.play + "Play the sampler</button>";
    sides.parentNode.insertBefore(all, sides);
    all.firstChild.addEventListener("click", function () {
      if (sampler) { stop(); return; }
      sampler = true;
      var first = nextPlayable(-1);
      if (first) play(first); else sampler = false;
      setAllLabel();
    });
  }
  function setAllLabel() {
    if (!all) return;
    all.firstChild.innerHTML = sampler ? I.stop + "Stop the sampler" : I.play + "Play the sampler";
  }

  /* ---------- bottom bar ---------- */
  var coverEl = document.querySelector(".cover img.main");
  var bar = document.createElement("div");
  bar.className = "pv-bar";
  bar.setAttribute("aria-live", "polite");
  bar.innerHTML =
    '<div class="pv-track"><div class="pv-prog"></div></div>' +
    '<img alt="" src="' + (coverEl ? coverEl.getAttribute("src") : "cover.jpg") + '">' +
    '<div class="pv-meta"><div class="pv-t"></div><div class="pv-s"></div></div>' +
    '<button type="button" data-pv="next" aria-label="Next preview">' + I.next + "</button>" +
    '<button type="button" data-pv="stop" aria-label="Stop preview">' + I.stop + "</button>";
  document.body.appendChild(bar);
  bar.querySelector('[data-pv="stop"]').addEventListener("click", stop);
  bar.querySelector('[data-pv="next"]').addEventListener("click", function () {
    var nx = nextPlayable(tracks.indexOf(current));
    if (nx) play(nx); else stop();
  });

  /* ---------- playback ---------- */
  var audio = new Audio();
  audio.preload = "none";
  var current = null, sampler = false, raf = 0;

  function nextPlayable(fromIdx) {
    for (var k = fromIdx + 1; k < tracks.length; k++) if (tracks[k].ok !== false) return tracks[k];
    return null;
  }

  function toggle(t) {
    if (current === t && !audio.paused) { stop(); return; }
    sampler = false; setAllLabel();
    play(t);
  }

  function play(t) {
    reset();
    current = t;
    audio.src = t.src;
    audio.currentTime = 0;
    try { audio.volume = 0; } catch (e) {}
    var p = audio.play();
    if (p && p.catch) p.catch(function () {
      // file missing or blocked
      markMissing(t);
      if (sampler) { var nx = nextPlayable(tracks.indexOf(t)); if (nx) play(nx); else stop(); }
      else stop();
    });
    t.li.classList.add("pv-playing");
    t.btn.innerHTML = '<i class="pv-fill"></i>' + I.stop + "<span>Stop</span>";
    bar.querySelector(".pv-t").textContent = t.title;
    bar.querySelector(".pv-s").textContent = "BAMBA \u00b7 " + t.side + " \u00b7 Track " + pad(t.n) + " \u00b7 Preview";
    bar.classList.add("pv-show");
    tick();
    if (window.goatcounter && window.goatcounter.count) {
      try { window.goatcounter.count({ path: "preview-" + pad(t.n), title: "Preview: " + t.title, event: true }); } catch (e) {}
    }
  }

  function reset() {
    cancelAnimationFrame(raf);
    if (current) {
      current.li.classList.remove("pv-playing");
      if (current.ok !== false) current.btn.innerHTML = '<i class="pv-fill"></i>' + I.play + "<span>Preview</span>";
    }
    audio.pause();
  }

  function stop() {
    reset();
    current = null;
    sampler = false; setAllLabel();
    bar.classList.remove("pv-show");
  }

  function tick() {
    raf = requestAnimationFrame(function () {
      if (!current) return;
      var d = audio.duration, c = audio.currentTime;
      if (d && isFinite(d)) {
        var pct = Math.min(100, (c / d) * 100);
        current.btn.querySelector(".pv-fill").style.width = pct + "%";
        bar.querySelector(".pv-prog").style.width = pct + "%";
        var left = Math.max(0, Math.ceil(d - c));
        current.btn.querySelector("span").textContent = "0:" + pad(left);
        // fades (phones may ignore volume; the clip just plays at full volume)
        var v = 1;
        if (c < FADE_IN) v = c / FADE_IN;
        if (d - c < FADE_OUT) v = Math.max(0, (d - c) / FADE_OUT);
        try { audio.volume = Math.max(0, Math.min(1, v)); } catch (e) {}
      }
      tick();
    });
  }

  audio.addEventListener("ended", function () {
    if (sampler && current) {
      var nx = nextPlayable(tracks.indexOf(current));
      if (nx) { play(nx); return; }
    }
    stop();
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && current && (!document.querySelector(".lx") || document.querySelector(".lx").hidden)) stop();
  });
})();
