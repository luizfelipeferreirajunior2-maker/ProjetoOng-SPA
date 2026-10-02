/*
 * Integração isolada com a biblioteca Day.js.
 * O fallback nativo evita acoplamento obrigatório à CDN.
 */
export function configurarDatas() {
    // O Day.js é opcional. Se a CDN ainda não tiver carregado,
    // a aplicação continua utilizando o fallback nativo.
    return Boolean(window.dayjs);
}

export function formatarDataHistorico(valor) {
    if (window.dayjs) {
        const data = window.dayjs(valor);
        return data.isValid()
            ? data.format("DD/MM/YYYY [às] HH:mm")
            : "Data não disponível";
    }

    const data = new Date(valor);
    return Number.isNaN(data.getTime())
        ? "Data não disponível"
        : data.toLocaleString("pt-BR");
}
