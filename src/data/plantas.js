import imgGinkgo from "../assets/ginkgo.jpg";
import imgBacopa from "../assets/bacopa.jpg";
import imgCurcuma from "../assets/curcuma.jpg";
import imgSalvia from "../assets/salvia.jpg"
import imgMelissa from "../assets/melissa.jpg"
import imgPanax from "../assets/panax.jpg" 
import ImgAshwagandha from "../assets/ashwagandha.jpg" 

const plantas = [
  {
    id: 1,
    nome: "Ginkgo biloba",
    nome_cientifico: "Ginkgo biloba",
    origem: "China, Japão",
    usos: "Memória, antioxidante.",
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
    nome: "Bacopa monnieri",
    nome_cientifico: "Bacopa monnieri",
    origem: "Índia",
    usos: "Ajuda para memória e ansiedade.",
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
    nome_cientifico: "Curcuma longa",
    origem: "Índia, Sudeste Asiático",
    usos: "Condimento, medicina tradicional contra inflamação.",
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
    nome_cientifico: "Salvia officinalis",
    origem: "Europa, Mediterrâneo",
    usos: "Tradição europeia para memória e digestão.",
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
    nome_cientifico: "Melissa officinalis",
    origem: "Europa, Oriente Médio",
    usos: "Calmante, auxílio para memória.",
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
    nome: "Panax ginseng",
    nome_cientifico: "Panax ginseng",
    origem: "China, Coreia",
    usos: "Tônico cerebral, tradicional na Ásia.",
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
    nome_cientifico: "Withania somnifera",
    origem: "Índia, Oriente Médio",
    usos: "Ajuda para estresse, memória e vitalidade.",
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
    nome: "Rhodiola rosea",
    nome_cientifico: "Rhodiola rosea",
    origem: "Sibéria, Escandinávia",
    usos: "Adaptógeno, usado para fadiga e função cognitiva.",
    imagem: "/src/assets/rhodiola.jpg",
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
  // ...adicione mais plantas se desejar!
];

export default plantas;
