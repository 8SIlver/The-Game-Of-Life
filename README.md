<div align="center">

# 🧬 Conway's Game of Life

**A simulation of chaos and emergent order**

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en/docs/Web/JavaScript)
[![Web Audio API](https://img.shields.io/badge/Web%20Audio%20API-FF6B6B?style=for-the-badge&logo=googlechrome&logoColor=white)](https://developer.mozilla.org/en/docs/Web/API/Web_Audio_API)
[![Status](https://img.shields.io/badge/Status-Completed-4CAF50?style=for-the-badge)](.)
[![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)](.)

[![Watch demo on YouTube](https://img.youtube.com/vi/RRg38oNQ9vk/maxresdefault.jpg)](https://youtu.be/RRg38oNQ9vk?si=kAviwUItsI0iv7_Y)

▶ [**Watch demo on YouTube**](https://youtu.be/RRg38oNQ9vk?si=kAviwUItsI0iv7_Y)

</div>

---

## 📑 Table of Contents

- [📖 What is the Game of Life?](#-what-is-the-game-of-life)
- [🌌 Historical & Philosophical Background](#-historical--philosophical-background)
- [📐 The Four Rules](#-the-four-rules)
- [✨ Features](#-features)
- [🧬 Preset Patterns](#-preset-patterns)
- [⌨️ Controls & Shortcuts](#%EF%B8%8F-controls--shortcuts)
- [🛠️ Technologies Used](#%EF%B8%8F-technologies-used)
- [📂 Project Structure](#-project-structure)
- [▶️ How to Run](#%EF%B8%8F-how-to-run)

---

## 📖 What is the Game of Life?

The **Game of Life** is a **cellular automaton** conceived by British mathematician **John Horton Conway** in 1970. Despite its name, it requires **no players**: it is a **mathematical simulation** that evolves autonomously from an initial state defined by the user.

The game's universe is a two-dimensional grid of **cells**, each in one of two possible states:

| State | Representation |
|:-----:|:--------------:|
| 🟦 Alive | The cell is active |
| ⬛ Dead | The cell is inactive |

Each time step — called a **generation** — all cells are updated *simultaneously* based on their immediate neighbors.

---

## 🌌 Historical & Philosophical Background

Conway designed the Game of Life in response to the work of mathematician **John von Neumann**, who in the 1950s had theorized about machines capable of *self-replication*. Conway radically simplified that idea with a grid and four rules. The results exceeded all expectations:

- 🔬 **Emergence** — Complex, stable structures (spaceships, oscillators, replicators) arise without being directly programmed; they emerge *on their own* from the rules.

- 💻 **Turing Completeness** — It has been formally proven that the Game of Life is *Turing-complete*: in theory, it is possible to build a processor, memory, or any computational algorithm *within the board itself*.

- 🧬 **Biology & Evolution** — The model has been used to study how populations grow, go extinct, and adapt under simple pressures.

- 🌀 **Philosophy of Existence** — The game fuels debate about whether the universe could operate under similar algorithmic rules, and whether the complexity of life can be reduced to elementary principles.

> *"It's amazing that with so few rules you can generate so much complexity."*
> — John H. Conway (1937 – 2020)

---

## 📐 The Four Rules

These are the only instructions governing the entire system. They apply to every cell in every generation:

| # | Rule | Condition | Result |
|:-:|------|-----------|:------:|
| 1 | **Survival** | Live cell with 2 or 3 live neighbors | ✅ Stays alive |
| 2 | **Loneliness** | Live cell with fewer than 2 live neighbors | 💀 Dies |
| 3 | **Overpopulation** | Live cell with more than 3 live neighbors | 💀 Dies |
| 4 | **Reproduction** | Dead cell with exactly 3 live neighbors | 🌱 Born |

> These four rules, applied millions of times, are capable of generating structures of extraordinary complexity.

---

## ✨ Features

- 🎨 **Age-based cell coloring** — Newborn cells appear in **bright cyan** and gradually age toward **pale blue-white**, letting you see at a glance which structures are new and which have been stable for generations.
- 🎵 **Procedural sound** — Audio generated with the **Web Audio API** (no external files): every action has its own distinct sound.
- 🧬 **Classic preset patterns** — Load iconic Game of Life patterns with a single click.
- ⌨️ **Keyboard shortcuts** — Full control from the keyboard without touching the mouse.
- 📱 **Touch support** — Draw cells with your finger on mobile or tablet.
- ⚡ **Adjustable speed** — Slider from 1 to 30 generations per second.
- 🔇 **Mute mode** — Silence all sounds without affecting the simulation.
- 🌐 **No dependencies** — 100% HTML, CSS, and vanilla JavaScript. No installation required.

---

## 🧬 Preset Patterns

Open the **"Pattern…"** menu in the controls to load these classics:

| Pattern | Type | Description |
|---------|------|-------------|
| 🛸 **Glider** | Spaceship | Travels diagonally across the board indefinitely |
| 💡 **Blinker** | Oscillator | Alternates between two states with period 2 |
| 🌟 **Pulsar** | Oscillator | Large symmetric oscillator with period 3 |
| 🔮 **R-Pentomino** | Methuselah | Only 5 cells, evolves for over 1,000 generations |
| 🚀 **LWSS** | Spaceship | Lightweight Spaceship, moves horizontally |
| 💀 **Diehard** | Methuselah | Completely disappears after 130 generations |

---

## ⌨️ Controls & Shortcuts

| Action | Button | Keyboard |
|--------|--------|:--------:|
| Play / Pause | ▶ / ⏸ | `Space` |
| Step forward | ⏭ | `S` |
| Randomize | ⚄ | `R` |
| Clear | ✕ | `C` |
| Mute / Unmute | 🔊 / 🔇 | `M` |
| Draw cell | Click / Touch on canvas | — |

---

## 🛠️ Technologies Used

| Technology | Purpose |
|------------|---------|
| **HTML5 Canvas** | Board rendering at 60 fps |
| **CSS3** | Visual design, layout, and dark mode |
| **JavaScript ES6+** | Game engine, modules, and logic |
| **Web Audio API** | Procedural sound with no external files |

> No framework or external library is used. This project is 100% original code.

---

## 📂 Project Structure

```
THE GAME OF LIFE/
│
├── index.html      →  Entry point, HTML structure and buttons
├── style.css       →  Visual design, colors and layout
├── engine.js       →  Pure Conway engine: rules, steps and patterns
├── renderer.js     →  Draws the grid on canvas with age-based colors
├── controls.js     →  Mouse, keyboard and touch events
├── app.js          →  Orchestrator: connects all modules
├── sound.js        →  Procedural sounds with Web Audio API
└── README.md       →  Project documentation
```

---

## ▶️ How to Run

No installation required. The project runs directly in the browser.

**Steps:**

1. Download or clone this repository to your machine.
2. Open the `index.html` file with any modern browser.
3. Click on cells to activate them, or use the **⚄** button for a random state.
4. Press **▶** (or `Space`) to start the simulation.
5. Explore classic patterns from the **"Pattern…"** dropdown menu.

> [!TIP]
> **Google Chrome** or **Mozilla Firefox** (latest version) are recommended for the best canvas and Web Audio API performance.

---

<div align="center">

*"From simple rules emerges the complexity of the universe."*

**© 2026 · Silver**

</div>
