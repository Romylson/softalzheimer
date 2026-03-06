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

      <div className="noticia-conteudo">
  {noticia.conteudo.map((bloco, i) => {
    if (typeof bloco === "string") {
      return <p key={i}>{bloco}</p>;
    }

    if (bloco.tipo === "lead") {
      return (
        <p key={i} className="noticia-lead">
          {bloco.texto}
        </p>
      );
    }

    if (bloco.tipo === "h2") {
      return <h2 key={i}>{bloco.texto}</h2>;
    }

    if (bloco.tipo === "p") {
      return <p key={i}>{bloco.texto}</p>;
    }

    if (bloco.tipo === "callout") {
      return (
        <div key={i} className="noticia-callout">
          <strong>{bloco.titulo}</strong>
          <p>{bloco.texto}</p>
        </div>
      );
    }

    if (bloco.tipo === "lista") {
      return (
        <ul key={i}>
          {bloco.itens.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      );
    }

    return null;
  })}
</div>

    </div>
  );
}