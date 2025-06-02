import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const PALAVRAS = ["LAVANDA", "BOLDO", "ALECRIM", "EUCALIPTO", "CAMOMILA"];
const GRADE = [
  ["L", "B", "O", "L", "D", "O", "M"],
  ["A", "V", "A", "N", "D", "A", "A"],
  ["C", "A", "M", "O", "M", "I", "L"],
  ["E", "U", "C", "A", "L", "I", "P"],
  ["A", "L", "E", "C", "R", "I", "M"],
  ["P", "T", "O", "B", "O", "L", "D"],
  ["O", "L", "A", "V", "A", "N", "D"]
];

export default function CacaPalavras() {
  const [encontradas, setEncontradas] = useState([]);
  const [entrada, setEntrada] = useState("");
  const navigate = useNavigate();

  function checarPalavra() {
    const palavra = entrada.toUpperCase().trim();
    if (PALAVRAS.includes(palavra) && !encontradas.includes(palavra)) {
      setEncontradas([...encontradas, palavra]);
    }
    setEntrada("");
  }

  return (
    <div className="container py-4">
      <button className="btn btn-outline-secondary mb-3" onClick={() => navigate("/jogos")}>⬅️ Voltar para Jogos</button>
      <h2>Caça-palavras: Plantas Medicinais</h2>
      <div style={{ fontFamily: "monospace", fontSize: 26 }}>
        {GRADE.map((linha, i) => (
          <div key={i}>{linha.join(" ")}</div>
        ))}
      </div>
      <input className="form-control mt-3" style={{ width: 200, display: "inline-block" }}
        value={entrada} onChange={e => setEntrada(e.target.value)} placeholder="Digite uma planta..." />
      <button className="btn btn-primary ms-2" onClick={checarPalavra}>Buscar</button>
      <div className="mt-2">Encontradas: {encontradas.map(p => <span className="badge bg-success me-1" key={p}>{p}</span>)}</div>
      {encontradas.length === PALAVRAS.length && <div className="alert alert-success mt-3">Parabéns! Você achou todas!</div>}
    </div>
  );
}
