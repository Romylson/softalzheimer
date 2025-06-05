import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Dashboard.css";
import { useTranslation } from "react-i18next";
import IntroBlock from "../components/IntroBlock"; // bloco institucional, se desejar
import DiferenciaisInovadores from "../components/DiferenciaisInovadores";
import BannerDiferenciais from "../components/BannerDiferenciais";

// ...



export default function Dashboard() {
  
  const location = useLocation();
  const { t } = useTranslation();

  return (
    
    <div className="dashboard-layout">
    
      {/* Sidebar */}
      <aside className="dashboard-sidebar">
        <h2 className="sidebar-title">{t("app_name")}</h2>
        <nav>
          <ul className="sidebar-list">
            <li>
              <Link className={`sidebar-link${location.pathname === "/dashboard" ? " active" : ""}`} to="/dashboard">
                {t("dashboard")}
              </Link>
            </li>
            <li>
              <Link className={`sidebar-link${location.pathname === "/fisiopatologia" ? " active" : ""}`} to="/fisiopatologia">
                {t("physiopathology")}
              </Link>
            </li>
            <li>
              <Link className={`sidebar-link${location.pathname === "/plantas" ? " active" : ""}`} to="/plantas">
                {t("plants")}
              </Link>
            </li>
            <li>
              <Link className={`sidebar-link${location.pathname === "/farmacos" ? " active" : ""}`} to="/farmacos">
                {t("drugs")}
              </Link>
            </li>
            <li>
              <Link className={`sidebar-link${location.pathname === "/jogos" ? " active" : ""}`} to="/jogos">
                {t("educational_games")}
              </Link>
            </li>
            <li>
              <Link className={`sidebar-link${location.pathname === "/cerebro3d" ? " active" : ""}`} to="/cerebro3d">
                {t("brain3d")}
              </Link>
            </li>
            <li>
              <Link className={`sidebar-link${location.pathname === "/artigos-cientificos" ? " active" : ""}`} to="/artigos-cientificos">
                {t("scientific_articles")}
              </Link>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Conteúdo principal */}
      <main className="dashboard-main">
        
        <BannerDiferenciais />
        <div className="text-center my-4">
          <h1 className="display-4 fw-bold">
            {t("welcome_dashboard")} <span className="text-warning">{t("app_name")}</span>
          </h1>
          <p className="lead mt-2">{t("dashboard_desc")}</p>
        </div>
        {/* Cards */}
        <div className="dashboard-cards">
          <div className="dashboard-card green">
            <img src="/images/planta.avif" alt={t("plants")} className="dashboard-img" />
            <div className="icon mb-2">🌱</div>
            <h2>{t("plants")}</h2>
            
          </div>
          <div className="dashboard-card yellow">
            <img src="/images/farmaco.jpeg" alt={t("drugs")} className="dashboard-img" />
            <div className="icon mb-2">💊</div>
            <h2>{t("drugs")}</h2>
            
          </div>
          <div className="dashboard-card blue">
            <img src="/images/fisiopatologia.avif" alt={t("physiopathology")} className="dashboard-img" />
            <div className="icon mb-2">🧠</div>
            <h2>{t("physiopathology")}</h2>
            
          </div>
        </div>
        {/* Bloco institucional */}
        <IntroBlock />
      <DiferenciaisInovadores />
      </main>
    </div>
  );
}
