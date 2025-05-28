import React from "react";
import { useTranslation } from "react-i18next";
import imgCerebro from "../assets/cerebro.jpeg";      
import imgNatural from "../assets/plantas-medicinais.avif";      
import imgJogos from "../assets/jogos.jpeg";          
import imgPlantas from "../assets/planta.avif";
import imgProfissionais from "../assets/profissionais.jpeg";   // <- esta imagem será usada!
import imgApoio from "../assets/idosoapoio.avif";

export default function IntroBlock() {
  const { t } = useTranslation();

  return (
    <section className="container my-5">
      <div className="row mb-4 align-items-center">
        <div className="col-md-7">
          <h2 className="fw-bold text-primary mb-3">{t("introblock.titulo")}</h2>
          <p>{t("introblock.p1")}</p>
          <p>{t("introblock.p2")}</p>
          <p>{t("introblock.p3")}</p>
        </div>
        <div className="col-md-5 d-flex justify-content-center">
          <img
            src={imgCerebro}
            alt={t("introblock.img_cerebro")}
            className="img-fluid rounded shadow"
            style={{ maxHeight: 220 }}
          />
        </div>
      </div>

      <div className="row text-center">
        <div className="col-md-4 mb-4">
          {/* TROQUEI para imgProfissionais */}
          <img src={imgProfissionais} alt={t("introblock.img_prof_saude")} className="img-fluid rounded" style={{ height: 110 }} />
          <h4 className="mt-3 fw-bold">{t("introblock.prof_saude_titulo")}</h4>
          <div className="text-muted small">{t("introblock.prof_saude_desc")}</div>
        </div>
        <div className="col-md-4 mb-4">
          <img src={imgNatural} alt={t("introblock.img_natural")} className="img-fluid rounded" style={{ height: 110 }} />
          <h4 className="mt-3 fw-bold">{t("introblock.natural_titulo")}</h4>
          <div className="text-muted small">{t("introblock.natural_desc")}</div>
        </div>
        <div className="col-md-4 mb-4">
          <img src={imgJogos} alt={t("introblock.img_jogos")} className="img-fluid rounded" style={{ height: 110 }} />
          <h4 className="mt-3 fw-bold">{t("introblock.jogos_titulo")}</h4>
          <div className="text-muted small">{t("introblock.jogos_desc")}</div>
        </div>
      </div>
    </section>
  );
}
