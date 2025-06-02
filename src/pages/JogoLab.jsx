import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import imgBacopa from "../assets/bacopa.jpg";
import imgWithania from "../assets/withania.jpg";

const amostras = [
  { nome: "Bacopa monnieri", correto: true, imagem: imgBacopa, explicacao: "Extrato testado positivo para atividade colinérgica, relacionado à melhora cognitiva." },
  { nome: "Solanum lycopersicum", correto: false, imagem: "", explicacao: "Tomateiro - não possui compostos neuroativos conhecidos." },
  { nome: "Withania somnifera", correto: true, imagem: imgWithania, explicacao: "Ashwagandha apresentou ação adaptógena e neuroprotetora." },
  { nome: "Capsicum annuum", correto: false, imagem: "", explicacao: "Pimenta comum, não testada para ação contra Alzheimer." }
];

export default function JogoLab() {
  const [escolhas, setEscolhas] = useState([]);
  const [pontos, setPontos] = useState(0);
  const [mensagem, setMensagem] = useState("");
  const navigate = useNavigate();

  function testarExtrato(i) {
    setEscolhas([...escolhas, i]);
    if (amostras[i].correto) {
      setPontos(p => p + 20);
      setMensagem(
        <span className="text-success">✔️ Teste positivo! {amostras[i].explicacao}</span>
      );
    } else {
      setMensagem(
        <span className="text-danger">❌ Sem efeito neuroprotetor detectado. {amostras[i].explicacao}</span>
      );
    }
    setTimeout(() => setMensagem(""), 2500);
  }

  return (
    <div className="container py-4">
      <button className="btn btn-outline-secondary mb-3" onClick={() => navigate("/jogos")}>⬅️ Voltar para Jogos</button>
      <h2>Desafio do Laboratório: Triagem de Extratos</h2>
      <div className="mb-2">Pontuação: <b>{pontos}</b></div>
      <div className="row">
        {amostras.map((amostra, i) => (
          <div className="col-md-6 mb-2" key={i}>
            <button
              className={`btn w-100 mb-1 ${escolhas.includes(i) ? (amostra.correto ? "btn-success" : "btn-danger") : "btn-outline-primary"}`}
              onClick={() => testarExtrato(i)}
              disabled={escolhas.includes(i)}
            >
              Testar {amostra.nome} {amostra.imagem && <img src={amostra.imagem} alt="" style={{ width: 40, marginLeft: 10 }} />}
            </button>
          </div>
        ))}
      </div>
      <div style={{ minHeight: 40 }}>{mensagem}</div>
      {escolhas.length >= amostras.length && (
        <div className="alert alert-info mt-2">
          {pontos > 0 ? "Parabéns! Você encontrou extratos ativos." : "Nenhum composto ativo encontrado!"}
        </div>
      )}
    </div>
  );
}
