<div align="center">

# 🧬 Conway's Game of Life

**Una simulación del caos y el orden emergente**

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/es/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/es/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/es/docs/Web/JavaScript)
[![Status](https://img.shields.io/badge/Estado-Completado-4CAF50?style=for-the-badge)](.)
[![License](https://img.shields.io/badge/Licencia-MIT-blue?style=for-the-badge)](.)

<br/>

*Proyecto académico desarrollado por el equipo **InfPostSCESI***

</div>

---

## 📑 Tabla de Contenidos

- [👥 Equipo](#-equipo)
- [📖 ¿Qué es el Juego de la Vida?](#-qué-es-el-juego-de-la-vida)
- [🌌 Trasfondo Histórico y Filosófico](#-trasfondo-histórico-y-filosófico)
- [📐 Las Cuatro Reglas](#-las-cuatro-reglas)
- [✨ Patrones Famosos](#-patrones-famosos)
- [🛠️ Tecnologías Utilizadas](#%EF%B8%8F-tecnologías-utilizadas)
- [📂 Estructura del Proyecto](#-estructura-del-proyecto)
- [▶️ Cómo Ejecutar el Proyecto](#%EF%B8%8F-cómo-ejecutar-el-proyecto)

---

## 👥 Equipo

> **InfPostSCESI** — Proyecto de mini-implementación como ejercicio práctico de programación web.

| N° | Nombre | Rol |
|:--:|--------|-----|
| 1 | *(Integrante 1)* | Desarrollador/a |
| 2 | *(Integrante 2)* | Desarrollador/a |
| 3 | *(Integrante 3)* | Desarrollador/a |
| 4 | *(Integrante 4)* | Desarrollador/a |

---

## 📖 ¿Qué es el Juego de la Vida?

El **Juego de la Vida** *(Game of Life)* es un **autómata celular** concebido por el matemático británico **John Horton Conway** en 1970. A pesar de llevar la palabra "juego" en su nombre, **no requiere jugadores**: es una **simulación matemática** que evoluciona de forma autónoma a partir de un estado inicial definido por el usuario.

El universo del juego es una cuadrícula bidimensional infinita de **celdas**, cada una en uno de dos estados posibles:

| Estado | Representación |
|:------:|:--------------:|
| 🟩 Viva | La celda está activa |
| ⬛ Muerta | La celda está inactiva |

En cada ciclo de tiempo — llamado **generación** — todas las celdas se actualizan *simultáneamente* en función de sus vecinos inmediatos.

---

## 🌌 Trasfondo Histórico y Filosófico

Conway diseñó el Juego de la Vida como respuesta a los trabajos del matemático **John von Neumann**, quien en los años 50 había teorizado sobre máquinas capaces de *autorreplicarse*. Conway simplificó radicalmente esa idea con una cuadrícula y cuatro reglas. El resultado superó todas las expectativas:

- 🔬 **Emergencia** — Estructuras complejas y estables (naves, osciladores, replicadores) surgen sin haber sido programadas directamente; emergen *solas* de las reglas.

- 💻 **Completitud de Turing** — Está formalmente demostrado que el Juego de la Vida es *Turing-completo*: en teoría, es posible construir un procesador, una memoria o cualquier algoritmo computacional *dentro del propio tablero*.

- 🧬 **Biología y evolución** — El modelo ha sido utilizado para estudiar cómo las poblaciones crecen, se extinguen y se adaptan bajo presiones simples.

- 🌀 **Filosofía de la existencia** — El juego alimenta el debate sobre si el universo podría funcionar bajo reglas algorítmicas similares, y si la complejidad de la vida puede reducirse a principios elementales.

> *"Es asombroso que con tan pocas reglas se pueda generar tanta complejidad."*
> — John H. Conway (1937 – 2020)

---

## 📐 Las Cuatro Reglas

Estas son las únicas instrucciones que gobiernan todo el sistema. Se aplican a cada celda en cada generación:

| # | Regla | Condición | Resultado |
|:-:|-------|-----------|:---------:|
| 1 | **Supervivencia** | Celda **viva** con 2 ó 3 vecinos vivos | ✅ Sigue viva |
| 2 | **Soledad** | Celda **viva** con menos de 2 vecinos vivos | 💀 Muere |
| 3 | **Sobrepoblación** | Celda **viva** con más de 3 vecinos vivos | 💀 Muere |
| 4 | **Reproducción** | Celda **muerta** con exactamente 3 vecinos vivos | 🌱 Nace |

> Estas cuatro reglas, aplicadas millones de veces, son capaces de generar estructuras de una complejidad extraordinaria.

---

## ✨ Patrones Famosos

A lo largo de los años, la comunidad matemática ha catalogado miles de patrones. Algunos de los más icónicos son:

| Patrón | Tipo | Descripción |
|--------|------|-------------|
| 🔫 **Glider** (Planeador) | Nave espacial | Se desplaza diagonalmente por el tablero indefinidamente |
| 💡 **Blinker** | Oscilador | Alterna entre dos estados con período 2 |
| 🏠 **Block** | Estático | Cuadrado de 2×2 que permanece igual para siempre |
| 🚀 **Glider Gun** | Generador | Produce nuevos planeadores de forma continua |
| 🌀 **R-pentomino** | Methuselah | Pequeño pero evoluciona por más de 1,000 generaciones |

---

## 🛠️ Tecnologías Utilizadas

| Tecnología | Versión | Propósito |
|------------|:-------:|-----------|
| **HTML5** | — | Estructura de la página y elemento `<canvas>` |
| **CSS3** | — | Estilos visuales, layout y diseño responsivo |
| **JavaScript ES6+** | — | Motor del juego, lógica de Conway y renderizado en canvas |

> No se utiliza ningún framework ni librería externa. El proyecto es 100% código propio.

---

## 📂 Estructura del Proyecto

```
THE GAME OF LIFE/
│
├── index.html      →  Punto de entrada y estructura del lienzo
├── style.css       →  Diseño visual del tablero y controles
├── script.js       →  Motor del juego: reglas, vecinos y renderizado
└── README.md       →  Documentación del proyecto
```

---

## ▶️ Cómo Ejecutar el Proyecto

No se requiere instalar nada. El proyecto corre directamente en el navegador.

**Pasos:**

1. Descarga o clona este repositorio en tu equipo.
2. Abre el archivo `index.html` con cualquier navegador moderno.
3. Haz clic sobre las celdas del tablero para activarlas.
4. Presiona **Play** ▶️ para iniciar la simulación y observar cómo evoluciona.

> [!TIP]
> Se recomienda usar **Google Chrome** o **Mozilla Firefox** en su versión más reciente para garantizar el mejor rendimiento del canvas.

---

<div align="center">

*"De reglas simples nace la complejidad del universo."*

**© 2026 · Equipo InfPostSCESI**

</div>
