import React from "react";
import { useParams, Link } from "react-router-dom";
import { Card } from "../components/ui/card";
import { noticias } from "../data/noticias";

export default function NoticiaDetalhe() {
  const { slug } = useParams();
  const noticia = noticias.find((n) => n.slug === slug);

  if (!noticia) {
    return (
      <div className="container py-4">
        <h2>Notícia não encontrada</h2>
        <Link to="/" className="btn btn-secondary mt-3">Voltar</Link>
      </div>
    );
  }

  return (
    <div className="container py-4">
      <Link to="/" className="btn btn-outline-secondary mb-3">← Voltar</Link>

      <Card className="p-4">
        <h1 className="mb-2">{noticia.titulo}</h1>
        <p className="text-muted mb-3">
          {new Date(noticia.dataISO).toLocaleDateString("pt-BR")}
        </p>

        {noticia.imagem && (
          <img
            src={noticia.imagem}
            alt={noticia.titulo}
            style={{
              width: "100%",
              maxHeight: 420,
              objectFit: "cover",
              borderRadius: 12,
            }}
          />
        )}

        <div
          className="mt-4"
          style={{ fontSize: "1.05rem", lineHeight: 1.75 }}
          dangerouslySetInnerHTML={{ __html: noticia.conteudo }}
        />
      </Card>
    </div>
  );
}