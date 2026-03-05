// src/pages/NoticiaDetalhe.jsx
import React from "react";
import { Link, useParams } from "react-router-dom";
import { getNoticiaBySlug, noticias } from "../data/noticias";
import "./NoticiasPages.css";

export default function NoticiaDetalhe() {
  const { slug } = useParams();
  const noticia = getNoticiaBySlug(slug);

  if (!noticia) {
    return (
      <main className="news-page">
        <div className="news-container">
          <div className="news-notfound">
            <h1>Notícia não encontrada</h1>
            <p>
              O link pode estar incorreto ou a notícia foi removida. Volte para a lista.
            </p>
            <Link to="/noticias" className="news-back">
              ← Ver todas as notícias
            </Link>
          </div>
        </div>
      </main>
    );
  }

  // sugestões (mesma categoria, exclui a atual)
  const relacionadas = noticias
    .filter((n) => n.slug !== noticia.slug && n.categoria === noticia.categoria)
    .slice(0, 3);

  return (
    <main className="news-page">
      <div className="news-container">
        <div className="news-detail-top">
          <Link to="/noticias" className="news-back">
            ← Voltar
          </Link>

          <div className="news-detail-meta">
            <span className="news-badge">{noticia.categoria}</span>
            <span className="news-date">{noticia.data}</span>
            <span className="news-read">{noticia.leituraMin} min</span>
          </div>

          <h1 className="news-detail-title">{noticia.titulo}</h1>
          <p className="news-detail-resume">{noticia.resumo}</p>
        </div>

        <div className="news-detail-hero">
          <img src={noticia.imagem} alt={noticia.titulo} />
        </div>

        <article className="news-detail-content">
          {noticia.conteudo.map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}
        </article>

        {relacionadas.length > 0 && (
          <section className="news-related">
            <h2>Relacionadas</h2>
            <div className="news-grid">
              {relacionadas.map((n) => (
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
                      Ler <span aria-hidden>→</span>
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}