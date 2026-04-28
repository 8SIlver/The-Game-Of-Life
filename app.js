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
    if (playing) { lastTs = null; rafId = requestAnimationFrame(_loop); }
    else cancelAnimationFrame(rafId);
  };

  const step = () => { if (!playing) { _step(); } };

  const randomize = () => {
    const { cols, rows } = Renderer.getDimensions();
    grid = Engine.randomize(Engine.create(cols, rows));
    gen  = 0;
    _render();
  };

  const clear = () => {
    playing = false;
    Controls.setPlaying(false);
    cancelAnimationFrame(rafId);
    grid = Engine.clear(grid);
    gen  = 0;
    _render();
  };

  const handleToggle = (e) => {
    const { x, y } = Renderer.cellAt(e.clientX, e.clientY);
    grid = Engine.toggle(grid, x, y);
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
      onPlay:   togglePlay,
      onStep:   step,
      onRandom: randomize,
      onClear:  clear,
      onToggle: handleToggle,
      onSpeed:  (v) => { speed = v; },
    });

    window.addEventListener('resize', () => {
      Renderer.resize();
      randomize();
    });
  };

  return { init };

})();

document.addEventListener('DOMContentLoaded', App.init);
