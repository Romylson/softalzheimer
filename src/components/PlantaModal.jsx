import React from "react";
import MapaOrigem from "./MapaOrigem";
import { useTranslation } from "react-i18next";

export default function PlantaModal({ planta, onClose }) {
  const { t } = useTranslation();

  return (
    <div className="modal show d-block" tabIndex="-1" style={{ background: "#0008" }}>
      <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{planta.nome}</h5>
            <button type="button" className="btn-close" onClick={onClose}></button>
          </div>
          <div className="modal-body row">
            <div className="col-md-5">
              <img
                src={planta.imagem}
                alt={planta.nome}
                className="img-fluid rounded mb-3"
                style={{ maxHeight: 200, objectFit: "cover" }}
              />
              <MapaOrigem planta={planta} />
            </div>
            <div className="col-md-7">
              <div>
                <b>{t("nome_cientifico") || "Nome científico"}:</b> {planta.nome_cientifico}
              </div>
              <div>
                <b>{t("origem") || "Origem"}:</b> {planta.origem}
              </div>
              <div>
                <b>{t("mecanismos") || "Mecanismos"}:</b> {planta.mecanismos}
              </div>
              <div>
                <b>{t("usos_tradicionais") || "Usos tradicionais"}:</b> {planta.usos}
              </div>

              {/* ALERTAS DE INTERAÇÕES */}
              {planta.interacoes && planta.interacoes.length > 0 && (
                <div className="mt-4">
                  <h5 style={{ color: "#c00" }}>{t("alerta_interacoes") || "Alerta de Interações"}</h5>
                  {planta.interacoes.map((int, idx) => (
                    <div
                      key={idx}
                      style={{
                        background: "#fff3cd",
                        borderLeft: "5px solid #f5c542",
                        padding: "10px 15px",
                        borderRadius: 6,
                        marginBottom: 8,
                        fontSize: 15,
                      }}
                    >
                      <b>{int.medicamento}:</b> {int.risco}
                      <br />
                      <span style={{ fontSize: 13, color: "#7a7a7a" }}>{int.evidencia}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
          <div className="modal-footer">
            <button className="btn btn-secondary" onClick={onClose}>
              {t("close") || "Fechar"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
