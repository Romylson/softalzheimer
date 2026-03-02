import React from "react";
import { useTranslation } from "react-i18next";
import { autoresFisiopatologia } from "../../data/fisiopatologia";
import "./fisiopatologia.css";

const autorLeve = autoresFisiopatologia.timelineProgressao.leve;
const autorModerada = autoresFisiopatologia.timelineProgressao.moderada;
const autorGrave = autoresFisiopatologia.timelineProgressao.grave;

export default function TimelineProgresso() {
  const { t } = useTranslation();

  return (
    <section className="fisio-section">
      <h2 className="fw-bold text-primary text-center mb-4">
        {t("fisiopatologia.timeline_titulo")}
      </h2>

      <div className="fisio-grid-3">
        {/* Leve */}
        <div className="fisio-card">
          <img
            src="/images/leve.png"
            alt="Estágio Leve"
            className="fisio-image-large"
          />
          <h4 className="fw-bold">{t("fisiopatologia.leve")}</h4>
          <p className="text-muted small">{t("fisiopatologia.leve_desc")}</p>
          <p className="text-muted small mt-2">Imagem: Estágio Leve - Autor: {autorLeve}</p>
        </div>

        {/* Moderada */}
        <div className="fisio-card">
          <img
            src="/images/moderada.png"
            alt="Estágio Moderado"
            className="fisio-image-large"
          />
          <h4 className="fw-bold">{t("fisiopatologia.moderada")}</h4>
          <p className="text-muted small">{t("fisiopatologia.moderada_desc")}</p>
          <p className="text-muted small mt-2">Imagem: Estágio Moderado - Autor: {autorModerada}</p>
        </div>

        {/* Grave */}
        <div className="fisio-card">
          <img
            src="/images/grave.png"
            alt="Estágio Grave"
            className="fisio-image-large"
          />
          <h4 className="fw-bold">{t("fisiopatologia.grave")}</h4>
          <p className="text-muted small">{t("fisiopatologia.grave_desc")}</p>
          <p className="text-muted small mt-2">Imagem: Estágio Grave - Autor: {autorGrave}</p>
        </div>
      </div>
      <section className="fisio-section fisio-teorias px-1 px-md-3">
        <h3 className="fw-bold text-primary text-center mb-3">
          Principais Teorias Fisiopatológicas do Alzheimer
        </h3>
        <div className="fisio-grid-2">
          <article className="fisio-card">
            <h4>1. Hipótese da Cascata Amiloide</h4>
            <p>Acúmulo de Aβ (derivado da APP) formando placas extracelulares, com toxicidade sináptica e inflamação.</p>
          </article>
          <article className="fisio-card">
            <h4>2. Hipótese da Proteína Tau</h4>
            <p>Hiperfosforilação de tau e formação de emaranhados neurofibrilares, comprometendo transporte axonal.</p>
          </article>
          <article className="fisio-card">
            <h4>3. Estresse Oxidativo</h4>
            <p>Excesso de ROS e dano a DNA, lipídios e proteínas, agravando disfunção neuronal progressiva.</p>
          </article>
          <article className="fisio-card">
            <h4>4. Disfunção Mitocondrial</h4>
            <p>Redução de ATP, aumento de apoptose e amplificação do dano oxidativo em neurônios vulneráveis.</p>
          </article>
          <article className="fisio-card">
            <h4>5. Neuroinflamação Crônica</h4>
            <p>Ativação persistente de microglia/astrócitos com liberação de IL-1β e TNF-α, acelerando progressão.</p>
          </article>
          <article className="fisio-card">
            <h4>6. Disfunção Sináptica</h4>
            <p>Comprometimento precoce da plasticidade e transmissão sináptica, com impacto direto na memória.</p>
          </article>
        </div>
      </section>


    </section>
    
  );
}
