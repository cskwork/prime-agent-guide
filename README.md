# Prime Agent Guide 🦋

> An interactive, in-depth, multilingual (English / Korean) guide to **Prime Agent** — the RLM-native terminal coding and research harness by Prime Intellect.

🌐 **Live Site**: [https://cskwork.github.io/prime-agent-guide/](https://cskwork.github.io/prime-agent-guide/)

📓 **Korean NotebookLM Guide**: [Open in NotebookLM](https://notebook.google.com/notebook/c478a17b-a338-4815-96ed-c6a60473b739)

---

## What This Is

A single-page, fully interactive website that explains Prime Agent's architecture, programming model, and features in plain language — for anyone to understand, from beginners to advanced developers.

### Features

- 🌍 **Bilingual** — Instant EN ↔ KO toggle, persisted across visits
- 🎨 **Interactive Architecture Diagram** — Click any component for detailed explanations
- 🔄 **Animated RLM Loop** — Visual explanation of the Recursive Language Model
- 📊 **Concept Tabs** — Core ideas explained with code examples
- 💻 **Syntax-highlighted Code Blocks** — With copy-to-clipboard
- 📱 **Fully Responsive** — Works on desktop, tablet, and mobile
- 🎬 **Scroll Animations** — Smooth reveal effects throughout
- ⚡ **Zero Dependencies** — Pure HTML/CSS/JS, no frameworks

### Sections

| Section | Content |
|---------|---------|
| **What is Prime Agent?** | Overview of the 6 key features |
| **Quick Start** | 3-step setup (install, authenticate, start) |
| **Core Concepts** | Single-tool design, recursive agents, persistent state, skills |
| **Architecture** | Interactive diagram: Client → Supervisor → Worker → Session → Kernel |
| **RLM Programming Model** | The RLM loop, host bridge, delegation flow |
| **Skills, Extensions & MCP** | All extensibility mechanisms |
| **Sessions & Branching** | Tree-structured sessions, compaction, commands |
| **Long-Running Agents** | Daemon workers, heartbeats, goals, autonomous mode |
| **Providers & Models** | 30+ supported providers |
| **CLI Reference** | Essential commands |
| **Korean Resources** | NotebookLM link and KO-specific content |

## Tech Stack

- **HTML5** — Semantic structure
- **CSS3** — Custom properties, grid/flexbox, animations
- **Vanilla JavaScript** — No frameworks, no build step
- **Google Fonts** — Inter + JetBrains Mono

## Local Development

Just open `index.html` in a browser, or serve with any static file server:

```bash
python3 -m http.server 8000
# Visit http://localhost:8000
```

## Deploying

This site is deployed via **GitHub Pages** from the `main` branch root.

```bash
git push origin main
```

## File Structure

```
├── index.html      # Main HTML structure
├── styles.css      # All styling (dark/light theme support)
├── i18n.js         # EN/KO translations
├── app.js          # Interactivity (canvas, tabs, architecture, etc.)
├── README.md       # This file
└── research.json   # Source data extracted from Prime Agent docs
```

## About Prime Agent

[Prime Agent](https://github.com/PrimeIntellect-ai/prime-agent) is an MIT-licensed terminal coding and research harness built around:

- **One tool**: A persistent IPython kernel replaces dozens of specialized tools
- **Recursive Language Model (RLM)**: The model spawns child agents as native Python calls
- **Multi-process runtime**: A daemon-backed architecture with crash recovery
- **30+ providers**: From Claude to OpenAI to Gemini and beyond

This guide is an **unofficial community resource**. Prime Agent™ is a product of [Prime Intellect](https://primeintellect.ai).

## License

Content is provided for educational purposes. Prime Agent itself is MIT-licensed.
