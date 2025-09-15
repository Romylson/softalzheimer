import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18n from "../i18n";
import LoginModal from "./LoginModal";

export default function Navbar() {
  const { t } = useTranslation();
  const [showLogin, setShowLogin] = useState(false);
  const [user, setUser] = useState(null);

  function changeLanguage(lng) {
    i18n.changeLanguage(lng);
  }

  return (
    <nav
      className="navbar navbar-expand-lg px-4 shadow-sm"
      style={{
        height: 60,
        backgroundColor: "var(--background-color)",
        color: "var(--text-color)",
      }}
    >
      <div className="container-fluid">
        <Link to="/" className="navbar-brand fw-bold fs-4" style={{ letterSpacing: "0.5px" }}>
          Plantamente
        </Link>
        <div className="d-flex align-items-center ms-auto gap-3">
          <Link to="/historico" className="nav-link" style={{ color: "var(--text-color)" }}>
            {t("history")}
          </Link>
          <Link to="/apresentacao" className="nav-link" style={{ color: "var(--text-color)" }}>
            {t("about_site")}
          </Link>
          <Link to="/teste-cores" className="nav-link" style={{ color: "var(--text-color)" }}>
            {t("color_test")}
          </Link>
          {/* Dropdown de idiomas */}
          <div className="dropdown">
            <button
              className="btn btn-light dropdown-toggle px-3"
              type="button"
              id="langDropdown"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              aria-label={t("change_language")}
            >
              <span style={{ fontSize: 22 }}>🌐</span>
            </button>
            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="langDropdown">
              <li>
                <button className="dropdown-item d-flex align-items-center" onClick={() => changeLanguage("pt")}>
                  <span style={{ fontSize: 22 }} role="img" aria-label="Português">🇧🇷</span>
                  <span className="ms-2">Português</span>
                </button>
              </li>
              <li>
                <button className="dropdown-item d-flex align-items-center" onClick={() => changeLanguage("en")}>
                  <span style={{ fontSize: 22 }} role="img" aria-label="English">🇺🇸</span>
                  <span className="ms-2">English</span>
                </button>
              </li>
              <li>
                <button className="dropdown-item d-flex align-items-center" onClick={() => changeLanguage("es")}>
                  <span style={{ fontSize: 22 }} role="img" aria-label="Español">🇪🇸</span>
                  <span className="ms-2">Español</span>
                </button>
              </li>
            </ul>
          </div>
          {/* Botão de Login/Cadastro */}
          <button
            className="btn px-3"
            type="button"
            onClick={() => setShowLogin(true)}
            style={{ color: "var(--text-color)", borderColor: "var(--text-color)" }}
          >
            {user ? (
              <span>
                {user.photoURL
                  ? (
                      <img
                        src={user.photoURL}
                        alt="avatar"
                        style={{
                          width: 28,
                          height: 28,
                          borderRadius: "50%",
                          objectFit: "cover",
                          marginRight: 6,
                          verticalAlign: "middle",
                        }}
                      />
                    )
                  : (
                      <i className="bi bi-person-circle me-2 fs-5"></i>
                    )
                }
                {user.displayName || user.email}
              </span>
            ) : (
              <span>
                <i className="bi bi-person-circle me-2 fs-5"></i> {t("login")}
              </span>
            )}
          </button>
          {/* Modal de Login/Cadastro */}
          <LoginModal
            show={showLogin}
            onClose={() => setShowLogin(false)}
            user={user}
            setUser={setUser}
          />
        </div>
      </div>
    </nav>
  );
}
