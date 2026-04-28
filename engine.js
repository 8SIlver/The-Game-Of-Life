// engine.js — Conway's Game of Life core logic (pure, no DOM)

const Engine = (() => {

  const create = (cols, rows) =>
    Array.from({ length: rows }, () => Array(cols).fill(0));

  const _neighbors = (grid, x, y) => {
    const rows = grid.length, cols = grid[0].length;
    let n = 0;
    for (let dy = -1; dy <= 1; dy++)
      for (let dx = -1; dx <= 1; dx++) {
        if (!dx && !dy) continue;
        n += grid[(y + dy + rows) % rows][(x + dx + cols) % cols];
      }
    return n;
  };

  const step = (grid) =>
    grid.map((row, y) =>
      row.map((cell, x) => {
        const n = _neighbors(grid, x, y);
        return cell ? +(n === 2 || n === 3) : +(n === 3);
      })
    );

  const randomize = (grid, p = 0.28) =>
    grid.map(row => row.map(() => +(Math.random() < p)));

  const clear = (grid) =>
    grid.map(row => row.map(() => 0));

  const toggle = (grid, x, y) =>
    grid.map((row, ry) =>
      row.map((cell, rx) => (rx === x && ry === y ? cell ^ 1 : cell))
    );

  const population = (grid) =>
    grid.reduce((s, row) => s + row.reduce((r, c) => r + c, 0), 0);

  return { create, step, randomize, clear, toggle, population };

})();
