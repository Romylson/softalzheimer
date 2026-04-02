import { useState } from "react";

const casos = [
  {
    pergunta: "Esquecer onde colocou objetos ocasionalmente",
    resposta: "normal"
  },
  {
    pergunta: "Esquecer nomes de familiares próximos frequentemente",
    resposta: "alzheimer"
  },
  {
    pergunta: "Demorar um pouco mais para aprender algo novo",
    resposta: "normal"
  },
  {
    pergunta: "Se perder em locais conhecidos",
    resposta: "alzheimer"
  }
];

export default function DetectiveCognitivo() {
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState("");

  const responder = (tipo) => {
    if (tipo === casos[index].resposta) {
      setScore(score + 1);
      setFeedback("✅ Correto!");
    } else {
      setFeedback("❌ Incorreto!");
    }

    setTimeout(() => {
      setFeedback("");
      setIndex(index + 1);
    }, 1000);
  };

  if (index >= casos.length) {
    return (
      <div className="section-card">
        <h2>Resultado Final</h2>
        <p>Você acertou {score} de {casos.length}</p>
      </div>
    );
  }

  return (
    <div className="section-card">
      <h2>🕵️ Detective Cognitivo</h2>
      <p>{casos[index].pergunta}</p>

      <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
        <button onClick={() => responder("normal")}>🟢 Normal</button>
        <button onClick={() => responder("alzheimer")}>🔴 Alzheimer</button>
      </div>

      <p>{feedback}</p>
    </div>
  );
}