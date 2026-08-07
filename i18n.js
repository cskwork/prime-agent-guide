/* ============================================
   Prime Agent Guide — i18n (EN / KO)
   ============================================ */

const translations = {
    en: {
        // Nav
        "nav.what": "What is it?",
        "nav.start": "Quick Start",
        "nav.concepts": "Concepts",
        "nav.architecture": "Architecture",
        "nav.rlm": "RLM",
        "nav.skills": "Skills",
        "nav.sessions": "Sessions",
        "nav.providers": "Providers",

        // Hero
        "hero.subtitle": "An RLM-native terminal coding and research harness built around a persistent IPython kernel, recursive subagents, and a multi-process local runtime.",
        "hero.cta1": "Get Started",
        "hero.cta2": "View on GitHub",
        "hero.stat1": "Built-in Tool",
        "hero.stat2": "Providers",
        "hero.stat3": "Session Cap",
        "hero.stat4": "Open Source",
        "hero.scroll": "Scroll to explore",
        "hero.notebook": "Korean Guide on NotebookLM",
        "hero.notebookDesc": "Prime Agent 한국어 가이드 — NotebookLM interactive notebook",

        // What is
        "what.tag": "Overview",
        "what.title": "What is Prime Agent?",
        "what.desc": "Prime Agent is a terminal-based AI coding and research harness that takes a fundamentally different approach: instead of giving the model dozens of separate tools, it gives it one — a persistent IPython kernel — and lets it compose everything as code.",
        "what.f1.title": "Single-Tool Design",
        "what.f1.desc": "One built-in tool — ipython — replaces dozens of specialized tools. The model reads files, runs commands, edits code, and delegates work all through a persistent Python kernel.",
        "what.f2.title": "Recursive Language Model",
        "what.f2.desc": "The model can spawn child agents natively via rlm() calls. Each child gets fresh context, inherits capabilities, and runs independently — enabling true parallel work.",
        "what.f3.title": "Persistent State",
        "what.f3.desc": "Python state survives across turns and compaction. Variables, imports, functions, and parsed data remain available. Sessions persist as tree-structured JSONL files.",
        "what.f4.title": "Multi-Process Runtime",
        "what.f4.desc": "A daemon-backed architecture isolates each session in its own process. Workers continue running after you close the terminal. Crash recovery is built-in.",
        "what.f5.title": "Extensible Skills",
        "what.f5.desc": "Add capabilities via Agent Skills (markdown or Python-backed). MCP integrations, extensions, themes, and packages create a rich ecosystem without bloating the tool surface.",
        "what.f6.title": "Built for Long Sessions",
        "what.f6.desc": "Heartbeats, scheduled prompts, persistent goals, autonomous mode, and automatic compaction make Prime Agent ideal for long-running, multi-step work.",

        // Quick Start
        "start.tag": "Get Started",
        "start.title": "Quick Start",
        "start.desc": "From zero to a working Prime Agent session in under a minute.",
        "start.s1.title": "Install",
        "start.s1.desc": "Install on Linux or macOS with a single command:",
        "start.s2.title": "Authenticate",
        "start.s2.desc": "Use your subscription or set an API key:",
        "start.s3.title": "Start Working",
        "start.s3.desc": "Run it in your project and just start talking:",
        "start.copy": "Copy",
        "start.tip": "The Python kernel runtime is set up automatically on first invocation. Set PRIME_AGENT_KERNEL_PYTHON to use an existing Python environment with ipykernel.",

        // Concepts
        "concepts.tag": "Fundamentals",
        "concepts.title": "Core Concepts",
        "concepts.desc": "The four foundational ideas that make Prime Agent different from every other coding agent.",
        "concepts.tab1": "Single-Tool Design",
        "concepts.tab2": "Recursive Agents",
        "concepts.tab3": "Persistent State",
        "concepts.tab4": "Programmatic Skills",
        "concepts.c1.h": "Execution is Programmatic",
        "concepts.c1.p1": "Prime Agent's default runtime exposes one built-in model tool: ipython. Reading files, editing code, running commands, transforming data, invoking skills, and delegating work all begin from the persistent kernel — not from dozens of separate tool calls.",
        "concepts.c1.p2": "This means the model doesn't waste context switching between tools. Everything is Python. The model can inspect its environment, build helper functions, compose operations, and maintain working state — exactly like a human developer would in a notebook.",
        "concepts.c2.h": "Subagents are Native RLM Calls",
        "concepts.c2.p1": "The callable rlm object is preloaded in the kernel. Spawn a child agent with a direct Python call. It returns immediately after task admission — never the child's answer.",
        "concepts.c2.p2": "The TypeScript host creates a normal child AgentSession with an independent context and session directory. The child inherits the parent's model, providers, skills, tools, and retry policy.",
        "concepts.c2.note": "The parent keeps its context focused while children receive only the context needed for their subtasks. This is true parallel fan-out — not sequential tool calls.",
        "concepts.c3.h": "State is Designed to Outlive One Turn",
        "concepts.c3.p1": "The RLM programming model assumes useful work may take many turns — or continue after the terminal UI closes:",
        "concepts.c3.l1": "Automatic compaction summarizes older context while preserving recent messages and kernel state",
        "concepts.c3.l2": "Daemon-backed workers keep sessions running after clients detach",
        "concepts.c3.l3": "Child registries and session artifacts make subagents recoverable",
        "concepts.c3.l4": "Heartbeats and scheduled prompts re-enter a session later",
        "concepts.c3.l5": "Persistent goals continue until the objective is complete",
        "concepts.c3.l6": "Autonomous mode adds bounded continuations with quality gates",
        "concepts.c4.h": "Skills Add Programmatic Capability",
        "concepts.c4.p1": "Prime Agent supports the Agent Skills markdown format and extends it with Python-backed skills. Only skill metadata enters the startup prompt — the full SKILL.md loads on demand when a task matches.",
        "concepts.c4.p2": "A Python-backed skill installs a package into the kernel environment, so the model can import and call it directly — making Python-backed skills a superset of instruction-only skills.",

        // Architecture
        "arch.tag": "Deep Dive",
        "arch.title": "Architecture",
        "arch.desc": "Prime Agent separates terminal presentation, process coordination, agent execution, model-facing Python, and persisted state. Click each layer to explore.",
        "arch.click": "Click a component above to learn more",
        "arch.clickDesc": "Each layer in Prime Agent has clear ownership boundaries. The client owns rendering, the supervisor owns routing, workers own sessions, and IPython is the model's control environment.",

        // RLM
        "rlm.tag": "The Core Innovation",
        "rlm.title": "RLM Programming Model",
        "rlm.desc": "Recursive Language Model (RLM) is the programming model at the heart of Prime Agent. The model works inside a persistent Python environment and composes capabilities as code.",
        "rlm.loop1": "Parent Model",
        "rlm.loop1d": "Receives task + working context",
        "rlm.loop2": "Inspect & Transform",
        "rlm.loop2d": "Files · data · shell commands",
        "rlm.loop3": "Spawn Children",
        "rlm.loop3d": "rlm() calls for focused work",
        "rlm.loop4": "Compose Answer",
        "rlm.loop4d": "Synthesize results + continue",
        "rlm.bridge.title": "The Host Bridge",
        "rlm.bridge.desc": "Python skills use typed host requests for capabilities whose authoritative state belongs outside the kernel. Provider calls, session persistence, child lifecycles, scheduling, and safety policy remain in the TypeScript host. IPython is purely the model-facing programming surface.",
        "rlm.bridge.p1": "rlm() — spawn child agents",
        "rlm.bridge.p2": "goal — create/complete objectives",
        "rlm.bridge.p3": "agent_message — family messaging",
        "rlm.bridge.p4": "compact — context management",
        "rlm.bridge.p5": "Working state & variables",
        "rlm.bridge.t1": "Provider calls & streaming",
        "rlm.bridge.t2": "Session persistence (JSONL)",
        "rlm.bridge.t3": "Child lifecycle & depth limits",
        "rlm.bridge.t4": "Usage & cost attribution",
        "rlm.bridge.t5": "Credential management",
        "rlm.del.title": "Delegation Flow",
        "rlm.del.desc": "When the model delegates work via await rlm(\"subtask\"), the call travels through a Jupyter comm target to the TypeScript host, which creates a real child AgentSession.",
        "rlm.del.s1": "Model calls rlm(\"subtask\") in IPython",
        "rlm.del.s2": "Python shim sends host.request via Jupyter comm",
        "rlm.del.s3": "AgentSession checks depth, resolves model, admits child",
        "rlm.del.s4": "Returns spawn handle immediately — never the answer",
        "rlm.del.s5": "Child runs independently, replies via agent_message",

        // Skills
        "skills.tag": "Extensibility",
        "skills.title": "Skills, Extensions & MCP",
        "skills.desc": "Prime Agent's extension model keeps the tool surface minimal while enabling unlimited capabilities through skills, extensions, and MCP integrations.",
        "skills.s1.title": "Agent Skills",
        "skills.s1.desc": "Self-contained capability packages following the Agent Skills standard. Each skill provides a SKILL.md with on-demand instructions, setup steps, and reference docs.",
        "skills.s2.title": "Python-Backed Skills",
        "skills.s2.desc": "A superset of markdown skills with a Python package installed into the kernel. The model can import and call documented functions directly — typed callables, scripts, and dependencies included.",
        "skills.s3.title": "Extensions",
        "skills.s3.desc": "TypeScript modules that add custom tools, commands, keyboard shortcuts, event handlers, UI components, permission gates, custom compaction, and more.",
        "skills.s4.title": "MCP Integrations",
        "skills.s4.desc": "Connect external services (Linear, Notion, ...) over the Model Context Protocol. Each integration is a Python skill — not a new model tool — keeping the single-tool design intact.",
        "skills.loc.title": "Skill Discovery Locations",

        // Sessions
        "sessions.tag": "Persistence",
        "sessions.title": "Sessions & Branching",
        "sessions.desc": "Prime Agent saves conversations as tree-structured JSONL files with in-place branching, compaction, and recovery.",
        "sessions.f1.title": "Tree-Structured Sessions",
        "sessions.f1.desc": "Every entry has an id and parentId. Navigate to any previous point, continue from there, and switch between branches — all in a single file. No data is lost.",
        "sessions.f2.title": "Context Compaction",
        "sessions.f2.desc": "When conversations grow too long, compaction summarizes older messages while preserving recent work. The kernel state persists through compaction.",
        "sessions.f3.title": "Session Commands",
        "sessions.f3.desc": "Powerful slash commands for managing your work:",
        "sessions.legend1": "Summarized",
        "sessions.legend2": "Summary",
        "sessions.legend3": "Retained",
        "sessions.cmd1": "Navigate session tree",
        "sessions.cmd2": "Branch from any point",
        "sessions.cmd3": "Duplicate active branch",
        "sessions.cmd4": "Summarize old context",
        "sessions.cmd5": "Browse past sessions",
        "sessions.cmd6": "Upload as gist",

        // Long-Running
        "long.tag": "Autonomous Work",
        "long.title": "Long-Running Agents",
        "long.desc": "Prime Agent combines daemon-backed workers with persistent state, scheduled prompts, direct messaging, goals, and bounded autonomous continuations.",
        "long.f1.title": "Daemon-Backed Workers",
        "long.f1.desc": "Closing the terminal detaches the client — it doesn't stop the worker. Sessions continue running. Reconnect anytime with prime-agent attach.",
        "long.f2.title": "Heartbeats",
        "long.f2.desc": "Recurring instructions that re-enter a session on a schedule. User-owned /heartbeat or agent-managed rlm_heartbeat.",
        "long.f3.title": "Persistent Goals",
        "long.f3.desc": "Durable objectives that persist across turns until complete. Track token usage, elapsed time, and continuation count.",
        "long.f4.title": "Autonomous Mode",
        "long.f4.desc": "Bounded host policy for unattended runs. Continues until quality gates pass or limits (turns, tokens, time) are reached.",
        "long.f5.title": "Agent Messaging",
        "long.f5.desc": "The daemon routes messages between active sessions. Send from CLI: prime-agent send, or from kernel: agent_message.send().",
        "long.f6.title": "Scheduled Prompts",
        "long.f6.desc": "One-time or cron-based prompts for any agent. Persisted per session, continue while detached. prime-agent schedule.",

        // Providers
        "prov.tag": "Connectivity",
        "prov.title": "Providers & Models",
        "prov.desc": "Prime Agent supports 30+ providers through subscription login or API keys. Use any model from any supported provider.",
        "prov.sub": "Subscriptions",
        "prov.api": "API Keys",

        // CLI
        "cli.tag": "Reference",
        "cli.title": "CLI Quick Reference",
        "cli.desc": "Essential commands for working with Prime Agent.",
        "cli.cat1": "Session Management",
        "cli.c1a": "Start interactive session",
        "cli.c1b": "Continue most recent",
        "cli.c1c": "Resume or browse sessions",
        "cli.c1d": "Print mode (one-shot)",
        "cli.cat2": "Agent Control",
        "cli.c2a": "List active agents",
        "cli.c2b": "Attach to agent",
        "cli.c2c": "Stop one agent",
        "cli.c2d": "Stop all agents",
        "cli.cat3": "Model Options",
        "cli.c3a": "Select provider",
        "cli.c3b": "Select model",
        "cli.c3c": "off/minimal/low/medium/high",
        "cli.c3d": "Switch models interactively",
        "cli.cat4": "Autonomous",
        "cli.c4a": "Enable autonomous mode",
        "cli.c4b": "Quality gate command",
        "cli.c4c": "Turn limit",
        "cli.c4d": "Toggle interactively",

        // Korean Resources
        "kr.tag": "한국어 리소스",
        "kr.title": "Korean Resources",
        "kr.desc": "Prime Agent를 한국어로 더 깊이 알아볼 수 있는 추가 자료입니다.",
        "kr.notebook": "Prime Agent 한국어 인터랙티브 노트북",
        "kr.notebookDesc": "NotebookLM에서 제공되는 한국어 프라임 에이전트 인터랙티브 가이드입니다. 아키텍처, RLM 프로그래밍 모델, 핵심 개념을 한국어로 학습하세요.",
        "kr.open": "Open NotebookLM →",

        // Footer
        "footer.tagline": "RLM-Native Terminal Coding & Research Harness",
        "footer.col1": "Resources",
        "footer.col2": "Documentation",
        "footer.col3": "Prime Intellect",
        "footer.license": "MIT Licensed · Forked from pi-mono by Mario Zechner",
        "footer.guide": "This is an unofficial community guide. Prime Agent™ is a product of Prime Intellect.",

        // Architecture details
        "arch.client.title": "Client (TUI / CLI)",
        "arch.client.desc": "The client owns rendering, keyboard input, and local UI preferences — it does not own execution. Types include Interactive TUI, print mode, JSON event stream, and RPC mode.",
        "arch.supervisor.title": "Daemon Supervisor",
        "arch.supervisor.desc": "A detached process that owns public sockets, client attachments, routing, global agent-message delivery, worker health, command journals, and coordinated updates. It does not execute providers, tools, compaction, bash, kernels, or schedules.",
        "arch.catalog.title": "Catalog Process",
        "arch.catalog.desc": "A subprocess that owns saved-session scans and inactive-session file operations. A catalog failure can fail a catalog request without interrupting active workers.",
        "arch.worker.title": "Session Worker",
        "arch.worker.desc": "Each worker owns one root AgentSessionRuntime, its root AgentSession, scheduler, kernels, and every RLM descendant below that root. Workers are separate processes for lifecycle and failure containment.",
        "arch.providers.title": "Model Providers",
        "arch.providers.desc": "Prime Agent maintains a list of tool-capable models for each built-in provider, updated with every release. Supports subscription and API-key authentication across 30+ providers.",
        "arch.session.title": "AgentSession",
        "arch.session.desc": "The core agent runtime. Owns provider calls, queues, tools, compaction, goals, child lifecycles, and transcript writes. Handles RLM policy, child creation, registry, usage attribution, and cancellation.",
        "arch.kernel.title": "IPython Kernel",
        "arch.kernel.desc": "The model-facing control environment. Uses the Jupyter protocol over ZeroMQ with three channels: shell (execution), iopub (output), and control (interrupt/shutdown/host replies). Python state persists across tool calls and compaction.",
        "arch.storage.title": "Session Storage",
        "arch.storage.desc": "Sessions auto-save as flat JSONL files under ~/.prime/agent/sessions/. Each session has a tree structure. Feature-specific state is stored under session-artifacts/.",
        "arch.children.title": "RLM Child Agents",
        "arch.children.desc": "Independent child sessions created via rlm() calls. Each child gets its own AgentSession, optional kernel, and session directory. Children inherit the parent model and capabilities. Default max depth is 1 (root → children only).",
    },

    ko: {
        // Nav
        "nav.what": "소개",
        "nav.start": "시작하기",
        "nav.concepts": "핵심 개념",
        "nav.architecture": "아키텍처",
        "nav.rlm": "RLM 모델",
        "nav.skills": "스킬 & 확장",
        "nav.sessions": "세션",
        "nav.providers": "프로바이더",

        // Hero
        "hero.subtitle": "지속적인 IPython 커널, 재귀적 서브에이전트, 멀티프로세스 로컬 런타임을 기반으로 구축된 RLM 네이티브 터미널 코딩 및 리서치 하네스입니다.",
        "hero.cta1": "시작하기",
        "hero.cta2": "GitHub에서 보기",
        "hero.stat1": "내장 도구",
        "hero.stat2": "프로바이더",
        "hero.stat3": "세션 제한",
        "hero.stat4": "오픈소스",
        "hero.scroll": "스크롤하여 탐색",
        "hero.notebook": "NotebookLM 한국어 가이드",
        "hero.notebookDesc": "Prime Agent 한국어 가이드 — NotebookLM 인터랙티브 노트북",

        // What is
        "what.tag": "개요",
        "what.title": "Prime Agent란?",
        "what.desc": "Prime Agent는 터미널 기반 AI 코딩 및 리서치 하네스로, 근본적으로 다른 접근 방식을 취합니다. 모델에게 수십 개의 개별 도구를 주는 대신, 하나의 지속적인 IPython 커널을 제공하고 모든 것을 코드로 구성할 수 있게 합니다.",
        "what.f1.title": "싱글 툴 디자인",
        "what.f1.desc": "단 하나의 내장 도구인 ipython이 수십 개의 전문화된 도구를 대체합니다. 모델은 지속적인 Python 커널을 통해 파일 읽기, 명령 실행, 코드 편집, 작업 위임을 모두 수행합니다.",
        "what.f2.title": "재귀적 언어 모델",
        "what.f2.desc": "모델은 rlm() 호출을 통해 자식 에이전트를 네이티브로 생성할 수 있습니다. 각 자식은 새로운 컨텍스트를 받고, 기능을 상속하며, 독립적으로 실행됩니다 — 진정한 병렬 작업이 가능합니다.",
        "what.f3.title": "지속적 상태",
        "what.f3.desc": "Python 상태는 턴과 컴팩션을 넘어 유지됩니다. 변수, 임포트, 함수, 파싱된 데이터가 계속 사용 가능합니다. 세션은 트리 구조의 JSONL 파일로 저장됩니다.",
        "what.f4.title": "멀티프로세스 런타임",
        "what.f4.desc": "데몬 기반 아키텍처가 각 세션을 별도 프로세스에 격리합니다. 터미널을 닫아도 워커는 계속 실행됩니다. 크래시 복구가 내장되어 있습니다.",
        "what.f5.title": "확장 가능한 스킬",
        "what.f5.desc": "Agent Skills(마크다운 또는 Python 기반)를 통해 기능을 추가합니다. MCP 통합, 확장, 테마, 패키지가 도구 표면을 부풀리지 않으면서 풍부한 생태계를 만듭니다.",
        "what.f6.title": "장기 세션 설계",
        "what.f6.desc": "하트비트, 예약된 프롬프트, 지속적 목표, 자율 모드, 자동 컴팩션이 Prime Agent를 장기 실행, 다단계 작업에 이상적으로 만듭니다.",

        // Quick Start
        "start.tag": "시작하기",
        "start.title": "퀵 스타트",
        "start.desc": "1분 안에 Prime Agent 세션을 시작하세요.",
        "start.s1.title": "설치",
        "start.s1.desc": "Linux 또는 macOS에서 한 번의 명령으로 설치:",
        "start.s2.title": "인증",
        "start.s2.desc": "구독을 사용하거나 API 키를 설정하세요:",
        "start.s3.title": "작업 시작",
        "start.s3.desc": "프로젝트에서 실행하고 대화를 시작하세요:",
        "start.copy": "복사",
        "start.tip": "Python 커널 런타임은 첫 호출 시 자동으로 설정됩니다. PRIME_AGENT_KERNEL_PYTHON을 설정하여 ipykernel이 있는 기존 Python 환경을 사용할 수 있습니다.",

        // Concepts
        "concepts.tag": "기본 개념",
        "concepts.title": "핵심 개념",
        "concepts.desc": "Prime Agent를 다른 모든 코딩 에이전트와 차별화하는 네 가지 기본 아이디어.",
        "concepts.tab1": "싱글 툴 디자인",
        "concepts.tab2": "재귀적 에이전트",
        "concepts.tab3": "지속적 상태",
        "concepts.tab4": "프로그래밍 스킬",
        "concepts.c1.h": "실행은 프로그래밍 방식입니다",
        "concepts.c1.p1": "Prime Agent의 기본 런타임은 하나의 내장 모델 도구를 노출합니다: ipython. 파일 읽기, 코드 편집, 명령 실행, 데이터 변환, 스킬 호출, 작업 위임이 모두 지속적 커널에서 시작됩니다 — 수십 개의 개별 도구 호출이 아닙니다.",
        "concepts.c1.p2": "이는 모델이 도구 간 전환에 컨텍스트를 낭비하지 않음을 의미합니다. 모든 것이 Python입니다. 모델은 환경을 검사하고, 헬퍼 함수를 구축하고, 작업을 구성하며, 작업 상태를 유지할 수 있습니다 — 개발자가 노트북에서 하듯이요.",
        "concepts.c2.h": "서브에이전트는 네이티브 RLM 호출입니다",
        "concepts.c2.p1": "호출 가능한 rlm 객체가 커널에 사전 로드됩니다. 직접 Python 호출로 자식 에이전트를 생성하세요. 작업 승인 직후 반환됩니다 — 자식의 답변을 반환하지 않습니다.",
        "concepts.c2.p2": "TypeScript 호스트는 독립적인 컨텍스트와 세션 디렉토리를 가진 정상적인 자식 AgentSession을 생성합니다. 자식은 부모의 모델, 프로바이더, 스킬, 도구, 재시도 정책을 상속합니다.",
        "concepts.c2.note": "부모는 자체 컨텍스트를 집중되게 유지하면서 자식은 하위 작업에 필요한 컨텍스트만 받습니다. 이것은 진정한 병렬 팬아웃입니다 — 순차적 도구 호출이 아닙니다.",
        "concepts.c3.h": "상태는 하나의 턴보다 오래 지속되도록 설계됨",
        "concepts.c3.p1": "RLM 프로그래밍 모델은 유용한 작업이 여러 턴이 걸리거나 터미널 UI가 닫힌 후에도 계속될 수 있다고 가정합니다:",
        "concepts.c3.l1": "자동 컴팩션이 최근 메시지와 커널 상태를 보존하면서 오래된 컨텍스트 요약",
        "concepts.c3.l2": "데몬 기반 워커가 클라이언트 분리 후에도 세션 실행 유지",
        "concepts.c3.l3": "자식 레지스트리와 세션 아티팩트로 서브에이전트 복구 가능",
        "concepts.c3.l4": "하트비트와 예약된 프롬프트로 세션 재진입",
        "concepts.c3.l5": "지속적 목표가 완료될 때까지 계속 유지",
        "concepts.c3.l6": "자율 모드가 품질 게이트와 함께 경계가 있는 연속 실행 추가",
        "concepts.c4.h": "스킬은 프로그래밍 기능을 추가합니다",
        "concepts.c4.p1": "Prime Agent는 Agent Skills 마크다운 형식을 지원하고 Python 기반 스킬로 확장합니다. 시작 프롬프트에는 스킬 메타데이터만 들어갑니다 — 전체 SKILL.md는 작업이 일치할 때 온디맨드로 로드됩니다.",
        "concepts.c4.p2": "Python 기반 스킬은 커널 환경에 패키지를 설치하므로, 모델이 직접 임포트하고 호출할 수 있습니다 — Python 기반 스킬은 지침 전용 스킬의 상위 집합입니다.",

        // Architecture
        "arch.tag": "심층 분석",
        "arch.title": "아키텍처",
        "arch.desc": "Prime Agent는 터미널 프레젠테이션, 프로세스 조정, 에이전트 실행, 모델 대면 Python, 영속 상태를 분리합니다. 각 레이어를 클릭하여 탐색하세요.",
        "arch.click": "위의 컴포넌트를 클릭하여 자세히 알아보세요",
        "arch.clickDesc": "Prime Agent의 각 레이어에는 명확한 소유권 경계가 있습니다. 클라이언트는 렌더링을, 감독자는 라우팅을, 워커는 세션을, IPython은 모델의 제어 환경을 소유합니다.",

        // RLM
        "rlm.tag": "핵심 혁신",
        "rlm.title": "RLM 프로그래밍 모델",
        "rlm.desc": "재귀적 언어 모델(RLM)은 Prime Agent의 핵심 프로그래밍 모델입니다. 모델은 지속적인 Python 환경 내에서 작업하며 기능을 코드로 구성합니다.",
        "rlm.loop1": "부모 모델",
        "rlm.loop1d": "작업 + 작업 컨텍스트 수신",
        "rlm.loop2": "검사 & 변환",
        "rlm.loop2d": "파일 · 데이터 · 셸 명령",
        "rlm.loop3": "자식 생성",
        "rlm.loop3d": "집중 작업을 위한 rlm() 호출",
        "rlm.loop4": "답변 구성",
        "rlm.loop4d": "결과 종합 + 계속",
        "rlm.bridge.title": "호스트 브리지",
        "rlm.bridge.desc": "Python 스킬은 권위 있는 상태가 커널 외부에 속하는 기능에 대해 타입화된 호스트 요청을 사용합니다. 프로바이더 호출, 세션 영속성, 자식 라이프사이클, 스케줄링, 안전 정책은 TypeScript 호스트에 남아 있습니다. IPython은 순수하게 모델 대면 프로그래밍 표면입니다.",
        "rlm.bridge.p1": "rlm() — 자식 에이전트 생성",
        "rlm.bridge.p2": "goal — 목표 생성/완료",
        "rlm.bridge.p3": "agent_message — 패밀리 메시징",
        "rlm.bridge.p4": "compact — 컨텍스트 관리",
        "rlm.bridge.p5": "작업 상태 & 변수",
        "rlm.bridge.t1": "프로바이더 호출 & 스트리밍",
        "rlm.bridge.t2": "세션 영속성 (JSONL)",
        "rlm.bridge.t3": "자식 라이프사이클 & 깊이 제한",
        "rlm.bridge.t4": "사용량 & 비용 귀속",
        "rlm.bridge.t5": "자격 증명 관리",
        "rlm.del.title": "위임 흐름",
        "rlm.del.desc": "모델이 await rlm(\"subtask\")로 작업을 위임할 때, 호출은 Jupyter comm 타겟을 통해 TypeScript 호스트로 이동하며, 실제 자식 AgentSession을 생성합니다.",
        "rlm.del.s1": "모델이 IPython에서 rlm(\"subtask\") 호출",
        "rlm.del.s2": "Python 심이 Jupyter comm으로 host.request 전송",
        "rlm.del.s3": "AgentSession이 깊이 확인, 모델 해결, 자식 승인",
        "rlm.del.s4": "스폰 핸들을 즉시 반환 — 답변은 반환하지 않음",
        "rlm.del.s5": "자식이 독립적으로 실행, agent_message로 응답",

        // Skills
        "skills.tag": "확장성",
        "skills.title": "스킬, 확장 & MCP",
        "skills.desc": "Prime Agent의 확장 모델은 도구 표면을 최소로 유지하면서 스킬, 확장, MCP 통합을 통해 무한한 기능을 가능하게 합니다.",
        "skills.s1.title": "Agent Skills",
        "skills.s1.desc": "Agent Skills 표준을 따르는 자체 완비형 기능 패키지. 각 스킬은 온디맨드 지침, 설정 단계, 참조 문서가 있는 SKILL.md를 제공합니다.",
        "skills.s2.title": "Python 기반 스킬",
        "skills.s2.desc": "마크다운 스킬의 상위 집합으로, 커널에 설치된 Python 패키지가 있습니다. 모델이 문서화된 함수를 직접 임포트하고 호출할 수 있습니다.",
        "skills.s3.title": "확장 (Extensions)",
        "skills.s3.desc": "커스텀 도구, 명령, 키보드 단축키, 이벤트 핸들러, UI 컴포넌트, 권한 게이트, 커스텀 컴팩션 등을 추가하는 TypeScript 모듈입니다.",
        "skills.s4.title": "MCP 통합",
        "skills.s4.desc": "Model Context Protocol을 통해 외부 서비스(Linear, Notion 등)를 연결합니다. 각 통합은 Python 스킬입니다 — 새로운 모델 도구가 아닙니다.",
        "skills.loc.title": "스킬 발견 위치",

        // Sessions
        "sessions.tag": "영속성",
        "sessions.title": "세션 & 브랜칭",
        "sessions.desc": "Prime Agent는 대화를 트리 구조의 JSONL 파일로 저장하며, 인플레이스 브랜칭, 컴팩션, 복구를 지원합니다.",
        "sessions.f1.title": "트리 구조 세션",
        "sessions.f1.desc": "모든 항목은 id와 parentId를 가집니다. 이전 시점으로 이동하고 거기서부터 계속하며, 브랜치 간 전환하세요 — 모두 하나의 파일에서. 데이터 손실이 없습니다.",
        "sessions.f2.title": "컨텍스트 컴팩션",
        "sessions.f2.desc": "대화가 너무 길어지면, 컴팩션이 최근 작업을 보존하면서 오래된 메시지를 요약합니다. 커널 상태는 컴팩션을 통해 유지됩니다.",
        "sessions.f3.title": "세션 명령",
        "sessions.f3.desc": "작업 관리를 위한 강력한 슬래시 명령:",
        "sessions.legend1": "요약됨",
        "sessions.legend2": "요약",
        "sessions.legend3": "유지됨",
        "sessions.cmd1": "세션 트리 탐색",
        "sessions.cmd2": "어느 시점에서든 브랜치",
        "sessions.cmd3": "활성 브랜치 복제",
        "sessions.cmd4": "오래된 컨텍스트 요약",
        "sessions.cmd5": "과거 세션 탐색",
        "sessions.cmd6": "gist로 업로드",

        // Long-Running
        "long.tag": "자율 작업",
        "long.title": "장기 실행 에이전트",
        "long.desc": "Prime Agent는 데몬 기반 워커와 영속 상태, 예약된 프롬프트, 직접 메시징, 목표, 경계가 있는 자율 연속 실행을 결합합니다.",
        "long.f1.title": "데몬 기반 워커",
        "long.f1.desc": "터미널을 닫으면 클라이언트가 분리됩니다 — 워커는 멈추지 않습니다. 세션이 계속 실행됩니다. prime-agent attach로 언제든 재연결하세요.",
        "long.f2.title": "하트비트",
        "long.f2.desc": "스케줄에 따라 세션에 재진입하는 반복 지침. 사용자 소유 /heartbeat 또는 에이전트 관리 rlm_heartbeat.",
        "long.f3.title": "지속적 목표",
        "long.f3.desc": "완료될 때까지 턴에 걸쳐 지속되는 내구성 있는 목표. 토큰 사용량, 경과 시간, 연속 횟수를 추적합니다.",
        "long.f4.title": "자율 모드",
        "long.f4.desc": "무인 실행을 위한 경계가 있는 호스트 정책. 품질 게이트가 통과되거나 제한(턴, 토큰, 시간)에 도달할 때까지 계속됩니다.",
        "long.f5.title": "에이전트 메시징",
        "long.f5.desc": "데몬이 활성 세션 간에 메시지를 라우팅합니다. CLI에서: prime-agent send, 또는 커널에서: agent_message.send().",
        "long.f6.title": "예약된 프롬프트",
        "long.f6.desc": "모든 에이전트에 대한 일회성 또는 cron 기반 프롬프트. 세션별로 영속화되고, 분리된 동안 계속됩니다. prime-agent schedule.",

        // Providers
        "prov.tag": "연결성",
        "prov.title": "프로바이더 & 모델",
        "prov.desc": "Prime Agent는 구독 로그인 또는 API 키를 통해 30개 이상의 프로바이더를 지원합니다. 지원되는 모든 프로바이더의 모든 모델을 사용할 수 있습니다.",
        "prov.sub": "구독",
        "prov.api": "API 키",

        // CLI
        "cli.tag": "참조",
        "cli.title": "CLI 빠른 참조",
        "cli.desc": "Prime Agent 작업을 위한 필수 명령.",
        "cli.cat1": "세션 관리",
        "cli.c1a": "인터랙티브 세션 시작",
        "cli.c1b": "가장 최근 세션 계속",
        "cli.c1c": "세션 재개 또는 탐색",
        "cli.c1d": "출력 모드 (일회성)",
        "cli.cat2": "에이전트 제어",
        "cli.c2a": "활성 에이전트 목록",
        "cli.c2b": "에이전트에 연결",
        "cli.c2c": "에이전트 중지",
        "cli.c2d": "모든 에이전트 중지",
        "cli.cat3": "모델 옵션",
        "cli.c3a": "프로바이더 선택",
        "cli.c3b": "모델 선택",
        "cli.c3c": "off/minimal/low/medium/high",
        "cli.c3d": "대화형으로 모델 전환",
        "cli.cat4": "자율",
        "cli.c4a": "자율 모드 활성화",
        "cli.c4b": "품질 게이트 명령",
        "cli.c4c": "턴 제한",
        "cli.c4d": "대화형으로 토글",

        // Korean Resources
        "kr.tag": "한국어 리소스",
        "kr.title": "한국어 자료",
        "kr.desc": "Prime Agent를 한국어로 더 깊이 알아볼 수 있는 추가 자료입니다.",
        "kr.notebook": "Prime Agent 한국어 인터랙티브 노트북",
        "kr.notebookDesc": "NotebookLM에서 제공되는 한국어 프라임 에이전트 인터랙티브 가이드입니다. 아키텍처, RLM 프로그래밍 모델, 핵심 개념을 한국어로 학습하세요.",
        "kr.open": "NotebookLM 열기 →",

        // Footer
        "footer.tagline": "RLM 네이티브 터미널 코딩 & 리서치 하네스",
        "footer.col1": "리소스",
        "footer.col2": "문서",
        "footer.col3": "Prime Intellect",
        "footer.license": "MIT 라이선스 · pi-mono(Mario Zechner)에서 포크",
        "footer.guide": "이것은 비공식 커뮤니티 가이드입니다. Prime Agent™는 Prime Intellect의 제품입니다.",

        // Architecture details
        "arch.client.title": "클라이언트 (TUI / CLI)",
        "arch.client.desc": "클라이언트는 렌더링, 키보드 입력, 로컬 UI 환경설정을 소유합니다 — 실행은 소유하지 않습니다. 종류로는 인터랙티브 TUI, 출력 모드, JSON 이벤트 스트림, RPC 모드가 있습니다.",
        "arch.supervisor.title": "데몬 감독자",
        "arch.supervisor.desc": "공용 소켓, 클라이언트 연결, 라우팅, 글로벌 에이전트 메시지 전달, 워커 건강 상태, 명령 저널, 조정된 업데이트를 소유하는 분리된 프로세스입니다. 프로바이더, 도구, 컴팩션, bash, 커널, 스케줄을 실행하지 않습니다.",
        "arch.catalog.title": "카탈로그 프로세스",
        "arch.catalog.desc": "저장된 세션 스캔과 비활성 세션 파일 작업을 소유하는 하위 프로세스입니다. 카탈로그 실패는 활성 워커를 중단하지 않고 카탈로그 요청만 실패시킬 수 있습니다.",
        "arch.worker.title": "세션 워커",
        "arch.worker.desc": "각 워커는 하나의 루트 AgentSessionRuntime과 루트 AgentSession, 스케줄러, 커널, 그리고 그 루트 아래의 모든 RLM 후손을 소유합니다. 워커는 라이프사이클과 장애 격리를 위한 별도 프로세스입니다.",
        "arch.providers.title": "모델 프로바이더",
        "arch.providers.desc": "Prime Agent는 각 내장 프로바이더에 대해 도구 지원 모델 목록을 유지하며, 매 릴리스마다 업데이트됩니다. 30개 이상의 프로바이더에서 구독 및 API 키 인증을 지원합니다.",
        "arch.session.title": "AgentSession",
        "arch.session.desc": "핵심 에이전트 런타임. 프로바이더 호출, 큐, 도구, 컴팩션, 목표, 자식 라이프사이클, 트랜스크립트 작성을 소유합니다. RLM 정책, 자식 생성, 레지스트리, 사용량 귀속, 취소를 처리합니다.",
        "arch.kernel.title": "IPython 커널",
        "arch.kernel.desc": "모델 대면 제어 환경. Jupyter 프로토콜을 ZeroMQ를 통해 사용하며 세 개의 채널이 있습니다: shell (실행), iopub (출력), control (인터럽트/종료/호스트 응답). Python 상태는 도구 호출과 컴팩션을 넘어 지속됩니다.",
        "arch.storage.title": "세션 저장소",
        "arch.storage.desc": "세션은 ~/.prime/agent/sessions/ 아래에 플랫 JSONL 파일로 자동 저장됩니다. 각 세션은 트리 구조를 가집니다. 기능별 상태는 session-artifacts/ 아래에 저장됩니다.",
        "arch.children.title": "RLM 자식 에이전트",
        "arch.children.desc": "rlm() 호출로 생성된 독립적인 자식 세션. 각 자식은 자신의 AgentSession, 선택적 커널, 세션 디렉토리를 가집니다. 자식은 부모 모델과 기능을 상속합니다. 기본 최대 깊이는 1(루트 → 자식만)입니다.",
    }
};


// ============================================
// Technical Term Tooltips (EN / KO)
// ============================================
translations.tooltips = {
    IPython: {
        en: "An interactive Python shell. Prime Agent uses it as a persistent kernel — a long-running Python process where variables, imports, and functions survive across multiple turns.",
        ko: "대화형 Python 셸. Prime Agent는 이를 지속적 커널로 사용합니다 — 변수, 임포트, 함수가 여러 턴에 걸쳐 살아있는 장기 실행 Python 프로세스입니다."
    },
    kernel: {
        en: "A background process that executes code. In Prime Agent, the IPython kernel is the model's control environment — it stays alive across turns, preserving all Python state (variables, functions, data).",
        ko: "코드를 실행하는 백그라운드 프로세스. Prime Agent에서 IPython 커널은 모델의 제어 환경입니다 — 모든 Python 상태(변수, 함수, 데이터)를 보존하며 턴에 걸쳐 살아있습니다."
    },
    "persistent kernel": {
        en: "A kernel process that stays alive across multiple model turns. Variables, imports, and function definitions from one turn remain available in all subsequent turns — like a living Jupyter notebook session, not a stateless tool that resets after each call.",
        ko: "여러 모델 턴에 걸쳐 살아있는 커널 프로세스. 한 턴에서 정의한 변수, 임포트, 함수 정의가 이후 모든 턴에서 그대로 사용 가능합니다 — 호출 후 재설정되는 무상태 도구가 아닌, 살아있는 주피터 노트북 세션과 같습니다."
    },
    persistent: {
        en: "State that survives across turns. A persistent kernel keeps variables, imports, and function definitions available on every subsequent turn — unlike stateless tools that reset after each call.",
        ko: "턴에 걸쳐 유지되는 상태. 지속적 커널은 변수, 임포트, 함수 정의를 이후 모든 턴에서 사용 가능하게 유지합니다 — 각 호출 후 재설정되는 무상태 도구와 다릅니다."
    },
    RLM: {
        en: "Recursive Language Model. Prime Agent's core programming model where the LLM works inside a persistent Python environment and spawns child agents as native function calls (rlm()), enabling recursive delegation.",
        ko: "재귀적 언어 모델. Prime Agent의 핵심 프로그래밍 모델로, LLM이 지속적 Python 환경 내에서 작업하며 자식 에이전트를 네이티브 함수 호출(rlm())로 생성하여 재귀적 위임을 가능하게 합니다."
    },
    compaction: {
        en: "Summarizing older conversation messages to free up context window space, while keeping recent messages intact. The kernel's Python state persists through compaction — only the text conversation is summarized.",
        ko: "컨텍스트 창 공간을 확보하기 위해 오래된 대화 메시지를 요약하면서 최근 메시지는 그대로 유지하는 것. 커널의 Python 상태는 컴팩션을 통해 유지됩니다 — 텍스트 대화만 요약됩니다."
    },
    AgentSession: {
        en: "The TypeScript object that owns the agent loop — provider calls, tool execution, prompt queueing, compaction, child lifecycle, and transcript writes. Each agent (parent or child) has one.",
        ko: "에이전트 루프를 소유하는 TypeScript 객체 — 프로바이더 호출, 도구 실행, 프롬프트 큐잉, 컴팩션, 자식 라이프사이클, 트랜스크립트 작성. 각 에이전트마다 하나씩 있습니다."
    },
    JSONL: {
        en: "JSON Lines format — one JSON object per line. Prime Agent stores sessions as JSONL files, where each line is a message entry with an id and parentId for tree-structured branching.",
        ko: "JSON Lines 형식 — 한 줄에 하나의 JSON 객체. Prime Agent는 세션을 JSONL 파일로 저장하며, 각 줄은 트리 구조 브랜칭을 위한 id와 parentId를 가진 메시지 항목입니다."
    },
    daemon: {
        en: "A background process that manages other processes. Prime Agent's daemon supervisor routes requests, monitors worker health, and handles crash recovery — all without user interaction.",
        ko: "다른 프로세스를 관리하는 백그라운드 프로세스. Prime Agent의 데몬 감독자는 요청을 라우팅하고, 워커 건강을 모니터링하며, 크래시 복구를 처리합니다 — 모두 사용자 개입 없이."
    },
    worker: {
        en: "A separate OS process that owns one root session tree — including the AgentSession, IPython kernel, scheduler, and all child agents. Process-isolated for failure containment.",
        ko: "하나의 루트 세션 트리를 소유하는 별도 OS 프로세스 — AgentSession, IPython 커널, 스케줄러, 모든 자식 에이전트 포함. 장애 격리를 위해 프로세스 격리됩니다."
    },
    ZeroMQ: {
        en: "A high-performance messaging library used for inter-process communication. Prime Agent uses it for the Jupyter protocol between the TypeScript host and the IPython kernel process.",
        ko: "프로세스 간 통신에 사용되는 고성능 메시징 라이브러리. Prime Agent는 TypeScript 호스트와 IPython 커널 프로세스 간의 Jupyter 프로토콜에 이를 사용합니다."
    },
    Jupyter: {
        en: "An open-source protocol and ecosystem for interactive computing. Prime Agent uses the Jupyter protocol (over ZeroMQ) to communicate with the IPython kernel via shell, iopub, and control channels.",
        ko: "대화형 컴퓨팅을 위한 오픈소스 프로토콜 및 생태계. Prime Agent는 Jupyter 프로토콜(ZeroMQ 기반)을 사용하여 IPython 커널과 shell, iopub, control 채널로 통신합니다."
    },
    MCP: {
        en: "Model Context Protocol — an open standard for connecting AI models to external tools and data sources. Prime Agent implements MCP as Python skills, not as new model tools.",
        ko: "모델 컨텍스트 프로토콜 — AI 모델을 외부 도구 및 데이터 소스에 연결하는 개방형 표준. Prime Agent는 MCP를 새로운 모델 도구가 아닌 Python 스킬로 구현합니다."
    },
    "context window": {
        en: "The maximum number of tokens a model can process in one request. Prime Agent manages this with automatic compaction when the conversation grows too long.",
        ko: "모델이 한 번의 요청에서 처리할 수 있는 최대 토큰 수. Prime Agent는 대화가 너무 길어지면 자동 컴팩션으로 이를 관리합니다."
    },
    TypeScript: {
        en: "A typed superset of JavaScript. Prime Agent's host runtime (AgentSession, kernel manager, daemon, session storage) is written in TypeScript, while the model works in Python.",
        ko: "JavaScript의 타입 지원 상위 집합. Prime Agent의 호스트 런타임(AgentSession, 커널 관리자, 데몬, 세션 저장소)은 TypeScript로 작성되며, 모델은 Python으로 작업합니다."
    },
    "host request": {
        en: "A typed message from the Python kernel to the TypeScript host via a Jupyter comm. Used for rlm() spawning, goal management, agent messaging — capabilities whose authoritative state lives in the host.",
        ko: "Jupyter comm을 통해 Python 커널에서 TypeScript 호스트로 보내는 타입화된 메시지. rlm() 생성, 목표 관리, 에이전트 메시징에 사용됩니다 — 권위 있는 상태가 호스트에 있는 기능들."
    },
    token: {
        en: "A unit of text that the model processes. Roughly 4 characters or 0.75 words in English. Prime Agent tracks token usage for cost attribution and context management.",
        ko: "모델이 처리하는 텍스트 단위. 영어에서 약 4자 또는 0.75단어. Prime Agent는 비용 귀속 및 컨텍스트 관리를 위해 토큰 사용량을 추적합니다."
    },
    subagent: {
        en: "A child agent created by a parent via rlm(). Gets its own AgentSession, independent context, and optional kernel. Inherits the parent's model and capabilities but runs independently.",
        ko: "부모가 rlm()을 통해 생성한 자식 에이전트. 자체 AgentSession, 독립적 컨텍스트, 선택적 커널을 가집니다. 부모의 모델과 기능을 상속하지만 독립적으로 실행됩니다."
    },
    heartbeat: {
        en: "A recurring instruction that re-enters a session on a schedule. User-owned (/heartbeat) or agent-managed (rlm_heartbeat). Keeps long-running tasks alive and responsive.",
        ko: "스케줄에 따라 세션에 재진입하는 반복 지침. 사용자 소유(/heartbeat) 또는 에이전트 관리(rlm_heartbeat). 장기 실행 작업을 살아있고 반응하게 유지합니다."
    },
    "autonomous mode": {
        en: "A host policy where Prime Agent continues working without human input until quality gates pass or limits (turns, tokens, wall-clock time) are reached.",
        ko: "Prime Agent가 품질 게이트가 통과되거나 제한(턴, 토큰, 경과 시간)에 도달할 때까지 사람 입력 없이 계속 작업하는 호스트 정책."
    },
    "session tree": {
        en: "The branching structure of a session. Every message has an id and parentId, so you can navigate to any point and branch from there without losing history.",
        ko: "세션의 분기 구조. 모든 메시지는 id와 parentId를 가지므로, 기록을 잝지 않고 어느 시점으로든 이동하여 분기할 수 있습니다."
    },
    skill: {
        en: "A self-contained capability package with a SKILL.md for discovery. Can be markdown-only (instructions) or Python-backed (callable functions installed in the kernel).",
        ko: "발견을 위한 SKILL.md가 있는 자체 완비형 기능 패키지. 마크다운 전용(지침) 또는 Python 기반(커널에 설치된 호출 가능 함수)일 수 있습니다."
    },
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = translations;
}
