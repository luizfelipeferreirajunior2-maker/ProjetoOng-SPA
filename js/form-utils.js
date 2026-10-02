/*
 * Funções puras/reutilizáveis de máscara e validação visual.
 * Não conhecem roteamento, armazenamento ou histórico.
 */
export function mascaraCPF(valor) {
    let resultado = valor.replace(/\D/g, "").slice(0, 11);
    resultado = resultado.replace(/(\d{3})(\d)/, "$1.$2");
    resultado = resultado.replace(/(\d{3})(\d)/, "$1.$2");
    resultado = resultado.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
    return resultado;
}

export function mascaraTelefone(valor) {
    let resultado = valor.replace(/\D/g, "").slice(0, 11);
    resultado = resultado.replace(/^(\d{2})(\d)/g, "($1) $2");

    if (resultado.replace(/\D/g, "").length <= 10) {
        resultado = resultado.replace(/(\d{4})(\d{4})$/, "$1-$2");
    } else {
        resultado = resultado.replace(/(\d{5})(\d{4})$/, "$1-$2");
    }

    return resultado;
}

export function mascaraCEP(valor) {
    let resultado = valor.replace(/\D/g, "").slice(0, 8);
    resultado = resultado.replace(/(\d{5})(\d)/, "$1-$2");
    return resultado;
}

export function atualizarEstadoCampo(campo) {
    const valido = campo.checkValidity();

    if (campo.type === "checkbox") {
        const grupo = campo.closest(".checkbox-group");
        grupo?.classList.toggle("invalid", !valido);
        campo.setAttribute("aria-invalid", String(!valido));
        return valido;
    }

    const vazio = campo.value.trim() === "";
    campo.classList.remove("valid", "invalid");

    if (!vazio || campo.required) {
        campo.classList.add(valido ? "valid" : "invalid");
    }

    campo.setAttribute("aria-invalid", String(!valido));
    return valido;
}
