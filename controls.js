// controls.js — UI bindings and event handling (no game logic)

const Controls = (() => {

  let _drawing = false;

  const bind = ({ onPlay, onStep, onRandom, onClear, onToggle, onSpeed, onMute, onPattern }) => {

    // ── Buttons ────────────────────────────────────────────────
    document.getElementById('btn-play')  .addEventListener('click', onPlay);
    document.getElementById('btn-step')  .addEventListener('click', onStep);
    document.getElementById('btn-random').addEventListener('click', onRandom);
    document.getElementById('btn-clear') .addEventListener('click', onClear);
    document.getElementById('btn-mute')  .addEventListener('click', onMute);
    document.getElementById('speed')     .addEventListener('input', e => onSpeed(+e.target.value));
    document.getElementById('pattern-select').addEventListener('change', e => {
      if (e.target.value) { onPattern(e.target.value); e.target.value = ''; }
    });

    // ── Mouse (draw on canvas) ─────────────────────────────────
    const canvas = document.getElementById('canvas');
    canvas.addEventListener('mousedown', e => { _drawing = true;  onToggle(e.clientX, e.clientY); });
    canvas.addEventListener('mousemove', e => { if (_drawing) onToggle(e.clientX, e.clientY); });
    ['mouseup', 'mouseleave'].forEach(ev =>
      canvas.addEventListener(ev, () => { _drawing = false; })
    );

    // ── Touch (draw on canvas) ─────────────────────────────────
    canvas.addEventListener('touchstart', e => {
      e.preventDefault();
      _drawing = true;
      const t = e.touches[0];
      onToggle(t.clientX, t.clientY);
    }, { passive: false });

    canvas.addEventListener('touchmove', e => {
      e.preventDefault();
      if (!_drawing) return;
      const t = e.touches[0];
      onToggle(t.clientX, t.clientY);
    }, { passive: false });

    canvas.addEventListener('touchend',   () => { _drawing = false; });
    canvas.addEventListener('touchcancel',() => { _drawing = false; });

    // ── Keyboard shortcuts ─────────────────────────────────────
    document.addEventListener('keydown', e => {
      // Ignorar si el foco está en un input
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'SELECT') return;
      switch (e.code) {
        case 'Space':   e.preventDefault(); onPlay();   break;
        case 'KeyS':    e.preventDefault(); onStep();   break;
        case 'KeyR':    e.preventDefault(); onRandom(); break;
        case 'KeyC':    e.preventDefault(); onClear();  break;
        case 'KeyM':    e.preventDefault(); onMute();   break;
      }
    });
  };

  const setPlaying = (playing) => {
    document.getElementById('btn-play').textContent = playing ? '⏸' : '▶';
  };

  const updateStats = (gen, pop) => {
    document.getElementById('gen').textContent = gen;
    document.getElementById('pop').textContent = pop;
  };

  const setMuted = (muted) => {
    const btn = document.getElementById('btn-mute');
    btn.textContent = muted ? '🔇' : '🔊';
    btn.title = muted ? 'Unmute (M)' : 'Mute (M)';
    btn.classList.toggle('muted', muted);
  };

  return { bind, setPlaying, updateStats, setMuted };

})();
