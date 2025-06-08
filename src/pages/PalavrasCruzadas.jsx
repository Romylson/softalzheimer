import React, { useState } from "react";
import "./palavrasCruzadas.css";

const palavras = [
  { dica: "Planta calmante com flores amarelas.", resposta: "CAMOMILA" },
  { dica: "Usada como antioxidante natural.", resposta: "GINKGO" },
  { dica: "Ajuda na memória, nome científico é Bacopa monnieri.", resposta: "BACOPA" },
];

const gerarLetras = (palavra) => palavra.split("").map((l, i) => ({ id: i, letra: l, selecionada: false }));

export default function JogoPalavrasCruzadas() {
  const [respostas, setRespostas] = useState(Array(palavras.length).fill(""));
  const [verificadas, setVerificadas] = useState(Array(palavras.length).fill(false));

  const handleChange = (idx, valor) => {
    const nova = [...respostas];
    nova[idx] = valor.toUpperCase();
    setRespostas(nova);
  };

  const verificar = () => {
    const resultado = respostas.map((resp, idx) => resp === palavras[idx].resposta);
    setVerificadas(resultado);
  };

  return (
    <div className="palavras-cruzadas container">
      <h2 className="titulo">Palavras Cruzadas: Plantas Medicinais</h2>
      <p className="instrucoes">Preencha as palavras com base nas dicas abaixo. Clique em "Verificar" para conferir suas respostas.</p>
      <div className="grade">
        {palavras.map((p, idx) => (
          <div key={idx} className="bloco">
            <p className="dica"><strong>Dica:</strong> {p.dica}</p>
            <input
              type="text"
              className={`campo ${verificadas[idx] ? "correto" : ""}`}
              maxLength={p.resposta.length}
              value={respostas[idx]}
              onChange={(e) => handleChange(idx, e.target.value)}
            />
            {verificadas[idx] && <p className="feedback">✔️ Correto!</p>}
          </div>
        ))}
      </div>
      <button className="botao-verificar" onClick={verificar}>Verificar</button>
    </div>
  );
}
