// renderer.js — Canvas drawing (no game logic)

const Renderer = (() => {

  const CELL = 13;
  const GAP  = 1;
  const C_DEAD = '#111118';

  let canvas, ctx, cols, rows;

  const init = (el) => {
    canvas = el;
    ctx = canvas.getContext('2d');
    resize();
  };

  const resize = () => {
    canvas.width  = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    cols = Math.floor(canvas.width  / CELL);
    rows = Math.floor(canvas.height / CELL);
  };

  // ── Age → color ─────────────────────────────────────────────
  // age 1  : cian brillante  (#00e5ff)
  // age ~10: violeta/índigo  (#818cf8)
  // age ~30+: blanco azulado (#dde8ff)
  const _ageColor = (age) => {
    if (age <= 0) return C_DEAD;
    // Normalise age into 0‥1 (caps at 40)
    const t = Math.min(age / 40, 1);
    // Interpolate HSL: 185 (cian) → 240 (índigo) → 220 (blanco-azul)
    const h = t < 0.5
      ? 185 + (240 - 185) * (t / 0.5)          // cian → índigo
      : 240 + (220 - 240) * ((t - 0.5) / 0.5); // índigo → blanco-azul
    const s = t < 0.5
      ? 100 - 20 * (t / 0.5)  // 100% → 80%
      : 80  - 40 * ((t - 0.5) / 0.5); // 80% → 40%
    const l = t < 0.5
      ? 55 + 10 * (t / 0.5)   // 55% → 65%
      : 65 + 25 * ((t - 0.5) / 0.5); // 65% → 90%
    return `hsl(${h},${s}%,${l}%)`;
  };

  const draw = (grid) => {
    ctx.fillStyle = C_DEAD;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    const maxY = Math.min(rows, grid.length);
    for (let y = 0; y < maxY; y++) {
      const maxX = Math.min(cols, grid[y].length);
      for (let x = 0; x < maxX; x++) {
        const age = grid[y][x];
        if (age > 0) {
          ctx.fillStyle = _ageColor(age);
          ctx.fillRect(x * CELL + GAP, y * CELL + GAP, CELL - GAP, CELL - GAP);
        }
      }
    }
  };

  const cellAt = (clientX, clientY) => {
    const r = canvas.getBoundingClientRect();
    return {
      x: Math.floor((clientX - r.left) / CELL),
      y: Math.floor((clientY - r.top)  / CELL),
    };
  };

  const getDimensions = () => ({ cols, rows });

  return { init, resize, draw, cellAt, getDimensions };

})();
