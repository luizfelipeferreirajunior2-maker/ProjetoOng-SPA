import {
    STORAGE_HISTORICO,
    lerStorage,
    salvarStorage,
    removerStorage
} from "./storage.js";
import { configurarDatas, formatarDataHistorico } from "./date-utils.js";

const rotulosInteresse = {
    voluntario: "Trabalho voluntário",
    doacao: "Doações",
    campanhas: "Participar de campanhas",
    parceria: "Parceria com a ONG"
};

/*
 * Controla exclusivamente o histórico local e sua representação no DOM.
 */
export function criarHistoricoCadastro(form) {
    configurarDatas();

    const historicoLocal = document.createElement("section");
    historicoLocal.className = "storage-history";
    historicoLocal.setAttribute("aria-labelledby", "storageHistoryTitle");
    historicoLocal.innerHTML = `
        <div class="storage-history-header">
            <div>
                <span class="eyebrow">Armazenamento local</span>
                <h3 id="storageHistoryTitle">Histórico neste navegador</h3>
            </div>
            <button class="storage-clear" type="button">Limpar histórico</button>
        </div>
        <p class="storage-history-empty">Nenhum cadastro foi registrado localmente ainda.</p>
        <ul class="storage-history-list" aria-live="polite"></ul>
    `;
    form.insertAdjacentElement("afterend", historicoLocal);

    const lista = historicoLocal.querySelector(".storage-history-list");
    const vazio = historicoLocal.querySelector(".storage-history-empty");
    const limpar = historicoLocal.querySelector(".storage-clear");

    function renderizar() {
        const historico = lerStorage(STORAGE_HISTORICO, []);
        lista.replaceChildren();

        if (!Array.isArray(historico) || historico.length === 0) {
            vazio.hidden = false;
            limpar.hidden = true;
            return;
        }

        vazio.hidden = true;
        limpar.hidden = false;

        historico.forEach((registro) => {
            const item = document.createElement("li");
            const titulo = document.createElement("strong");
            const momento = document.createElement("span");

            titulo.textContent = rotulosInteresse[registro.interesse] || "Colaboração";
            momento.textContent = formatarDataHistorico(registro.data);

            item.append(titulo, momento);
            lista.appendChild(item);
        });
    }

    function adicionar(interesse) {
        const dadosSalvos = lerStorage(STORAGE_HISTORICO, []);
        const historico = Array.isArray(dadosSalvos) ? dadosSalvos : [];
        const novoRegistro = {
            interesse: interesse || "colaboracao",
            data: new Date().toISOString()
        };
        const historicoAtualizado = [novoRegistro, ...historico].slice(0, 5);
        salvarStorage(STORAGE_HISTORICO, historicoAtualizado);
        renderizar();
    }

    limpar.addEventListener("click", () => {
        removerStorage(STORAGE_HISTORICO);
        renderizar();
    });

    renderizar();

    return { adicionar, renderizar };
}
