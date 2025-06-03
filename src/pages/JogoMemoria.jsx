import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import imgBacopa from "../assets/bacopa.jpg";
import imgWithania from "../assets/withania.jpg";
import imgBacopaside from "../assets/bacopa.jpg"; // Exemplo, baixe/adicione as imagens!
import imgWithanolide from "../assets/withania.jpg";

const baralhoOriginal = [
  { id: 1, tipo: "composto", texto: "Bacopasídeo", imagem: imgBacopaside, feedback: "Bacopasídeos: compostos bioativos da Bacopa monnieri, estudados para memória." },
  { id: 2, tipo: "planta", texto: "Bacopa monnieri", imagem: imgBacopa, feedback: "Bacopa é uma planta ayurvédica para melhora cognitiva." },
  { id: 3, tipo: "composto", texto: "Withanólido", imagem: imgWithanolide, feedback: "Withanólidos: presentes na Ashwagandha, potencial neuroprotetor." },
  { id: 4, tipo: "planta", texto: "Withania somnifera", imagem: imgWithania, feedback: "Ashwagandha (Withania): tradicional da Índia, ação adaptógena." },
];

function embaralhar(arr) {
  return arr.map(a => [Math.random(), a]).sort().map(([, a]) => a);
}

export default function JogoMemoria() {
  const [baralho, setBaralho] = useState(embaralhar(baralhoOriginal));
  const [selecionadas, setSelecionadas] = useState([]);
  const [acertos, setAcertos] = useState([]);
  const [pontuacao, setPontuacao] = useState(0);
  const [mensagem, setMensagem] = useState("");
  const navigate = useNavigate();

  function checaPar(i1, i2) {
    const c1 = baralho[i1], c2 = baralho[i2];
    return (
      (c1.tipo === "composto" && c2.tipo === "planta" && c1.texto.includes("Bacopa") && c2.texto.includes("Bacopa")) ||
      (c2.tipo === "composto" && c1.tipo === "planta" && c2.texto.includes("Bacopa") && c1.texto.includes("Bacopa")) ||
      (c1.tipo === "composto" && c2.tipo === "planta" && c1.texto.includes("Withan") && c2.texto.includes("Withan")) ||
      (c2.tipo === "composto" && c1.tipo === "planta" && c2.texto.includes("Withan") && c1.texto.includes("Withan"))
    );
  }

  function handleClick(idx) {
    if (selecionadas.length === 2 || acertos.includes(idx)) return;
    setSelecionadas([...selecionadas, idx]);
  }

  React.useEffect(() => {
    if (selecionadas.length === 2) {
      const [i1, i2] = selecionadas;
      if (checaPar(i1, i2)) {
        setTimeout(() => {
          setMensagem(
            <>
              <b>Acertou!</b> {baralho[i1].feedback}
              <br />
              {baralho[i2].feedback}
            </>
          );
          setAcertos([...acertos, i1, i2]);
          setPontuacao(p => p + 20);
          setSelecionadas([]);
        }, 900);
      } else {
        setTimeout(() => {
          setMensagem(<span className="text-danger"><b>Ops!</b> Tente associar o composto à planta correta.</span>);
          setSelecionadas([]);
        }, 1000);
      }
    }
  }, [selecionadas, baralho, acertos]);

  return (
    <div className="container py-4">
      <button className="btn btn-outline-secondary mb-3" onClick={() => navigate("/jogos")}>⬅️ Voltar para Jogos</button>
      <h2>Jogo da Memória: Compostos & Plantas</h2>
      <div>Pontuação: <b>{pontuacao}</b></div>
      <div className="row row-cols-4 mb-3">
        {baralho.map((card, idx) => (
          <div key={idx} className="col mb-2">
            <button
              style={{ width: 120, height: 100, fontSize: 12, padding: 3 }}
              className={`btn ${acertos.includes(idx) ? "btn-success" : "btn-outline-primary"}`}
              disabled={acertos.includes(idx)}
              onClick={() => handleClick(idx)}
            >
              {(selecionadas.includes(idx) || acertos.includes(idx)) ?
                <>
                  <img src={card.imagem} alt={card.texto} style={{ width: 45, height: 45, objectFit: "cover" }} /><br />
                  {card.texto}
                </>
                : "?"}
            </button>
          </div>
        ))}
      </div>
      <div style={{ minHeight: 50 }} className="mb-3">{mensagem}</div>
      {acertos.length === baralho.length && (
        <div className="alert alert-success mt-3">
          <b>Parabéns!</b> Você desbloqueou uma curiosidade: <br />
          <i>Plantas como Bacopa e Ashwagandha são estudadas em ensaios clínicos para Alzheimer devido aos seus efeitos neuroprotetores.</i>
        </div>
      )}
    </div>
  );
}
