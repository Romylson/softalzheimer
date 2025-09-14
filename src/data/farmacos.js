// src/data/farmacos.js
import imgDonepezila from "../assets/comfect.jpg";
import imgMemantina from "../assets/zider.png";
import imgLecanemabe from "../assets/leqembi.jpg";
import imgRivastigmina from "../assets/exelon.jpg"
import imgGalantamina from "../assets/reminyl.jpg"
import imgTacrina from "../assets/tacrina.png"
// ...adicione mais se quiser

export const farmacos = [
{
    nome: "Donepezila (Aricept, Comfect, Adlarity, Donecept, Eranz, Apo-Donepezil)",
    categoria: "Inibidor de Colinesterase",
    descricao: "Inibidor da acetilcolinesterase usado em estágios leves a moderados.",
    imagem: imgDonepezila,
    autorImagem: "As imagens de fármacos são de uso ilustrativo, pertencentes às respectivas indústrias farmacêuticas. Utilizadas apenas para fins educacionais no contexto do projeto Plantamente.",
    alvo: "Colinesterase"
  },
  {
    nome: "Memantina (Ebixa, Namenda, Zider, Axura, Akatinol, Memox)",
    categoria: "Modulador Glutamatérgico",
    descricao: "Modulador do receptor NMDA para sintomas moderados a graves.",
    imagem: imgMemantina,
    autorImagem: "As imagens de fármacos são de uso ilustrativo, pertencentes às respectivas indústrias farmacêuticas. Utilizadas apenas para fins educacionais no contexto do projeto Plantamente.",
    alvo: "Receptor Glutamatérgico"
  },
  {
    nome: "Lecanemab (Leqembi, BAN2401, Lecanemab-irmb, mAb2401, anticorpo anti-β-amilóide, antiamiloide)",
    categoria: "Anticorpo Monoclonal",
    descricao: "Anticorpo monoclonal indicado para remoção de placas beta-amiloides.",
    imagem: imgLecanemabe,
    autorImagem: "As imagens de fármacos são de uso ilustrativo, pertencentes às respectivas indústrias farmacêuticas. Utilizadas apenas para fins educacionais no contexto do projeto Plantamente.",
    alvo: "Anticorpo Monoclonal"
  },
  
  {
    nome: "Rivastigmina (Exelon, Prometax, Exelon Patch, Rivamer, Rivastime, Alzid)",
    categoria: "Inibidor de Colinesterase",
    descricao: "Opção para quadros leves/moderados, oral ou adesivo.",
    imagem: imgRivastigmina,
    autorImagem: "As imagens de fármacos são de uso ilustrativo, pertencentes às respectivas indústrias farmacêuticas. Utilizadas apenas para fins educacionais no contexto do projeto Plantamente.",
    alvo: "Colinesterase"
  },
  {
    nome: "Galantamina (Reminyl, Razadyne, Nivalin, Galamer, Remigalin, Memeron)",
    categoria: "Inibidor de Colinesterase",
    descricao: "Outro inibidor, com possível ação nicotínica.",
    imagem: imgGalantamina,
    autorImagem: "As imagens de fármacos são de uso ilustrativo, pertencentes às respectivas indústrias farmacêuticas. Utilizadas apenas para fins educacionais no contexto do projeto Plantamente.",
    alvo: "Colinesterase"
  },
  // Novo fármaco
  {
    nome: "Tacrina (Cognex, Tacrine, Tacrest, Zynaps, Anticex, Lecar)",
    categoria: "Inibidor de Colinesterase",
    principioAtivo: "Tacrina",
    imagem: imgTacrina,
    autorImagem: "As imagens de fármacos são de uso ilustrativo, pertencentes às respectivas indústrias farmacêuticas. Utilizadas apenas para fins educacionais no contexto do projeto Plantamente.",
    alvo: "Colinesterase",
    descricao: "Foi o primeiro inibidor da colinesterase usado para Alzheimer, com limitações devido à hepatotoxicidade."
  }
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