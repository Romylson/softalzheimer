// src/components/Jogos/CardJogo.jsx
import React from "react";
import { Link } from "react-router-dom";

const CardJogo = ({ titulo, descricao, imagem, rota, corBotao = "primary" }) => {
  return (
    <div className="col-md-6 col-lg-4">
      <div className="card shadow h-100 border-0">
        {imagem && (
          <img
            src={imagem}
            alt={titulo}
            className="card-img-top"
            style={{ height: 160, objectFit: "cover" }}
          />
        )}
        <div className="card-body d-flex flex-column">
          <h5 className="card-title fw-bold">{titulo}</h5>
          <p className="card-text flex-grow-1">{descricao}</p>
          <Link to={rota} className={`btn btn-${corBotao} mt-auto`}>Jogar</Link>
        </div>
      </div>
    </div>
  );
};

export default CardJogo;
