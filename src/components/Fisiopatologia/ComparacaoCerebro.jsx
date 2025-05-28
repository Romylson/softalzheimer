import React from "react";
import imgNormal from "../../assets/cerebronormal.jpg";
import imgAlzheimer from "../../assets/cerebroalzheimer.jpg";
import { useTranslation } from "react-i18next";


export default function ComparacaoCerebro() {
  const { t } = useTranslation();

  return (
    <section className="my-5 text-center">
      <h2 className="fw-bold mb-4">{t("comparacao_cerebro.titulo")}</h2>
      <div className="d-flex flex-wrap justify-content-center align-items-center gap-5">
        <div>
          <img
            src={imgNormal}
            alt={t("comparacao_cerebro.normal_alt")}
            style={{ width: 220, maxWidth: "100%", borderRadius: 12 }}
          />
          <h4 className="mt-2">{t("comparacao_cerebro.normal")}</h4>
        </div>
        <div>
          <img
            src={imgAlzheimer}
            alt={t("comparacao_cerebro.alzheimer_alt")}
            style={{ width: 220, maxWidth: "100%", borderRadius: 12 }}
          />
          <h4 className="mt-2">{t("comparacao_cerebro.alzheimer")}</h4>
        </div>
      </div>
      <div className="mt-3 text-muted">{t("comparacao_cerebro.desc")}</div>
    </section>
  );
}
