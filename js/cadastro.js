import {
    STORAGE_PREFERENCIAS,
    lerStorage,
    salvarStorage
} from "./storage.js";
import {
    mascaraCPF,
    mascaraTelefone,
    mascaraCEP,
    atualizarEstadoCampo
} from "./form-utils.js";
import { criarHistoricoCadastro } from "./historico.js";

let toastTimer;

/*
 * Orquestrador da tela de cadastro.
 * Importa serviços especializados, mas não implementa Web Storage,
 * formatação de datas ou regras de máscara internamente.
 */
export function initCadastro() {
    const form = document.getElementById("formCadastro");
    if (!form || form.dataset.inicializado === "true") return;
    form.dataset.inicializado = "true";

    const cpf = document.getElementById("cpf");
    const telefone = document.getElementById("telefone");
    const cep = document.getElementById("cep");
    const nascimento = document.getElementById("nascimento");
    const interesse = document.getElementById("interesse");
    const formMessage = document.getElementById("formMessage");
    const submitButton = form.querySelector('button[type="submit"]');
    const feedbackToast = document.getElementById("feedbackToast");
    const toastClose = feedbackToast?.querySelector(".toast-close");
    const campos = form.querySelectorAll("input, select, textarea");

    const historico = criarHistoricoCadastro(form);

    if (nascimento) {
        nascimento.max = new Date().toISOString().slice(0, 10);
    }

    const preferenciasSalvas = lerStorage(STORAGE_PREFERENCIAS, {});
    const preferencias =
        preferenciasSalvas &&
        typeof preferenciasSalvas === "object" &&
        !Array.isArray(preferenciasSalvas)
            ? preferenciasSalvas
            : {};

    const interesseSalvoValido =
        interesse &&
        typeof preferencias.interesse === "string" &&
        Array.from(interesse.options).some(
            (option) => option.value === preferencias.interesse
        );

    if (interesseSalvoValido) {
        interesse.value = preferencias.interesse;
        atualizarEstadoCampo(interesse);
    }

    interesse?.addEventListener("change", () => {
        const dadosSalvos = lerStorage(STORAGE_PREFERENCIAS, {});
        const preferenciasAtuais =
            dadosSalvos &&
            typeof dadosSalvos === "object" &&
            !Array.isArray(dadosSalvos)
                ? dadosSalvos
                : {};

        preferenciasAtuais.interesse = interesse.value;
        salvarStorage(STORAGE_PREFERENCIAS, preferenciasAtuais);
    });

    function mostrarToast() {
        if (!feedbackToast) return;
        feedbackToast.classList.add("show");
        clearTimeout(toastTimer);
        toastTimer = setTimeout(() => feedbackToast.classList.remove("show"), 4500);
    }

    toastClose?.addEventListener("click", () => {
        feedbackToast.classList.remove("show");
        clearTimeout(toastTimer);
    });

    cpf?.addEventListener("input", function () {
        this.value = mascaraCPF(this.value);
    });

    telefone?.addEventListener("input", function () {
        this.value = mascaraTelefone(this.value);
    });

    cep?.addEventListener("input", function () {
        this.value = mascaraCEP(this.value);
    });

    campos.forEach((campo) => {
        campo.addEventListener("blur", () => atualizarEstadoCampo(campo));
        campo.addEventListener("change", () => atualizarEstadoCampo(campo));
        campo.addEventListener("input", () => {
            if (campo.classList.contains("invalid") || campo.classList.contains("valid")) {
                atualizarEstadoCampo(campo);
            }
        });
    });

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        let formularioValido = true;
        let primeiroInvalido = null;

        campos.forEach((campo) => {
            if (!atualizarEstadoCampo(campo)) {
                formularioValido = false;
                primeiroInvalido ??= campo;
            }
        });

        formMessage.className = "form-message";

        if (!formularioValido) {
            formMessage.textContent = "Revise os campos destacados antes de enviar o cadastro.";
            formMessage.classList.add("error");
            primeiroInvalido?.focus();
            return;
        }

        historico.adicionar(interesse?.value);

        formMessage.textContent = "Cadastro enviado com sucesso! Obrigado por querer colaborar.";
        formMessage.classList.add("success");
        mostrarToast();

        if (submitButton) {
            const textoOriginal = submitButton.textContent;
            submitButton.disabled = true;
            submitButton.textContent = "Cadastro enviado";

            setTimeout(() => {
                submitButton.disabled = false;
                submitButton.textContent = textoOriginal;
            }, 1200);
        }
    });
}
