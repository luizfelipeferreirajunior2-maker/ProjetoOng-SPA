/*
 * Módulo responsável apenas pelo comportamento da navegação responsiva.
 */
export function initMenu() {
    const menuToggle = document.querySelector(".menu-toggle");
    const mainNav = document.querySelector(".main-nav");
    const dropdowns = document.querySelectorAll(".dropdown");

    function fecharMenuPrincipal() {
        if (!menuToggle || !mainNav) return;

        mainNav.classList.remove("open");
        menuToggle.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Abrir menu de navegação");
    }

    function fecharDropdowns() {
        dropdowns.forEach((dropdown) => {
            dropdown.classList.remove("open");
            const botao = dropdown.querySelector(".dropdown-toggle");
            botao?.setAttribute("aria-expanded", "false");
        });
    }

    menuToggle?.addEventListener("click", () => {
        if (!mainNav) return;

        const estaAberto = mainNav.classList.toggle("open");
        menuToggle.classList.toggle("open", estaAberto);
        menuToggle.setAttribute("aria-expanded", String(estaAberto));
        menuToggle.setAttribute(
            "aria-label",
            estaAberto ? "Fechar menu de navegação" : "Abrir menu de navegação"
        );
    });

    dropdowns.forEach((dropdown) => {
        const botao = dropdown.querySelector(".dropdown-toggle");
        if (!botao) return;

        botao.addEventListener("click", () => {
            const estavaAberto = dropdown.classList.contains("open");
            fecharDropdowns();

            if (!estavaAberto) {
                dropdown.classList.add("open");
                botao.setAttribute("aria-expanded", "true");
            }
        });
    });

    document.addEventListener("click", (event) => {
        if (!event.target.closest(".site-header")) {
            fecharDropdowns();
            if (window.innerWidth <= 768) fecharMenuPrincipal();
        }
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            fecharDropdowns();
            fecharMenuPrincipal();
        }
    });

    mainNav?.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            if (window.innerWidth <= 768) {
                fecharDropdowns();
                fecharMenuPrincipal();
            }
        });
    });

    window.addEventListener("resize", () => {
        if (window.innerWidth > 768) fecharMenuPrincipal();
        fecharDropdowns();
    });
}
