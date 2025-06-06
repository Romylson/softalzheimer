// ArtigosCientificosTabs.jsx (com filtro por tipo de estudo)
import React, { useState } from "react";
import { Tabs, Tab, ButtonGroup, ToggleButton } from "react-bootstrap";
import ArtigosPubmed from "./ArtigosPubmed";


const tiposEstudo = [
  { name: "Todos", value: "" },
  { name: "In Vivo", value: "\"in vivo\"" },
  { name: "In Vitro", value: "\"in vitro\"" },
  { name: "Ensaios Clínicos", value: "\"clinical trial\"" },
];

const ArtigosCientificosTabs = () => {
  const [tipoFiltro, setTipoFiltro] = useState("");

  return (
    <div className="mt-4">
      <h2 className="mb-4">Artigos Científicos sobre Alzheimer</h2>

      <ButtonGroup className="mb-3">
        {tiposEstudo.map((tipo, idx) => (
          <ToggleButton
            key={idx}
            id={`radio-${idx}`}
            type="radio"
            variant="outline-primary"
            name="tipoEstudo"
            value={tipo.value}
            checked={tipoFiltro === tipo.value}
            onChange={(e) => setTipoFiltro(e.currentTarget.value)}
          >
            {tipo.name}
          </ToggleButton>
        ))}
      </ButtonGroup>

      <Tabs defaultActiveKey="convencionais" className="mb-3">
        <Tab eventKey="convencionais" title="Fármacos Convencionais">
          <ArtigosPubmed termo="Alzheimer AND (donepezil OR memantine)" filtro={tipoFiltro} />
        </Tab>
        <Tab eventKey="naturais" title="Produtos Naturais Isolados">
          <ArtigosPubmed termo="Alzheimer AND phytochemicals" filtro={tipoFiltro} />
        </Tab>
        <Tab eventKey="plantas" title="Plantas Medicinais">
          <ArtigosPubmed termo="Alzheimer AND medicinal plants" filtro={tipoFiltro} />
        </Tab>
      </Tabs>
    </div>
  );
};

export default ArtigosCientificosTabs;
