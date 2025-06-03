import React from "react";
import { JigsawPuzzle } from "react-jigsaw-puzzle";
import "react-jigsaw-puzzle/lib/jigsaw-puzzle.css";
import { useNavigate } from "react-router-dom";
import imgPlanta from "../assets/camomila.jpg"; // garanta que existe essa imagem

export default function QuebraCabeca() {
  const navigate = useNavigate();
  return (
    <div className="container py-4">
      <button className="btn btn-outline-secondary mb-3" onClick={() => navigate("/jogos")}>
        ⬅️ Voltar para Jogos
      </button>
      <h2>Quebra-cabeça: Plantas Medicinais</h2>
      <JigsawPuzzle
        imageSrc={imgPlanta}
        rows={3}
        columns={3}
        onSolved={() => alert("Parabéns! Quebra-cabeça montado!")}
        className="jigsawPuzzle"
      />
      <div className="mt-2">Monte a imagem para descobrir a planta!</div>
    </div>
  );
}
