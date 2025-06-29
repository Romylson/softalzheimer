import React, { useState, useEffect } from "react";
import "./laboratorio.css";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import acertoSom from "../assets/sounds/acerto.mp3";
import erroSom from "../assets/sounds/erro.mp3";

const compostos = [
  {
    nome: "Bacopasídeo",
    planta: "Bacopa monnieri",
    sinonimos: ["bacopa"] ,
    funcao: "Melhoria da memória"
  },
  {
    nome: "Ginkgólido",
    planta: "Ginkgo biloba",
    sinonimos: ["ginkgo", "ginko"],
    funcao: "Aumento da cognição"
  },
  {
    nome: "Apigenina",
    planta: "Camomila",
    sinonimos: ["camomila"],
    funcao: "Efeito calmante e antioxidante"
  },
  {
    nome: "Rosmarínico",
    planta: "Alecrim",
    sinonimos: ["alecrim", "rosmarino"],
    funcao: "Neuroproteção"
  },
  {
    nome: "Curcumina",
    planta: "Cúrcuma longa",
    sinonimos: ["curcuma", "cúrcuma"],
    funcao: "Anti-inflamatório cerebral"
  }
];

const DesafioLaboratorio = () => {
  const [indiceAtual, setIndiceAtual] = useState(0);
  const [resposta, setResposta] = useState("");
  const [correto, setCorreto] = useState(null);
  const [finalizado, setFinalizado] = useState(false);
  const [tempoTotal, setTempoTotal] = useState(0);

  const audioAcerto = new Audio(acertoSom);
  const audioErro = new Audio(erroSom);

  useEffect(() => {
    const timer = setInterval(() => setTempoTotal((t) => t + 1), 1000);
    return () => clearInterval(timer);
  }, []);

  const verificarResposta = () => {
    const comp = compostos[indiceAtual];
    const respostaNormalizada = resposta.trim().toLowerCase();
    const plantaNormalizada = comp.planta.toLowerCase();
    const sinonimos = comp.sinonimos || [];
    const certo = respostaNormalizada.includes(plantaNormalizada) || sinonimos.some(s => respostaNormalizada.includes(s));

    setCorreto(certo);
    if (certo) audioAcerto.play();
    else audioErro.play();

    setTimeout(() => {
      if (indiceAtual + 1 < compostos.length) {
        setIndiceAtual(indiceAtual + 1);
        setResposta("");
        setCorreto(null);
      } else {
        setFinalizado(true);
      }
    }, 2000);
  };

  const reiniciar = () => {
    setIndiceAtual(0);
    setResposta("");
    setCorreto(null);
    setFinalizado(false);
    setTempoTotal(0);
  };

  if (finalizado) {
    return (
      <div className="laboratorio container text-center mt-4">
        <h2 className="text-success mb-3">Parabéns! Você completou o desafio.</h2>
        <p className="fs-5">Tempo total: {tempoTotal} segundos</p>
        <button className="btn btn-primary mt-3" onClick={reiniciar}>
          Jogar novamente
        </button>
      </div>
    );
  }

  const compostoAtual = compostos[indiceAtual];

  return (
    <div className="laboratorio container mt-4 animate-fade-in">
      <h2 className="mb-4">🔬 Desafio do Laboratório</h2>
      <div className="card p-4 shadow-lg">
        <h4>{compostoAtual.nome}</h4>
        <p><em>{compostoAtual.funcao}</em></p>

        <input
          type="text"
          placeholder="Digite a planta de origem..."
          className="form-control mt-3"
          value={resposta}
          onChange={(e) => setResposta(e.target.value)}
        />

        <button
          className="btn btn-success mt-3"
          onClick={verificarResposta}
          disabled={resposta.trim() === ""}
        >
          Verificar
        </button>

        {correto !== null && (
          <div className="mt-3">
            {correto ? (
              <p className="text-success fw-bold">
                <FaCheckCircle /> Correto!
              </p>
            ) : (
              <p className="text-danger fw-bold">
                <FaTimesCircle /> Incorreto! Era {compostoAtual.planta}
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default DesafioLaboratorio;
