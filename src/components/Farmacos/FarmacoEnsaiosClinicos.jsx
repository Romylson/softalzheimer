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
      setDados([]);

      const urlBase = import.meta.env.VITE_API_BASE_URL || "";
      const endpoint = `${urlBase}/pubmed?q=${encodeURIComponent(nomeFarmaco)}`;
      const response = await fetch(endpoint);

      try {
        // Passo 1: buscar IDs
        const r1 = await fetch(`${urlBase}/api/pubmed?q=${encodeURIComponent(nomeFarmaco)}`);
        const json1 = await r1.json();
        const ids = json1?.esearchresult?.idlist;
        if (!ids || ids.length === 0) {
          setDados([]);
          return;
        }

        // Passo 2: buscar resumos
        const r2 = await fetch(`${urlBase}/api/pubmed-summary?ids=${ids.join(",")}`);
        const json2 = await r2.json();
        const resumos = Object.values(json2.result).filter((i) => i.uid);

        const dadosFormatados = resumos.map((item) => ({
          title: item.title,
          abstract: item.source, // aqui você pode tentar item.summary ou item.source
          link: `https://pubmed.ncbi.nlm.nih.gov/${item.uid}`,
        }));

        setDados(dadosFormatados);
      } catch (e) {
        console.error("Erro ao buscar Ensaios Clínicos:", e);
        setErro("Erro ao buscar ensaios clínicos.");
      } finally {
        setCarregando(false);
      }
    };

    buscarEnsaios();
  }, [nomeFarmaco]);

  if (!nomeFarmaco) {
    return (
      <Alert variant="warning" className="mt-3">
        Selecione um fármaco para visualizar ensaios clínicos.
      </Alert>
    );
  }

  if (carregando) {
    return (
      <div className="d-flex justify-content-center my-3">
        <Spinner animation="border" role="status" />
      </div>
    );
  }

  if (erro) {
    return (
      <Alert variant="danger" className="mt-3">
        {erro}
      </Alert>
    );
  }

  if (!dados || dados.length === 0) {
    return (
      <Alert variant="warning" className="mt-3">
        Nenhum ensaio clínico encontrado para “{nomeFarmaco}”.
      </Alert>
    );
  }

  return (
    <div className="mt-3">
      {dados.map((item, idx) => (
        <Card key={idx} className="mb-2">
          <Card.Body>
            <Card.Title>{item.title || "Título não disponível"}</Card.Title>
            {item.abstract && <Card.Text>{item.abstract}</Card.Text>}
            <Button
              variant="primary"
              size="sm"
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver no PubMed
            </Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default FarmacoEnsaiosClinicos;
