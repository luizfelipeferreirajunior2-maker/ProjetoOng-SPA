import {
    STORAGE_CONTRASTE,
    lerStorage,
    salvarStorage
} from "./storage.js";

const root = document.documentElement;

function aplicarContraste(ativo, botao) {
    if (ativo) {
        root.dataset.contrast = "high";
    } else {
        delete root.dataset.contrast;
    }

    botao.setAttribute("aria-pressed", String(ativo));
    botao.setAttribute(
        "aria-label",
        ativo ? "Desativar modo de alto contraste" : "Ativar modo de alto contraste"
    );

    const texto = botao.querySelector(".contrast-toggle-text");
    if (texto) {
        texto.textContent = ativo ? "Contraste padrão" : "Alto contraste";
    }
}

export function initTheme() {
    const botao = document.querySelector(".contrast-toggle");
    if (!botao) return;

    const preferenciaSalva = lerStorage(STORAGE_CONTRASTE, null);
    const prefereMaisContraste = window.matchMedia?.("(prefers-contrast: more)").matches ?? false;
    let ativo = typeof preferenciaSalva === "boolean"
        ? preferenciaSalva
        : prefereMaisContraste;

    aplicarContraste(ativo, botao);

    botao.addEventListener("click", () => {
        ativo = !ativo;
        aplicarContraste(ativo, botao);
        salvarStorage(STORAGE_CONTRASTE, ativo);
    });
}
