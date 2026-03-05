// src/data/noticias.js

import { formatarDataBR } from "../utils/date";
import { noticiasCarousel } from "./noticiasCarousel";
export const noticias = [

  // ✅ NOTÍCIAS “DO SITE” (as que você já tinha, agora internas também)
  {
    slug: "biomarcadores-sanguineos-triagem-precoce",
    titulo: "Biomarcadores sanguíneos avançam na triagem precoce",
    subtitulo:
      "Como p-tau, NfL e painéis combinados estão mudando o rastreio, a estratificação de risco e a tomada de decisão clínica.",
    resumo:
      "O uso combinado de p-tau e NfL vem ganhando força para identificar risco de declínio cognitivo em fases iniciais e apoiar fluxos de triagem.",
    dataISO: "2026-01-10",
    data: "10 de janeiro de 2026",
    categoria: "Diagnóstico",
    leituraMin: 8,
    imagem: "/images/biomarcadores-noticia.jpg",
    imagemCapa: "/images/biomarcadores-noticia.jpg",
    tags: ["biomarcadores", "p-tau", "NfL", "triagem", "diagnóstico"],
    conteudo: [
      {
        tipo: "lead",
        texto:
          "Nos últimos anos, a área de Alzheimer tem se aproximado de um modelo mais biológico de avaliação. Em vez de depender apenas de sintomas e testes cognitivos, cresce o uso de biomarcadores para apoiar triagem, estratificação de risco e acompanhamento longitudinal — principalmente em pessoas com queixa de memória, comprometimento cognitivo leve (CCL) ou suspeita de progressão.",
      },
      {
        tipo: "h2",
        texto: "O que são p-tau e NfL, na prática?",
      },
      {
        tipo: "p",
        texto:
          "De forma simplificada, o p-tau (tau fosforilada) está ligado a alterações patológicas associadas ao Alzheimer, enquanto a NfL (neurofilament light chain) se relaciona a dano neuronal/degeneração de maneira mais ampla. Quando analisados em conjunto — e interpretados com contexto clínico — podem ajudar a reduzir incerteza em casos “limítrofes”, orientar necessidade de investigação adicional e fortalecer um fluxo de cuidado mais consistente.",
      },
      {
        tipo: "h2",
        texto: "Por que isso melhora a triagem precoce?",
      },
      {
        tipo: "p",
        texto:
          "A triagem precoce não é “adiantar diagnóstico a qualquer custo”. É organizar um processo que identifique quem tem maior probabilidade de progressão e, ao mesmo tempo, evite excessos em pessoas com queixas inespecíficas. Biomarcadores ajudam a separar cenários: (1) queixa subjetiva sem evidência de progressão; (2) comprometimento leve com risco aumentado; (3) quadros com sinais de neurodegeneração mais ativos; e (4) situações que exigem diagnóstico diferencial com outras causas.",
      },
      {
        tipo: "lista",
        itens: [
          "Apoiam a decisão de encaminhar para avaliação especializada (neurologia/geriatria).",
          "Ajudam a priorizar exames complementares quando o recurso é limitado.",
          "Fortalecem o monitoramento longitudinal com métricas mais objetivas.",
          "Reduzem o “vai e volta” de hipóteses quando o quadro não é típico.",
        ],
      },
      {
        tipo: "h2",
        texto: "Como integrar biomarcadores ao fluxo clínico",
      },
      {
        tipo: "p",
        texto:
          "O melhor resultado aparece quando biomarcadores são uma camada adicional, e não um substituto. Um fluxo prático e realista pode começar com: história clínica detalhada, avaliação funcional, rastreio cognitivo (instrumentos curtos), revisão de medicamentos, sono, humor, comorbidades e, quando indicado, exames laboratoriais básicos para causas reversíveis. A partir daí, biomarcadores podem entrar como um passo adicional para estratificar risco e orientar a continuidade do cuidado.",
      },
      {
        tipo: "callout",
        titulo: "Ponto de atenção",
        texto:
          "Um biomarcador isolado raramente “fecha” diagnóstico. A interpretação deve considerar idade, comorbidades, tempo de sintomas, nível de escolaridade, perfil funcional e, sempre que possível, o padrão clínico global.",
      },
      {
        tipo: "h2",
        texto: "Limitações e cuidados importantes",
      },
      {
        tipo: "p",
        texto:
          "Mesmo com avanços, existem limites: diferentes métodos e plataformas podem gerar variações; resultados podem ser influenciados por condições clínicas; e nem sempre há acesso amplo. Além disso, um “resultado sugerindo maior risco” precisa vir acompanhado de orientação, plano de acompanhamento e apoio ao paciente e família — para evitar ansiedade sem benefício prático.",
      },
      {
        tipo: "h2",
        texto: "O que o PlantaMente recomenda fazer agora",
      },
      {
        tipo: "lista",
        itens: [
          "Padronizar triagem (sintomas + funcionalidade + rastreio cognitivo).",
          "Organizar um fluxo claro de encaminhamento quando houver sinais de progressão.",
          "Priorizar medidas de redução de risco: atividade física, sono, controle cardiometabólico e estímulo cognitivo.",
          "Registrar evolução com periodicidade e critérios consistentes.",
        ],
      },
      {
        tipo: "p",
        texto:
          "No PlantaMente, esta notícia se conecta diretamente com as seções de Fisiopatologia (para entender os mecanismos), Qualidade de Vida e Prevenção (para intervenções práticas), e Seção Científica (para explorar evidências por tipo de estudo).",
      },
    ],
  },
  {
    slug: "sono-fragmentado-e-risco-demencia",
    titulo: "Sono de má qualidade é associado à pior progressão cognitiva",
    subtitulo:
      "Entenda por que sono fragmentado, apneia e baixa eficiência de sono aparecem como fatores relevantes no risco e na progressão do declínio cognitivo.",
    resumo:
      "Evidências recentes reforçam que sono ruim pode agravar marcadores de risco e comprometer consolidação de memória, exigindo abordagem prática e contínua.",
    dataISO: "2026-01-24",
    data: "24 de janeiro de 2026",
    categoria: "Prevenção",
    leituraMin: 9,
    imagem: "/images/sono.jpg",
    imagemCapa: "/images/sono.jpg",
    tags: ["sono", "memória", "apneia", "prevenção", "neuroproteção"],
    conteudo: [
      {
        tipo: "lead",
        texto:
          "Sono não é um “detalhe” do estilo de vida. Ele participa diretamente da consolidação de memória, do equilíbrio neuroendócrino e do controle inflamatório. Quando o sono é fragmentado (muitos despertares), curto ou de baixa qualidade, o cérebro perde uma janela essencial de recuperação e regulação — e isso se relaciona a pior desempenho cognitivo e maior vulnerabilidade ao longo do tempo.",
      },
      { tipo: "h2", texto: "O que significa sono de má qualidade?" },
      {
        tipo: "p",
        texto:
          "Sono de má qualidade pode envolver: dificuldade para iniciar o sono, despertares frequentes, despertar precoce, sonolência diurna, sensação de sono não reparador e horários irregulares. Entre as causas comuns estão estresse crônico, ansiedade/depressão, dor, uso de álcool, excesso de cafeína, sedentarismo, e distúrbios como apneia obstrutiva do sono.",
      },
      { tipo: "h2", texto: "Por que o sono afeta memória e cognição?" },
      {
        tipo: "p",
        texto:
          "Durante o sono, especialmente em fases profundas e no REM, o cérebro reorganiza e consolida informações aprendidas, reforçando circuitos neurais e removendo “ruído” sináptico. Quando o sono é interrompido repetidamente, esse processo fica prejudicado. Além disso, alterações do sono podem piorar atenção, velocidade de processamento, humor e motivação — o que muitas vezes é interpretado como “memória ruim”.",
      },
      {
        tipo: "lista",
        itens: [
          "Sono fragmentado → pior consolidação de memória e aprendizado.",
          "Apneia e hipóxia noturna → estresse fisiológico e pior atenção diurna.",
          "Irregularidade circadiana → desregulação hormonal e inflamatória.",
          "Sedentarismo + sono ruim → ciclo de fadiga e menor reserva cognitiva.",
        ],
      },
      { tipo: "h2", texto: "Sinais de alerta que merecem investigação" },
      {
        tipo: "lista",
        itens: [
          "Ronco alto com pausas respiratórias observadas.",
          "Sonolência diurna excessiva, cochilos frequentes involuntários.",
          "Acordar com dor de cabeça, boca seca, sensação de sufocamento.",
          "Insônia persistente por semanas com impacto funcional.",
          "Uso contínuo de sedativos sem reavaliação clínica.",
        ],
      },
      {
        tipo: "callout",
        titulo: "Atenção (muito comum)",
        texto:
          "Pessoas com queixa de memória podem ter, na verdade, um problema de sono de base (apneia/insônia). Tratar o sono pode melhorar desempenho cognitivo e qualidade de vida, mesmo quando há outras condições associadas.",
      },
      { tipo: "h2", texto: "O que fazer: plano prático em etapas" },
      {
        tipo: "p",
        texto:
          "Uma abordagem simples e efetiva costuma funcionar melhor do que mudanças radicais. Comece pelo básico: consistência de horários, luz pela manhã, menos telas à noite, cafeína limitada e rotina de desaceleração. Depois, avance para atividade física regular e ajuste de ambiente (temperatura, ruído, iluminação). Se houver sinais de apneia, procure avaliação médica, pois tratar apneia pode melhorar fadiga, atenção e humor.",
      },
      {
        tipo: "lista",
        itens: [
          "Horário fixo para dormir e acordar (incluindo fins de semana).",
          "Luz natural de manhã + reduzir luz forte à noite.",
          "Evitar telas 60–90 min antes de deitar.",
          "Atividade física (preferencialmente diurna).",
          "Checar apneia se houver ronco/pausas respiratórias/sonolência diurna.",
        ],
      },
      {
        tipo: "p",
        texto:
          "No PlantaMente, esta notícia se conecta à área de Qualidade de Vida e Prevenção com um roteiro de hábitos e avaliação de risco, além de conteúdos de fisiopatologia para entender por que sono e inflamação entram no mesmo mapa.",
      },
    ],
  },

  {
    slug: "intervencoes-multidominio-melhores-resultados",
    titulo: "Intervenções multidomínio mostram melhores resultados",
    subtitulo:
      "Por que combinar dieta, atividade física, sono, estímulo cognitivo e saúde cardiometabólica tende a funcionar melhor do que intervenções isoladas.",
    resumo:
      "Programas multidomínio têm mostrado benefícios superiores por atuarem em múltiplos fatores de risco simultaneamente e melhorarem adesão.",
    dataISO: "2026-02-07",
    data: "07 de fevereiro de 2026",
    categoria: "Prevenção",
    leituraMin: 10,
    imagem: "/images/intervencao.jpg",
    imagemCapa: "/images/intervencao.jpg",
    tags: ["multidomínio", "dieta", "atividade física", "treino cognitivo", "prevenção"],
    conteudo: [
      {
        tipo: "lead",
        texto:
          "Quando falamos em risco e progressão de declínio cognitivo, raramente existe um único fator. É por isso que intervenções multidomínio — que combinam mudanças graduais em diferentes áreas — costumam ter melhor desempenho do que “uma intervenção por vez”. Na prática, elas criam um sistema de suporte: saúde cardiometabólica, sono, atividade física, nutrição, estímulo cognitivo e vínculos sociais trabalhando juntos.",
      },
      { tipo: "h2", texto: "O que é uma intervenção multidomínio?" },
      {
        tipo: "p",
        texto:
          "É um programa estruturado que integra componentes em paralelo: atividade física, orientação alimentar, treino cognitivo, educação em saúde, suporte ao sono, controle de pressão/glicemia/lipídios e estratégias de adesão. O objetivo é reduzir vulnerabilidades somadas e fortalecer reserva cognitiva e funcional.",
      },
      { tipo: "h2", texto: "Por que funciona melhor?" },
      {
        tipo: "p",
        texto:
          "Porque os fatores de risco “se somam”. Um idoso sedentário, com sono ruim, pressão alta e baixa interação social não melhora de forma sustentada apenas com um suplemento ou um treino cognitivo isolado. A combinação cria sinergia: atividade física melhora sono e humor; sono melhora atenção; dieta adequada melhora cardiometabólico; e todos juntos aumentam energia e disposição para manter o plano.",
      },
      {
        tipo: "lista",
        itens: [
          "Mais impacto no risco global (atua em várias causas ao mesmo tempo).",
          "Melhor adesão (mudanças pequenas + acompanhamento).",
          "Resultados mais estáveis (menos dependência de um único hábito).",
          "Benefícios funcionais (autonomia, humor, energia, sociabilidade).",
        ],
      },
      { tipo: "h2", texto: "Exemplo de plano simples (começando do zero)" },
      {
        tipo: "lista",
        itens: [
          "Semana 1–2: caminhada leve 3x/semana + horário regular de sono.",
          "Semana 3–4: aumentar caminhada + reduzir ultraprocessados + mais proteínas e fibras.",
          "Mês 2: incluir 2 sessões de força (em casa ou academia) + 10–15 min/dia de treino cognitivo.",
          "Mês 3: checar pressão/glicemia + manter rotina + socialização planejada (grupo/atividades).",
        ],
      },
      {
        tipo: "callout",
        titulo: "O segredo é consistência",
        texto:
          "Melhor do que uma mudança intensa por 7 dias é uma mudança moderada sustentada por 90 dias. O cérebro responde bem a rotina, repetição e progressão gradual.",
      },
      {
        tipo: "p",
        texto:
          "No PlantaMente, você pode usar esta notícia como guia e navegar para Qualidade de Vida e Prevenção (planos e checklists), Seção Científica (evidências por tipo de estudo) e jogos/treinos cognitivos com abordagem educativa.",
      },
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