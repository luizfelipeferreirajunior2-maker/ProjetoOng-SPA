/*
 * Templates reutilizáveis dos componentes repetitivos.
 * Recebem dados e devolvem somente a marcação correspondente.
 */
export function criarCardPilar(pilar) {
    return `
        <article class="card">
            <span aria-hidden="true" class="card-icon">${pilar.numero}</span>
            <h3>${pilar.titulo}</h3>
            <p>${pilar.descricao}</p>
        </article>
    `;
}

export function criarCardProjeto(projeto) {
    const lista = projeto.itens
        .map((item) => `<li>${item}</li>`)
        .join("");

    return `
        <article class="project-card" id="${projeto.id}">
            <div aria-hidden="true" class="project-number">${projeto.numero}</div>
            <div>
                <div class="project-labels">
                    <span class="project-tag">${projeto.categoria}</span>
                    <span class="badge ${projeto.badge}">${projeto.status}</span>
                </div>
                <h2>${projeto.titulo}</h2>
                <p>${projeto.descricao}</p>
                <ul class="project-list">${lista}</ul>
            </div>
        </article>
    `;
}
