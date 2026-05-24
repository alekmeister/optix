/* Optix — EQ bars animation + cursor tracking */

const eqSvg       = document.getElementById('eqSvg');
const signalStatus = document.getElementById('signalStatus');
const layout       = document.getElementById('layout');

const COUNT = 26;
const GAP   = 4;
const NS    = 'http://www.w3.org/2000/svg';

/* Pre-create bar <rect> elements */
const bars = Array.from({ length: COUNT }, () => {
  const r = document.createElementNS(NS, 'rect');
  r.setAttribute('fill', '#000000');
  eqSvg.appendChild(r);
  return r;
});

let startTime   = null;
let cursorX     = 0.5;
let cursorActive = false;

/* ── Animation loop ─────────────────────────────────────── */
function animate(timestamp) {
  if (startTime === null) startTime = timestamp;
  const t = timestamp - startTime;

  /* Read actual rendered dimensions each frame so it stays
     correct across responsive breakpoints */
  const rect = eqSvg.getBoundingClientRect();
  const w = rect.width;
  const h = rect.height;

  if (w > 0 && h > 0) {
    eqSvg.setAttribute('viewBox', `0 0 ${w} ${h}`);
    const bw = Math.max(1, (w - GAP * (COUNT - 1)) / COUNT);

    bars.forEach((bar, i) => {
      const u    = i / (COUNT - 1);
      const dist = Math.abs(u - cursorX);
      const prox = cursorActive ? Math.exp(-dist * dist * 25) : 0;
      const ph   = t / 380 + i * 0.45;
      const base = 0.18 + 0.28 * (0.5 + 0.5 * Math.sin(ph));
      const bh   = Math.max(2, h * (base + prox * 0.55));

      bar.setAttribute('x',      i * (bw + GAP));
      bar.setAttribute('y',      h - bh);
      bar.setAttribute('width',  bw);
      bar.setAttribute('height', bh);
    });
  }

  requestAnimationFrame(animate);
}

requestAnimationFrame(animate);

/* ── Cursor tracking ────────────────────────────────────── */
layout.addEventListener('mousemove', (e) => {
  const r = eqSvg.getBoundingClientRect();
  cursorX     = Math.max(0, Math.min(1, (e.clientX - r.left) / r.width));
  cursorActive = true;
  signalStatus.textContent = '● LIVE';
});

layout.addEventListener('mouseleave', () => {
  cursorActive = false;
  signalStatus.textContent = '○ IDLE';
});
