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
  {
    tipo: "lead",
    texto:
      "A inteligência artificial vem ganhando espaço como ferramenta de apoio na análise de exames de neuroimagem, especialmente em cenários com alta demanda clínica e necessidade de maior padronização. Em vez de substituir o profissional, a IA tem sido usada para acelerar etapas repetitivas, destacar padrões suspeitos e melhorar a triagem de casos com maior complexidade.",
  },
  {
    tipo: "h2",
    texto: "Onde a IA mais ajuda na prática",
  },
  {
    tipo: "p",
    texto:
      "Em exames estruturais e funcionais, algoritmos conseguem identificar padrões de atrofia, alterações volumétricas e assimetrias que podem passar despercebidas em avaliações muito rápidas ou em serviços com grande volume. Isso não significa que a máquina “fecha diagnóstico”, mas sim que ela funciona como um segundo olhar técnico, com foco em consistência e agilidade.",
  },
  {
    tipo: "lista",
    itens: [
      "Priorização de exames mais suspeitos para revisão especializada.",
      "Padronização de medições e laudos.",
      "Detecção mais rápida de alterações volumétricas.",
      "Apoio didático para interpretação em treinamento e ensino.",
    ],
  },
  {
    tipo: "h2",
    texto: "Quais são os benefícios esperados",
  },
  {
    tipo: "p",
    texto:
      "Os principais benefícios estão na redução do tempo de análise, no apoio à decisão clínica e na criação de fluxos mais consistentes. Em ambientes universitários e hospitalares, isso pode significar menor variabilidade entre observadores, melhor priorização de casos e mais tempo do especialista para interpretar o contexto clínico, e não apenas medir estruturas.",
  },
  {
    tipo: "h2",
    texto: "Limitações e riscos que precisam ser considerados",
  },
  {
    tipo: "p",
    texto:
      "Apesar do potencial, a IA depende da qualidade dos dados com que foi treinada. Modelos podem performar bem em um contexto e falhar em outro, especialmente quando há diferenças de equipamento, protocolo de imagem ou perfil populacional. Por isso, validação local, supervisão humana e transparência são indispensáveis.",
  },
  {
    tipo: "callout",
    titulo: "Ponto crítico",
    texto:
      "A IA deve ser vista como ferramenta de apoio, e não como substituta da interpretação clínica. O exame só faz sentido quando integrado à história do paciente, aos sintomas, ao exame físico e à avaliação cognitiva.",
  },
  {
    tipo: "h2",
    texto: "O que isso significa para o futuro",
  },
  {
    tipo: "p",
    texto:
      "A tendência é que sistemas assistivos se tornem cada vez mais comuns, tanto para triagem quanto para quantificação automatizada. Em educação e saúde digital, isso também abre espaço para interfaces mais didáticas e para comunicação mais clara entre profissionais, pacientes e cuidadores.",
  },
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
  {
    tipo: "lead",
    texto:
      "As terapias antiamiloide ocupam hoje um dos espaços mais debatidos na pesquisa e na prática clínica em Alzheimer. O interesse está no potencial de modificar a progressão biológica da doença, mas os resultados ainda exigem interpretação cuidadosa, seleção adequada de pacientes e monitoramento contínuo.",
  },
  {
    tipo: "h2",
    texto: "O que são terapias antiamiloide",
  },
  {
    tipo: "p",
    texto:
      "São abordagens desenhadas para reduzir ou interferir no acúmulo de beta-amiloide, proteína associada à formação de placas e a alterações importantes na fisiopatologia do Alzheimer. A hipótese é que, ao modificar essa etapa do processo, seja possível retardar progressão clínica em grupos específicos.",
  },
  {
    tipo: "h2",
    texto: "O que os estudos têm mostrado",
  },
  {
    tipo: "p",
    texto:
      "Os resultados indicam benefícios modestos, porém relevantes, em determinados subgrupos, principalmente quando há critérios bem definidos de estágio e perfil biológico. Entretanto, isso não significa benefício universal. A interpretação depende do desenho do estudo, dos desfechos utilizados e da relação entre benefício clínico e custo/risco.",
  },
  {
    tipo: "h2",
    texto: "Por que o monitoramento é indispensável",
  },
  {
    tipo: "p",
    texto:
      "Essas terapias podem exigir protocolos de segurança rigorosos, incluindo imagem, seguimento clínico e reavaliação frequente. Sem estrutura adequada para monitoramento, o uso se torna menos seguro e menos informativo.",
  },
  {
    tipo: "lista",
    itens: [
      "Avaliação de elegibilidade antes de iniciar tratamento.",
      "Monitoramento periódico com exames e revisão clínica.",
      "Análise individual de risco versus benefício.",
      "Discussão compartilhada com paciente e família.",
    ],
  },
  {
    tipo: "callout",
    titulo: "Cuidado com expectativas irreais",
    texto:
      "Terapias antiamiloide não representam uma “cura” e não substituem prevenção, reabilitação, suporte ao cuidador e manejo clínico global. Elas entram como uma peça possível dentro de uma estratégia mais ampla.",
  },
  {
    tipo: "h2",
    texto: "O que isso muda no futuro do cuidado",
  },
  {
    tipo: "p",
    texto:
      "O avanço dessas terapias pressiona o sistema a organizar melhor fluxos de triagem, biomarcadores, imagem e acompanhamento longitudinal. Mais do que um novo tratamento, esse movimento pode transformar a forma como se estrutura a linha de cuidado em demências.",
  },
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
  {
    tipo: "lead",
    texto:
      "As terapias antiamiloide ocupam hoje um dos espaços mais debatidos na pesquisa e na prática clínica em Alzheimer. O interesse está no potencial de modificar a progressão biológica da doença, mas os resultados ainda exigem interpretação cuidadosa, seleção adequada de pacientes e monitoramento contínuo.",
  },
  {
    tipo: "h2",
    texto: "O que são terapias antiamiloide",
  },
  {
    tipo: "p",
    texto:
      "São abordagens desenhadas para reduzir ou interferir no acúmulo de beta-amiloide, proteína associada à formação de placas e a alterações importantes na fisiopatologia do Alzheimer. A hipótese é que, ao modificar essa etapa do processo, seja possível retardar progressão clínica em grupos específicos.",
  },
  {
    tipo: "h2",
    texto: "O que os estudos têm mostrado",
  },
  {
    tipo: "p",
    texto:
      "Os resultados indicam benefícios modestos, porém relevantes, em determinados subgrupos, principalmente quando há critérios bem definidos de estágio e perfil biológico. Entretanto, isso não significa benefício universal. A interpretação depende do desenho do estudo, dos desfechos utilizados e da relação entre benefício clínico e custo/risco.",
  },
  {
    tipo: "h2",
    texto: "Por que o monitoramento é indispensável",
  },
  {
    tipo: "p",
    texto:
      "Essas terapias podem exigir protocolos de segurança rigorosos, incluindo imagem, seguimento clínico e reavaliação frequente. Sem estrutura adequada para monitoramento, o uso se torna menos seguro e menos informativo.",
  },
  {
    tipo: "lista",
    itens: [
      "Avaliação de elegibilidade antes de iniciar tratamento.",
      "Monitoramento periódico com exames e revisão clínica.",
      "Análise individual de risco versus benefício.",
      "Discussão compartilhada com paciente e família.",
    ],
  },
  {
    tipo: "callout",
    titulo: "Cuidado com expectativas irreais",
    texto:
      "Terapias antiamiloide não representam uma “cura” e não substituem prevenção, reabilitação, suporte ao cuidador e manejo clínico global. Elas entram como uma peça possível dentro de uma estratégia mais ampla.",
  },
  {
    tipo: "h2",
    texto: "O que isso muda no futuro do cuidado",
  },
  {
    tipo: "p",
    texto:
      "O avanço dessas terapias pressiona o sistema a organizar melhor fluxos de triagem, biomarcadores, imagem e acompanhamento longitudinal. Mais do que um novo tratamento, esse movimento pode transformar a forma como se estrutura a linha de cuidado em demências.",
  },
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
  {
    tipo: "lead",
    texto:
      "Protocolos de estimulação cognitiva realizados em casa vêm ganhando destaque por facilitarem acesso, frequência e continuidade. Quando bem estruturados, esses programas podem aumentar adesão e transformar o treino cognitivo em uma prática mais realista para pacientes e cuidadores.",
  },
  {
    tipo: "h2",
    texto: "Por que o treino domiciliar funciona melhor para muitas pessoas",
  },
  {
    tipo: "p",
    texto:
      "A rotina domiciliar reduz barreiras logísticas, como deslocamento, custo e rigidez de horários. Além disso, permite que a estimulação seja distribuída ao longo da semana, em sessões mais curtas e toleráveis, o que costuma melhorar participação e sensação de progresso.",
  },
  {
    tipo: "h2",
    texto: "Características de um bom protocolo domiciliar",
  },
  {
    tipo: "lista",
    itens: [
      "Sessões curtas e frequentes, em vez de treinos longos e cansativos.",
      "Objetivos claros e progressão gradual.",
      "Tarefas ajustadas ao nível cognitivo da pessoa.",
      "Feedback simples e reforço positivo.",
      "Participação do cuidador quando necessário.",
    ],
  },
  {
    tipo: "p",
    texto:
      "Ferramentas digitais podem ajudar bastante quando oferecem orientação clara, registro de desempenho e sensação de continuidade. Porém, a tecnologia só funciona bem quando o conteúdo é adequado e o uso é confortável para quem está treinando.",
  },
  {
    tipo: "h2",
    texto: "O papel do cuidador",
  },
  {
    tipo: "p",
    texto:
      "Em muitos casos, o cuidador é a peça que transforma uma estratégia “boa no papel” em uma rotina real. Ele ajuda a organizar horários, acompanhar engajamento, adaptar dificuldade e reduzir frustração. Por isso, protocolos realmente eficazes precisam ser pensados também para o cuidador.",
  },
  {
    tipo: "callout",
    titulo: "Princípio importante",
    texto:
      "Treino cognitivo não deve ser percebido como teste ou cobrança. Ele precisa ser apresentado como estímulo, cuidado e oportunidade de manutenção funcional.",
  },
  {
    tipo: "h2",
    texto: "Como o PlantaMente pode explorar isso",
  },
  {
    tipo: "p",
    texto:
      "No PlantaMente, essa notícia se conecta naturalmente aos módulos educativos, jogos, materiais interativos e propostas de treino cognitivo com linguagem menos infantil e mais alinhada ao público-alvo. O objetivo é estimular sem infantilizar, orientar sem sobrecarregar e manter foco em autonomia e qualidade de vida.",
  },
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
  {
    tipo: "lead",
    texto:
      "A relação entre alimentação, microbiota intestinal e cérebro ganhou espaço na pesquisa em neuroproteção. Embora muitos achados ainda sejam observacionais, o eixo intestino–cérebro tem sido cada vez mais citado como elemento importante na regulação inflamatória, metabólica e comportamental.",
  },
  {
    tipo: "h2",
    texto: "O que é o eixo intestino–cérebro",
  },
  {
    tipo: "p",
    texto:
      "O intestino não é apenas um órgão digestivo. Ele interage com sistema imune, metabolismo, hormônios e neurotransmissores, influenciando o funcionamento cerebral. Alterações no equilíbrio da microbiota podem impactar processos inflamatórios e metabólicos que, indiretamente, se relacionam com cognição e saúde cerebral.",
  },
  {
    tipo: "h2",
    texto: "Por que a alimentação importa",
  },
  {
    tipo: "p",
    texto:
      "Padrões alimentares ricos em fibras, vegetais, frutas, leguminosas, azeite, peixes e alimentos pouco processados tendem a favorecer melhor perfil metabólico e inflamatório. Já dietas com excesso de ultraprocessados, açúcar e baixa densidade nutricional se associam a maior risco cardiometabólico — um fator central em saúde cerebral.",
  },
  {
    tipo: "lista",
    itens: [
      "Mais fibras e vegetais favorecem diversidade alimentar e saúde intestinal.",
      "Menos ultraprocessados ajuda a reduzir inflamação sistêmica.",
      "Controle glicêmico e cardiometabólico melhora ambiente biológico cerebral.",
      "Alimentação equilibrada também impacta sono, energia e humor.",
    ],
  },
  {
    tipo: "h2",
    texto: "O que a ciência já permite afirmar",
  },
  {
    tipo: "p",
    texto:
      "A maior parte das evidências ainda aponta associação, não causalidade direta. Isso significa que dieta saudável e melhor microbiota coexistem com desfechos mais favoráveis, mas ainda há muitas variáveis envolvidas. Mesmo assim, a direção prática já é clara: padrões alimentares de melhor qualidade trazem benefícios amplos e têm boa relação risco-benefício.",
  },
  {
    tipo: "callout",
    titulo: "Evite exageros",
    texto:
      "Nem todo discurso sobre microbiota tem base sólida. O mais prudente é focar em padrão alimentar global, e não em promessas isoladas ou modismos nutricionais.",
  },
  {
    tipo: "h2",
    texto: "Aplicação no contexto do PlantaMente",
  },
  {
    tipo: "p",
    texto:
      "No PlantaMente, essa notícia se conecta com Qualidade de Vida e Prevenção, mas também com os módulos de evidência e educação. O ponto não é vender uma “dieta milagrosa”, e sim traduzir nutrição em estratégias viáveis, seguras e coerentes com o cuidado cerebral de longo prazo.",
   }
],
}
];

export const ultimasNoticias = [...noticias]
  .sort((a, b) => new Date(b.dataISO) - new Date(a.dataISO))
  .slice(0, 8);

export function getNoticiaBySlug(slug) {
  return noticias.find((n) => n.slug === slug);
}