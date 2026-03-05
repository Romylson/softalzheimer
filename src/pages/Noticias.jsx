// src/pages/Noticias.jsx
import React from "react";
import { Link } from "react-router-dom";
import { noticias } from "../data/noticias";
import "./NoticiasPages.css";

export default function Noticias() {
  return (
    <main className="news-page">
      <div className="news-container">
        <div className="news-header">
          <h1>Últimas Notícias</h1>
          <p>
            Atualizações do PlantaMente organizadas por temas: diagnóstico, prevenção,
            tecnologia, nutrição e produtos naturais.
          </p>
        </div>

        <div className="news-grid">
          {noticias.map((n) => (
            <Link key={n.slug} to={`/noticias/${n.slug}`} className="news-card">
              <div className="news-thumb">
                <img src={n.imagem} alt={n.titulo} />
              </div>

              <div className="news-body">
                <div className="news-meta">
                  <span className="news-badge">{n.categoria}</span>
                  <span className="news-date">{n.data}</span>
                  <span className="news-read">{n.leituraMin} min</span>
                </div>

                <h3 className="news-title">{n.titulo}</h3>
                <p className="news-resume">{n.resumo}</p>

                <span className="news-cta">
                  Ler notícia <span aria-hidden>→</span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}