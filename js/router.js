import { views } from "./views.js";
import { initCadastro } from "./cadastro.js";

const rotas = {
    "/inicio": { view: "inicio", title: "Mãos que Transformam | Início" },
    "/projetos": { view: "projetos", title: "Mãos que Transformam | Projetos" },
    "/projetos/alimentos": { view: "projetos", title: "Mãos que Transformam | Projetos", alvo: "alimentos" },
    "/projetos/agasalho": { view: "projetos", title: "Mãos que Transformam | Projetos", alvo: "agasalho" },
    "/projetos/educacao": { view: "projetos", title: "Mãos que Transformam | Projetos", alvo: "educacao" },
    "/cadastro": { view: "cadastro", title: "Mãos que Transformam | Cadastro" }
};

function rotaAtual() {
    return window.location.hash.replace(/^#/, "") || "/inicio";
}

function atualizarNavegacaoAtiva(rota) {
    document.querySelectorAll("[data-route]").forEach((link) => {
        link.classList.remove("active");
        link.removeAttribute("aria-current");
    });

    const rotaBase = rota.startsWith("/projetos") ? "/projetos" : rota;
    document.querySelectorAll(`[data-route="${rotaBase}"]`).forEach((link) => {
        link.classList.add("active");
        link.setAttribute("aria-current", "page");
    });

    document
        .querySelector(".dropdown-toggle")
        ?.classList.toggle("active", rota.startsWith("/projetos"));
}

function renderizarRota() {
    const app = document.getElementById("app");
    if (!app) return;

    const rotaSolicitada = rotaAtual();
    const rota = rotas[rotaSolicitada] ? rotaSolicitada : "/inicio";
    const configuracao = rotas[rota];

    if (rotaSolicitada !== rota) {
        window.history.replaceState(null, "", "#/inicio");
    }

    app.innerHTML = views[configuracao.view];
    document.title = configuracao.title;
    atualizarNavegacaoAtiva(rota);

    if (configuracao.view === "cadastro") {
        initCadastro();
    }

    if (configuracao.alvo) {
        requestAnimationFrame(() => {
            document.getElementById(configuracao.alvo)?.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        });
    } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    app.focus({ preventScroll: true });
}

function interceptarNavegacao(event) {
    const link = event.target.closest("a[data-route]");
    if (!link) return;

    event.preventDefault();
    const destino = link.dataset.route;

    if (rotaAtual() === destino) {
        renderizarRota();
    } else {
        window.location.hash = destino;
    }
}

/*
 * Ponto público do roteador: registra os eventos e faz a primeira renderização.
 */
export function initRouter() {
    document.addEventListener("click", interceptarNavegacao);
    window.addEventListener("hashchange", renderizarRota);
    renderizarRota();
}
