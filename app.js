// app.js — Entry point: wires Engine, Renderer and Controls together

const App = (() => {

  let grid, gen, playing, speed, rafId, lastTs;

  const _render = () => {
    Renderer.draw(grid);
    Controls.updateStats(gen, Engine.population(grid));
  };

  const _step = () => {
    grid = Engine.step(grid);
    gen++;
    Sound.tick();
    _render();
  };

  const _loop = (ts) => {
    if (!playing) return;
    if (!lastTs || ts - lastTs >= 1000 / speed) {
      _step();
      lastTs = ts;
    }
    rafId = requestAnimationFrame(_loop);
  };

  /* ── Actions ── */

  const togglePlay = () => {
    playing = !playing;
    Controls.setPlaying(playing);
    if (playing) {
      Sound.play();
      lastTs = null;
      rafId = requestAnimationFrame(_loop);
    } else {
      Sound.pause();
      cancelAnimationFrame(rafId);
    }
  };

  const step = () => { if (!playing) { Sound.btnClick(); _step(); } };

  const randomize = () => {
    Sound.randomize();
    const { cols, rows } = Renderer.getDimensions();
    grid = Engine.randomize(Engine.create(cols, rows));
    gen  = 0;
    _render();
  };

  const clear = () => {
    Sound.clear();
    playing = false;
    Controls.setPlaying(false);
    cancelAnimationFrame(rafId);
    grid = Engine.clear(grid);
    gen  = 0;
    _render();
  };

  // ── Toggle celdas (mouse y touch usan clientX/Y directamente) ──
  let _lastToggled = null; // evita sonido duplicado al arrastrar sobre la misma celda

  const handleToggle = (clientX, clientY) => {
    const { x, y } = Renderer.cellAt(clientX, clientY);
    const key = `${x},${y}`;
    if (key === _lastToggled) return;
    _lastToggled = key;
    const wasAlive = grid[y] && grid[y][x] > 0;
    grid = Engine.toggle(grid, x, y);
    if (wasAlive) Sound.cellDied(); else Sound.cellBorn();
    _render();
  };

  // ── Patrones predefinidos ──────────────────────────────────
  const loadPattern = (name) => {
    Sound.randomize();
    const { cols, rows } = Renderer.getDimensions();
    grid = Engine.placePattern(Engine.create(cols, rows), name);
    gen  = 0;
    _render();
  };

  /* ── Init ── */

  const init = () => {
    Renderer.init(document.getElementById('canvas'));
    playing = false;
    speed   = 10;
    gen     = 0;

    randomize();

    Controls.bind({
      onPlay:    togglePlay,
      onStep:    step,
      onRandom:  randomize,
      onClear:   clear,
      onToggle:  handleToggle,
      onSpeed:   (v) => { speed = v; },
      onMute:    () => { const m = Sound.toggleMute(); Controls.setMuted(m); },
      onPattern: loadPattern,
    });

    window.addEventListener('resize', () => {
      Renderer.resize();
      randomize();
    });
  };

  return { init };

})();

document.addEventListener('DOMContentLoaded', App.init);
