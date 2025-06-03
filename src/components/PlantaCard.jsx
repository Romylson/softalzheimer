import React from "react";
export default function PlantaCard({ planta, onClick }) {
  return (
    <div
      className="card h-100 shadow-sm"
      style={{ cursor: "pointer" }}
      onClick={onClick}
    >
      {planta.imagem && (
        <img
          src={planta.imagem}
          alt={planta.nome}
          className="card-img-top"
          style={{ objectFit: "cover", height: 120 }}
        />
      )}
      <div className="card-body">
        <h5 className="card-title">{planta.nome}</h5>
        <small className="text-muted">{planta.nome_cientifico}</small>
        <p style={{ fontSize: 13, margin: "6px 0" }}>
          <b>Origem:</b> {planta.origem}
        </p>
        <div style={{ fontSize: 13 }}>{planta.usos}</div>
      </div>
    </div>
  );
}
