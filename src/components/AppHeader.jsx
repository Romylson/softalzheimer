import React from "react";
import logoNppmPpgf from "../assets/logo-nppm-ppgf.jpeg";
import logoLafac from "../assets/logo-lafac-ufpi.jpeg";

export default function AppHeader() {
  return (
    <header className="app-header">
      <div className="header-logos">
        <img src={logoNppmPpgf} alt="NPPM PPGF" />
        <div className="divider-line" />
        <img src={logoLafac} alt="LAFAC-UFPI" />
        <div className="site-title">Plantamente</div>
      </div>
    </header>
  );
}
