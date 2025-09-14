// ArtigosCientificosTabs.jsx (com filtro por tipo de estudo)
import React, { useState } from "react";
import { Tabs, Tab, ButtonGroup, ToggleButton, Form } from "react-bootstrap";
import ArtigosPubmed from "./ArtigosPubmed";


const tiposEstudo = [
 // { name: "Todos", value: "" },
 // { name: "In Vivo", value: "\"in vivo\"" },
 // { name: "In Vitro", value: "\"in vitro\"" },
 // { name: "Ensaios Clínicos", value: "\"clinical trial\"" },
  { name: "Todos", value: "todos" },
  { name: "In Vivo", value: "invivo" },
  { name: "In Vitro", value: "invitro" },
  { name: "Ensaios Clínicos", value: "ensaios" },
];

const ArtigosCientificosTabs = () => {
 // const [tipoFiltro, setTipoFiltro] = useState("");
  const [tipoFiltro, setTipoFiltro] = useState("todos");
  const [termoBusca, setTermoBusca] = useState("");

  const montarTermo = (base) =>
    `${base}${termoBusca ? ` AND ${termoBusca}` : ""}`;


  return (
    <div className="mt-4">
      <h2 className="mb-4">Artigos Científicos sobre Alzheimer</h2>
      <Form className="mb-3">
        <Form.Control
          type="text"
          placeholder="Pesquisar por palavra-chave"
          value={termoBusca}
          onChange={(e) => setTermoBusca(e.target.value)}
        />
      </Form>


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
          <ArtigosPubmed
            termo={montarTermo("Alzheimer AND (donepezil OR memantine)")}
            filtro={tipoFiltro}
          />
        </Tab>
        <Tab eventKey="naturais" title="Produtos Naturais Isolados">
          <ArtigosPubmed
            termo={montarTermo("Alzheimer AND phytochemicals")}
            filtro={tipoFiltro}
          />
        </Tab>
        <Tab eventKey="plantas" title="Plantas Medicinais">
          <ArtigosPubmed
            termo={montarTermo("Alzheimer AND medicinal plants")}
            filtro={tipoFiltro}
          />
        </Tab>
      </Tabs>
    </div>
  );
};

export default ArtigosCientificosTabs;
