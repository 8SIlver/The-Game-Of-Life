// sound.js — Procedural audio via Web Audio API (no external files)

const Sound = (() => {

  let ctx = null;
  let muted = false;

  // Lazy-create AudioContext on first interaction (browser policy)
  const _ctx = () => {
    if (!ctx) {
      ctx = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (ctx.state === 'suspended') ctx.resume();
    return ctx;
  };

  // ── Primitives ──────────────────────────────────────────────

  const _tone = ({ freq = 440, type = 'sine', gain = 0.15,
                    attack = 0.01, decay = 0.08, duration = 0.1 } = {}) => {
    if (muted) return;
    const ac  = _ctx();
    const osc = ac.createOscillator();
    const env = ac.createGain();
    osc.connect(env);
    env.connect(ac.destination);

    osc.type      = type;
    osc.frequency.setValueAtTime(freq, ac.currentTime);

    env.gain.setValueAtTime(0,    ac.currentTime);
    env.gain.linearRampToValueAtTime(gain, ac.currentTime + attack);
    env.gain.exponentialRampToValueAtTime(0.0001, ac.currentTime + attack + decay);

    osc.start(ac.currentTime);
    osc.stop(ac.currentTime + attack + decay + 0.01);
  };

  const _noise = ({ gain = 0.05, duration = 0.05 } = {}) => {
    if (muted) return;
    const ac     = _ctx();
    const bufSz  = ac.sampleRate * duration;
    const buf    = ac.createBuffer(1, bufSz, ac.sampleRate);
    const data   = buf.getChannelData(0);
    for (let i = 0; i < bufSz; i++) data[i] = Math.random() * 2 - 1;

    const src  = ac.createBufferSource();
    const env  = ac.createGain();
    const filt = ac.createBiquadFilter();
    src.buffer = buf;
    filt.type  = 'bandpass';
    filt.frequency.value = 1200;
    src.connect(filt);
    filt.connect(env);
    env.connect(ac.destination);

    env.gain.setValueAtTime(gain, ac.currentTime);
    env.gain.exponentialRampToValueAtTime(0.0001, ac.currentTime + duration);
    src.start(ac.currentTime);
  };

  // ── Public sounds ───────────────────────────────────────────

  /** Soft tick each generation while running */
  const tick = () => {
    _tone({ freq: 660, type: 'sine', gain: 0.04, attack: 0.005, decay: 0.04 });
  };

  /** Pop when a cell is born by clicking */
  const cellBorn = () => {
    _tone({ freq: 880, type: 'triangle', gain: 0.09, attack: 0.005, decay: 0.06 });
  };

  /** Click when a cell is killed by clicking */
  const cellDied = () => {
    _tone({ freq: 330, type: 'triangle', gain: 0.07, attack: 0.005, decay: 0.05 });
  };

  /** UI button press */
  const btnClick = () => {
    _noise({ gain: 0.06, duration: 0.04 });
  };

  /** Play — ascending chirp */
  const play = () => {
    _tone({ freq: 523, type: 'sine', gain: 0.12, attack: 0.01, decay: 0.10 });
    setTimeout(() =>
      _tone({ freq: 784, type: 'sine', gain: 0.10, attack: 0.01, decay: 0.12 }), 80);
  };

  /** Pause — descending chirp */
  const pause = () => {
    _tone({ freq: 784, type: 'sine', gain: 0.10, attack: 0.01, decay: 0.10 });
    setTimeout(() =>
      _tone({ freq: 440, type: 'sine', gain: 0.08, attack: 0.01, decay: 0.12 }), 80);
  };

  /** Randomize — sparkle burst */
  const randomize = () => {
    [0, 40, 80, 120, 160].forEach((delay, i) => {
      const freqs = [523, 659, 784, 1047, 1319];
      setTimeout(() =>
        _tone({ freq: freqs[i], type: 'sine', gain: 0.08, attack: 0.005, decay: 0.08 }), delay);
    });
  };

  /** Clear — low thud */
  const clear = () => {
    _tone({ freq: 110, type: 'sawtooth', gain: 0.12, attack: 0.005, decay: 0.20 });
    _noise({ gain: 0.04, duration: 0.12 });
  };

  // ── Mute toggle ─────────────────────────────────────────────

  const toggleMute = () => {
    muted = !muted;
    return muted;
  };

  const isMuted = () => muted;

  return { tick, cellBorn, cellDied, btnClick, play, pause, randomize, clear, toggleMute, isMuted };

})();
