/*
 * Único módulo responsável pelo Web Storage.
 * Nenhum componente de formulário acessa localStorage diretamente.
 */
export const STORAGE_PREFERENCIAS = "maosQueTransformam:preferencias";
export const STORAGE_HISTORICO = "maosQueTransformam:historico";
export const STORAGE_CONTRASTE = "maosQueTransformam:altoContraste";

export function lerStorage(chave, valorPadrao) {
    try {
        const valorSalvo = localStorage.getItem(chave);
        return valorSalvo ? JSON.parse(valorSalvo) : valorPadrao;
    } catch (erro) {
        console.warn(`Não foi possível ler ${chave} do localStorage.`, erro);
        try {
            localStorage.removeItem(chave);
        } catch (_) {
            // Se o armazenamento estiver indisponível, apenas usa o valor padrão.
        }
        return valorPadrao;
    }
}

export function salvarStorage(chave, valor) {
    try {
        localStorage.setItem(chave, JSON.stringify(valor));
        return true;
    } catch (erro) {
        console.warn(`Não foi possível salvar ${chave} no localStorage.`, erro);
        return false;
    }
}

export function removerStorage(chave) {
    try {
        localStorage.removeItem(chave);
        return true;
    } catch (erro) {
        console.warn(`Não foi possível remover ${chave} do localStorage.`, erro);
        return false;
    }
}
