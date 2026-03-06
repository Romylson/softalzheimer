// src/data/noticiasCarousel.js
import { formatarDataBR } from "../utils/date";

// src/data/noticiasCarousel.js

export const noticiasCarousel = [
  {
    slug: "atualizacoes-sobre-alzheimer",
    titulo: "Atualizações sobre Alzheimer",
    subtitulo:
      "Biomarcadores, triagem precoce, terapias modificadoras e prevenção: o que mudou e por que isso importa na prática.",
    resumo:
      "A Doença de Alzheimer vem sendo compreendida de forma cada vez mais integrada, com avanços em biomarcadores, neuroimagem, terapias modificadoras e estratégias de prevenção baseadas em evidências.",
    dataISO: "2026-03-05",
    data: "05 de março de 2026",
    imagem: "/images/alzheimer2.jpg",
    categoria: "Atualizações",
    leituraMin: 8,
    tags: ["biomarcadores", "tratamento", "diagnóstico", "prevenção"],
    conteudo: [
      {
        tipo: "lead",
        texto:
          "O cenário do Alzheimer mudou de forma importante nos últimos anos. Hoje, a discussão já não gira apenas em torno do diagnóstico tardio baseado em sintomas, mas também em torno da identificação mais precoce de risco, da estratificação biológica da doença e da possibilidade de retardar progressão em grupos selecionados.",
      },
      {
        tipo: "h2",
        texto: "Do diagnóstico clínico ao modelo biológico",
      },
      {
        tipo: "p",
        texto:
          "Historicamente, o Alzheimer foi identificado a partir de sinais clínicos, prejuízo de memória e perda funcional. Embora esse modelo continue essencial, ele passou a ser complementado por abordagens baseadas em biomarcadores e exames que ajudam a caracterizar o processo patológico antes do comprometimento avançado.",
      },
      {
        tipo: "p",
        texto:
          "Esse movimento é importante porque permite maior precisão no acompanhamento de pessoas com comprometimento cognitivo leve, queixas subjetivas persistentes e perfis clínicos em que o diagnóstico diferencial é desafiador.",
      },
      {
        tipo: "h2",
        texto: "Biomarcadores e neuroimagem",
      },
      {
        tipo: "p",
        texto:
          "Biomarcadores sanguíneos como p-tau e NfL, associados a métodos de neuroimagem e avaliação clínica, têm ampliado a capacidade de estratificar risco e orientar decisões. Embora ainda exijam interpretação cuidadosa, eles ajudam a reduzir incerteza em casos limítrofes e a fortalecer a lógica de monitoramento longitudinal.",
      },
      {
        tipo: "lista",
        itens: [
          "Apoiam triagem e encaminhamento mais adequado.",
          "Ajudam a priorizar exames complementares em cenários de recurso limitado.",
          "Permitem monitoramento mais consistente da progressão clínica.",
          "Fortalecem a integração entre clínica, imagem e evidência científica.",
        ],
      },
      {
        tipo: "h2",
        texto: "Terapias modificadoras e acompanhamento",
      },
      {
        tipo: "p",
        texto:
          "As terapias modificadoras de doença trouxeram uma nova camada de complexidade ao cuidado. O foco deixa de ser apenas o manejo sintomático e passa a incluir seleção criteriosa de pacientes, monitoramento de segurança, avaliação de risco-benefício e necessidade de fluxos bem definidos nos serviços de saúde.",
      },
      {
        tipo: "p",
        texto:
          "Na prática, isso significa que a decisão terapêutica precisa ser compartilhada, contextualizada e sempre conectada à funcionalidade, às comorbidades, à expectativa do paciente e ao suporte familiar.",
      },
      {
        tipo: "callout",
        titulo: "Mensagem central",
        texto:
          "O avanço no Alzheimer não está apenas em novos exames ou novas terapias, mas na integração entre diagnóstico, prevenção, monitoramento e educação em saúde.",
      },
      {
        tipo: "h2",
        texto: "Prevenção continua sendo pilar",
      },
      {
        tipo: "p",
        texto:
          "Mesmo com novas abordagens farmacológicas, prevenção continua sendo a estratégia de maior alcance populacional. Atividade física, sono adequado, controle cardiometabólico, alimentação de qualidade e estímulo cognitivo seguem como pilares com melhor relação entre benefício, custo e aplicabilidade.",
      },
      {
        tipo: "p",
        texto:
          "No PlantaMente, esta notícia funciona como porta de entrada para conectar fisiopatologia, evidência científica e ações práticas de redução de risco e promoção de saúde cerebral.",
      },
    ],
  },

  {
    slug: "fisiopatologia-do-alzheimer",
    titulo: "Fisiopatologia do Alzheimer",
    subtitulo:
      "Amiloide, tau, inflamação, estresse oxidativo e perda sináptica: como esses processos se conectam na progressão da doença.",
    resumo:
      "A fisiopatologia do Alzheimer é multifatorial e envolve uma sequência complexa de alterações moleculares e celulares que se relacionam com perda sináptica, comprometimento cognitivo e declínio funcional.",
    dataISO: "2026-02-20",
    data: "20 de fevereiro de 2026",
    imagem: "/images/fisiopatologia2.jpg",
    categoria: "Fisiopatologia",
    leituraMin: 9,
    tags: ["amiloide", "tau", "sinapse", "inflamação", "neurodegeneração"],
    conteudo: [
      {
        tipo: "lead",
        texto:
          "Entender a fisiopatologia do Alzheimer é essencial para interpretar sintomas, compreender o racional das terapias e visualizar por que medidas de prevenção e controle clínico continuam tão relevantes. A doença não é resultado de um único evento, mas de uma cascata progressiva que envolve diferentes vias biológicas.",
      },
      {
        tipo: "h2",
        texto: "Beta-amiloide e início da cascata",
      },
      {
        tipo: "p",
        texto:
          "O acúmulo de peptídeos beta-amiloide é frequentemente apresentado como um dos marcos iniciais do processo patológico. Essas proteínas podem se agrupar e formar placas extracelulares, interferindo na comunicação neuronal e ativando respostas inflamatórias.",
      },
      {
        tipo: "p",
        texto:
          "Por si só, a presença de amiloide não explica todo o quadro clínico, mas sua associação com outras alterações torna o processo mais destrutivo ao longo do tempo.",
      },
      {
        tipo: "h2",
        texto: "Tau hiperfosforilada e desorganização neuronal",
      },
      {
        tipo: "p",
        texto:
          "A proteína tau tem papel estrutural importante nos neurônios. Quando sofre alterações patológicas, pode formar emaranhados neurofibrilares, comprometendo transporte axonal, estabilidade celular e integridade das conexões neurais.",
      },
      {
        tipo: "p",
        texto:
          "Muitos estudos sugerem que a progressão de tau se correlaciona de forma ainda mais estreita com a intensidade do comprometimento cognitivo do que o acúmulo de amiloide isoladamente.",
      },
      {
        tipo: "h2",
        texto: "Neuroinflamação e microglia",
      },
      {
        tipo: "p",
        texto:
          "A microglia, principal célula imune do sistema nervoso central, tem papel ambíguo: pode proteger em fases iniciais, mas também amplificar dano quando a ativação se torna crônica. A neuroinflamação persistente contribui para estresse oxidativo, desequilíbrio de sinalização celular e piora da perda sináptica.",
      },
      {
        tipo: "lista",
        itens: [
          "Acúmulo de amiloide favorece resposta inflamatória.",
          "Tau alterada compromete integridade neuronal.",
          "Inflamação crônica amplifica dano celular.",
          "Perda sináptica ajuda a explicar declínio cognitivo progressivo.",
        ],
      },
      {
        tipo: "h2",
        texto: "Sinapse, memória e função",
      },
      {
        tipo: "p",
        texto:
          "A perda sináptica é um dos elementos mais diretamente associados à piora clínica. Quando redes neurais perdem eficiência, aparecem falhas em memória episódica, linguagem, atenção, funções executivas e autonomia nas atividades diárias.",
      },
      {
        tipo: "callout",
        titulo: "Ponto-chave",
        texto:
          "O Alzheimer não pode ser entendido apenas como acúmulo de proteína. É uma condição de rede, em que múltiplos processos interagem e afetam o funcionamento cerebral de forma progressiva.",
      },
      {
        tipo: "h2",
        texto: "Por que isso importa para prevenção e tratamento",
      },
      {
        tipo: "p",
        texto:
          "Compreender essa fisiopatologia ajuda a entender por que intervenções multidomínio, controle cardiometabólico e terapias direcionadas a alvos específicos devem ser pensadas de forma complementar. A doença exige uma abordagem integrada, e não uma única solução isolada.",
      },
      {
        tipo: "p",
        texto:
          "No PlantaMente, este conteúdo serve como base para conectar mecanismos biológicos, interpretação clínica e educação em saúde com linguagem acessível e cientificamente alinhada.",
      },
    ],
  },

  {
    slug: "plantas-em-evidencia",
    titulo: "Plantas em evidência",
    subtitulo:
      "Produtos naturais, compostos bioativos e neuroproteção: como interpretar mecanismos, limitações e segurança no contexto do Alzheimer.",
    resumo:
      "Plantas medicinais têm sido estudadas por potenciais efeitos antioxidantes, anti-inflamatórios e neuroprotetores, mas a interpretação da evidência precisa ser criteriosa e responsável.",
    dataISO: "2026-01-30",
    data: "30 de janeiro de 2026",
    imagem: "/images/plantasalzheimer.jpg",
    categoria: "Produtos Naturais",
    leituraMin: 8,
    tags: ["fitoterapia", "segurança", "interações", "neuroproteção", "evidência"],
    conteudo: [
      {
        tipo: "lead",
        texto:
          "O interesse por plantas medicinais e produtos naturais no contexto do Alzheimer cresceu junto com a busca por estratégias de neuroproteção, modulação inflamatória e redução de estresse oxidativo. Entretanto, para que esse interesse seja realmente útil, é preciso diferenciar tradição, plausibilidade biológica e evidência clínica.",
      },
      {
        tipo: "h2",
        texto: "Por que plantas chamam tanta atenção",
      },
      {
        tipo: "p",
        texto:
          "Muitas espécies vegetais apresentam compostos bioativos com potencial antioxidante, anti-inflamatório, colinérgico ou modulador de vias relacionadas a neurodegeneração. Isso faz com que sejam frequentemente investigadas em modelos experimentais e, em alguns casos, em estudos clínicos.",
      },
      {
        tipo: "p",
        texto:
          "Exemplos bastante citados incluem Ginkgo biloba, Curcuma longa, Bacopa monnieri, Rosmarinus officinalis e outras espécies com histórico de uso tradicional ou racional farmacológico interessante.",
      },
      {
        tipo: "h2",
        texto: "Nível de evidência importa",
      },
      {
        tipo: "p",
        texto:
          "Nem toda evidência tem o mesmo peso. Resultados in vitro ajudam a gerar hipóteses. Estudos em animais mostram mecanismos e viabilidade biológica. Ensaios clínicos e revisões sistemáticas são mais relevantes para discutir aplicabilidade humana. Por isso, uma planta “promissora” em laboratório não é automaticamente uma intervenção eficaz na prática clínica.",
      },
      {
        tipo: "lista",
        itens: [
          "In vitro: ajuda a entender mecanismo.",
          "In vivo: avalia efeito em sistemas biológicos complexos.",
          "Clínico: aproxima da realidade do paciente.",
          "Revisões e meta-análises: sintetizam melhor a força da evidência.",
        ],
      },
      {
        tipo: "h2",
        texto: "Segurança e interações medicamentosas",
      },
      {
        tipo: "p",
        texto:
          "Um dos pontos mais negligenciados no discurso sobre produtos naturais é a segurança. Algumas plantas podem interagir com anticoagulantes, antidiabéticos, sedativos, anti-hipertensivos e outros medicamentos, aumentando risco de sangramento, hipotensão, hipoglicemia ou sedação excessiva.",
      },
      {
        tipo: "p",
        texto:
          "Além disso, dose, forma farmacêutica, padronização do extrato e perfil clínico da pessoa alteram bastante o risco e o potencial benefício. Isso significa que o uso nunca deve ser guiado apenas por marketing ou tradição isolada.",
      },
      {
        tipo: "callout",
        titulo: "Mensagem essencial",
        texto:
          "Planta medicinal não é sinônimo de produto inofensivo. Em contexto de doença crônica, especialmente com múltiplos medicamentos, a avaliação de segurança é tão importante quanto a busca por benefício.",
      },
      {
        tipo: "h2",
        texto: "Como o PlantaMente trata esse tema",
      },
      {
        tipo: "p",
        texto:
          "No PlantaMente, a proposta não é romantizar nem descartar produtos naturais. O foco é apresentar evidências, mecanismos propostos, contraindicações e interações de forma organizada, permitindo uma leitura crítica e responsável. Isso aproxima ciência, educação e prática de cuidado.",
      },
      {
        tipo: "p",
        texto:
          "Ao integrar fisiopatologia, evidência e segurança, o portal ajuda o usuário a compreender que produtos naturais podem fazer parte de uma discussão séria sobre saúde cerebral — desde que interpretados com rigor e contexto.",
      },
    ],
  },
];