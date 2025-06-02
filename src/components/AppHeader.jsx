// src/components/AppHeader.jsx
import React from "react";
import logoNppmPpgf from "../assets/logo-nppm-ppgf.jpeg";
import logoLafac from "../assets/logo-lafac-ufpi.jpeg";     // Use o caminho correto da imagem

export default function AppHeader() {
  return (
    <header
      style={{
        background: "#fff",
        borderBottom: "1px solid #ececec",
        boxShadow: "0 2px 8px #0001",
        padding: "10px 0",
        width: "100%",
        position: "sticky",
        top: 0,
        zIndex: 100
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 32,
        }}
      >
        <img
          src={logoNppmPpgf}
          alt="NPPM PPGF"
          style={{
            height: 80,
            maxWidth: 180,
            borderRadius: 8,
            background: "#fff",
            boxShadow: "0 1px 6px #0001",
            objectFit: "contain",
          }}
        />
        <div style={{height: 40, borderLeft: "1px solid #e3e3e3"}} />
        <img
          src={logoLafac}
          alt="LAFAC-UFPI"
          style={{
            height: 80,
            maxWidth: 100,
            borderRadius: 8,
            background: "#fff",
            boxShadow: "0 1px 6px #0001",
            objectFit: "contain",
          }}
        />
        {/* Título pequeno opcional */}
        <div style={{
          marginLeft: 32,
          fontWeight: "bold",
          fontSize: 22,
          color: "#2962ff",
          letterSpacing: 0.5,
          fontFamily: "inherit",
          textShadow: "0 1px 2px #0002"
        }}>
          SoftAlzheimer
        </div>
      </div>
    </header>
  );
}
