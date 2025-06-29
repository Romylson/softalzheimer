
import React, { useState, useEffect } from "react";
import "./caminhoNeuronal.css";
import cerebroImg from "../assets/brain.png"; // insira imagem do cérebro

const labirintos = [
  [
    "########",
    "#C     #",
    "# ### ##",
    "#   #  #",
    "###   F#",
    "########"
  ],
  [
    "########",
    "#C#    #",
    "# # ## #",
    "# #    #",
    "#   ##F#",
    "########"
  ],
  [
    "########",
    "#C  #  #",
    "## # # #",
    "#    #F#",
    "### ###",
    "########"
  ],
  [
    "##########",
    "#C  #    #",
    "# ## ### #",
    "#    #   #",
    "####   #F#",
    "##########"
  ],
  [
    "########",
    "#C#   ##",
    "# # #  #",
    "# # ## #",
    "#     F#",
    "########"
  ],
  [
    "#########",
    "#C   #  #",
    "# # ## ##",
    "#   #   #",
    "## ### F#",
    "#########"
  ],
  [
    "########",
    "#C    ##",
    "# ## # #",
    "#  #   #",
    "### ##F#",
    "########"
  ],
  [
    "########",
    "#C# #  #",
    "# # # ##",
    "#   #  #",
    "## ###F#",
    "########"
  ],
  [
    "#########",
    "#C #    #",
    "# # ## ##",
    "# #     #",
    "#   ####F",
    "#########"
  ],
  [
    "#########",
    "#C   #  #",
    "# ### # #",
    "#     # #",
    "# ###   F",
    "#########"
  ]
];

const CaminhoNeuronal = () => {
  const [nivel, setNivel] = useState(0);
  const [labirinto, setLabirinto] = useState([]);
  const [posicao, setPosicao] = useState({ x: 0, y: 0 });
  const [vitoria, setVitoria] = useState(false);
  const [tempo, setTempo] = useState(0);
  const [ranking, setRanking] = useState([]);
  const [jogando, setJogando] = useState(true);

  useEffect(() => {
    const mapa = labirintos[nivel].map((linha) => linha.split(""));
    const y = mapa.findIndex((l) => l.includes("C"));
    const x = mapa[y].indexOf("C");
    setLabirinto(mapa);
    setPosicao({ x, y });
    setTempo(0);
    setVitoria(false);
    setJogando(true);
  }, [nivel]);

  useEffect(() => {
    if (jogando) {
      const timer = setInterval(() => setTempo((t) => t + 1), 1000);
      return () => clearInterval(timer);
    }
  }, [jogando]);

  const mover = (dx, dy) => {
    if (!jogando) return;
    const nx = posicao.x + dx;
    const ny = posicao.y + dy;
    const destino = labirinto[ny]?.[nx];
    if (destino === " " || destino === "F") {
      if (destino === "F") {
        setJogando(false);
        setVitoria(true);
        const nome = prompt("Parabéns! Digite seu nome:");
        setRanking((prev) => [...prev, { nome, tempo }]);
        return;
      }
      const novoMapa = labirinto.map((l) => [...l]);
      novoMapa[posicao.y][posicao.x] = " ";
      novoMapa[ny][nx] = "C";
      setLabirinto(novoMapa);
      setPosicao({ x: nx, y: ny });
    }
  };

  const reiniciar = () => {
    setNivel(0);
  };

  return (
    <div className="labirinto-container">
      <h2>Caminho Neuronal</h2>
      <p>Nível {nivel + 1} | Tempo: {tempo}s</p>

      <div className="labirinto-grade">
        {labirinto.map((linha, y) =>
          linha.map((celula, x) => (
            <div key={`${x}-${y}`} className={`celula ${celula === "#" ? "parede" : celula === "F" ? "final" : ""}`}>
              {x === posicao.x && y === posicao.y ? (
                <img src={cerebroImg} alt="Cérebro" className="cerebro" />
              ) : null}
            </div>
          ))
        )}
      </div>

      <div className="controles">
        <button onClick={() => mover(0, -1)}>↑</button>
        <div>
          <button onClick={() => mover(-1, 0)}>←</button>
          <button onClick={() => mover(1, 0)}>→</button>
        </div>
        <button onClick={() => mover(0, 1)}>↓</button>
      </div>

      {vitoria && nivel < labirintos.length - 1 && (
        <button className="btn-proximo" onClick={() => setNivel(nivel + 1)}>
          Avançar para o próximo nível
        </button>
      )}

      <button className="btn-reiniciar" onClick={reiniciar}>Reiniciar Jogo</button>

      <div className="ranking">
        <h4>Ranking:</h4>
        <ol>
          {ranking.map((r, i) => (
            <li key={i}>{r.nome} - {r.tempo}s</li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default CaminhoNeuronal;
