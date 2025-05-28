import React from "react";
import { useTranslation } from "react-i18next";
import alvoColinesterase from "../../assets/alvo-colinesterase.png"; // Coloque imagem ilustrativa
import alvoGlutamato from "../../assets/alvo-glutamato.png";

export default function AlvosMoleculares() {
  const { t } = useTranslation();

  return (
    <div className="row mb-4">
      <h2 className="mb-3">{t("alvos_moleculares_title")}</h2>
      <div className="col-md-6 text-center">
        <img src={alvoColinesterase} alt="Colinesterase" className="img-fluid" style={{ maxHeight: 150 }} />
        <div className="fw-bold">{t("alvo_colinesterase")}</div>
        <div className="text-muted">{t("alvo_colinesterase_desc")}</div>
      </div>
      <div className="col-md-6 text-center">
        <img src={alvoGlutamato} alt="Glutamato" className="img-fluid" style={{ maxHeight: 150 }} />
        <div className="fw-bold">{t("alvo_glutamato")}</div>
        <div className="text-muted">{t("alvo_glutamato_desc")}</div>
      </div>
    </div>
  );
}
