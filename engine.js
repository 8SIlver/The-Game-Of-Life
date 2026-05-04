// engine.js — Conway's Game of Life core logic (pure, no DOM)
// cell values: 0 = dead, 1+ = age (generations alive)

const Engine = (() => {

  const create = (cols, rows) =>
    Array.from({ length: rows }, () => Array(cols).fill(0));

  const _neighbors = (grid, x, y) => {
    const rows = grid.length, cols = grid[0].length;
    let n = 0;
    for (let dy = -1; dy <= 1; dy++)
      for (let dx = -1; dx <= 1; dx++) {
        if (!dx && !dy) continue;
        if (grid[(y + dy + rows) % rows][(x + dx + cols) % cols] > 0) n++;
      }
    return n;
  };

  const step = (grid) =>
    grid.map((row, y) =>
      row.map((cell, x) => {
        const n = _neighbors(grid, x, y);
        const alive = cell > 0;
        if (alive && (n === 2 || n === 3)) return cell + 1; // survives → age++
        if (!alive && n === 3)             return 1;         // born
        return 0;                                             // dies
      })
    );

  const randomize = (grid, p = 0.28) =>
    grid.map(row => row.map(() => (Math.random() < p ? 1 : 0)));

  const clear = (grid) =>
    grid.map(row => row.map(() => 0));

  const toggle = (grid, x, y) =>
    grid.map((row, ry) =>
      row.map((cell, rx) => (rx === x && ry === y ? (cell > 0 ? 0 : 1) : cell))
    );

  const population = (grid) =>
    grid.reduce((s, row) => s + row.reduce((r, c) => r + (c > 0 ? 1 : 0), 0), 0);

  // ── Preset patterns ─────────────────────────────────────────
  // Each pattern is an array of [dx, dy] offsets from the center

  const PATTERNS = {
    glider: [
      [1,0],[2,1],[0,2],[1,2],[2,2]
    ],
    blinker: [
      [0,0],[1,0],[2,0]
    ],
    pulsar: [
      // top-left quadrant + symmetry
      [2,0],[3,0],[4,0],[8,0],[9,0],[10,0],
      [0,2],[5,2],[7,2],[12,2],
      [0,3],[5,3],[7,3],[12,3],
      [0,4],[5,4],[7,4],[12,4],
      [2,5],[3,5],[4,5],[8,5],[9,5],[10,5],
      [2,7],[3,7],[4,7],[8,7],[9,7],[10,7],
      [0,8],[5,8],[7,8],[12,8],
      [0,9],[5,9],[7,9],[12,9],
      [0,10],[5,10],[7,10],[12,10],
      [2,12],[3,12],[4,12],[8,12],[9,12],[10,12]
    ],
    rpentomino: [
      [1,0],[2,0],[0,1],[1,1],[1,2]
    ],
    lwss: [
      [1,0],[4,0],[0,1],[0,2],[4,2],[0,3],[1,3],[2,3],[3,3]
    ],
    diehard: [
      [6,0],[0,1],[1,1],[1,2],[5,2],[6,2],[7,2]
    ],
  };

  const placePattern = (grid, name) => {
    const offsets = PATTERNS[name];
    if (!offsets) return grid;
    const rows = grid.length, cols = grid[0].length;
    const minX = Math.min(...offsets.map(o => o[0]));
    const minY = Math.min(...offsets.map(o => o[1]));
    const maxX = Math.max(...offsets.map(o => o[0]));
    const maxY = Math.max(...offsets.map(o => o[1]));
    const cx = Math.floor((cols - (maxX - minX)) / 2) - minX;
    const cy = Math.floor((rows - (maxY - minY)) / 2) - minY;
    const next = clear(grid);
    offsets.forEach(([dx, dy]) => {
      const nx = cx + dx, ny = cy + dy;
      if (nx >= 0 && nx < cols && ny >= 0 && ny < rows)
        next[ny][nx] = 1;
    });
    return next;
  };

  return { create, step, randomize, clear, toggle, population, placePattern, PATTERNS };

})();
