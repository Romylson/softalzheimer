import React from "react";
import monoterpenosArtigos from "../../data/monoterpenosArtigos";

export default function ArtigosMonoterpenos() {
  return (
    <div className="mt-3">
      <h5 className="mb-3">Monoterpenos: artigos selecionados</h5>
      <p className="text-muted">
        Curadoria manual com os artigos enviados para o tópico de monoterpenos.
      </p>
      <ul className="list-group">
        {monoterpenosArtigos.map((url, index) => (
          <li key={url} className="list-group-item d-flex justify-content-between align-items-center">
            <span>Artigo {index + 1}</span>
            <a href={url} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-outline-success">
              Abrir link
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
