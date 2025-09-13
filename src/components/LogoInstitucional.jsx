import React from "react";
import logoNppmPpgf from "../assets/logo-nppm-ppgf.jpeg";
import logoLafac from "../assets/logo-lafac-ufpi.jpeg";

export default function LogoInstitucional({
  direction = "row",
  small = false,
  showAddress = false,
}) {
  return (
    <div
      className="logo-inst flex flex-col justify-center items-center"
      style={{ width: "100%" }}
    >
      <div
        className={`flex ${direction === "row" ? "flex-row" : "flex-col"} justify-center items-center gap-4`}
      >
        <img
          src={logoNppmPpgf}
          alt="NPPM/PPGF - UFPI"
          style={{
            height: 80,
            maxWidth: small ? 120 : 220,
            borderRadius: 12,
            boxShadow: "0 2px 16px #0001",
            background: "#fff",
          }}
        />
        <img
          src={logoLafac}
          alt="LAFAC-UFPI"
          style={{
            height: 80,
            maxWidth: small ? 70 : 130,
            borderRadius: 12,
            boxShadow: "0 2px 16px #0001",
            background: "#fff",
          }}
        />
      </div>
      {showAddress && (
      <div className="text-xs text-center mt-2 font-bold"
          style={{ color: "#000" }}
        >
        UFPI – Campus Universitário Ministro Petrônio Portella, Ininga, Teresina‑PI, 64049‑550
      </div>
       )}
    </div>
  );
}