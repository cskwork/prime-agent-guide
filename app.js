/* ============================================
   Prime Agent Guide — App Logic
   ============================================ */

(function() {
    'use strict';

    // ========================================
    // i18n: Language switching
    // ========================================
    function getLang() {
        return localStorage.getItem('pa-lang') || 'en';
    }

    function setLang(lang) {
        localStorage.setItem('pa-lang', lang);
        document.documentElement.lang = lang;
        applyTranslations(lang);
        updateLangButtons(lang);
    }

    function applyTranslations(lang) {
        const dict = (typeof translations !== 'undefined') ? translations[lang] : {};
        document.querySelectorAll('[data-i18n]').forEach(function(el) {
            const key = el.getAttribute('data-i18n');
            if (dict[key]) {
                var codeEls = el.querySelectorAll('code');
                if (codeEls.length > 0) {
                    // Element has <code> children. Preserve their text content
                    // and rebuild the translated string with <code> elements intact.
                    var codeTexts = Array.from(codeEls).map(function(c) { return c.textContent; });
                    var translated = dict[key];
                    // Build regex to split translated text by code values
                    var escaped = codeTexts.map(function(t) { return t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); });
                    var pattern = new RegExp('(' + escaped.join('|') + ')', 'g');
                    var parts = translated.split(pattern);

                    el.textContent = '';
                    parts.forEach(function(part) {
                        if (codeTexts.indexOf(part) !== -1) {
                            var code = document.createElement('code');
                            code.textContent = part;
                            el.appendChild(code);
                        } else if (part) {
                            el.appendChild(document.createTextNode(part));
                        }
                    });
                } else {
                    el.textContent = dict[key];
                }
            }
        });
    }

    function updateLangButtons(lang) {
        document.querySelectorAll('.lang-btn').forEach(function(btn) {
            btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
        });
    }

    // ========================================
    // Progress bar
    // ========================================
    function updateProgressBar() {
        const winHeight = window.innerHeight;
        const docHeight = document.documentElement.scrollHeight;
        const scrollTop = window.scrollY;
        const scrollPercent = (scrollTop / (docHeight - winHeight)) * 100;
        document.getElementById('progressBar').style.width = scrollPercent + '%';
    }

    // ========================================
    // Navbar scroll effect
    // ========================================
    function updateNavbar() {
        const navbar = document.getElementById('navbar');
        if (window.scrollY > 20) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }

    // ========================================
    // Reveal on scroll
    // ========================================
    function setupReveal() {
        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

        document.querySelectorAll('.reveal').forEach(function(el) {
            observer.observe(el);
        });
    }

    // ========================================
    // Hero canvas particle animation
    // ========================================
    function setupHeroCanvas() {
        const canvas = document.getElementById('heroCanvas');
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        let particles = [];
        let animationId = null;

        function resize() {
            canvas.width = canvas.offsetWidth;
            canvas.height = canvas.offsetHeight;
        }

        function createParticles() {
            particles = [];
            const count = Math.min(80, Math.floor(canvas.width * canvas.height / 12000));
            for (let i = 0; i < count; i++) {
                particles.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    vx: (Math.random() - 0.5) * 0.3,
                    vy: (Math.random() - 0.5) * 0.3,
                    size: Math.random() * 2 + 0.5,
                    color: Math.random() > 0.5 ? '6, 182, 212' : '139, 92, 246',
                    opacity: Math.random() * 0.5 + 0.1
                });
            }
        }

        function draw() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Draw connections
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < 130) {
                        const opacity = (1 - dist / 130) * 0.15;
                        ctx.strokeStyle = 'rgba(' + particles[i].color + ', ' + opacity + ')';
                        ctx.lineWidth = 0.5;
                        ctx.beginPath();
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.stroke();
                    }
                }
            }

            // Draw particles
            particles.forEach(function(p) {
                p.x += p.vx;
                p.y += p.vy;

                // Wrap around
                if (p.x < 0) p.x = canvas.width;
                if (p.x > canvas.width) p.x = 0;
                if (p.y < 0) p.y = canvas.height;
                if (p.y > canvas.height) p.y = 0;

                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fillStyle = 'rgba(' + p.color + ', ' + p.opacity + ')';
                ctx.fill();
            });

            animationId = requestAnimationFrame(draw);
        }

        resize();
        createParticles();
        draw();

        window.addEventListener('resize', function() {
            if (animationId) cancelAnimationFrame(animationId);
            resize();
            createParticles();
            draw();
        });
    }

    // ========================================
    // Code copy buttons
    // ========================================
    function setupCopyButtons() {
        document.querySelectorAll('.code-copy').forEach(function(btn) {
            btn.addEventListener('click', function() {
                const block = btn.closest('.code-block');
                if (!block) return;
                const code = block.querySelector('code');
                if (!code) return;

                const text = code.textContent;
                const originalText = btn.textContent;

                if (navigator.clipboard) {
                    navigator.clipboard.writeText(text).then(function() {
                        btn.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" width="14" height="14" style="display:inline;vertical-align:middle"><polyline points="20 6 9 17 4 12"/></svg>';
                        btn.classList.add('copied');
                        setTimeout(function() {
                            btn.textContent = originalText;
                            btn.classList.remove('copied');
                        }, 2000);
                    });
                } else {
                    // Fallback
                    const textarea = document.createElement('textarea');
                    textarea.value = text;
                    document.body.appendChild(textarea);
                    textarea.select();
                    document.execCommand('copy');
                    document.body.removeChild(textarea);
                    btn.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" width="14" height="14" style="display:inline;vertical-align:middle"><polyline points="20 6 9 17 4 12"/></svg>';
                    btn.classList.add('copied');
                    setTimeout(function() {
                        btn.textContent = originalText;
                        btn.classList.remove('copied');
                    }, 2000);
                }
            });
        });
    }

    // ========================================
    // Tab switching
    // ========================================
    function setupTabs() {
        document.querySelectorAll('.tab-btn').forEach(function(btn) {
            btn.addEventListener('click', function() {
                const tabId = btn.getAttribute('data-tab');
                const container = btn.closest('.tab-container');

                container.querySelectorAll('.tab-btn').forEach(function(b) {
                    b.classList.remove('active');
                });
                container.querySelectorAll('.tab-content').forEach(function(c) {
                    c.classList.remove('active');
                });

                btn.classList.add('active');
                const content = container.querySelector('#' + tabId);
                if (content) content.classList.add('active');
            });
        });

        // Provider tabs
        document.querySelectorAll('.prov-tab').forEach(function(btn) {
            btn.addEventListener('click', function() {
                const tabId = 'prov-' + btn.getAttribute('data-prov-tab');

                document.querySelectorAll('.prov-tab').forEach(function(b) {
                    b.classList.remove('active');
                });
                document.querySelectorAll('.prov-content').forEach(function(c) {
                    c.classList.remove('active');
                });

                btn.classList.add('active');
                const content = document.getElementById(tabId);
                if (content) content.classList.add('active');
            });
        });
    }

    // ========================================
    // Architecture interactive
    // ========================================
    function setupArchitecture() {
        const nodes = document.querySelectorAll('.arch-node[data-node]');
        const titleEl = document.getElementById('archDetailTitle');
        const contentEl = document.getElementById('archDetailContent');

        if (!nodes.length || !titleEl || !contentEl) return;

        const lang = getLang();

        const details = {
            client: {
                title: { en: 'Client (TUI / CLI)', ko: '클라이언트 (TUI / CLI)' },
                desc: {
                    en: 'The client owns rendering, keyboard input, and local UI preferences — it does not own execution.<br><br>Types include:<ul><li>Interactive TUI — full terminal interface</li><li>Print mode — one-shot output</li><li>JSON event stream — structured output</li><li>RPC mode — process integration over stdin/stdout</li></ul>Closing the TUI detaches the client; the worker continues running.',
                    ko: '클라이언트는 렌더링, 키보드 입력, 로컬 UI 환경설정을 소유합니다 — 실행은 소유하지 않습니다.<br><br>종류:<ul><li>인터랙티브 TUI — 전체 터미널 인터페이스</li><li>출력 모드 — 일회성 출력</li><li>JSON 이벤트 스트림 — 구조화된 출력</li><li>RPC 모드 — stdin/stdout을 통한 프로세스 통합</li></ul>TUI를 닫으면 클라이언트가 분리되지만 워커는 계속 실행됩니다.'
                }
            },
            supervisor: {
                title: { en: 'Daemon Supervisor', ko: '데몬 감독자' },
                desc: {
                    en: 'A detached process that owns:<ul><li>Public sockets and client attachments</li><li>Routing between clients and workers</li><li>Global agent-message delivery</li><li>Worker health monitoring and recovery</li><li>Command journals for idempotency</li><li>Coordinated updates</li></ul><strong>It does not execute providers, tools, compaction, bash, kernels, or schedules.</strong> If the supervisor disappears, a worker acquires an atomic launch lease and starts a replacement.',
                    ko: '다음을 소유하는 분리된 프로세스:<ul><li>공용 소켓 및 클라이언트 연결</li><li>클라이언트와 워커 간 라우팅</li><li>글로벌 에이전트 메시지 전달</li><li>워커 건강 모니터링 및 복구</li><li>멱등성을 위한 명령 저널</li><li>조정된 업데이트</li></ul><strong>프로바이더, 도구, 컴팩션, bash, 커널, 스케줄을 실행하지 않습니다.</strong> 감독자가 사라지면 워커가 원자적 시작 임대를 획득하여 대체 감독자를 시작합니다.'
                }
            },
            catalog: {
                title: { en: 'Catalog Process', ko: '카탈로그 프로세스' },
                desc: {
                    en: 'A subprocess dedicated to saved-session scans and inactive-session file operations.<br><br>Key properties:<ul><li>Owns all JSONL transcript scans</li><li>A catalog failure fails only the catalog request</li><li>Active workers are never interrupted by catalog issues</li><li>Supports session search, listing, and metadata operations</li></ul>This separation keeps heavy file I/O off the supervisor\'s critical path.',
                    ko: '저장된 세션 스캔과 비활성 세션 파일 작업에 전용되는 하위 프로세스입니다.<br><br>주요 속성:<ul><li>모든 JSONL 트랜스크립트 스캔 소유</li><li>카탈로그 실패는 카탈로그 요청만 실패</li><li>활성 워커는 카탈로그 문제로 중단되지 않음</li><li>세션 검색, 목록, 메타데이터 작업 지원</li></ul>이 분리는 무거운 파일 I/O를 감독자의 중요 경로에서 벗어나게 합니다.'
                }
            },
            worker: {
                title: { en: 'Session Worker', ko: '세션 워커' },
                desc: {
                    en: 'Each worker is a separate process that owns:<ul><li>One root AgentSessionRuntime</li><li>The root AgentSession and its scheduler</li><li>The root IPython kernel</li><li>All RLM descendant sessions below that root</li></ul><strong>Workers are process-isolated for lifecycle and failure containment, not security.</strong> They run with the same OS permissions as the client. A worker crash affects only one root tree. Recovery retries at 250ms, 1s, and 5s.',
                    ko: '각 워커는 다음을 소유하는 별도 프로세스입니다:<ul><li>하나의 루트 AgentSessionRuntime</li><li>루트 AgentSession과 스케줄러</li><li>루트 IPython 커널</li><li>해당 루트 아래의 모든 RLM 후손 세션</li></ul><strong>워커는 라이프사이클과 장애 격리를 위해 프로세스 격리됩니다 — 보안이 아닙니다.</strong> 클라이언트와 동일한 OS 권한으로 실행됩니다. 워커 크래시는 하나의 루트 트리에만 영향을 미칩니다. 복구는 250ms, 1초, 5초에 재시도됩니다.'
                }
            },
            providers: {
                title: { en: 'Model Providers', ko: '모델 프로바이더' },
                desc: {
                    en: 'Prime Agent maintains a list of tool-capable models for each built-in provider, updated with every release.<br><br><strong>Subscriptions:</strong> Claude Pro/Max, ChatGPT Plus/Pro (Codex), GitHub Copilot<br><br><strong>API Keys:</strong> Anthropic, OpenAI, Prime Inference, Azure OpenAI, DeepSeek, Google Gemini/Vertex, Amazon Bedrock, Mistral, Groq, Cerebras, xAI, OpenRouter, and 15+ more.<br><br>Use <code>/model</code> or Ctrl+L to switch models. Add custom providers via <code>~/.prime/agent/models.json</code>.',
                    ko: 'Prime Agent는 각 내장 프로바이더에 대해 도구 지원 모델 목록을 유지하며, 매 릴리스마다 업데이트됩니다.<br><br><strong>구독:</strong> Claude Pro/Max, ChatGPT Plus/Pro (Codex), GitHub Copilot<br><br><strong>API 키:</strong> Anthropic, OpenAI, Prime Inference, Azure OpenAI, DeepSeek, Google Gemini/Vertex, Amazon Bedrock, Mistral, Groq, Cerebras, xAI, OpenRouter 및 15개 이상.<br><br><code>/model</code> 또는 Ctrl+L로 모델을 전환하세요. <code>~/.prime/agent/models.json</code>으로 커스텀 프로바이더를 추가할 수 있습니다.'
                }
            },
            session: {
                title: { en: 'AgentSession', ko: 'AgentSession' },
                desc: {
                    en: 'The core agent runtime — the heart of Prime Agent. Each AgentSession owns:<ul><li>Provider calls and model streaming</li><li>Prompt queueing (steering & follow-up)</li><li>Tool execution (the ipython tool)</li><li>Context compaction and branch summarization</li><li>Goal state and continuation policy</li><li>RLM child creation, registry, and lifecycle</li><li>Usage and cost attribution</li><li>Transcript writes to JSONL</li></ul><strong>AgentSession is where the agent loop lives.</strong> From the session queue onward, the same execution path is used whether the prompt comes from a user, a heartbeat, a schedule, a goal, or another agent.',
                    ko: '핵심 에이전트 런타임 — Prime Agent의 심장. 각 AgentSession이 소유하는 것:<ul><li>프로바이더 호출 및 모델 스트리밍</li><li>프롬프트 큐잉 (스티어링 & 팔로우업)</li><li>도구 실행 (ipython 도구)</li><li>컨텍스트 컴팩션 및 브랜치 요약</li><li>목표 상태 및 연속 정책</li><li>RLM 자식 생성, 레지스트리, 라이프사이클</li><li>사용량 및 비용 귀속</li><li>JSONL 트랜스크립트 작성</li></ul><strong>AgentSession이 에이전트 루프가 사는 곳입니다.</strong> 세션 큐 이후부터 프롬프트가 사용자, 하트비트, 스케줄, 목표 또는 다른 에이전트 중 어디에서 오든 동일한 실행 경로가 사용됩니다.'
                }
            },
            kernel: {
                title: { en: 'IPython Kernel', ko: 'IPython 커널' },
                desc: {
                    en: 'The model-facing control environment — the single most distinctive design choice in Prime Agent.<br><br><strong>Transport:</strong> Jupyter protocol over ZeroMQ with three channels:<ul><li><code>shell</code> — execute_request, execute_reply</li><li><code>iopub</code> — stdout, stderr, results, errors, comms</li><li><code>control</code> — interrupt, shutdown, host-request replies</li></ul><strong>Key property:</strong> Python state persists across tool calls and compaction. Variables, imports, functions, parsed data, and task handles remain available on every turn. The kernel is <strong>not a security sandbox</strong> — it runs with the worker\'s OS permissions.',
                    ko: '모델 대면 제어 환경 — Prime Agent에서 가장 독특한 디자인 선택.<br><br><strong>전송:</strong> ZeroMQ를 통한 Jupyter 프로토콜, 세 개의 채널:<ul><li><code>shell</code> — execute_request, execute_reply</li><li><code>iopub</code> — stdout, stderr, 결과, 오류, comm</li><li><code>control</code> — 인터럽트, 종료, 호스트 요청 응답</li></ul><strong>핵심 속성:</strong> Python 상태는 도구 호출과 컴팩션을 넘어 지속됩니다. 변수, 임포트, 함수, 파싱된 데이터, 작업 핸들이 매 턴마다 사용 가능합니다. 커널은 <strong>보안 샌드박스가 아닙니다</strong> — 워커의 OS 권한으로 실행됩니다.'
                }
            },
            storage: {
                title: { en: 'Session Storage', ko: '세션 저장소' },
                desc: {
                    en: 'Sessions auto-save as flat JSONL files under <code>~/.prime/agent/sessions/</code>.<br><br><strong>Structure:</strong> Each entry has an <code>id</code> and <code>parentId</code>, enabling tree-structured branching in a single file.<br><br><strong>Artifacts:</strong> Feature-specific state stored under <code>session-artifacts/&lt;session-id&gt;/</code>:<ul><li><code>kernel-state.dill</code> / <code>kernel-state.json</code></li><li><code>scheduled-jobs.json</code></li><li><code>harness/harness_state.json</code></li><li><code>sub-xxxxxxxx/</code> — child session directories</li></ul>Full history always remains in the JSONL file, even after compaction.',
                    ko: '세션은 <code>~/.prime/agent/sessions/</code> 아래에 플랫 JSONL 파일로 자동 저장됩니다.<br><br><strong>구조:</strong> 각 항목은 <code>id</code>와 <code>parentId</code>를 가지며, 단일 파일에서 트리 구조 브랜칭을 가능하게 합니다.<br><br><strong>아티팩트:</strong> 기능별 상태는 <code>session-artifacts/&lt;session-id&gt;/</code> 아래에 저장:<ul><li><code>kernel-state.dill</code> / <code>kernel-state.json</code></li><li><code>scheduled-jobs.json</code></li><li><code>harness/harness_state.json</code></li><li><code>sub-xxxxxxxx/</code> — 자식 세션 디렉토리</li></ul>컴팩션 후에도 전체 기록은 항상 JSONL 파일에 남아 있습니다.'
                }
            },
            children: {
                title: { en: 'RLM Child Agents', ko: 'RLM 자식 에이전트' },
                desc: {
                    en: 'Independent child sessions created via <code>await rlm("subtask")</code> calls in the IPython kernel.<br><br><strong>Each child gets:</strong><ul><li>Its own AgentSession with independent context</li><li>An optional IPython kernel</li><li>A <code>sub-xxxxxxxx</code> session directory under the parent</li><li>Inherited model, providers, skills, and tools</li><li>Incremented <code>RLM_DEPTH</code></li></ul><strong>Key behaviors:</strong><ul><li><code>rlm()</code> returns a spawn handle immediately — never the answer</li><li>Children reply via <code>agent_message.send()</code></li><li>Default max depth is 1 (root → children only)</li><li>Child usage is attributed to the parent session</li><li>The child registry survives compaction and restart</li></ul>',
                    ko: 'IPython 커널에서 <code>await rlm("subtask")</code> 호출로 생성된 독립적인 자식 세션.<br><br><strong>각 자식이 받는 것:</strong><ul><li>독립적인 컨텍스트를 가진 자신의 AgentSession</li><li>선택적 IPython 커널</li><li>부모 아래의 <code>sub-xxxxxxxx</code> 세션 디렉토리</li><li>상속된 모델, 프로바이더, 스킬, 도구</li><li>증가된 <code>RLM_DEPTH</code></li></ul><strong>주요 동작:</strong><ul><li><code>rlm()</code>은 스폰 핸들을 즉시 반환 — 답변은 반환하지 않음</li><li>자식은 <code>agent_message.send()</code>로 응답</li><li>기본 최대 깊이는 1 (루트 → 자식만)</li><li>자식 사용량은 부모 세션에 귀속</li><li>자식 레지스트리는 컴팩션과 재시작에서 생존</li></ul>'
                }
            }
        };

        nodes.forEach(function(node) {
            node.addEventListener('click', function() {
                const nodeId = node.getAttribute('data-node');
                const detail = details[nodeId];
                if (!detail) return;

                const currentLang = getLang();

                // Remove active from all
                nodes.forEach(function(n) { n.classList.remove('active'); });
                node.classList.add('active');

                titleEl.textContent = detail.title[currentLang] || detail.title.en;
                contentEl.innerHTML = '<p>' + (detail.desc[currentLang] || detail.desc.en) + '</p>';
            });
        });
    }

    // ========================================
    // Mobile menu
    // ========================================
    function setupMobileMenu() {
        const toggle = document.getElementById('menuToggle');
        const menu = document.getElementById('mobileMenu');

        if (!toggle || !menu) return;

        toggle.addEventListener('click', function() {
            toggle.classList.toggle('active');
            menu.classList.toggle('open');
        });

        // Close menu on link click
        menu.querySelectorAll('a').forEach(function(link) {
            link.addEventListener('click', function() {
                toggle.classList.remove('active');
                menu.classList.remove('open');
            });
        });
    }

    // ========================================
    // Smooth scroll for anchor links
    // ========================================
    function setupSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
            anchor.addEventListener('click', function(e) {
                const href = this.getAttribute('href');
                if (href === '#') return;
                const target = document.querySelector(href);
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            });
        });
    }

    // ========================================
    // Language toggle buttons
    // ========================================
    function setupLangToggle() {
        document.querySelectorAll('.lang-btn').forEach(function(btn) {
            btn.addEventListener('click', function() {
                const lang = btn.getAttribute('data-lang');
                setLang(lang);
                // Re-setup architecture with new language
                const activeNode = document.querySelector('.arch-node.active');
                if (activeNode) {
                    activeNode.click();
                }
                // Re-process tooltips with new language
                if (window.__processTooltips) {
                    window.__processTooltips(lang);
                }
            });
        });
    }

    // ========================================
    // Init
    // ========================================
    function init() {
        // Apply saved language
        const savedLang = getLang();
        applyTranslations(savedLang);
        updateLangButtons(savedLang);

        // Setup all features
        setupHeroCanvas();
        setupReveal();
        setupCopyButtons();
        setupTabs();
        setupArchitecture();
        setupMobileMenu();
        setupSmoothScroll();
        setupLangToggle();

        // Scroll listeners
        window.addEventListener('scroll', function() {
            updateProgressBar();
            updateNavbar();
        }, { passive: true });

        // Initial calls
        updateProgressBar();
        updateNavbar();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();



// ============================================
// Technical Term Tooltips
// ============================================
(function() {

    // Terms to scan for (sorted by length desc to match longer phrases first)
    const TERM_LIST = [
        "persistent kernel", "autonomous mode", "session tree", "host request",
        "context window", "AgentSession", "IPython", "ZeroMQ", "Jupyter",
        "TypeScript", "JSONL", "compaction", "persistent", "subagent",
        "heartbeat", "daemon", "worker", "kernel", "token", "skill", "RLM", "MCP"
    ];

    // Terms that should only be matched as whole words (case-insensitive for some)
    const CASE_SENSITIVE = new Set([
        "IPython", "ZeroMQ", "JSONL", "RLM", "MCP", "AgentSession", "TypeScript", "Jupyter"
    ]);

    // Korean term aliases: map Korean term → tooltip key
    // When lang is "ko", these are also scanned and wrapped with tooltips.
    const KO_ALIASES = {
        "커널": "kernel",
        "컴팩션": "compaction",
        "지속적 커널": "persistent kernel",
        "지속적": "persistent",
        "데몬": "daemon",
        "워커": "worker",
        "서브에이전트": "subagent",
        "자식 에이전트": "subagent",
        "하트비트": "heartbeat",
        "자율 모드": "autonomous mode",
        "세션 트리": "session tree",
        "토큰": "token",
        "스킬": "skill",
        "컨텍스트 창": "context window",
        "호스트 요청": "host request",
    };

    // Reverse mapping: tooltip key → array of Korean terms (sorted by length desc)
    const KO_ALIAS_KEYS = {};
    Object.keys(KO_ALIASES).forEach(function(ko) {
        var key = KO_ALIASES[ko];
        if (!KO_ALIAS_KEYS[key]) KO_ALIAS_KEYS[key] = [];
        KO_ALIAS_KEYS[key].push(ko);
    });

    // Tags where we should NOT process text
    const SKIP_TAGS = new Set(["SCRIPT", "STYLE", "CODE", "PRE", "TEXTAREA", "INPUT", "NOSCRIPT"]);

    // Selector for elements to process — only block-level text containers.
    // Do NOT include span/strong/em: they are children of p/li and would
    // cause double-processing and corrupted text nodes.
    const PROCESS_SELECTOR = "p, li, td, th, h3, h4, dd, dt, blockquote";

    function escapeRegex(str) {
        return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    }

    function wrapTerm(textNode, term, lang) {
        // Safety: skip if node is detached or empty
        if (!textNode || !textNode.parentNode || !textNode.nodeValue) return;
        const text = textNode.nodeValue;
        if (text.trim().length === 0) return;
        const tooltips = (typeof translations !== "undefined" && translations.tooltips) ? translations.tooltips : {};
        const tooltip = tooltips[term];
        if (!tooltip) return;

        const definition = tooltip[lang] || tooltip.en;
        const isCaseSensitive = CASE_SENSITIVE.has(term);
        const flags = isCaseSensitive ? "g" : "gi";
        const boundary = "\\b";

        // Use word boundary for single-word terms, literal for multi-word
        const pattern = boundary + escapeRegex(term) + boundary;
        const regex = new RegExp(pattern, flags);

        let match;
        let lastIndex = 0;
        const fragments = [];
        let found = false;

        while ((match = regex.exec(text)) !== null) {
            found = true;
            // Text before match
            if (match.index > lastIndex) {
                fragments.push(document.createTextNode(text.slice(lastIndex, match.index)));
            }
            // The matched term wrapped in tooltip span
            // Skip empty matches (can happen with edge-case regex)
            if (!match[0] || match[0].length === 0) continue;
            const span = document.createElement("span");
            span.className = "term-tooltip";
            span.setAttribute("tabindex", "0");
            span.setAttribute("data-term", term);
            span.textContent = match[0];

            const tipContent = document.createElement("span");
            tipContent.className = "tooltip-content";
            tipContent.textContent = definition;
            span.appendChild(tipContent);

            fragments.push(span);
            lastIndex = match.index + match[0].length;

            // Prevent infinite loop on zero-length matches
            if (match.index === regex.lastIndex) regex.lastIndex++;
        }

        if (found && fragments.length > 0 && lastIndex > 0) {
            // Remaining text
            if (lastIndex < text.length) {
                fragments.push(document.createTextNode(text.slice(lastIndex)));
            }
            // Replace original node with fragments
            const parent = textNode.parentNode;
            fragments.forEach(function(frag) {
                parent.insertBefore(frag, textNode);
            });
            parent.removeChild(textNode);
            return true;
        }
        return false;
    }

    function getTextNodes(el) {
        const walker = document.createTreeWalker(
            el,
            NodeFilter.SHOW_TEXT,
            {
                acceptNode: function(node) {
                    let parent = node.parentNode;
                    while (parent && parent !== el) {
                        if (SKIP_TAGS.has(parent.tagName)) {
                            return NodeFilter.FILTER_REJECT;
                        }
                        if (parent.classList && parent.classList.contains("term-tooltip")) {
                            return NodeFilter.FILTER_REJECT;
                        }
                        parent = parent.parentNode;
                    }
                    if (node.nodeValue.trim().length < 3) {
                        return NodeFilter.FILTER_REJECT;
                    }
                    return NodeFilter.FILTER_ACCEPT;
                }
            }
        );
        const nodes = [];
        let current;
        while ((current = walker.nextNode())) {
            nodes.push(current);
        }
        return nodes;
    }

    function wrapKoreanTerm(textNode, koTerm, tooltipKey, lang) {
        if (!textNode || !textNode.parentNode || !textNode.nodeValue) return;
        var text = textNode.nodeValue;
        if (text.trim().length === 0) return;
        var tooltips = (typeof translations !== "undefined" && translations.tooltips) ? translations.tooltips : {};
        var tooltip = tooltips[tooltipKey];
        if (!tooltip) return;

        var definition = tooltip.ko || tooltip.en;
        var escaped = koTerm.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
        // Match the term directly. Korean particles (을, 은, 이, 가) attach
        // to nouns without spaces, so we must NOT use word boundaries.
        var regex = new RegExp(escaped, "g");

        var match;
        var lastIndex = 0;
        var fragments = [];
        var found = false;

        while ((match = regex.exec(text)) !== null) {
            found = true;
            if (match.index > lastIndex) {
                fragments.push(document.createTextNode(text.slice(lastIndex, match.index)));
            }
            if (!match[0] || match[0].length === 0) continue;
            var span = document.createElement("span");
            span.className = "term-tooltip";
            span.setAttribute("tabindex", "0");
            span.setAttribute("data-term", tooltipKey);
            span.textContent = match[0];
            var tipContent = document.createElement("span");
            tipContent.className = "tooltip-content";
            tipContent.textContent = definition;
            span.appendChild(tipContent);
            fragments.push(span);
            lastIndex = match.index + match[0].length;
            if (match.index === regex.lastIndex) regex.lastIndex++;
        }

        if (found && fragments.length > 0 && lastIndex > 0) {
            if (lastIndex < text.length) {
                fragments.push(document.createTextNode(text.slice(lastIndex)));
            }
            var parent = textNode.parentNode;
            fragments.forEach(function(frag) { parent.insertBefore(frag, textNode); });
            parent.removeChild(textNode);
        }
    }

    function processElement(el, lang) {
        // Build the list of terms to scan.
        // English terms are always scanned (they appear in both languages).
        // Korean aliases are scanned only when lang === "ko".
        var terms = TERM_LIST.slice();

        if (lang === "ko") {
            // Add Korean aliases, sorted by length desc so longer phrases match first
            var koTerms = Object.keys(KO_ALIASES).sort(function(a, b) { return b.length - a.length; });
            terms = terms.concat(koTerms);
        }

        // Process one term at a time, re-walking DOM each time.
        terms.forEach(function(term) {
            var textNodes = getTextNodes(el);
            textNodes.forEach(function(node) {
                var isKoreanAlias = KO_ALIASES.hasOwnProperty(term);
                var needle = isKoreanAlias ? term : term.toLowerCase();
                var haystack = node.nodeValue.toLowerCase();

                // For Korean terms, search case-sensitively in original text
                if (isKoreanAlias) {
                    if (node.nodeValue.indexOf(term) !== -1) {
                        wrapKoreanTerm(node, term, KO_ALIASES[term], lang);
                    }
                } else {
                    if (haystack.indexOf(needle) !== -1) {
                        wrapTerm(node, term, lang);
                    }
                }
            });
        });
    }

    function processAllTooltips(lang) {
        const elements = document.querySelectorAll(PROCESS_SELECTOR);
        elements.forEach(function(el) {
            // Skip if inside a tooltip already
            if (el.closest(".term-tooltip") || el.closest(".tooltip-content")) return;
            // Skip if already processed
            if (el.getAttribute("data-tooltips-processed") === lang) return;

            processElement(el, lang);
        });

        // Add flip-down class to tooltips near top of viewport on scroll
        const tooltips = document.querySelectorAll(".term-tooltip");
        tooltips.forEach(function(t) {
            t.addEventListener("mouseenter", function() {
                const rect = t.getBoundingClientRect();
                const tip = t.querySelector(".tooltip-content");
                if (tip) {
                    // If element is in top 40% of viewport, flip tooltip down
                    if (rect.top < window.innerHeight * 0.4) {
                        t.classList.add("flip-down");
                    } else {
                        t.classList.remove("flip-down");
                    }
                }
            });
        });
    }

    // Re-process tooltips when language changes
    window.addEventListener("DOMContentLoaded", function() {
        // Delay to ensure translations are applied first
        setTimeout(function() {
            const lang = localStorage.getItem("pa-lang") || "en";
            processAllTooltips(lang);
        }, 200);
    });

    // Expose for language toggle re-processing.
    // The safe approach: re-run applyTranslations (rebuilds DOM from scratch,
    // destroying all tooltip spans), then re-process tooltips on clean DOM.
    window.__processTooltips = function(lang) {
        // applyTranslations has already been called by setLang() before this.
        // It rebuilt all data-i18n elements with fresh text + code elements.
        // All old .term-tooltip spans are already gone because textContent
        // was reset. Just need to scan and wrap again.
        processAllTooltips(lang);
    };
})();
