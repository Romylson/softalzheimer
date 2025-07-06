import React from "react";
import { useTranslation } from "react-i18next";

export default function TimelineProgresso() {
  const { t } = useTranslation();

  return (
    <section className="my-5">
      <h2 className="fw-bold text-primary text-center mb-4">
        {t("fisiopatologia.timeline_titulo")}
      </h2>

      <div className="d-flex flex-wrap justify-content-center gap-5">
        {/* Leve */}
        <div className="text-center">
          <img
            src="/images/leve.png"
            alt="Estágio Leve"
            style={{ width: 400, height: 400, objectFit: "contain" }}
          />
          <div className="fw-bold mt-2">{t("fisiopatologia.leve")}</div>
          <div className="text-muted small">{t("fisiopatologia.leve_desc")}</div>
        </div>

        {/* Moderada */}
        <div className="text-center">
          <img
            src="/images/moderada.png"
            alt="Estágio Moderado"
            style={{ width: 400, height: 400, objectFit: "contain" }}
          />
          <div className="fw-bold mt-2">{t("fisiopatologia.moderada")}</div>
          <div className="text-muted small">{t("fisiopatologia.moderada_desc")}</div>
        </div>

        {/* Grave */}
        <div className="text-center">
          <img
            src="/images/grave.png"
            alt="Estágio Grave"
            style={{ width: 400, height: 400, objectFit: "contain" }}
          />
          <div className="fw-bold mt-2">{t("fisiopatologia.grave")}</div>
          <div className="text-muted small">{t("fisiopatologia.grave_desc")}</div>
        </div>
      </div>
      <section className="my-5 px-4">
  <h3 className="fw-bold text-primary text-center mb-3">
    Principais Teorias Fisiopatológicas do Alzheimer
  </h3>
  <div className="mx-auto" style={{ maxWidth: "1100px", textAlign: "justify", lineHeight: "1.8" }}>
    <p>
      A Doença de Alzheimer é uma condição neurodegenerativa progressiva, cuja origem ainda não é completamente elucidada. Diversas teorias fisiopatológicas têm sido propostas para explicar os mecanismos subjacentes à neurodegeneração, destacando aspectos moleculares, celulares e inflamatórios.
    </p>

    <p>
      <strong>1. Hipótese da Cascata Amiloide:</strong> Esta teoria propõe que o acúmulo de peptídeos β-amiloides (Aβ), resultantes da clivagem anormal da proteína precursora amiloide (APP), é o evento inicial e central no desenvolvimento da doença. Esses peptídeos se agregam formando placas senis extracelulares, promovendo toxicidade sináptica, estresse oxidativo e inflamação.
    </p>

    <p>
      <strong>2. Hipótese da Proteína Tau:</strong> Complementar à hipótese amiloide, esta teoria destaca o papel da hiperfosforilação da proteína tau, que leva à formação de emaranhados neurofibrilares intracelulares. Essas estruturas afetam a estabilidade dos microtúbulos neuronais e comprometem o transporte axonal, culminando em disfunção e morte celular.
    </p>

    <p>
      <strong>3. Estresse Oxidativo:</strong> O excesso de espécies reativas de oxigênio (ROS) em associação à redução de mecanismos antioxidantes é amplamente documentado no Alzheimer. O estresse oxidativo contribui para danos ao DNA, lipídios e proteínas neuronais, agravando a disfunção celular.
    </p>

    <p>
      <strong>4. Disfunção Mitocondrial:</strong> Alterações na atividade mitocondrial levam à redução da produção de ATP e aumento da apoptose, favorecendo a perda de neurônios. A mitocôndria também está envolvida na amplificação do estresse oxidativo.
    </p>

    <p>
      <strong>5. Inflamação Neurogênica Crônica:</strong> A ativação sustentada da microglia e astrócitos libera citocinas pró-inflamatórias (como IL-1β, TNF-α), exacerbando os danos neuronais. Esta resposta inflamatória persistente, mesmo na ausência de patógenos, intensifica a progressão da doença.
    </p>

    <p>
      <strong>6. Teoria da Disfunção Sináptica:</strong> O comprometimento da plasticidade e transmissão sináptica, especialmente em áreas como o hipocampo, precede a perda neuronal. A toxicidade de oligômeros de β-amiloide sobre os receptores NMDA contribui significativamente para a perda de memória precoce.
    </p>

    <p className="mt-3">
      A interação entre essas vias forma um cenário complexo que culmina na degeneração progressiva do tecido cerebral, caracterizada por atrofia cortical, perda de memória, déficit cognitivo e alterações comportamentais.
    </p>
  </div>
</section>


    </section>
    
  );
}
