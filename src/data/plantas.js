import imgGinkgo from "../assets/ginkgo.jpg";
import imgBacopa from "../assets/bacopa.jpg";
import imgCurcuma from "../assets/curcuma.jpg";
import imgSalvia from "../assets/salvia.jpg"
import imgMelissa from "../assets/melissa.jpg"
import imgPanax from "../assets/panax.jpg" 
import ImgAshwagandha from "../assets/ashwagandha.jpg" 
import ImgRhodiola from "../assets/rhodiola.jpg" 
import ImgGotu from "../assets/gotu.jpg"

const plantas = [
  {
    id: 1,
    nome: "Ginkgo (Ginkgo biloba)",
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
    nome: "Bacopa (Bacopa monnieri)",
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
    nome: "Curcuma longa (Cúrcuma)",
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
    nome: "Salvia officinalis (Sálvia)",
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
    nome: "Melissa officinalis (Erva-cidreira)",
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
    nome: "Panax (gênero do “ginseng”)",
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
    nome: "Withania somnifera (Ashwagandha)",
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
    nome: " Rhodiola (Raiz Dourada)",
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
    nome: "Centella asiatica (Gotu Kola)",
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

];

export default plantas;
