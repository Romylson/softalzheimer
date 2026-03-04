import React from "react";
import { useParams, Link } from "react-router-dom";
import { noticiasCarousel } from "../data/noticiasCarousel";
import "./NoticiaCarousel.css";

export default function NoticiaCarousel() {
  const { slug } = useParams();
  const noticia = noticiasCarousel.find((n) => n.slug === slug);

  if (!noticia) {
    return (
      <div className="noticia-page">
        <h2>Notícia não encontrada</h2>
        <Link to="/" className="btn btn-outline-dark mt-3">Voltar</Link>
      </div>
    );
  }

  return (
    <div className="noticia-page">
      <Link to="/" className="btn btn-outline-dark mb-3">← Voltar</Link>

      <h1 className="noticia-title">{noticia.titulo}</h1>
      <div className="noticia-meta">
        <span><b>Data:</b> {new Date(noticia.data).toLocaleDateString("pt-BR")}</span>
      </div>

      {noticia.imagem && (
        <img className="noticia-capa" src={noticia.imagem} alt={noticia.titulo} />
      )}

      <p className="noticia-resumo">{noticia.resumo}</p>

      <div className="noticia-content">
        {noticia.conteudo.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
    </div>
  );
}