import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Dashboard.css";
import { useTranslation } from "react-i18next";
import IntroBlock from "../components/IntroBlock";
import DiferenciaisInovadores from "../components/DiferenciaisInovadores";
import BannerDiferenciais from "../components/BannerDiferenciais";
import NoticiasAvancosAlzheimer from "../components/NoticiasAvancosAlzheimer";
export default function Dashboard() {
  const location = useLocation();
  const { t } = useTranslation();

  return (
    <div className="dashboard-layout" style={{ overflowX: "auto", backgroundColor: "#d4edda" }}>
      {/* Sidebar */}
      <aside className="dashboard-sidebar" style={{ backgroundColor: "#000" }}>
        <img
          src="/src/assets/images/Plantamente.jpg"
          alt="PlantaMente Logo"
          style={{ width: "100%", maxWidth: "120px", margin: "0 auto", display: "block" }}
        />
        <h2 className="sidebar-title" style={{ fontStyle: "italic", color: "white" }}>PlantaMente</h2>
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
                <em>{t("scientific_articles")}</em>
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
            {t("welcome_dashboard")} <span className="text-warning">PlantaMente</span>
          </h1>
          
          <p className="lead mt-2">{t("dashboard_desc")}</p>
        </div>

        {/* Cards */}
        <div className="dashboard-cards">
          <div className="dashboard-card green">
            <img src="/images/planta.avif" alt={t("plants")} className="dashboard-img" />
            <div className="icon mb-2">🌱</div>
            <h2><em>{t("plants")}</em></h2>
          </div>
          <div className="dashboard-card yellow">
            <img src="/images/farmaco.jpeg" alt={t("drugs")} className="dashboard-img" />
            <div className="icon mb-2">💊</div>
            <h2><em>{t("drugs")}</em></h2>
          </div>
          <div className="dashboard-card blue">
            <img src="/images/fisiopatologia.avif" alt={t("physiopathology")} className="dashboard-img" />
            <div className="icon mb-2">🧠</div>
            <h2><em>{t("physiopathology")}</em></h2>
          </div>
          
        </div>

        <IntroBlock />
        <NoticiasAvancosAlzheimer />
        <DiferenciaisInovadores />
        
      </main>
    </div>
  );
}
