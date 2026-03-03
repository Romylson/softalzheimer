import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Dashboard.css";
import ImageCarousel from "../components/ImageCarousel";
import NoticiasAvancosAlzheimer from "../components/NoticiasAvancosAlzheimer";
import BannerDiferenciais from "../components/BannerDiferenciais";
import DiferenciaisInovadores from "../components/DiferenciaisInovadores";
import IntroBlock from "../components/IntroBlock";

const secoesHome = [
  {
    titulo: "Alzheimer em Dados",
    descricao: "Entenda definição, prevalência, mecanismos e progressão da doença.",
    rota: "/alzheimer-dados",
    emoji: "🧠",
  },
  {
    titulo: "Plantas em Evidência",
    descricao: "Acesse plantas com mecanismos de ação e nível de evidência.",
    rota: "/plantas",
    emoji: "🌿",
  },
  {
    titulo: "Seção Científica",
    descricao: "Biblioteca organizada e banco de estudos pesquisável.",
    rota: "/secao-cientifica",
    emoji: "🔬",
  },
  {
    titulo: "Qualidade de Vida e Prevenção",
    descricao: "Leve ciência para a prática com recomendações e autoavaliação.",
    rota: "/qualidade-de-vida",
    emoji: "💚",
  },
  {
    titulo: "Seção Educacional",
    descricao: "Materiais didáticos, mapas mentais, PDFs e quizzes por nível.",
    rota: "/educacional",
    emoji: "🎓",
  },
  {
    titulo: "Blog Científico",
    descricao: "Publicações quinzenais com evidência, aplicabilidade e limitações.",
    rota: "/blog-cientifico",
    emoji: "📝",
  },
  {
    titulo: "Diferenciais Inovadores",
    descricao: "Planta da semana, simulador de mecanismos e área para pesquisadores.",
    rota: "/diferenciais-inovadores",
    emoji: "🚀",
  },
];

const linksLegados = [
  { titulo: "Fisiopatologia", rota: "/fisiopatologia" },
  { titulo: "Plantas", rota: "/plantas" },
  { titulo: "Fármacos", rota: "/farmacos" },
  { titulo: "Jogos", rota: "/jogos" },
  { titulo: "Cérebro 3D", rota: "/cerebro3d" },
  { titulo: "Artigos Científicos", rota: "/artigos-cientificos" },
];

export default function Dashboard() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="dashboard-layout">
      <button className="hamburger-button" onClick={() => setMenuOpen((prev) => !prev)} aria-label="Abrir menu">
        ☰
      </button>

      <aside className={`dashboard-sidebar ${menuOpen ? "open" : ""}`}>
        <img src="/images/plantamente.jpg" alt="PlantaMente" className="logo" />
        <h2 className="sidebar-title">PlantaMente</h2>
        <nav>
          <ul>
            <li><Link className={location.pathname === "/" || location.pathname === "/dashboard" ? "active" : ""} to="/">Início</Link></li>
            {linksLegados.map((link) => (
              <li key={link.rota}>
                <Link className={location.pathname === link.rota ? "active" : ""} to={link.rota}>{link.titulo}</Link>
              </li>
            ))}
            {secoesHome.filter((secao) => !linksLegados.some((link) => link.rota === secao.rota)).map((secao) => (
              <li key={secao.rota}>
                <Link className={location.pathname === secao.rota ? "active" : ""} to={secao.rota}>{secao.titulo}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
        {/* 👇 carrossel full width abaixo da navbar branca */}
      <div className="full-bleed-carousel">
          <ImageCarousel />
      </div>

      <main className="dashboard-main">
        <section className="hero-banner">
          <p className="hero-tag">Conectando Ciência, Natureza e Saúde Cerebral</p>
          <p>Escolha abaixo a área que você deseja explorar.</p>
          <div className="hero-actions">
            <Link to="/secao-cientifica" className="hero-btn primary">Explorar Evidências Científicas</Link>
            <Link to="/plantas" className="hero-btn">Conhecer as Plantas</Link>
            <Link to="/qualidade-de-vida" className="hero-btn">Melhorar Minha Saúde Cerebral</Link>
          </div>
        </section>

        <section className="section-block">
          <h2>Páginas do portal</h2>
          <div className="cards-grid">
            {secoesHome.map((secao) => (
              <article key={secao.rota} className="info-card interactive">
                <div className="emoji">{secao.emoji}</div>
                <h3>{secao.titulo}</h3>
                <p>{secao.descricao}</p>
                <Link className="inline-link" to={secao.rota}>Abrir página</Link>
              </article>
            ))}
          </div>
        </section>

        <BannerDiferenciais />
        
        <IntroBlock />
        <NoticiasAvancosAlzheimer />
        <DiferenciaisInovadores />
      </main>
    </div>
  );
}
