// src/components/AppHeader.jsx
import React from "react";
import LogoInstitucional from "./LogoInstitucional";

export default function AppHeader() {
  return (
    <header
      className="app-header"
      style={{ backgroundColor: "var(--background-color)", color: "var(--text-color)" }}
    >
      <div className="app-header-inner">

        <LogoInstitucional direction="row" />
        <div className="site-title">Plantamente</div>
      </div>
    </header>
  );
}