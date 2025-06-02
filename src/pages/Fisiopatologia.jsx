import React from "react";
import { useTranslation } from "react-i18next";
import ComparacaoCerebroDetalhada from "../components/Fisiopatologia/ComparacaoCerebroDetalhada";
import PlacasETauAnimacao from "../components/Fisiopatologia/PlacasETauAnimacao";
import TimelineProgressao from "../components/Fisiopatologia/TimelineProgressao";
import ComparacaoCerebro from "../components/Fisiopatologia/ComparacaoCerebro";

export default function FisiopatologiaPage() {
  const { t } = useTranslation();
  return (
    <div className="container py-4">
      <h1 className="fw-bold text-center mb-4">{t("physiopathology_alzheimer")}</h1>
       <ComparacaoCerebro />
      {/* Use aqui a comparação detalhada */}
      <ComparacaoCerebroDetalhada />
      
      <hr className="my-5" />
      <PlacasETauAnimacao />
      <hr className="my-5" />
      <TimelineProgressao />
    </div>
  );
}
