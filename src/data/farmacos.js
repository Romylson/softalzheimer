// src/data/farmacos.js
import imgDonepezila from "../assets/donepezila.jpg";
import imgMemantina from "../assets/memantina.jpg";
import imgLecanemabe from "../assets/lecanemabe.jpg";
import imgRivastigmina from "../assets/rivastigmina.jpg"
import imgGalantamina from "../assets/galantamina.jpg"
import imgBacopa from "../assets/bacopa.jpg"
// ...adicione mais se quiser

export const farmacos = [
{
    nome: "Donepezila",
    categoria: "Inibidor de Colinesterase",
    descricao: "Inibidor da acetilcolinesterase usado em estágios leves a moderados.",
    imagem: imgDonepezila,
    alvo: "Colinesterase"
  },
  {
    nome: "Memantina",
    categoria: "Modulador Glutamatérgico",
    descricao: "Modulador do receptor NMDA para sintomas moderados a graves.",
    imagem: imgMemantina,
    alvo: "Receptor Glutamatérgico"
  },
  {
    nome: "Lecanemabe",
    categoria: "Anticorpo Monoclonal",
    descricao: "Anticorpo monoclonal indicado para remoção de placas beta-amiloides.",
    imagem: imgLecanemabe,
    alvo: "Anticorpo Monoclonal"
  },
  
  {
    nome: "Rivastigmina",
    categoria: "Inibidor de Colinesterase",
    descricao: "Opção para quadros leves/moderados, oral ou adesivo.",
    imagem: imgRivastigmina,
    alvo: "Colinesterase"
  },
  {
    nome: "Galantamina",
    categoria: "Inibidor de Colinesterase",
    descricao: "Outro inibidor, com possível ação nicotínica.",
    imagem: imgGalantamina,
    alvo: "Colinesterase"
  },
  {
    nome: "Bacopa monnieri",
    categoria: "Fitoterápico",
    descricao: "Planta usada por possível efeito cognitivo.",
    imagem: imgBacopa,
    alvo: "Fitoterápico"
  },
]
  export const ALVOS = {
  Colinesterase: {
    nome: "Colinesterase",
    descricao: "Enzima alvo dos inibidores como Donepezila, Rivastigmina e Galantamina.",
    icone: "⚡️", // Pode trocar por icone do react-icons se quiser
  },
  Glutamatérgico: {
    nome: "Glutamatérgico",
    descricao: "Alvo dos moduladores NMDA como Memantina.",
    icone: "🧠",
  },
  "Anticorpo Monoclonal": {
    nome: "Anticorpo Monoclonal",
    descricao: "Medicamentos que removem placas beta-amiloides, como Lecanemabe.",
    icone: "🧬",
  },
  Fitoterápico: {
    nome: "Fitoterápico",
    descricao: "Plantas ou compostos naturais usados em estudos de cognição.",
    icone: "🌱",
  }
  // ... adicione mais se quiser
};