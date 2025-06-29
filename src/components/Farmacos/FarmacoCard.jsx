import React from "react";

export default function FarmacoCard({ farmaco, children, selecionado }) {
  return (
    <>
      <img src={farmaco.imagem} alt={farmaco.nome} className="card-img-top" style={{
        width: "100%",
        height: "400px",        // Aumente aqui
        objectFit: "cover",
        objectPosition: "center"
      }} />
      <div className="card-body">
        <h5 className="card-title">{farmaco.nome}</h5>
        <p className="card-text">{farmaco.descricao}</p>
        <span className="badge bg-secondary mb-2">{farmaco.categoria}</span>
        <div className="mb-2">
          <b>Alvo molecular:</b> {farmaco.alvo || <span className="text-muted">-</span>}
        </div>
        {children}
      </div>
    </>
  );
}
