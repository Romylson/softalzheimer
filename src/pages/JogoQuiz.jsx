import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import imgBacopa from "../assets/bacopa.jpg";
import imgGinkgo from "../assets/ginkgo.jpg";
// Adicione imagens para as perguntas se quiser!

const perguntas = [
  {
    pergunta: "Qual planta é chamada de 'brahmi' e estudada para memória?",
    imagem: imgBacopa,
    opcoes: ["Ginkgo biloba", "Bacopa monnieri", "Panax ginseng", "Rhodiola rosea"],
    resposta: 1,
    dica: "É uma planta da medicina ayurvédica.",
    explicacao: "Bacopa monnieri é conhecida como 'brahmi', utilizada para suporte cognitivo na Ayurveda."
  },
  {
    pergunta: "Ginkgo biloba é famoso por...",
    imagem: imgGinkgo,
    opcoes: ["Aumentar fluxo sanguíneo cerebral", "Reduzir febre", "Ação anti-inflamatória forte", "Adoçar bebidas"],
    resposta: 0,
    dica: "É usada para memória e circulação.",
    explicacao: "Ginkgo biloba é tradicionalmente usada para aumentar o fluxo sanguíneo cerebral e apoiar a memória."
  },
  // Adicione mais perguntas com imagens, dicas e explicações!
];

export default function JogoQuiz() {
  const [idx, setIdx] = useState(0);
  const [pontos, setPontos] = useState(0);
  const [finalizado, setFinalizado] = useState(false);
  const [resposta, setResposta] = useState(null);
  const [feedback, setFeedback] = useState("");
  const navigate = useNavigate();

  function handleResposta(i) {
    setResposta(i);
    if (i === perguntas[idx].resposta) {
      setPontos(p => p + 15);
      setFeedback(<span className="text-success">Correto! {perguntas[idx].explicacao}</span>);
    } else {
      setFeedback(
        <span className="text-danger">Incorreto! Dica: {perguntas[idx].dica}<br/>{perguntas[idx].explicacao}</span>
      );
    }
    setTimeout(() => {
      setFeedback("");
      setResposta(null);
      if (idx < perguntas.length - 1) setIdx(idx + 1);
      else setFinalizado(true);
    }, 2200);
  }

  return (
    <div className="container py-4">
      <button className="btn btn-outline-secondary mb-3" onClick={() => navigate("/jogos")}>⬅️ Voltar para Jogos</button>
      <h2>Quiz Científico sobre Produtos Naturais</h2>
      <div>Pontuação: <b>{pontos}</b></div>
      {!finalizado ? (
        <div>
          <div className="mb-2"><b>{perguntas[idx].pergunta}</b></div>
          {perguntas[idx].imagem && <img src={perguntas[idx].imagem} alt="" style={{ width: 100, marginBottom: 8 }} />}
          <div>
            {perguntas[idx].opcoes.map((op, i) => (
              <button
                key={i}
                className={`btn me-2 mb-2 ${resposta === i ? (i === perguntas[idx].resposta ? "btn-success" : "btn-danger") : "btn-outline-secondary"}`}
                onClick={() => handleResposta(i)}
                disabled={resposta !== null}
              >
                {op}
              </button>
            ))}
          </div>
          <div style={{ minHeight: 40 }}>{feedback}</div>
        </div>
      ) : (
        <div className="alert alert-info">
          Quiz finalizado! Pontuação: <b>{pontos}</b><br/>
          {pontos === perguntas.length * 15 ? "Você desbloqueou um conteúdo extra sobre plantas neuroprotetoras!" : "Tente novamente para aumentar a pontuação e desbloquear mais dicas."}
        </div>
      )}
    </div>
  );
}
