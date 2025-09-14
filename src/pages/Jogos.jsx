// src/pages/Jogos.jsx
import React from "react";
import { Link } from "react-router-dom";
import { jogos } from "../data/jogos";

export default function Jogos() {
  return (
    <div className="container py-4">
      <h1 className="fw-bold mb-4">Jogos Educativos: Produtos Naturais 🌱 & Alzheimer</h1>
      <p className="text-muted mb-4">Escolha um jogo para aprender se divertindo!</p>

      <div className="row g-4">
        {jogos.map((jogo) => (
          <div className="col-md-4" key={jogo.nome}>
            <div className="card h-100 shadow">
              <img
                src={jogo.imagem}
                alt={jogo.nome}
                className="card-img-top"
                style={{ height: 160, objectFit: "cover" }}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{jogo.nome}</h5>
                <p className="card-text">{jogo.descricao}</p>
                <Link to={jogo.rota} className={`btn ${jogo.botao} mt-auto`}>
                  Jogar
                </Link>
                <p className="text-muted small mt-2">
                  Imagem: {jogo.nome} - Autor: {jogo.autorImagem}
                </p>
                <p className="text-muted small">
                  Jogo: {jogo.nome} - Autor: {jogo.autorJogo}
                </p>
              </div>
            </div>
          </div>
             ))}
          </div>
    </div>
  );
}