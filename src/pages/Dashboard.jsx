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
    <div className="dashboard-layout">
      
      {/* sidebar desktop */}
      <aside className="dashboard-sidebar">
        <img
          src="/images/plantamente.jpg"
          alt="PlantaMente Logo"
          className="logo"
        />
        <h2 className="sidebar-title">PlantaMente</h2>
        <nav>
          <ul>
            <li>
              <Link
                className={location.pathname === "/dashboard" ? "active" : ""}
                to="/dashboard"
              >
                {t("dashboard")}
              </Link>
            </li>
            <li>
              <Link
                className={location.pathname === "/fisiopatologia" ? "active" : ""}
                to="/fisiopatologia"
              >
                {t("physiopathology")}
              </Link>
            </li>
            <li>
              <Link
                className={location.pathname === "/plantas" ? "active" : ""}
                to="/plantas"
              >
                {t("plants")}
              </Link>
            </li>
            <li>
              <Link
                className={location.pathname === "/farmacos" ? "active" : ""}
                to="/farmacos"
              >
                {t("drugs")}
              </Link>
            </li>
            <li>
              <Link
                className={location.pathname === "/jogos" ? "active" : ""}
                to="/jogos"
              >
                {t("educational_games")}
              </Link>
            </li>
            <li>
              <Link
                className={location.pathname === "/cerebro3d" ? "active" : ""}
                to="/cerebro3d"
              >
                {t("brain3d")}
              </Link>
            </li>
            <li>
              <Link
                className={
                  location.pathname === "/artigos-cientificos" ? "active" : ""
                }
                to="/artigos-cientificos"
              >
                {t("scientific_articles")}
              </Link>
            </li>
          </ul>
        </nav>
      </aside>

      {/* nav para celular (<576px) */}
      <nav className="dashboard-mobile-nav">
        <Link to="/dashboard">{t("dashboard")}</Link>
        <Link to="/fisiopatologia">{t("physiopathology")}</Link>
        <Link to="/plantas">{t("plants")}</Link>
        <Link to="/farmacos">{t("drugs")}</Link>
        <Link to="/jogos">{t("educational_games")}</Link>
        <Link to="/cerebro3d">{t("brain3d")}</Link>
        <Link to="/artigos-cientificos">{t("scientific_articles")}</Link>
      </nav>

      {/* conteúdo principal */}
      <main className="dashboard-main">
         {/* === MOVA O VERDE PARA DENTRO DESSA DIV === */}
       <div className="dashboard-content">
        <BannerDiferenciais />

        <div className="intro text-center">
          <h1>
            {t("welcome_dashboard")}{" "}
            <span className="highlight">PlantaMente</span>
          </h1>
          <p>{t("dashboard_desc")}</p>
        </div>

        {/* cards empilhados no mobile */}
        <div className="dashboard-cards">
          <div className="dashboard-card green">
            <img
              src="/images/planta.jpg"
              alt={t("plants")}
              className="dashboard-img"
            />
            <div className="icon">🌱</div>
            <h2>{t("plants")}</h2>
          </div>
          <div className="dashboard-card yellow">
            <img
              src="/images/farmaco.jpeg"
              alt={t("drugs")}
              className="dashboard-img"
            />
            <div className="icon">💊</div>
            <h2>{t("drugs")}</h2>
          </div>
          <div className="dashboard-card blue">
            <img
              src="/images/fisiopatologia.png"
              alt={t("physiopathology")}
              className="dashboard-img"
            />
            <div className="icon">🧠</div>
            <h2>{t("physiopathology")}</h2>
          </div>
         </div>
        </div>
        

        <IntroBlock />
        <NoticiasAvancosAlzheimer />
        <DiferenciaisInovadores />
      </main>
    </div>
  );
}
