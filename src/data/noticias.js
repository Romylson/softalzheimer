// src/data/noticias.js

import { formatarDataBR } from "../utils/date";

export const noticias = [

  // ✅ NOTÍCIAS “DO SITE” (as que você já tinha, agora internas também)
  {
    slug: "biomarcadores-sanguineos-triagem-precoce",
    titulo: "Biomarcadores sanguíneos avançam na triagem precoce",
    resumo:
      "Uso combinado de p-tau e NfL ganha força como apoio para identificar risco e estágio em fases iniciais.",
    dataISO: "2026-01-10",
    data: formatarDataBR("2026-01-10"),
    imagem: "/images/biomarcadores-noticia.jpg",
    categoria: "Diagnóstico",
    leituraMin: 5,
    tags: ["p-tau", "NfL", "triagem"],
    conteudo: [
      "Biomarcadores sanguíneos têm evoluído como ferramentas de triagem e estratificação de risco, especialmente quando combinados com avaliação clínica e cognitiva.",
      "Marcadores como p-tau e NfL são frequentemente citados por refletirem processos ligados a tau e dano neuroaxonal, respectivamente. A interpretação deve considerar idade, comorbidades e contexto clínico.",
      "O uso na prática tende a crescer à medida que protocolos e disponibilidade se ampliam, mas ainda exige cautela: não substitui avaliação médica nem exames confirmatórios quando necessários.",
      
    ],
  },
  {
    slug: "sono-e-progresso-cognitivo",
    titulo: "Sono de má qualidade é associado à pior progressão cognitiva",
    resumo:
      "Sono fragmentado e baixa qualidade podem influenciar memória, inflamação e risco cognitivo ao longo do tempo.",
    dataISO: "2026-01-24",
    data: formatarDataBR("2026-01-24"),
    imagem: "/images/sono.jpg",
    categoria: "Prevenção",
    leituraMin: 5,
    tags: ["sono", "memória", "risco"],
    conteudo: [
      "O sono desempenha papel central na consolidação de memória e na regulação de processos inflamatórios e metabólicos.",
      "Revisões sugerem associações entre sono fragmentado, pior desempenho cognitivo e maior risco ao longo do tempo — embora existam variáveis confundidoras.",
      "Rotina, higiene do sono, atividade física e manejo de estresse são estratégias com boa aplicabilidade e baixo risco para a maioria dos usuários.",
    ],
  },
  {
    slug: "intervencoes-multidominio-melhores-resultados",
    titulo: "Intervenções multidomínio mostram melhores resultados",
    resumo:
      "Combinar dieta, exercício e treino cognitivo tende a trazer ganhos superiores a abordagens isoladas.",
    dataISO: "2026-02-07",
    data: formatarDataBR("2026-02-07"),
    imagem: "/images/intervencao.jpg",
    categoria: "Prevenção",
    leituraMin: 6,
    tags: ["dieta", "exercício", "treino cognitivo"],
    conteudo: [
      "Intervenções multidomínio integram hábitos de vida (alimentação, exercício), saúde cardiometabólica e estímulo cognitivo.",
      "Em geral, estratégias combinadas melhoram adesão e impacto ao atuar em múltiplos fatores de risco.",
      "A personalização — considerando preferências, limitações e suporte familiar — é crucial para sustentar mudanças ao longo do tempo.",
    ],
  },
  {
    slug: "ia-em-neuroimagem-reduz-tempo",
    titulo: "IA em neuroimagem reduz tempo de apoio diagnóstico",
    resumo:
      "Ferramentas assistivas têm acelerado análise de imagem e apoiado equipes clínicas em padrões de neurodegeneração.",
    dataISO: "2026-02-21",
    data: formatarDataBR("2026-02-21"),
    imagem: "/images/Ia.jpg",
    categoria: "Tecnologia",
    leituraMin: 5,
    tags: ["IA", "neuroimagem", "diagnóstico"],
    conteudo: [
      "Soluções de IA em neuroimagem buscam apoiar detecção de padrões e priorização de casos, reduzindo tempo de análise.",
      "A aplicação ideal é como suporte à decisão, com validação, auditoria e integração ao contexto clínico.",
      "Em educação, a IA também pode auxiliar na visualização de conceitos e no acompanhamento de aprendizagem.",
    ],
  },
  {
    slug: "atividade-fisica-novas-evidencias",
    titulo: "Prevenção com atividade física ganha novas evidências",
    resumo:
      "Exercícios aeróbicos regulares se associam a menor risco e melhor desempenho funcional em idosos.",
    dataISO: "2026-03-04",
    data: formatarDataBR("2026-03-04"),
    imagem: "/images/prevencao.jpg",
    categoria: "Prevenção",
    leituraMin: 5,
    tags: ["exercício", "risco", "idosos"],
    conteudo: [
      "Atividade física é uma das medidas mais consistentes associadas à redução de risco e melhor manutenção funcional.",
      "O ideal é combinar exercício aeróbico com força e equilíbrio, respeitando segurança e limitações individuais.",
      "A regularidade e o acompanhamento são mais importantes do que intensidade extrema.",
    ],
  },
  {
    slug: "terapias-antiamiloide-avaliacao",
    titulo: "Avanços em terapias antiamiloide seguem em avaliação",
    resumo:
      "Acompanhamentos apontam benefícios em subgrupos, exigindo monitoramento e seleção cuidadosa.",
    dataISO: "2026-03-19",
    data: formatarDataBR("2026-03-19"),
    imagem: "/images/avancos.jpg",
    categoria: "Tratamento",
    leituraMin: 6,
    tags: ["antiamiloide", "monitoramento", "subgrupos"],
    conteudo: [
      "Terapias direcionadas ao amiloide trazem discussões sobre eficácia clínica, elegibilidade e eventos adversos.",
      "Protocolos tendem a exigir monitoramento e critérios de seleção bem definidos, além de decisão compartilhada.",
      "A pesquisa continua evoluindo para ampliar segurança, identificar respondedores e refinar desfechos clínicos.",
    ],
  },
  {
    slug: "estimulacao-cognitiva-domiciliar-adesao",
    titulo: "Estimulação cognitiva domiciliar melhora adesão",
    resumo:
      "Tarefas guiadas por aplicativo aumentam frequência e consistência do treino cognitivo.",
    dataISO: "2026-04-02",
    data: formatarDataBR("2026-04-02"),
    imagem: "/images/protocolos.jpg",
    categoria: "Educação",
    leituraMin: 5,
    tags: ["aplicativos", "cognição", "adesão"],
    conteudo: [
      "Protocolos domiciliares facilitam acesso e continuidade do treino cognitivo, principalmente com suporte de cuidadores.",
      "O desenho das tarefas deve respeitar carga cognitiva, progressão e feedback claro para motivação.",
      "A integração com educação do cuidador melhora resultados e reduz frustração do usuário.",
    ],
  },
  {
    slug: "nutricao-e-microbiota-neuroprotecao",
    titulo: "Nutrição e microbiota entram no foco da neuroproteção",
    resumo:
      "Padrões alimentares anti-inflamatórios se associam a melhor desempenho cognitivo em estudos observacionais.",
    dataISO: "2026-04-16",
    data: formatarDataBR("2026-04-16"),
    imagem: "/images/microbiota.jpg",
    categoria: "Nutrição",
    leituraMin: 6,
    tags: ["microbiota", "dieta", "inflamação"],
    conteudo: [
      "O eixo intestino-cérebro vem sendo explorado em diferentes condições neurológicas, incluindo declínio cognitivo.",
      "Dietas com perfil anti-inflamatório e boa qualidade nutricional podem contribuir para saúde cardiometabólica e cerebral.",
      "Apesar do interesse, é importante evitar conclusões exageradas: muitos achados ainda são correlacionais.",
    ],
  },
];

export const ultimasNoticias = [...noticias]
  .sort((a, b) => new Date(b.dataISO) - new Date(a.dataISO))
  .slice(0, 8);

export function getNoticiaBySlug(slug) {
  return noticias.find((n) => n.slug === slug);
}