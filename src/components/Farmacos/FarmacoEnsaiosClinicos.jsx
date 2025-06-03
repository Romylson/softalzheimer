// src/components/Farmacos/FarmacoEnsaiosClinicos.jsx

import React, { useState, useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";
import Alert from "react-bootstrap/Alert";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const FarmacoEnsaiosClinicos = ({ nomeFarmaco }) => {
  const [dados, setDados] = useState([]);
  const [carregando, setCarregando] = useState(false);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    if (!nomeFarmaco) return;

    const buscarEnsaios = async () => {
      setCarregando(true);
      setErro(null);

      // Chama rota relativa (em produção, /api/pubmed; em dev, use REACT_APP_API_BASE_URL se definido)
      const urlBase = process.env.REACT_APP_API_BASE_URL || "";
      const endpoint = `${urlBase}/api/pubmed?q=${encodeURIComponent(nomeFarmaco)}`;

      try {
        const resp = await fetch(endpoint);
        if (!resp.ok) {
          throw new Error(`Erro HTTP ${resp.status}`);
        }
        const json = await resp.json();
        setDados(Array.isArray(json) ? json : []);
      } catch (e) {
        console.error("Erro ao buscar Ensaios Clínicos:", e);
        setErro("Não foi possível carregar os ensaios clínicos no momento.");
      } finally {
        setCarregando(false);
      }
    };

    buscarEnsaios();
  }, [nomeFarmaco]);

  // Se nomeFarmaco for vazio (por segurança)
  if (!nomeFarmaco) {
    return (
      <Alert variant="warning" className="mt-3">
        Selecione um fármaco para visualizar ensaios clínicos.
      </Alert>
    );
  }

  // Spinner enquanto carrega
  if (carregando) {
    return (
      <div className="d-flex justify-content-center my-3">
        <Spinner animation="border" role="status" />
      </div>
    );
  }

  // Se der erro na requisição
  if (erro) {
    return (
      <Alert variant="danger" className="mt-3">
        {erro}
      </Alert>
    );
  }

  // Se nenhum dado encontrado
  if (!dados || dados.length === 0) {
    return (
      <Alert variant="warning" className="mt-3">
        Nenhum ensaio clínico encontrado para “{nomeFarmaco}”.
      </Alert>
    );
  }

  // Caso haja resultados, lista-os em cards
  return (
    <div className="mt-3">
      {dados.map((item, idx) => (
        <Card key={idx} className="mb-2">
          <Card.Body>
            <Card.Title>{item.title || "Título não disponível"}</Card.Title>
            {item.abstract && <Card.Text>{item.abstract}</Card.Text>}
            {item.link && (
              <Button
                variant="primary"
                size="sm"
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                Ver no PubMed
              </Button>
            )}
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default FarmacoEnsaiosClinicos;
