import React from "react";
import { useParams, Link } from "react-router-dom";
import { noticias } from "../data/noticias";
import { noticiasCarousel } from "../data/noticiasCarousel";

export default function NoticiaDetalhe() {

  const { slug } = useParams();

  // junta TODAS as notícias
  const todasNoticias = [
    ...noticias,
    ...noticiasCarousel
  ];

  const noticia = todasNoticias.find(n => n.slug === slug);

  if (!noticia) {
    return (
      <div className="container py-5">
        <h2>Notícia não encontrada</h2>
        <p>O link pode estar incorreto ou a notícia foi removida.</p>
        <Link to="/" className="btn btn-dark">Voltar</Link>
      </div>
    );
  }

  return (
    <div className="container py-4">

      <Link to="/" className="btn btn-outline-dark mb-3">
        ← Voltar para Página Principal
      </Link>

      <h1 className="mb-3">{noticia.titulo}</h1>

      <p className="text-muted">
        {noticia.data} • {noticia.leituraMin} min
      </p>

      {noticia.imagem && (
        <img
          src={noticia.imagem}
          alt={noticia.titulo}
          style={{
            width: "100%",
            maxHeight: "420px",
            objectFit: "cover",
            borderRadius: "12px",
            marginBottom: "20px"
          }}
        />
      )}

      <div style={{ fontSize: "18px", lineHeight: "1.8" }}>
        {noticia.conteudo.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>

    </div>
  );
}