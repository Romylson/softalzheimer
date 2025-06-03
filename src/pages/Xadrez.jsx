import React from "react";
import { Chessboard } from "react-chessboard";
import { useNavigate } from "react-router-dom";

export default function ChessGame() {
  const navigate = useNavigate();
  return (
    <div className="container py-4">
      <button className="btn btn-outline-secondary mb-3" onClick={() => navigate("/jogos")}>⬅️ Voltar para Jogos</button>
      <h2>Xadrez</h2>
      <Chessboard boardWidth={350} />
      <div className="mt-3">Exercite sua mente! (Você pode arrastar peças e jogar normalmente.)</div>
    </div>
  );
}
