// src/components/Artigos/ArtigosFiltroInterface.jsx
import React, { useState } from "react";
import ArtigosPubmed from "./ArtigosPubmed";
import { ButtonGroup, Button } from "react-bootstrap";

const filtros = [
  { label: "Todos", termo: "Alzheimer" },
  { label: "Convencionais", termo: "Alzheimer pharmaceutics" },
  { label: "Naturais Isolados", termo: "Alzheimer phytochemicals" },
  { label: "Plantas Medicinais", termo: "Alzheimer medicinal plants" },
  { label: "In Vivo", termo: "Alzheimer in vivo" },
  { label: "In Vitro", termo: "Alzheimer in vitro" },
];

const ArtigosFiltroInterface = () => {
  const [termoSelecionado, setTermoSelecionado] = useState(filtros[0].termo);

  return (
    <div className="mt-3">
      <h3>Artigos Científicos</h3>
      <ButtonGroup className="mb-3">
        {filtros.map((filtro, idx) => (
          <Button
            key={idx}
            variant={termoSelecionado === filtro.termo ? "primary" : "outline-primary"}
            onClick={() => setTermoSelecionado(filtro.termo)}
          >
            {filtro.label}
          </Button>
        ))}
      </ButtonGroup>

      <ArtigosPubmed termo={termoSelecionado} />
    </div>
  );
};

export default ArtigosFiltroInterface;
