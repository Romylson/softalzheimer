// src/data/noticiasCarousel.js
import { formatarDataBR } from "../utils/date";

export const noticiasCarousel = [
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
      "Nos últimos anos, a área de Alzheimer avançou rapidamente em triagem, biomarcadores e terapias que buscam modificar a doença...",
      "Entre os biomarcadores, combinações envolvendo p-tau e NfL têm ampliado a capacidade de estratificar pacientes...",
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
      "A doença de Alzheimer envolve alterações biológicas progressivas que podem iniciar anos antes dos sintomas clínicos...",
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
      "Produtos naturais e plantas medicinais são frequentemente citados em suporte cognitivo e neuroproteção...",
    ],
  },
];