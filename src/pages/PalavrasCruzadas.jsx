import React from "react";
import { Crossword } from "@jaredreisinger/react-crossword";
//import "@jaredreisinger/react-crossword/dist/styles.css";
import eucaliptoImg from "../assets/eucalipto.jpg"; // use seu caminho real

const data = {
  across: {
    1: {
      clue: "Flor amarela calmante, usada como chá.",
      answer: "CAMOMILA",
      row: 0,
      col: 0,
    },
    3: {
      clue: "Planta roxa usada em sachês e aromaterapia.",
      answer: "LAVANDA",
      row: 2,
      col: 0,
    },
  },
  down: {
    2: {
      clue: "Árvore de folhas aromáticas, usada em inalação.",
      answer: "EUCALIPTO",
      row: 0,
      col: 2,
    },
  },
};

export default function PalavrasCruzadasGrid() {
  return (
    <div style={{ display: "flex", alignItems: "flex-start", gap: 48, padding: 32 }}>
      <div style={{ minWidth: 350 }}>
        <Crossword data={data} />
        <div style={{ marginTop: 24 }}>
          <b>Dica:</b> Clique no número da grade para ver a dica, escreva as respostas e tente acertar todas!
        </div>
      </div>
      <div style={{ minWidth: 200, textAlign: "center" }}>
        <img
          src={eucaliptoImg}
          alt="Eucalipto"
          style={{ width: 180, borderRadius: 10, marginBottom: 8, boxShadow: "0 4px 12px #aaa" }}
        />
        <div style={{ fontWeight: "bold", fontSize: 18, marginBottom: 8 }}>Eucalipto</div>
        <div style={{ fontSize: 14, color: "#666" }}>
          Planta famosa por seu aroma e uso em inalações para respiração.
        </div>
      </div>
    </div>
  );
}
