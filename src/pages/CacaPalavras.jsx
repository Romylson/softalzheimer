import React, { useState, useEffect } from "react";
import "./cacaPalavras.css";

const palavras = [
  "CAMOMILA",
  "BACOPA",
  "LAVANDA",
  "GINKGO",
  "SALVIA",
  "ASHWAGANDHA",
  "MELISSA",
  "CURCUMA",
];

const TAMANHO = 14;

const gerarGrid = () => {
  const letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const grid = Array.from({ length: TAMANHO }, () =>
    Array.from({ length: TAMANHO }, () => "")
  );

  const podeInserirPalavra = (palavra, x, y, horizontal) => {
    for (let i = 0; i < palavra.length; i++) {
      const xi = horizontal ? x + i : x;
      const yi = horizontal ? y : y + i;
      if (xi >= TAMANHO || yi >= TAMANHO) return false;
      const letraGrid = grid[yi][xi];
      if (letraGrid !== "" && letraGrid !== palavra[i]) return false;
    }
    return true;
  };

  const inserirPalavra = (palavra) => {
    for (let tentativa = 0; tentativa < 100; tentativa++) {
      const horizontal = Math.random() < 0.5;
      const x = Math.floor(Math.random() * (horizontal ? TAMANHO - palavra.length : TAMANHO));
      const y = Math.floor(Math.random() * (horizontal ? TAMANHO : TAMANHO - palavra.length));
      if (podeInserirPalavra(palavra, x, y, horizontal)) {
        for (let i = 0; i < palavra.length; i++) {
          const xi = horizontal ? x + i : x;
          const yi = horizontal ? y : y + i;
          grid[yi][xi] = palavra[i];
        }
        return true;
      }
    }
    return false;
  };

  palavras.forEach((palavra) => {
    const sucesso = inserirPalavra(palavra);
    if (!sucesso) console.warn(`Não foi possível inserir a palavra: ${palavra}`);
  });

  for (let y = 0; y < TAMANHO; y++) {
    for (let x = 0; x < TAMANHO; x++) {
      if (grid[y][x] === "") {
        grid[y][x] = letras[Math.floor(Math.random() * letras.length)];
      }
    }
  }

  return grid;
};

const CacaPalavras = () => {
  const [grid, setGrid] = useState([]);
  const [selecionadas, setSelecionadas] = useState([]);
  const [encontradas, setEncontradas] = useState([]);

  useEffect(() => {
    setGrid(gerarGrid());
  }, []);

  const handleMouseDown = (x, y) => {
    setSelecionadas([[x, y]]);
  };

  const handleMouseEnter = (x, y) => {
    if (selecionadas.length > 0) {
      setSelecionadas((prev) => [...prev, [x, y]]);
    }
  };

  const handleMouseUp = () => {
    const palavraFormada = selecionadas.map(([x, y]) => grid[y][x]).join("");
    if (palavras.includes(palavraFormada) && !encontradas.includes(palavraFormada)) {
      setEncontradas((prev) => [...prev, palavraFormada]);
      alert(`Você encontrou: ${palavraFormada}`);
    }
    setSelecionadas([]);
  };

  const isSelecionada = (x, y) => selecionadas.some(([sx, sy]) => sx === x && sy === y);
  const isEncontrada = (x, y) => {
    for (let palavra of encontradas) {
      for (let y1 = 0; y1 < TAMANHO; y1++) {
        for (let x1 = 0; x1 < TAMANHO; x1++) {
          // horizontal
          if (x1 + palavra.length <= TAMANHO) {
            const match = palavra.split('').every((letra, i) => grid[y1][x1 + i] === letra);
            if (match && x >= x1 && x < x1 + palavra.length && y === y1) {
              return true;
            }
          }
          // vertical
          if (y1 + palavra.length <= TAMANHO) {
            const match = palavra.split('').every((letra, i) => grid[y1 + i][x1] === letra);
            if (match && y >= y1 && y < y1 + palavra.length && x === x1) {
              return true;
            }
          }
        }
      }
    }
    return false;
  };

  return (
    <div className="caca-container">
      <h2>Caça-Palavras: Plantas Medicinais</h2>
      <div
        className="grid"
        onMouseLeave={() => setSelecionadas([])}
        onMouseUp={handleMouseUp}
      >
        {grid.map((linha, y) => (
          <div key={y} className="linha">
            {linha.map((letra, x) => (
              <div
                key={`${x}-${y}`}
                className={`celula ${isSelecionada(x, y) ? "selecionada" : ""} ${isEncontrada(x, y) ? "encontrada" : ""}`}
                onMouseDown={() => handleMouseDown(x, y)}
                onMouseEnter={() => handleMouseEnter(x, y)}
              >
                {letra}
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className="palavras">
        <h4>Palavras a encontrar:</h4>
        <div className="lista-palavras">
          {palavras.map((p, idx) => (
            <button
              key={idx}
              className={`palavra-btn ${encontradas.includes(p) ? "encontrada" : ""}`}
            >
              {p}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CacaPalavras;
