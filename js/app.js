import { initMenu } from "./menu.js";
import { initRouter } from "./router.js";
import { initTheme } from "./theme.js";

/*
 * Entry point da aplicação.
 * É o único módulo carregado diretamente pelo HTML.
 */
function iniciarAplicacao() {
    initTheme();
    initMenu();
    initRouter();
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", iniciarAplicacao, { once: true });
} else {
    iniciarAplicacao();
}
