import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import plantas from "../data/plantas";
import PlantaCard from "../components/PlantaCard";
import PlantaModal from "../components/PlantaModal";

export default function PlantasMedicinais() {
  const { t } = useTranslation();
  const [busca, setBusca] = useState("");
  const [plantaSelecionada, setPlantaSelecionada] = useState(null);

  // Filtro de busca
  const plantasFiltradas = plantas.filter(planta => {
    const texto = `${planta.nome} ${planta.nome_cientifico} ${planta.origem} ${planta.usos}`.toLowerCase();
    return texto.includes(busca.toLowerCase());
  });

  return (
    <div className="container py-4">
      <h1 className="fw-bold text-center mb-3">
        {t("plantas_medicinais_titulo") || "Plantas Medicinais no Tratamento"}
      </h1>
      <div className="text-muted text-center mb-3" style={{ fontSize: 18 }}>
        {t("plantas_medicinais_desc") || "Biblioteca interativa de plantas estudadas para Alzheimer."}
      </div>
      <input
        className="form-control mb-4"
        type="text"
        placeholder={t("buscar_nome_origem") || "Buscar por nome ou origem..."}
        value={busca}
        onChange={e => setBusca(e.target.value)}
      />
      <div className="row g-4">
        {plantasFiltradas.map(planta => (
          <div className="col-md-4" key={planta.id}>
            <PlantaCard planta={planta} onClick={() => setPlantaSelecionada(planta)} />
          </div>
        ))}
      </div>
      {/* Modal de detalhes */}
      {plantaSelecionada && (
        <PlantaModal
          planta={plantaSelecionada}
          onClose={() => setPlantaSelecionada(null)}
        />
      )}
    </div>
  );
}
