import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import ArtigosPubmed from "./ArtigosPubmed";

const ArtigosPubmedBusca = ({ filtro }) => {
  const [termo, setTermo] = useState("");
  const [consulta, setConsulta] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setConsulta(termo);
  };

  return (
    <div className="mt-3">
      <Form onSubmit={handleSubmit} className="mb-3">
        <Form.Group controlId="termoBusca">
          <Form.Label>Pesquisar no PubMed</Form.Label>
          <Form.Control
            type="text"
            placeholder="Digite o termo de busca"
            value={termo}
            onChange={(e) => setTermo(e.target.value)}
          />
        </Form.Group>
        <Button type="submit" className="mt-2" disabled={!termo.trim()}>
          Buscar
        </Button>
      </Form>
      {consulta && <ArtigosPubmed termo={consulta} filtro={filtro} />}
    </div>
  );
};

export default ArtigosPubmedBusca;
