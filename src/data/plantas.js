import imgGinkgo from "../assets/ginkgo.jpg";
import imgBacopa from "../assets/bacopa.jpg";
import imgCurcuma from "../assets/curcuma.jpg";
import imgSalvia from "../assets/salvia.jpg"
import imgMelissa from "../assets/melissa.jpg"
import imgPanax from "../assets/panax.jpg" 
import ImgAshwagandha from "../assets/ashwagandha.jpg" 
import ImgRhodiola from "../assets/rhodiola.jpg" 
import ImgGotu from "../assets/gotu.jpg"
import imgPlantasMedicinais from "../assets/plantas-medicinais.avif";
import imgPlanta from "../assets/planta.avif";
import imgGinseng from "../assets/ginseng.jpg";
import imgErvaDoce from "../assets/erva-doce.jpg";
import imgLavanda from "../assets/lavanda.jpg";
import imgEucalipto from "../assets/eucalipto.jpg";
import imgCamomila from "../assets/camomila.jpg";
import imgAlecrim from "../assets/alecrim.jpg";
import imgGengibre from "../assets/gengibre.jpg";
import imgCanela from "../assets/canela.jpg";
import imgUva from "../assets/uva.jpg";
import imgManjericao from "../assets/manjericao-sagrado.jpg";
import imgReishi from "../assets/reishi.jpg";
import imgUnhadegato from "../assets/unha-de-gato.jpg";
import imgMaracuja from "../assets/maracuja.jpg";
import imgChaverde from "../assets/chaverde.jpg";
import imgAcafrao from "../assets/acafrao.jpg";
import imgErvacidreira from "../assets/erva-cidreira.jpg"
import imgErvadesaojoao from "../assets/erva-de-sao-joao.jpg";
import imgAlcacuz from "../assets/alcacuz.jpg";
import imgGinseng from "../assets/ginseng-siberiano.jpg" 
const plantas = [
  {
    id: 1,
    nome: "Ginkgo (Ginkgo biloba, árvore-da-avenca, noz-do-japão, árvore dos quarenta escudos, ginkgô, maidenhair tree)",
    nome_cientifico: "Ginkgo biloba L.",
    origem: "China, Japão",
    mecanismos: "Melhora a circulação cerebral e atua como antioxidante",
    modosUso: "Infusão das folhas, extrato seco em cápsulas",
    usos: "Memória, antioxidante.",
    efeitosColaterais: [
      "Dor de cabeça, tontura, náusea,Distúrbios gastrointestinais leves,Reações alérgicas cutâneas,Possível aumento do risco de sangramento."
    ],
    contraindicacoes: [
      "Uso concomitante com anticoagulantes (ex: varfarina, AAS),Pré-operatório (pelo risco de sangramentos),Gestantes e lactantes (uso não recomendado)."
    ],
    imagem: imgGinkgo,
    autorImagem: "Fotos de domínio público (Wikimedia Commons, Unsplash, Pixabay)",
    coordenadas: [35.8617, 104.1954], // China
    interacoes: [
      {
        medicamento: "Varfarina",
        risco: "Aumenta risco de sangramento.",
        evidencia: "Estudos sugerem interação significativa. Consulte o médico."
      },
      {
        medicamento: "Aspirina",
        risco: "Pode potencializar efeito anticoagulante.",
        evidencia: "Relatos clínicos."
      }
    ]
  },
  {
    id: 2,
    nome: "Bacopa (Bacopa monnieri, brahmi, bacopá, hissopo-d'água, erva-da-memória, gratiola indiana)",
    nome_cientifico: "Bacopa monnieri (L.) Wettst.",
    origem: "Índia",
    mecanismos: "Modula neurotransmissores e tem ação neuroprotetora",
    modosUso: "Chá das folhas ou extrato padronizado",
    usos: "Ajuda para memória e ansiedade.",
    efeitosColaterais: [
      "Náusea, dor abdominal,Fadiga e sonolência,Boca seca."
    ],
    contraindicacoes: [
      "Hipotireoidismo (pode interferir nos hormônios tireoidianos),Gravidez e lactação (falta de dados de segurança),Pessoas com úlceras gástricas (efeito colateral gastrointestinal)."
    ],
    imagem: imgBacopa,
    autorImagem: "Fotos de domínio público (Wikimedia Commons, Unsplash, Pixabay)",
    coordenadas: [20.5937, 78.9629], // Índia
    interacoes: [
      {
        medicamento: "Depressores do SNC",
        risco: "Pode potencializar efeitos sedativos.",
        evidencia: "Usar com cautela junto a ansiolíticos/sedativos."
      }
    ]
  },
  {
    id: 3,
    nome: "Curcuma longa (cúrcuma, açafrão-da-terra, turmérico, gengibre-amarelo, açafroa, raiz-do-sol)",
    nome_cientifico: "Curcuma longa L.",
    origem: "Índia, Sudeste Asiático",
    mecanismos: "Atividade anti-inflamatória e antioxidante via inibição de citocinas e modulação de NF-κB e COX-2. Pode melhorar a função cognitiva por reduzir neuroinflamação.",
    modosUso: "Pó da raiz em cápsulas, chá ou como tempero (açafrão-da-terra).",
    usos: "Condimento, medicina tradicional contra inflamação.",
    efeitosColaterais: [
      "Distúrbios gastrointestinais leves,Irritação gástrica em doses elevadas."
    ],
    contraindicacoes: [
      "Gravidez e lactação sem orientação médica; Pacientes com obstrução biliar ou cálculos biliares."
    ],
    imagem: imgCurcuma,
    autorImagem: "Fotos de domínio público (Wikimedia Commons, Unsplash, Pixabay)",
    coordenadas: [15.8700, 100.9925], // Tailândia
    interacoes: [
      {
        medicamento: "Anticoagulantes",
        risco: "Pode aumentar risco de sangramento.",
        evidencia: "Evidências em estudos experimentais."
      }
    ]
  },
  {
    id: 4,
    nome: "Salvia officinalis (sálvia, salva, sage, sálvia-comum, sálvia-dos-jardins, sálvia-medicinal)",
    nome_cientifico: "Salvia L.",
    origem: "Europa, Mediterrâneo",
    mecanismos: "Inibição da acetilcolinesterase (semelhante a fármacos usados no Alzheimer), ação antioxidante e neuroprotetora.",
    modosUso: "Infusão das folhas, óleo essencial, extrato seco padronizado.",
    usos: "Tradição europeia para memória e digestão.",
    efeitosColaterais: [
      "Náuseas em doses elevadas, Efeitos neurológicos (tontura, convulsões) se consumida em excesso."
    ],
    contraindicacoes: [
      "Gravidez e lactação; Pessoas com epilepsia ou histórico de convulsões."
    ],
    imagem: imgSalvia,
    autorImagem: "Fotos de domínio público (Wikimedia Commons, Unsplash, Pixabay)",
    coordenadas: [41.8719, 12.5674], // Itália
    interacoes: [
      {
        medicamento: "Anticonvulsivantes",
        risco: "Potencializa risco de convulsões.",
        evidencia: "Evitar em epilepsia ou com anticonvulsivantes."
      }
    ]
  },
  {
    id: 5,
    nome: "Melissa officinalis (erva-cidreira, melissa, toronjil, cidreira-verdadeira, melissa-do-limão, balm)",
    nome_cientifico: " Melissa officinalis L.",
    origem: "Europa, Oriente Médio",
    mecanismos: " Modulação do GABA com efeito ansiolítico e calmante; ação colinérgica leve e antioxidante.",
    modosUso: "Chá das folhas, cápsulas com extrato seco, tintura.",
    usos: "Calmante, auxílio para memória.",
    efeitosColaterais: [
      "Sonolência, Dores de cabeça ocasionais."
    ],
    contraindicacoes: [
      "Uso com sedativos ou antidepressivos, Gravidez sem supervisão médica."
    ],
    imagem: imgMelissa,
    autorImagem: "Fotos de domínio público (Wikimedia Commons, Unsplash, Pixabay)",
    coordenadas: [48.3794, 31.1656], // Ucrânia
    interacoes: [
      {
        medicamento: "Antidiabéticos",
        risco: "Pode potencializar efeito hipoglicemiante.",
        evidencia: "Monitorar glicemia se usar junto."
      }
    ]
  },
  {
    id: 6,
    nome: "Panax (ginseng, ginseng-coreano, ginseng-asiático, ginseng-vermelho, panax, ginseng-verdadeiro)",
    nome_cientifico: "Panax ginseng C.A.Mey.",
    origem: "China, Coreia",
    mecanismos: "Aumenta liberação de acetilcolina, atividade neuroprotetora, modulador do eixo HPA e melhora da memória por ação sobre BDNF e neurotransmissores.",
    modosUso: "Cápsulas com extrato padronizado, pó da raiz, chá.",
    usos: "Tônico cerebral, tradicional na Ásia.",
    efeitosColaterais: [
      "Insônia, Dor de cabeça, Aumento da pressão ."
    ],
    contraindicacoes: [
      "Hipertensão não controlada, Gravidez e lactação."
    ],
    imagem: imgPanax,
    autorImagem: "Fotos de domínio público (Wikimedia Commons, Unsplash, Pixabay)",
    coordenadas: [36.2048, 138.2529], // Japão
    interacoes: [
      {
        medicamento: "Imunossupressores",
        risco: "Pode interferir no efeito de imunossupressores.",
        evidencia: "Ação potencialmente imunomoduladora."
      },
      {
        medicamento: "Ansiolíticos e sedativos",
        risco: "Potencializa efeito sedativo.",
        evidencia: "Evitar uso concomitante ou ajustar dose."
      }
    ]
  },
  {
    id: 7,
    nome: "Withania somnifera (ashwagandha, ginseng-indiano, withania, cereja-de-inverno, sonífera, winter cherry)",
    nome_cientifico: "Withania somnifera (L.) Dunal",
    origem: "Índia, Oriente Médio",
    mecanismos: "Adaptógeno, reduz o estresse e a neuroinflamação; ação GABAérgica e regenerativa em neurônios.",
    modosUso: "cápsulas ou pó da raiz, extrato aquoso ou hidroalcoólico.",
    usos: "Ajuda para estresse, memória e vitalidade.",
    efeitosColaterais: [
      "Distúrbios gastrointestinais leves, Sonolência."
    ],
    contraindicacoes: [
      "Gravidez, Doenças autoimunes sem orientação médica."
    ],
    imagem: ImgAshwagandha,
    autorImagem: "Fotos de domínio público (Wikimedia Commons, Unsplash, Pixabay)",
    coordenadas: [28.6139, 77.2090], // Nova Délhi, Índia
    interacoes: [
      {
        medicamento: "Imunossupressores",
        risco: "Pode interferir no efeito de imunossupressores.",
        evidencia: "Ação potencialmente imunomoduladora."
      },
      {
        medicamento: "Ansiolíticos e sedativos",
        risco: "Potencializa efeito sedativo.",
        evidencia: "Evitar uso concomitante ou ajustar dose."
      }
    ]
  },
  {
    id: 8,
    nome: "Rhodiola (raiz dourada, rodíola, raiz-de-ouro, coroa-do-rei, golden root, rose root)",
    nome_cientifico: "Rhodiola rosea L.",
    origem: "Sibéria, Escandinávia",
    mecanismos: "Modulação do cortisol e dopamina, aumenta resistência ao estresse, melhora memória e cognição por mecanismos mitocondriais e antioxidantes.",
    modosUso: "Cápsulas com extrato padronizado, chá da raiz seca.",
    usos: "Adaptógeno, usado para fadiga e função cognitiva.",
    efeitosColaterais: [
      "Tontura, Irritabilidade, Boca seca."
    ],
    contraindicacoes: [
      "Transtorno bipolar, Uso concomitante com antidepressivos sem acompanhamento."
    ],
    imagem: ImgRhodiola,
    autorImagem: "Fotos de domínio público (Wikimedia Commons, Unsplash, Pixabay)",
    coordenadas: [60.4720, 8.4689], // Noruega
    interacoes: [
    {
      medicamento: "Antidepressivos ISRS",
      risco: "Pode potencializar os efeitos dos antidepressivos, aumentando risco de síndrome serotoninérgica.",
      evidencia: "Cautela em pacientes que usam sertralina, fluoxetina, paroxetina e outros ISRS."
    },
    {
      medicamento: "Estimulantes (ex: cafeína, anfetaminas)",
      risco: "Pode aumentar efeitos estimulantes e provocar insônia, agitação ou taquicardia.",
      evidencia: "Monitorar sintomas se associado a estimulantes."
    }
   ]
  },
  {
    id: 9,
    nome: "Centella asiatica (gotu kola, centelha-asiática, erva-do-tigre, pegaga, pennywort asiático, brahmi)",
    nome_cientifico: "Centella asiatica (L.) Urb.",
    origem: "Índia, Sri Lanka, China, Madagascar e regiões tropicais da África e América do Sul.",
    mecanismos: "Melhora da função cognitiva por neurogênese e sinaptogênese,estímulo da circulação cerebral e atividade antioxidante e redução do estresse oxidativo e neuroinflamação",
    modosUso: "Infusão (chá) das folhas secas,extrato padronizado em cápsulas e tintura alcoólica",
    usos: "Cicatrização de feridas e problemas de pele,circulação e saúde vascular",
    efeitosColaterais: [
      "Dor de cabeça, Náusea, Fotossensibilidade."
    ],
    contraindicacoes: [
      "Doença hepática, Gravidez sem acompanhamento médico."
    ],
    imagem: ImgGotu,
    autorImagem: "Fotos de domínio público (Wikimedia Commons, Unsplash, Pixabay)",
    coordenadas: [7.8731, 80.7718], 
    interacoes: [
    {
      medicamento: "Sedativos (benzodiazepínicos, barbitúricos)",
      risco: "Pode potencializar os efeitos sedativos, causando sonolência excessiva.",
      evidencia: "Baseado em propriedades ansiolíticas relatadas em estudos pré-clínicos."
    },
    {
      medicamento: "Anticonvulsivantes",
      risco: "Potencial aumento da ação anticonvulsivante ou risco de toxicidade.",
      evidencia: "Interações teóricas baseadas em efeitos sobre neurotransmissores."
    }
   ]

  },

  {
    id: 14,
    nome: "Zingiber officinale (gengibre, ginger)",
    nome_cientifico: "Zingiber officinale Roscoe",
    origem: "Ásia tropical",
    mecanismos: "Gingeróis com ação anti-inflamatória, antioxidante e possível proteção neuronal indireta.",
    modosUso: "Infusão, cápsulas e uso culinário.",
    usos: "Saúde metabólica e apoio anti-inflamatório.",
    efeitosColaterais: ["Azia.", "Desconforto gastrointestinal em doses altas."],
    contraindicacoes: ["Cautela em uso de anticoagulantes.", "Doenças biliares sem avaliação médica."],
    imagem: imgGengibre,
    autorImagem: "Fotos de domínio público (Wikimedia Commons, Unsplash, Pixabay)",
    coordenadas: [23.6978, 120.9605],
    interacoes: [
      { medicamento: "Anticoagulantes", risco: "Pode aumentar risco de sangramento.", evidencia: "Monitorar clinicamente." }
    ]
  },

  {
    id: 15,
    nome: "Eucalyptus globulus (eucalipto, blue gum)",
    nome_cientifico: "Eucalyptus globulus Labill.",
    origem: "Austrália",
    mecanismos: "Rico em monoterpenos (ex.: 1,8-cineol), com potencial antioxidante e modulação neuroinflamatória.",
    modosUso: "Inalação aromática, infusão (uso tradicional) e extratos padronizados.",
    usos: "Suporte respiratório e potencial adjuvante em saúde cerebral por ação anti-inflamatória.",
    efeitosColaterais: ["Irritação gástrica em excesso.", "Sensibilidade a óleos essenciais em indivíduos suscetíveis."],
    contraindicacoes: ["Uso interno de óleo essencial sem orientação.", "Crianças pequenas e gestantes sem supervisão."],
    imagem: imgEucalipto,
    autorImagem: "Fotos de domínio público (Wikimedia Commons, Unsplash, Pixabay)",
    coordenadas: [-25.2744, 133.7751],
    interacoes: [
      { medicamento: "Sedativos", risco: "Pode alterar resposta individual em associação aromática.", evidencia: "Usar com cautela e orientação." }
    ]
  },
  {
    id: 16,
    nome: "Matricaria chamomilla (camomila, chamomile)",
    nome_cientifico: "Matricaria chamomilla L.",
    origem: "Europa e Ásia",
    mecanismos: "Flavonoides e terpenos com ação antioxidante, ansiolítica e potencial neuroprotetora indireta.",
    modosUso: "Infusão floral, extratos e formulações fitoterápicas.",
    usos: "Qualidade do sono, ansiedade e suporte ao equilíbrio neurocomportamental.",
    efeitosColaterais: ["Reações alérgicas em sensíveis à família Asteraceae.", "Sonolência leve."],
    contraindicacoes: ["Alergia conhecida à camomila.", "Cautela com sedativos."],
    imagem: imgCamomila,
    autorImagem: "Fotos de domínio público (Wikimedia Commons, Unsplash, Pixabay)",
    coordenadas: [51.1657, 10.4515],
    interacoes: [
      { medicamento: "Ansiolíticos", risco: "Pode potencializar efeito sedativo.", evidencia: "Monitorar resposta clínica." }
    ]
  },
  {
    id: 17,
    nome: "Lavandula spp. (lavanda, alfazema)",
    nome_cientifico: "Lavandula angustifolia Mill.",
    origem: "Mediterrâneo",
    mecanismos: "Linalol e acetato de linalila com ação ansiolítica e potencial modulação de neuroinflamação.",
    modosUso: "Aromaterapia, infusão e extratos padronizados.",
    usos: "Sono, manejo de estresse e suporte da saúde cerebral.",
    efeitosColaterais: ["Sonolência.", "Dermatite de contato em pele sensível."],
    contraindicacoes: ["Uso interno de óleo essencial sem orientação profissional."],
    imagem: imgLavanda,
    autorImagem: "Fotos de domínio público (Wikimedia Commons, Unsplash, Pixabay)",
    coordenadas: [43.2965, 5.3698],
    interacoes: [
      { medicamento: "Sedativos", risco: "Aumento do efeito sedativo.", evidencia: "Ajustar uso conforme orientação." }
    ]
  },
  {
    id: 18,
    nome: "Cinnamomum verum (canela, cinnamon)",
    nome_cientifico: "Cinnamomum verum J.Presl",
    origem: "Sri Lanka e Índia",
    mecanismos: "Compostos fenólicos e terpenoides com potencial antioxidante e anti-inflamatório.",
    modosUso: "Uso culinário, infusão e extrato padronizado.",
    usos: "Suporte metabólico e adjuvante anti-inflamatório.",
    efeitosColaterais: ["Irritação gastrointestinal em excesso."],
    contraindicacoes: ["Cautela em doenças hepáticas e uso concentrado sem orientação."],
    imagem: imgCanela,
    autorImagem: "Fotos de domínio público (Wikimedia Commons, Unsplash, Pixabay)",
    coordenadas: [7.8731, 80.7718],
    interacoes: [
      { medicamento: "Antidiabéticos", risco: "Pode potencializar efeito hipoglicemiante.", evidencia: "Monitorar glicemia." }
    ]
  },
  {
    id: 19,
    nome: "Vitis vinifera (uva, grape seed)",
    nome_cientifico: "Vitis vinifera L.",
    origem: "Europa e Ásia Ocidental",
    mecanismos: "Polifenóis (resveratrol/proantocianidinas) com ação antioxidante e anti-inflamatória.",
    modosUso: "Extrato de semente de uva, dieta rica em uvas e derivados.",
    usos: "Suporte vascular e proteção contra estresse oxidativo.",
    efeitosColaterais: ["Desconforto gastrointestinal leve."],
    contraindicacoes: ["Cautela com anticoagulantes em uso de extratos concentrados."],
    imagem: imgUva,
    autorImagem: "Fotos de domínio público (Wikimedia Commons, Unsplash, Pixabay)",
    coordenadas: [41.9028, 12.4964],
    interacoes: [
      { medicamento: "Anticoagulantes", risco: "Pode aumentar risco de sangramento em altas doses.", evidencia: "Monitorar clinicamente." }
    ]
  },


  {
    id: 21,
    nome: "Ocimum tenuiflorum (tulsi, manjericão-sagrado)",
    nome_cientifico: "Ocimum tenuiflorum L.",
    origem: "Índia e Sudeste Asiático",
    mecanismos: "Ação antioxidante e anti-inflamatória com potencial modulação de estresse neuroendócrino.",
    modosUso: "Infusão das folhas, extrato seco e cápsulas padronizadas.",
    usos: "Suporte ao estresse, clareza mental e saúde metabólica.",
    efeitosColaterais: ["Desconforto gastrointestinal leve em doses altas."],
    contraindicacoes: ["Gestação sem orientação médica.", "Cautela com antidiabéticos."],
    imagem: imgManjericao,
    autorImagem: "Fotos de domínio público (Wikimedia Commons, Unsplash, Pixabay)",
    coordenadas: [22.9734, 78.6569],
    interacoes: [
      { medicamento: "Antidiabéticos", risco: "Pode potencializar redução de glicemia.", evidencia: "Monitorar glicemia regularmente." }
    ]
  },
  {
    id: 22,
    nome: "Moringa oleifera (moringa)",
    nome_cientifico: "Moringa oleifera Lam.",
    origem: "Índia, África e regiões tropicais",
    mecanismos: "Polifenóis e isotiocianatos com potencial antioxidante e anti-inflamatório em vias neuroprotetoras.",
    modosUso: "Folhas em pó, infusão e extratos padronizados.",
    usos: "Suplementação nutricional e suporte antioxidante.",
    efeitosColaterais: ["Desconforto intestinal em uso excessivo."],
    contraindicacoes: ["Gestação sem orientação profissional."],
    imagem: imgMoringa,
    autorImagem: "Fotos de domínio público (Wikimedia Commons, Unsplash, Pixabay)",
    coordenadas: [9.082, 8.6753],
    interacoes: [
      { medicamento: "Anti-hipertensivos", risco: "Pode potencializar efeito hipotensor.", evidencia: "Ajustar acompanhamento clínico." }
    ]
  },
  {
    id: 23,
    nome: "Ganoderma lucidum (reishi)",
    nome_cientifico: "Ganoderma lucidum (Curtis) P.Karst.",
    origem: "Ásia",
    mecanismos: "Polissacarídeos e triterpenos com potencial ação imunomoduladora e anti-inflamatória.",
    modosUso: "Extratos padronizados e cápsulas.",
    usos: "Suporte imunológico e manejo de fadiga.",
    efeitosColaterais: ["Boca seca, desconforto gástrico em alguns casos."],
    contraindicacoes: ["Cautela com anticoagulantes e imunossupressores."],
    imagem: imgReishi,
    autorImagem: "Fotos de domínio público (Wikimedia Commons, Unsplash, Pixabay)",
    coordenadas: [35.8617, 104.1954],
    interacoes: [
      { medicamento: "Anticoagulantes", risco: "Pode aumentar risco de sangramento.", evidencia: "Revisão de uso com profissional de saúde." }
    ]
  },
  {
    id: 24,
    nome: "Uncaria tomentosa (unha-de-gato)",
    nome_cientifico: "Uncaria tomentosa (Willd. ex Schult.) DC.",
    origem: "Amazônia",
    mecanismos: "Alcaloides e polifenóis com potencial anti-inflamatório e antioxidante.",
    modosUso: "Chá da casca e extratos fitoterápicos padronizados.",
    usos: "Suporte inflamatório e imunológico.",
    efeitosColaterais: ["Náuseas e desconforto gastrointestinal em doses elevadas."],
    contraindicacoes: ["Gestação e lactação.", "Doenças autoimunes sem orientação médica."],
    imagem: imgUnhadegato,
    autorImagem: "Fotos de domínio público (Wikimedia Commons, Unsplash, Pixabay)",
    coordenadas: [-3.4653, -62.2159],
    interacoes: [
      { medicamento: "Imunossupressores", risco: "Pode interferir no efeito terapêutico.", evidencia: "Acompanhamento médico obrigatório." }
    ]
  },
  {
    id: 25,
    nome: "Rosmarinus officinalis (alecrim)",
    nome_cientifico: "Salvia rosmarinus Spenn.",
    origem: "Mediterrâneo",
    mecanismos: "Ácido rosmarínico/carnósico com efeito antioxidante e possível inibição de AChE.",
    modosUso: "Infusão, extratos e uso culinário.",
    usos: "Apoio de memória e atenção.",
    efeitosColaterais: ["Irritação gástrica em indivíduos sensíveis."],
    contraindicacoes: ["Uso concentrado de óleo essencial sem orientação."],
    imagem: imgAlecrim,
    autorImagem: "Fotos de domínio público (Wikimedia Commons, Unsplash, Pixabay)",
    coordenadas: [41.9028, 12.4964],
    interacoes: [
      { medicamento: "Anticoagulantes", risco: "Pode alterar perfil de coagulação em doses altas.", evidencia: "Monitorar uso concomitante." }
    ]
  },
  {
    id: 26,
    nome: "Passiflora incarnata (maracujá, passiflora)",
    nome_cientifico: "Passiflora incarnata L.",
    origem: "Américas",
    mecanismos: "Flavonoides com ação ansiolítica e potencial proteção indireta por melhora do sono.",
    modosUso: "Infusão, extrato seco e cápsulas.",
    usos: "Ansiedade leve e qualidade de sono.",
    efeitosColaterais: ["Sonolência."],
    contraindicacoes: ["Cautela com sedativos e álcool."],
    imagem: imgMaracuja,
    autorImagem: "Fotos de domínio público (Wikimedia Commons, Unsplash, Pixabay)",
    coordenadas: [-14.235, -51.9253],
    interacoes: [
      { medicamento: "Sedativos", risco: "Pode potencializar sedação.", evidencia: "Evitar associação sem orientação." }
    ]
  },

  {
    id: 27,
    nome: "Camellia sinensis (chá-verde)",
    nome_cientifico: "Camellia sinensis (L.) Kuntze",
    origem: "China e Japão",
    mecanismos: "Catequinas (EGCG) com ação antioxidante e modulação de vias inflamatórias/neuroprotetoras.",
    modosUso: "Infusão das folhas, extrato seco padronizado.",
    usos: "Suporte antioxidante e cognitivo.",
    efeitosColaterais: ["Insônia em sensíveis à cafeína."],
    contraindicacoes: ["Cautela em pacientes com ansiedade e sensibilidade à cafeína."],
    imagem: imgChaverde,
    autorImagem: "Fotos de domínio público (Wikimedia Commons, Unsplash, Pixabay)",
    coordenadas: [35.8617, 104.1954],
    interacoes: [
      { medicamento: "Estimulantes", risco: "Pode potencializar efeitos estimulantes.", evidencia: "Monitorar resposta clínica." }
    ]
  },
  {
    id: 28,
    nome: "Crocus sativus (açafrão)",
    nome_cientifico: "Crocus sativus L.",
    origem: "Mediterrâneo e Irã",
    mecanismos: "Crocinas com potencial antioxidante, anti-inflamatório e modulação de neurotransmissores.",
    modosUso: "Extrato padronizado e uso culinário.",
    usos: "Suporte de memória e humor.",
    efeitosColaterais: ["Náusea leve em doses elevadas."],
    contraindicacoes: ["Gestação sem orientação médica."],
    imagem: imgAcafrao,
    autorImagem: "Fotos de domínio público (Wikimedia Commons, Unsplash, Pixabay)",
    coordenadas: [32.4279, 53.6880],
    interacoes: [
      { medicamento: "Anticoagulantes", risco: "Pode aumentar risco hemorrágico em altas doses.", evidencia: "Avaliar uso individualmente." }
    ]
  },
  {
    id: 29,
    nome: "Lippia alba (erva-cidreira-brasileira)",
    nome_cientifico: "Lippia alba (Mill.) N.E.Br. ex Britton & P.Wilson",
    origem: "América Latina",
    mecanismos: "Óleos essenciais e flavonoides com ação ansiolítica e possível modulação de estresse oxidativo.",
    modosUso: "Infusão e extratos fitoterápicos.",
    usos: "Qualidade do sono e ansiedade leve.",
    efeitosColaterais: ["Sonolência.", "Hipotensão em suscetíveis."],
    contraindicacoes: ["Uso com sedativos sem orientação profissional."],
    imagem: imgErvaCidreira,
    autorImagem: "Fotos de domínio público (Wikimedia Commons, Unsplash, Pixabay)",
    coordenadas: [-15.7939, -47.8828],
    interacoes: [
      { medicamento: "Sedativos", risco: "Pode potencializar efeito sedativo.", evidencia: "Acompanhar sonolência diurna." }
    ]
  },
  {
    id: 30,
    nome: "Hypericum perforatum (erva-de-são-joão)",
    nome_cientifico: "Hypericum perforatum L.",
    origem: "Europa",
    mecanismos: "Ação em neurotransmissores e potencial antioxidante com relevância em sintomas afetivos associados.",
    modosUso: "Extrato seco padronizado.",
    usos: "Humor e bem-estar emocional.",
    efeitosColaterais: ["Fotossensibilidade.", "Desconforto gastrointestinal."],
    contraindicacoes: ["Uso concomitante com diversos fármacos sem avaliação médica."],
    imagem: imgErvadeSaoJoao,
    autorImagem: "Fotos de domínio público (Wikimedia Commons, Unsplash, Pixabay)",
    coordenadas: [51.1657, 10.4515],
    interacoes: [
      { medicamento: "Antidepressivos", risco: "Risco de síndrome serotoninérgica.", evidencia: "Evitar associação sem supervisão." }
    ]
  },
  {
    id: 31,
    nome: "Glycyrrhiza glabra (alcaçuz)",
    nome_cientifico: "Glycyrrhiza glabra L.",
    origem: "Europa e Ásia",
    mecanismos: "Saponinas e flavonoides com atividade anti-inflamatória e antioxidante.",
    modosUso: "Infusão e extrato seco padronizado.",
    usos: "Suporte anti-inflamatório.",
    efeitosColaterais: ["Retenção hídrica e aumento de pressão em uso prolongado."],
    contraindicacoes: ["Hipertensão não controlada.", "Insuficiência renal."],
    imagem: imgAlcacuz,
    autorImagem: "Fotos de domínio público (Wikimedia Commons, Unsplash, Pixabay)",
    coordenadas: [34.8021, 38.9968],
    interacoes: [
      { medicamento: "Anti-hipertensivos", risco: "Pode reduzir eficácia anti-hipertensiva.", evidencia: "Monitorar pressão arterial." }
    ]
  },
  {
    id: 32,
    nome: "Eleutherococcus senticosus (ginseng-siberiano)",
    nome_cientifico: "Eleutherococcus senticosus (Rupr. & Maxim.) Maxim.",
    origem: "Sibéria e Ásia Oriental",
    mecanismos: "Adaptógeno com potencial melhora de resistência ao estresse e suporte cognitivo indireto.",
    modosUso: "Extrato padronizado em cápsulas.",
    usos: "Fadiga, estresse e desempenho mental.",
    efeitosColaterais: ["Insônia leve e irritabilidade em alguns casos."],
    contraindicacoes: ["Hipertensão sem controle e uso de estimulantes sem orientação."],
    imagem: imgGinseng,
    autorImagem: "Fotos de domínio público (Wikimedia Commons, Unsplash, Pixabay)",
    coordenadas: [61.5240, 105.3188],
    interacoes: [
      { medicamento: "Estimulantes", risco: "Pode somar efeitos estimulantes.", evidencia: "Ajustar dose e horário de uso." }
    ]
  },

];

export default plantas;
