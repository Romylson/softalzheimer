import React from "react";
import monoterpenosArtigos from "../data/monoterpenosArtigos";
import "./SectionPages.css";

export default function BlogCientificoPage() {
  return (
    <main className="section-page">
      <h1>Blog Científico Atualizado</h1>
      <p className="section-lead">Publicação quinzenal com linguagem clara, base em evidências e atualização contínua em 2026.</p>
      <section className="section-card">
        <h3>Temas sugeridos</h3>
        <ul>
          <li>Monoterpenos e modulação da acetilcolinesterase</li>
          <li>O papel do Nrf2 na neuroproteção</li>
          <li>Limitações dos modelos animais de Alzheimer</li>
          <li>O que a ciência realmente sabe sobre plantas e memória?</li>
        </ul>
        <h3>Estrutura ideal do post</h3>
        <ol>
          <li>Contextualização</li>
          <li>Evidência científica</li>
          <li>Aplicabilidade</li>
          <li>Limitações</li>
          <li>Referências</li>
        </ol>
      </section>

      <section className="section-card" style={{ marginTop: "1rem" }}>
        <h3>Artigos de 2026 e linha de atualização</h3>
        <p>
          Esta seção foi preparada para receber e destacar publicações de 2026.
          Abaixo, mantemos uma base de referências recentes do tema monoterpenos para curadoria contínua.
        </p>
        <ul>
          {monoterpenosArtigos.slice(0, 8).map((url) => (
            <li key={url}><a href={url} target="_blank" rel="noopener noreferrer">{url}</a></li>
          ))}
        </ul>
      </section>
    </main>
  );
}
