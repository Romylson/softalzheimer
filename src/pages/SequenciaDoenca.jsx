import { useState } from "react";

const correta = [
  "Acúmulo de beta-amiloide",
  "Proteína tau alterada",
  "Morte neuronal",
  "Declínio cognitivo"
];

export default function SequenciaDoenca() {
  const [itens, setItens] = useState(
    [...correta].sort(() => Math.random() - 0.5)
  );
  const [mensagem, setMensagem] = useState("");

  const mover = (index, direcao) => {
    const novo = [...itens];
    const troca = index + direcao;

    if (troca < 0 || troca >= itens.length) return;

    [novo[index], novo[troca]] = [novo[troca], novo[index]];
    setItens(novo);
  };

  const verificar = () => {
    if (JSON.stringify(itens) === JSON.stringify(correta)) {
      setMensagem("✅ Ordem correta!");
    } else {
      setMensagem("❌ Tente novamente!");
    }
  };

  return (
    <div className="section-card">
      <h2>🧠 Sequência da Doença</h2>

      {itens.map((item, index) => (
        <div
          key={index}
          style={{
            border: "1px solid #ccc",
            padding: "8px",
            marginBottom: "5px",
            display: "flex",
            justifyContent: "space-between"
          }}
        >
          {item}
          <div>
            <button onClick={() => mover(index, -1)}>⬆️</button>
            <button onClick={() => mover(index, 1)}>⬇️</button>
          </div>
        </div>
      ))}

      <button onClick={verificar} style={{ marginTop: "10px" }}>
        Verificar
      </button>

      <p>{mensagem}</p>
    </div>
  );
}