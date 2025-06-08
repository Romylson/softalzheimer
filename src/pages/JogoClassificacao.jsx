// src/pages/JogoClassificacao.jsx
import React, { useState } from "react";
import "./classificacao.css";

const categorias = {
  "Plantas Medicinais": ["Camomila", "Ginkgo biloba", "Bacopa monnieri"],
  "Fármacos": ["Donepezila", "Memantina"],
  "Conceitos": ["Beta-amiloide", "Colinesterase"]
};

const itens = Object.values(categorias).flat().sort(() => Math.random() - 0.5);

const JogoClassificacao = () => {
  const [respostas, setRespostas] = useState({});
  const [concluido, setConcluido] = useState(false);

  const handleDrop = (e, categoria) => {
    const item = e.dataTransfer.getData("text/plain");
    setRespostas({ ...respostas, [item]: categoria });
  };

  const verificar = () => {
    setConcluido(true);
  };

  return (
    <div className="classificacao-container">
      <h2>Classifique os Itens</h2>
      <p>Arraste os termos para a categoria correta.</p>

      <div className="classificacao-flex">
        <div className="itens">
          <h4>Itens</h4>
          {itens.map((item, idx) => (
            <div
              key={idx}
              className="item-arrastavel"
              draggable
              onDragStart={(e) => e.dataTransfer.setData("text/plain", item)}
            >
              {item}
            </div>
          ))}
        </div>

        <div className="categorias">
          {Object.keys(categorias).map((cat, idx) => (
            <div
              key={idx}
              className="dropzone"
              onDragOver={(e) => e.preventDefault()}
              onDrop={(e) => handleDrop(e, cat)}
            >
              <h5>{cat}</h5>
              <ul>
                {Object.entries(respostas)
                  .filter(([_, c]) => c === cat)
                  .map(([item], i) => (
                    <li
                      key={i}
                      className={
                        concluido &&
                        categorias[cat].includes(item)
                          ? "certo"
                          : concluido
                          ? "errado"
                          : ""
                      }
                    >
                      {item}
                    </li>
                  ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <button className="btn btn-primary mt-3" onClick={verificar}>
        Verificar
      </button>
    </div>
  );
};

export default JogoClassificacao;
