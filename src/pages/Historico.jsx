import React from "react";
import "./Historico.css";

import imgHistoria1 from "../assets/historico1.jpg";
import imgHistoria2 from "../assets/historico2.jpg";

export default function HistoricoPage() {
  return (
    <main className="historico-page">
      <h1>Histórico do Site</h1>

      {/* IMAGEM PRINCIPAL */}
      <div className="historico-img-wrap">
        <img src={imgHistoria1} alt="Histórico do projeto Plantamente" className="historico-img" />
      </div>

      {/* TEXTO */}
      <div className="historico-texto">
        <p>
          O site https://plantament.org/ foi criado em 2025 e trata-se de uma plataforma científica
          desenvolvida por um aluno de doutorado do Programa de Pós-Graduação em Farmacologia da
          Universidade Federal do Piauí (UFPI).
        </p>

        <p>
          A iniciativa representa uma proposta inovadora, alinhada às demandas contemporâneas de
          difusão do conhecimento, especialmente no contexto da Doença de Alzheimer — uma enfermidade
          neurodegenerativa progressiva caracterizada por comprometimento cognitivo.
        </p>

        <p>
          Historicamente, o avanço das tecnologias digitais tem transformado profundamente a forma
          como o conhecimento científico é produzido, compartilhado e acessado.
        </p>

        <p>
          Nesse cenário, plataformas digitais voltadas à saúde assumem papel estratégico ao
          democratizar informações baseadas em evidências, aproximando a comunidade científica da sociedade.
        </p>

        <p>
          A proposta de um ambiente virtual dedicado ao tratamento do Alzheimer, com enfoque em plantas
          medicinais, terapias complementares e jogos interativos, insere-se diretamente nesse movimento
          de inovação científica e tecnológica.
        </p>

        <p>
          Estudos recentes demonstram que tecnologias digitais, como jogos e ambientes virtuais,
          podem contribuir significativamente para a reabilitação cognitiva e manutenção das funções
          executivas em idosos.
        </p>

        <p>
          Ao integrar conhecimentos científicos com recursos digitais, o site se configura como um
          ambiente inovador, educativo e inclusivo.
        </p>

        <p>
          Teresina – PI, Brasil<br />
          Dezembro de 2025 — Equipe PlantaMente
        </p>
      </div>

      {/* GRID DE IMAGENS */}
      <div className="historico-grid">
        <img src={imgHistoria1} alt="Pesquisa científica" className="historico-img" />
        <img src={imgHistoria2} alt="Tecnologia e saúde" className="historico-img" />
      </div>
    </main>
  );
}