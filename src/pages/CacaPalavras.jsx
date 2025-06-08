// src/pages/JogoCacaPalavras.jsx
import React, { useState, useEffect } from "react";
import "./cacaPalavras.css";

const palavras = ["CAMOMILA", "BACOPA", "LAVANDA", "GINKGO", "SALVIA", "ASHWAGANDHA", "MELISSA", "CURCUMA"];
const gridSize = 12;

const gerarGrade = () => {
  const grid = Array.from({ length: gridSize }, () => Array(gridSize).fill(""));
  palavras.forEach((palavra, index) => {
    const row = index;
    for (let i = 0; i < palavra.length; i++) {
      grid[row][i] = palavra[i];
    }
  });
  // Preencher os vazios com letras aleatórias
  for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
      if (!grid[i][j]) {
        grid[i][j] = String.fromCharCode(65 + Math.floor(Math.random() * 26));
      }
    }
  }
  return grid;
};

export default function JogoCacaPalavras() {
  const [grade, setGrade] = useState([]);
  const [selecionado, setSelecionado] = useState([]);
  const [encontradas, setEncontradas] = useState([]);

  useEffect(() => {
    setGrade(gerarGrade());
  }, []);

  const toggleLetra = (i, j) => {
    const existe = selecionado.some((pos) => pos[0] === i && pos[1] === j);
    const nova = existe
      ? selecionado.filter((pos) => !(pos[0] === i && pos[1] === j))
      : [...selecionado, [i, j]];

    setSelecionado(nova);

    const palavraAtual = nova.map(([x, y]) => grade[x][y]).join("").toUpperCase();
    if (palavras.includes(palavraAtual) && !encontradas.includes(palavraAtual)) {
      setEncontradas([...encontradas, palavraAtual]);
      setSelecionado([]);
    }
  };

  return (
    <div className="caca-palavras-container">
      <h2>Caça-palavras: Plantas Medicinais 🌿</h2>
      <p>Clique nas letras para formar palavras. Palavras encontradas ficarão destacadas.</p>

      <div className="grid">
        {grade.map((linha, i) => (
          <div key={i} className="linha">
            {linha.map((letra, j) => {
              const isSelecionado = selecionado.some((pos) => pos[0] === i && pos[1] === j);
              const isEncontrado = encontradas.some((palavra) =>
                palavra.includes(letra) &&
                palavras.includes(palavra)
              );
              return (
                <div
                  key={j}
                  className={`celula ${isSelecionado ? "selecionado" : ""} ${isEncontrado ? "encontrado" : ""}`}
                  onClick={() => toggleLetra(i, j)}
                >
                  {letra}
                </div>
              );
            })}
          </div>
        ))}
      </div>

      <div className="palavras-lista mt-4">
        <h5>Palavras a encontrar:</h5>
        <ul>
          {palavras.map((p, idx) => (
            <li key={idx} style={{ textDecoration: encontradas.includes(p) ? "line-through" : "none" }}>
              {p}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
