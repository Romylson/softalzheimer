// src/data/farmacos.js
import imgDonepezila from "../assets/comfect.jpg";
import imgMemantina from "../assets/zider.png";
import imgLecanemabe from "../assets/leqembi.jpg";
import imgRivastigmina from "../assets/exelon.jpg"
import imgGalantamina from "../assets/reminyl.jpg"
import imgTacrina from "../assets/tacrina.png"
import imgDonanemabe from "../assets/kisunla.jpg";
import imgBrexpiprazol from "../assets/rexulti.jpg";
import imgCitalopram from "../assets/cipramil.jpg";
import imgSertralina from "../assets/zoloft.jpg";
import imgTrazodona from "../assets/donaren.jpg";
import imgQuetiapina from "../assets/seroquel.jpg";


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
  },

  {
  nome: "Donanemabe (Kisunla)",
  categoria: "Anticorpo Monoclonal",
  principioAtivo: "Donanemabe",
  imagem: imgDonanemabe,
  autorImagem: "As imagens de fármacos são de uso ilustrativo, pertencentes às respectivas indústrias farmacêuticas. Utilizadas apenas para fins educacionais no contexto do projeto Plantamente.",
  alvo: "Proteína beta-amiloide",
  descricao: "Anticorpo monoclonal indicado para Alzheimer inicial, atuando na remoção de placas beta-amiloides e podendo modificar a progressão da doença." 
  },

  {
  nome: "Brexpiprazol (Rexulti)",
  categoria: "Antipsicótico Atípico",
  principioAtivo: "Brexpiprazol",
  imagem: imgBrexpiprazol,
  autorImagem: "As imagens de fármacos são de uso ilustrativo, pertencentes às respectivas indústrias farmacêuticas. Utilizadas apenas para fins educacionais no contexto do projeto Plantamente.",
  alvo: "Receptores dopamina e serotonina",
  descricao: "Indicado para tratamento da agitação associada à Doença de Alzheimer, modulando neurotransmissores envolvidos no comportamento."
  },

  {
  nome: "Citalopram (Cipramil)",
  categoria: "Antidepressivo (ISRS)",
  principioAtivo: "Citalopram",
  imagem: imgCitalopram,
  autorImagem: "As imagens de fármacos são de uso ilustrativo, pertencentes às respectivas indústrias farmacêuticas. Utilizadas apenas para fins educacionais no contexto do projeto Plantamente.",
  alvo: "Serotonina",
  descricao: "Utilizado no controle de sintomas depressivos e agitação em pacientes com Alzheimer, aumentando os níveis de serotonina no cérebro."
 },

 {
  nome: "Sertralina (Zoloft)",
  categoria: "Antidepressivo (ISRS)",
  principioAtivo: "Sertralina",
  imagem: imgSertralina,
  autorImagem: "As imagens de fármacos são de uso ilustrativo, pertencentes às respectivas indústrias farmacêuticas. Utilizadas apenas para fins educacionais no contexto do projeto Plantamente.",
  alvo: "Serotonina",
  descricao: "Indicada para tratamento de depressão e ansiedade em pacientes com Alzheimer, contribuindo para melhora do humor e qualidade de vida."
 },

 {
  nome: "Trazodona (Donaren)",
  categoria: "Antidepressivo",
  principioAtivo: "Trazodona",
  imagem: imgTrazodona,
  autorImagem: "As imagens de fármacos são de uso ilustrativo, pertencentes às respectivas indústrias farmacêuticas. Utilizadas apenas para fins educacionais no contexto do projeto Plantamente.",
  alvo: "Serotonina",
  descricao: "Utilizada para distúrbios do sono e agitação em pacientes com Alzheimer, com efeito sedativo e modulador serotoninérgico."
 },

 {
  nome: "Quetiapina (Seroquel)",
  categoria: "Antipsicótico Atípico",
  principioAtivo: "Quetiapina",
  imagem: imgQuetiapina,
  autorImagem: "As imagens de fármacos são de uso ilustrativo, pertencentes às respectivas indústrias farmacêuticas. Utilizadas apenas para fins educacionais no contexto do projeto Plantamente.",
  alvo: "Dopamina e serotonina",
  descricao: "Indicada para sintomas comportamentais graves, como agressividade e psicose em pacientes com Alzheimer."
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