// src/data/noticiasCarousel.js
export const noticiasCarousel = [
  // ✅ NOTÍCIAS DO CARROSSEL (internas)
  {
    slug: "atualizacoes-sobre-alzheimer",
    titulo: "Atualizações sobre Alzheimer",
    resumo:
      "O que mudou em triagem, biomarcadores e tratamento modificador de doença, e por que isso importa na prática.",
    dataISO: "2026-03-05",
    data: formatarDataBR("2026-03-05"),
    imagem: "/images/alzheimer2.jpg",
    categoria: "Atualizações",
    leituraMin: 6,
    tags: ["biomarcadores", "tratamento", "diagnóstico"],
    conteudo: [
      "Nos últimos anos, a área de Alzheimer avançou rapidamente em triagem, biomarcadores e terapias que buscam modificar a doença. Embora ainda existam limites e necessidades de monitoramento, o cenário clínico está mais orientado a identificar risco e estágio com maior precisão.",
      "Entre os biomarcadores, combinações envolvendo p-tau e NfL (além de abordagens com amiloide e tau em imagem) têm ampliado a capacidade de estratificar pacientes e apoiar decisões clínicas — especialmente quando integradas a histórico, avaliação cognitiva e funcional.",
      "Do ponto de vista terapêutico, cresce a importância de selecionar bem o perfil do paciente, considerar comorbidades e acompanhar eventos adversos com protocolos claros. A tomada de decisão tende a ser multidisciplinar e baseada em risco/benefício individual.",
      "Para prevenção e redução de risco, intervenções de estilo de vida (atividade física, sono, controle cardiometabólico) seguem como pilares com evidências consistentes. Programas multidomínio e acompanhamento longitudinal fortalecem adesão e resultados.",
      "No PlantaMente, esta notícia funciona como um ponto de partida para explorar seções de prevenção, evidências e fisiopatologia com linguagem acessível e foco em aplicabilidade.",
    ],
  },
  {
    slug: "fisiopatologia-do-alzheimer",
    titulo: "Fisiopatologia do Alzheimer",
    resumo:
      "Entenda a sequência de eventos: amiloide, tau, neuroinflamação e perda sináptica — e como isso se relaciona com sintomas.",
    dataISO: "2026-02-20",
    data: formatarDataBR("2026-02-20"),
    imagem: "/images/fisiopatologia2.jpg",
    categoria: "Fisiopatologia",
    leituraMin: 7,
    tags: ["amiloide", "tau", "sinapse", "inflamação"],
    conteudo: [
      "A doença de Alzheimer envolve alterações biológicas progressivas que podem iniciar anos antes dos sintomas clínicos. Entre os mecanismos mais discutidos estão acúmulo de beta-amiloide, hiperfosforilação de tau, neuroinflamação e disfunção sináptica.",
      "O acúmulo de beta-amiloide está associado à formação de placas, enquanto a tau alterada está relacionada a emaranhados neurofibrilares. Esses processos se conectam a cascatas inflamatórias, estresse oxidativo e alterações de neurotransmissão.",
      "A perda sináptica e a disfunção de redes neurais ajudam a explicar comprometimento de memória, linguagem, funções executivas e autonomia. A progressão é heterogênea: idade, genética, comorbidades e estilo de vida modulam risco e velocidade.",
      "Compreender fisiopatologia melhora o raciocínio sobre prevenção, diagnóstico e terapias. No portal, você pode conectar esta explicação com evidências científicas e recomendações práticas de qualidade de vida.",
    ],
  },
  {
    slug: "plantas-em-evidencia",
    titulo: "Plantas em evidência",
    resumo:
      "Como interpretar evidências de produtos naturais: mecanismos plausíveis, níveis de estudo e cuidados com segurança e interações.",
    dataISO: "2026-01-30",
    data: formatarDataBR("2026-01-30"),
    imagem: "/images/plantasalzheimer.jpg",
    categoria: "Produtos Naturais",
    leituraMin: 6,
    tags: ["fitoterapia", "segurança", "interações", "evidência"],
    conteudo: [
      "Produtos naturais e plantas medicinais são frequentemente citados em suporte cognitivo e neuroproteção. Entretanto, é essencial diferenciar tradição de evidência: in vitro, in vivo, ensaios clínicos e revisões têm pesos diferentes.",
      "Mecanismos como ação antioxidante e anti-inflamatória são comuns, mas nem sempre se traduzem em benefício clínico. O mais importante é avaliar padronização do extrato, dose, duração e qualidade metodológica.",
      "Segurança é prioridade: interações com anticoagulantes, sedativos, anti-hipertensivos e antidiabéticos devem ser consideradas. Gestação, lactação e comorbidades exigem cautela.",
      "No PlantaMente, cada planta deve trazer mecanismo, modo de uso, contraindicações e interações — com apresentação clara e educativa para o usuário.",
    ],
  },
];