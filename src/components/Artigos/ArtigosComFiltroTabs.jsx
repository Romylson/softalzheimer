import React, { useState } from "react";
import { Tabs, Tab } from "react-bootstrap";
import ArtigosPubmed from "./ArtigosPubMed"; // Certifique-se do caminho correto

const ArtigosComFiltroTabs = () => {
  const [filtro, setFiltro] = useState("todos");

  return (
    <div className="mt-4">
      <Tabs
        id="filtro-tabs"
        activeKey={filtro}
        onSelect={(k) => setFiltro(k)}
        className="mb-3"
      >
        <Tab eventKey="todos" title="Todos">
          <ArtigosPubmed termo="Alzheimer AND plantas medicinais" filtro="todos" />
        </Tab>
        <Tab eventKey="invivo" title="In Vivo">
          <ArtigosPubmed termo="Alzheimer AND plantas medicinais" filtro="invivo" />
        </Tab>
        <Tab eventKey="invitro" title="In Vitro">
          <ArtigosPubmed termo="Alzheimer AND plantas medicinais" filtro="invitro" />
        </Tab>
        <Tab eventKey="ensaios" title="Ensaios Clínicos">
          <ArtigosPubmed termo="Alzheimer AND plantas medicinais" filtro="ensaios" />
        </Tab>
      </Tabs>
    </div>
  );
};

export default ArtigosComFiltroTabs;
