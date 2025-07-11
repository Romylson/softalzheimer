// src/components/AppHeader.jsx
import React from "react";
import logoNppmPpgf from "../assets/logo-nppm-ppgf.jpeg";
import logoLafac from "../assets/logo-lafac-ufpi.jpeg";

export default function AppHeader() {
  return (
    <header className="app-header">
      <div className="app-header-inner">
        <img
          src={logoNppmPpgf}
          alt="NPPM PPGF"
          className="header-logo"
        />
        <div className="divider-line" />
        <img
          src={logoLafac}
          alt="LAFAC-UFPI"
          className="header-logo"
        />
        <div className="site-title">Plantamente</div>
      </div>
    </header>
  );
}