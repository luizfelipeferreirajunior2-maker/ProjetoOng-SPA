/*
 * Fonte de dados da interface.
 * Mantém conteúdo separado da renderização e do roteamento.
 */
export const pilares = [
    {
        numero: "01",
        titulo: "Acolher",
        descricao: "Escutamos as necessidades das comunidades para oferecer apoio de forma responsável."
    },
    {
        numero: "02",
        titulo: "Mobilizar",
        descricao: "Unimos colaboradores e parceiros em campanhas que geram impacto positivo."
    },
    {
        numero: "03",
        titulo: "Transformar",
        descricao: "Desenvolvemos ações contínuas nas áreas de alimentação, vestuário e educação."
    }
];

export const projetos = [
    {
        id: "alimentos",
        numero: "01",
        categoria: "Alimentação",
        status: "Ativo",
        badge: "badge-success",
        titulo: "Arrecadação de Alimentos",
        descricao: "Campanhas de arrecadação de alimentos não perecíveis e montagem de cestas básicas para famílias em situação de vulnerabilidade.",
        itens: [
            "Coleta de alimentos",
            "Montagem de cestas",
            "Distribuição para famílias cadastradas"
        ]
    },
    {
        id: "agasalho",
        numero: "02",
        categoria: "Acolhimento",
        status: "Campanha sazonal",
        badge: "badge-warning",
        titulo: "Campanha do Agasalho",
        descricao: "Mobilização para arrecadar roupas, cobertores e calçados em bom estado durante os períodos mais frios do ano.",
        itens: [
            "Pontos de coleta",
            "Triagem das doações",
            "Entrega organizada à comunidade"
        ]
    },
    {
        id: "educacao",
        numero: "03",
        categoria: "Educação",
        status: "Inscrições abertas",
        badge: "badge-info",
        titulo: "Apoio Educacional",
        descricao: "Ações para incentivar os estudos por meio de materiais escolares, atividades de reforço e apoio a crianças e adolescentes.",
        itens: [
            "Arrecadação de materiais",
            "Oficinas educativas",
            "Incentivo à permanência nos estudos"
        ]
    }
];
