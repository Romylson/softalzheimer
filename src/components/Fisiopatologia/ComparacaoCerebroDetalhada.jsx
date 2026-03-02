// src/components/Fisiopatologia/ComparacaoCerebroDetalhada.jsx
import React from "react";
import { useTranslation } from "react-i18next";
import normalImg from "../../assets/cerebro_normal.jpg";      // troque pelo caminho correto da sua imagem
import alzheimerImg from "../../assets/cerebro_alzheimer.jpg"; // troque pelo caminho correto da sua imagem
import { autoresFisiopatologia } from "../../data/fisiopatologia";
import "./fisiopatologia.css";

const autorImgNormal = autoresFisiopatologia.comparacaoCerebroDetalhada.normal;
const autorImgAlzheimer = autoresFisiopatologia.comparacaoCerebroDetalhada.alzheimer;

export default function ComparacaoCerebroDetalhada() {
  const { t } = useTranslation();

  return (
    <div className="text-center fisio-section">
      <div className="fisio-grid-2 mb-2">
        <div className="fisio-card">
          <img src={normalImg} alt={t("normal_brain")} className="fisio-image-small" />
          <div className="fw-semibold mt-2">{t("normal_brain")}</div>
          <p className="text-muted small">Imagem: {t("normal_brain")} - Autor: {autorImgNormal}</p>
        </div>
        <div className="fisio-card">
          <img src={alzheimerImg} alt={t("alzheimer_brain")} className="fisio-image-small" />
          <div className="fw-semibold mt-2">{t("alzheimer_brain")}</div>
           <p className="text-muted small">Imagem: {t("alzheimer_brain")} - Autor: {autorImgAlzheimer}</p>
        </div>
      </div>
     {/* <div className="my-3" style={{maxWidth: 800, margin: "0 auto", textAlign: "left"}}>
        <ul style={{fontSize: "1.1rem"}}>
          <li><b>{t("brain_volume")}</b> {t("brain_volume_desc")}</li>
          <li><b>{t("hippocampus")}</b> {t("hippocampus_desc")}</li>
          <li><b>{t("cortex")}</b> {t("cortex_desc")}</li>
          <li><b>{t("sulci_gyri")}</b> {t("sulci_gyri_desc")}</li>
        </ul>
        <div className="mt-3 text-secondary" style={{fontSize: "1rem"}}> 
          <b>{t("hint")}:</b> {t("early_changes_hint")}
        </div>
      </div>*/}
    </div>
  );
}
