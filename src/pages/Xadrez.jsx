// src/pages/JogoXadrez.jsx
import React, { useEffect, useRef } from "react";
import { Chess } from "chess.js";
import { Chessboard } from "react-chessboard";
import { Card } from "react-bootstrap";

const JogoXadrez = () => {
  const chess = useRef(new Chess());
  const [game, setGame] = React.useState(chess.current);
  const [turno, setTurno] = React.useState("white");
  const [status, setStatus] = React.useState("");
  const [historico, setHistorico] = React.useState([]);

  useEffect(() => {
    if (game.isCheckmate()) {
      setStatus("Xeque-mate! " + (turno === "white" ? "Pretas" : "Brancas") + " venceram.");
    } else if (game.isDraw()) {
      setStatus("Empate!");
    } else if (game.isCheck()) {
      setStatus("Xeque em " + (turno === "white" ? "Brancas" : "Pretas"));
    } else {
      setStatus("");
    }
  }, [game, turno]);

  const mover = (origem, destino) => {
    const resultado = game.move({ from: origem, to: destino, promotion: "q" });
    if (resultado) {
      setGame(new Chess(game.fen()));
      setTurno(game.turn() === "w" ? "white" : "black");
      setHistorico([...historico, resultado.san]);
    }
  };

  return (
    <div className="container py-4">
      <Card className="shadow p-4">
        <h2 className="mb-3">Xadrez Cognitivo</h2>
        <p className="text-muted">
          Estimule o raciocínio e a memória com partidas de xadrez!
        </p>
        <p>
          Turno atual: <strong>{turno === "white" ? "Brancas" : "Pretas"}</strong>
        </p>
        {status && <p className="text-danger fw-bold">{status}</p>}
        <Chessboard
          position={game.fen()}
          onPieceDrop={(source, target) => mover(source, target)}
          boardWidth={400}
        />
        <div className="mt-4">
          <h5>Histórico de Jogadas:</h5>
          <ul>
            {historico.map((mov, i) => (
              <li key={i}>{mov}</li>
            ))}
          </ul>
        </div>
      </Card>
    </div>
  );
};

export default JogoXadrez;
