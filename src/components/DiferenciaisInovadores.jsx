import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { FaCheckCircle, FaVolumeUp, FaGlasses, FaCubes, FaExpandAlt } from "react-icons/fa";

const features = [
  {
    icon: <FaCheckCircle size={36} className="text-green-600" />,
    titleKey: "scientific_content_title",
    descKey: "scientific_content_desc",
  },
  {
    icon: <FaVolumeUp size={36} className="text-blue-500" />,
    titleKey: "accessibility_title",
    descKey: "accessibility_desc",
  },
  {
    icon: <FaCubes size={36} className="text-purple-500" />,
    titleKey: "visualization_3d_title",
    descKey: "visualization_3d_desc",
  },
  {
    icon: <FaExpandAlt size={36} className="text-orange-500" />,
    titleKey: "scalable_base_title",
    descKey: "scalable_base_desc",
  }
];

export default function InnovativeFeatures() {
  const { t } = useTranslation();

  // Leitura em voz
  const speak = (text) => {
    if (window.speechSynthesis) {
      const utter = new window.SpeechSynthesisUtterance(text);
      utter.lang = (navigator.language || "pt-BR");
      window.speechSynthesis.speak(utter);
    }
  };

  return (
    <section className="py-6">
      <motion.h2
        className="fw-bold text-2xl text-center mb-4"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
      >
        {t("innovative_features_title")}
      </motion.h2>
      <div className="row g-4 justify-content-center">
        {features.map((f, idx) => (
          <motion.div
            key={f.titleKey}
            className="col-md-6 col-lg-3"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.2 }}
            tabIndex={0}
            aria-label={t(f.titleKey)}
          >
            <div className="card h-100 p-3 text-center shadow border-0" role="region">
              <div>{f.icon}</div>
              <h5 className="fw-bold mt-2">{t(f.titleKey)}</h5>
              <p className="text-muted">{t(f.descKey)}</p>
              <button
                className="btn btn-sm btn-outline-secondary mt-2"
                onClick={() => speak(t(f.descKey))}
              >
                🔊 {t("listen")}
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
