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
          Universidade Federal do Piauí e representa uma iniciativa inovadora e alinhada às demandas
          contemporâneas de difusão do conhecimento, especialmente no contexto da Doença de Alzheimer,
          uma enfermidade neurodegenerativa progressiva caracterizada por comprometimento cognitivo, 
          perda de memória e alterações comportamentais.
        </p>

        
        <p>
          Historicamente, o avanço das tecnologias digitais tem transformado a forma como o conhecimento 
          científico é produzido, compartilhado e acessado. Nesse cenário, plataformas digitais voltadas
          à saúde vêm assumindo papel estratégico ao democratizar informações baseadas em evidências, 
          aproximando a comunidade científica da sociedade.

        </p>

        <p>
         A proposta de um ambiente virtual dedicado ao tratamento do Alzheimer com enfoque em plantas 
         medicinais, terapias complementares e jogos interativos insere-se nesse movimento de inovação 
         científica e tecnológica. Do ponto de vista científico, há um crescente interesse na investigação
         de terapias complementares, especialmente a fitoterapia, como abordagem adjuvante no tratamento 
         da Doença de Alzheimer. Nesse contexto, um site que reúna essas evidências de forma organizada e
         acessível torna-se uma ferramenta relevante para pesquisadores, profissionais de saúde e cuidadores.

        </p>
        
        <p>
          Outro aspecto inovador da plataforma é a incorporação de jogos interativos como estratégia de 
          estimulação cognitiva. Pesquisas recentes demonstram que tecnologias digitais, como jogos e 
          ambientes virtuais, podem contribuir significativamente para a reabilitação cognitiva e manutenção
          das funções executivas em idosos, promovendo engajamento e adesão ao tratamento. Essas abordagens
          têm mostrado efeitos positivos tanto a curto quanto a longo prazo, especialmente na melhoria da
          atenção e da memória.
        </p>

        <p>
          A relevância desse site também se destaca no âmbito acadêmico e institucional, ao ser desenvolvido
          no contexto de um Programa de Pós-Graduação, ele fortalece a integração entre ensino, pesquisa e 
          extensão, promovendo a transferência do conhecimento científico para a sociedade. Além disso,
          contribui para a visibilidade da UFPI como um polo de produção científica na área de Ciências da
          Vida, incentivando práticas interdisciplinares que envolvem farmacologia, biotecnologia, tecnologia
          da informação e saúde coletiva.
        </p>

        <p>
         Por fim, essa iniciativa cumpre um papel social fundamental ao combater a desinformação e ampliar o
         acesso a conteúdo científico confiáveis sobre o Alzheimer, uma doença de grande impacto na saúde pública.
         Ao integrar conhecimento sobre plantas medicinais, terapias complementares e ferramentas digitais interativas,
         o site se configura como um ambiente científico inovador, educativo e inclusivo, capaz de contribuir tanto para
         o avanço da pesquisa quanto para a melhoria da qualidade de vida de pacientes e seus cuidadores.
  
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