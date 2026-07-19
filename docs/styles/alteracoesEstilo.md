# Alterações

````html
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="./css/style.css">
    <title>Cadastro de Missões</title>
</head>
<body>

    <header class="topbar">
        <div class="topbar-brand">
            <span class="brand-mark">&#9670;</span> ORBITAL COMMAND
        </div>
        <nav class="menu">
            <a href="index.html" class="active">Cadastrar</a>
            <a href="list.html">Ver Missões</a>
        </nav>
        <div class="topbar-icons">
            <span title="Notificações">&#128276;</span>
            <span title="Configurações">&#9881;</span>
            <span class="avatar" title="Conta">&#9679;</span>
        </div>
    </header>

    <div class="layout">

        <aside class="sidebar">
            <div class="sidebar-status">
                <span class="status-label">NOMINAL STATUS</span>
                <span class="status-value">MISSION ALPHA</span>
            </div>

            <nav class="side-nav">
                <a href="#" class="side-link">
                    <span class="side-icon">&#9638;</span> Overview
                </a>
                <a href="#" class="side-link active">
                    <span class="side-icon">&#128225;</span> Telemetry
                </a>
                <a href="#" class="side-link">
                    <span class="side-icon">&#128101;</span> Crew
                </a>
                <a href="#" class="side-link">
                    <span class="side-icon">&#128230;</span> Payload
                </a>
                <a href="#" class="side-link">
                    <span class="side-icon">&#128203;</span> Logs
                </a>
            </nav>

            <div class="sidebar-bottom">
                <button type="button" class="btn-launch">INITIATE LAUNCH</button>
                <a href="#" class="side-footer-link">&#9432; Support</a>
                <a href="#" class="side-footer-link">&#9000; Terminal</a>
            </div>
        </aside>

        <main class="container">
            <h1>Cadastro de Missões</h1>
            <p class="panel-status"><span class="status-dot"></span>READY FOR DATA ENTRY</p>

            <form id="missionForm">
                <div class="form-row">
                    <div class="form-group">
                        <label for="nome">Nome da Missão:</label>
                        <input type="text" id="nome" name="nome" placeholder="Ex: Artemis IV" required>
                    </div>

                    <div class="form-group">
                        <label for="crew">Tripulação:</label>
                        <input type="number" id="crew" name="crew" required>
                    </div>
                </div>

                <div class="form-row">
                    <div class="form-group">
                        <label for="spacecraft">Espaçonave:</label>
                        <input type="text" id="spacecraft" name="spacecraft" placeholder="Ex: Falcon Heavy" required>
                    </div>

                    <div class="form-group">
                        <label for="durations">Duração:</label>
                        <input type="text" id="durations" name="durations" placeholder="Ex: 10 dias" required>
                    </div>
                </div>

                <div class="form-group">
                    <label for="destinations">Destinos:</label>
                    <textarea id="destinations" name="destinations" placeholder="Liste as coordenadas ou corpos celestes..." required></textarea>
                </div>

                <div class="form-group">
                    <label for="status">Status:</label>
                    <select id="status" name="status" required>
                        <option value="">Selecione um status</option>
                        <option value="planejada">Planejada</option>
                        <option value="em andamento">Em Andamento</option>
                        <option value="concluída">Concluída</option>
                        <option value="cancelada">Cancelada</option>
                    </select>
                </div>

                <div class="form-actions">
                    <button type="submit" class="btn-primary">&#9654; Confirmar Registro</button>
                    <button type="reset" class="btn-ghost">Limpar</button>
                </div>
            </form>

            <div id="infoMessage"></div>

            <div class="panel-footer">
                <span>ENCRYPTED CHANNEL 7A</span>
                <span>v.2.4.8</span>
            </div>
        </main>

    </div>

    <script type="module" src="js/api.js"></script>
    <script type="module" src="js/ui.js"></script>
    <script type="module" src="js/main.js"></script>
</body>
</html>
````


````css
/* ==========================================================================
   Orbital Command — theme tokens
   ========================================================================== */
:root {
    --bg: #05070d;
    --bg-panel: #0b111d;
    --bg-panel-alt: #0f1626;
    --bg-input: #0a0f1a;
    --border: #1d2c42;
    --border-bright: #2a3f5c;

    --accent: #22e5ff;
    --accent-dim: #17a8bf;
    --accent-glow: rgba(34, 229, 255, 0.28);

    --text: #c3cee2;
    --text-dim: #63728c;
    --text-bright: #f2f6fc;

    --success: #2fe6a0;
    --error: #ff5d75;

    --font-display: "Chakra Petch", "Segoe UI", sans-serif;
    --font-mono: "JetBrains Mono", "Courier New", monospace;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: var(--font-mono);
    color: var(--text);
    background-color: var(--bg);
    background-image:
        radial-gradient(circle at 18% 30%, rgba(34, 229, 255, 0.07) 0%, transparent 45%),
        radial-gradient(circle at 85% 80%, rgba(120, 60, 230, 0.10) 0%, transparent 50%),
        radial-gradient(rgba(255, 255, 255, 0.07) 1px, transparent 1px);
    background-size: auto, auto, 22px 22px;
    min-height: 100vh;
}

a {
    color: inherit;
    text-decoration: none;
}

/* ==========================================================================
   Top bar
   ========================================================================== */
.topbar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 56px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 24px;
    background: rgba(8, 11, 20, 0.92);
    border-bottom: 1px solid var(--border);
    backdrop-filter: blur(6px);
    z-index: 20;
}

.topbar-brand {
    font-family: var(--font-display);
    font-weight: 700;
    letter-spacing: 2px;
    color: var(--accent);
    font-size: 18px;
}

.brand-mark {
    font-size: 14px;
}

.menu {
    display: flex;
    gap: 28px;
}

.menu a {
    font-size: 13px;
    font-weight: 600;
    letter-spacing: 0.5px;
    color: var(--text-dim);
    padding: 6px 4px;
    border-bottom: 2px solid transparent;
    transition: color 0.15s ease, border-color 0.15s ease;
}

.menu a:hover {
    color: var(--text-bright);
}

.menu a.active {
    color: var(--text-bright);
    border-bottom-color: var(--accent);
}

.topbar-icons {
    display: flex;
    align-items: center;
    gap: 18px;
    color: var(--text-dim);
    font-size: 15px;
}

.topbar-icons .avatar {
    display: grid;
    place-items: center;
    width: 26px;
    height: 26px;
    border-radius: 50%;
    border: 1px solid var(--accent);
    color: var(--accent);
    font-size: 10px;
}

/* ==========================================================================
   Layout
   ========================================================================== */
.layout {
    display: flex;
    padding-top: 56px;
    min-height: 100vh;
}

/* ==========================================================================
   Sidebar
   ========================================================================== */
.sidebar {
    width: 220px;
    flex-shrink: 0;
    background: rgba(9, 13, 22, 0.85);
    border-right: 1px solid var(--border);
    padding: 24px 16px;
    display: flex;
    flex-direction: column;
    gap: 28px;
    position: sticky;
    top: 56px;
    height: calc(100vh - 56px);
}

.sidebar-status {
    display: flex;
    flex-direction: column;
    gap: 4px;
    padding: 0 4px;
}

.status-label {
    font-size: 10px;
    letter-spacing: 1px;
    color: var(--text-dim);
}

.status-value {
    font-size: 12px;
    font-weight: 600;
    color: var(--accent);
    letter-spacing: 1px;
}

.side-nav {
    display: flex;
    flex-direction: column;
    gap: 2px;
}

.side-link {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px 12px;
    font-size: 13px;
    color: var(--text-dim);
    border-left: 2px solid transparent;
    border-radius: 4px;
    transition: background 0.15s ease, color 0.15s ease;
}

.side-icon {
    font-size: 13px;
    width: 16px;
    text-align: center;
}

.side-link:hover {
    color: var(--text-bright);
    background: rgba(255, 255, 255, 0.03);
}

.side-link.active {
    color: var(--text-bright);
    background: rgba(34, 229, 255, 0.08);
    border-left-color: var(--accent);
}

.sidebar-bottom {
    margin-top: auto;
    display: flex;
    flex-direction: column;
    gap: 12px;
}

.btn-launch {
    width: 100%;
    padding: 10px;
    background: var(--accent);
    color: #04121a;
    border: none;
    border-radius: 4px;
    font-family: var(--font-mono);
    font-weight: 700;
    font-size: 12px;
    letter-spacing: 0.5px;
    cursor: pointer;
    transition: box-shadow 0.15s ease, transform 0.15s ease;
}

.btn-launch:hover {
    box-shadow: 0 0 16px var(--accent-glow);
    transform: translateY(-1px);
}

.side-footer-link {
    font-size: 12px;
    color: var(--text-dim);
}

.side-footer-link:hover {
    color: var(--text-bright);
}

/* ==========================================================================
   Main panel / form
   ========================================================================== */
.container {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 48px 24px;
}

.container form,
.container h1,
.container .panel-status,
.container #infoMessage,
.container .panel-footer {
    width: 100%;
    max-width: 620px;
}

h1 {
    font-family: var(--font-display);
    font-weight: 700;
    font-size: 30px;
    letter-spacing: 1px;
    text-align: center;
    color: var(--text-bright);
    text-transform: uppercase;
    max-width: 620px;
}

.panel-status {
    text-align: center;
    font-size: 11px;
    letter-spacing: 1px;
    color: var(--text-dim);
    margin-top: 8px;
    margin-bottom: 28px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
}

.status-dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: var(--success);
    box-shadow: 0 0 6px var(--success);
}

form#missionForm {
    background: var(--bg-panel);
    border: 1px solid var(--border);
    border-radius: 8px;
    padding: 32px;
    box-shadow: 0 0 40px rgba(34, 229, 255, 0.04), 0 10px 30px rgba(0, 0, 0, 0.4);
}

.form-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
}

.form-group {
    margin-bottom: 20px;
}

label {
    display: block;
    margin-bottom: 8px;
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: var(--accent-dim);
}

input, select, textarea {
    width: 100%;
    padding: 11px 12px;
    background: var(--bg-input);
    border: 1px solid var(--border-bright);
    border-radius: 4px;
    color: var(--text-bright);
    font-family: var(--font-mono);
    font-size: 13px;
}

input::placeholder,
textarea::placeholder {
    color: var(--text-dim);
}

input:focus, select:focus, textarea:focus {
    outline: none;
    border-color: var(--accent);
    box-shadow: 0 0 0 3px var(--accent-glow);
}

textarea {
    resize: vertical;
    min-height: 80px;
}

select {
    appearance: none;
    background-image: linear-gradient(45deg, transparent 50%, var(--text-dim) 50%),
    linear-gradient(135deg, var(--text-dim) 50%, transparent 50%);
    background-position: calc(100% - 18px) center, calc(100% - 13px) center;
    background-size: 5px 5px, 5px 5px;
    background-repeat: no-repeat;
}

.form-actions {
    display: flex;
    gap: 12px;
    margin-top: 8px;
}

button {
    font-family: var(--font-mono);
    cursor: pointer;
}

.btn-primary {
    flex: 1;
    padding: 13px;
    background: var(--accent);
    color: #04121a;
    border: none;
    border-radius: 5px;
    font-weight: 700;
    font-size: 13px;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    transition: box-shadow 0.15s ease, transform 0.15s ease;
}

.btn-primary:hover {
    box-shadow: 0 0 20px var(--accent-glow);
    transform: translateY(-1px);
}

.btn-ghost {
    padding: 13px 24px;
    background: transparent;
    color: var(--text-dim);
    border: 1px solid var(--border-bright);
    border-radius: 5px;
    font-size: 13px;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    transition: color 0.15s ease, border-color 0.15s ease;
}

.btn-ghost:hover {
    color: var(--text-bright);
    border-color: var(--text-dim);
}

#infoMessage {
    text-align: center;
    min-height: 20px;
    margin-top: 16px;
    font-size: 13px;
}

.panel-footer {
    display: flex;
    justify-content: space-between;
    margin-top: 24px;
    font-size: 10px;
    letter-spacing: 1px;
    color: var(--text-dim);
    text-transform: uppercase;
}

.sucesso {
    color: var(--success);
    font-weight: 600;
}

.erro {
    color: var(--error);
    font-weight: 600;
}

/* ==========================================================================
   Responsive
   ========================================================================== */
@media (max-width: 780px) {
    .sidebar {
        display: none;
    }

    .menu {
        gap: 16px;
    }

    .form-row {
        grid-template-columns: 1fr;
    }

    .form-actions {
        flex-direction: column;
    }
}
````