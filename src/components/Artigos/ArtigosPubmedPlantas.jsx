// src/components/Artigos/ArtigosPubmedPlantas.jsx
import React, { useEffect, useState } from "react";
import Spinner from "react-bootstrap/Spinner";
import Alert from "react-bootstrap/Alert";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const ArtigosPubmedPlantas = () => {
  const [dados, setDados] = useState([]);
  const [carregando, setCarregando] = useState(false);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    const buscarArtigos = async () => {
      setCarregando(true);
      setErro(null);
      const termoBusca = "Alzheimer plantas medicinais";

      try {
        const r1 = await fetch(`/api/pubmed?q=${encodeURIComponent(termoBusca)}`);
        const json1 = await r1.json();
        const ids = json1?.esearchresult?.idlist;

        if (!ids || ids.length === 0) {
          setDados([]);
          return;
        }

        const r2 = await fetch(`/api/pubmed-summary?ids=${ids.join(",")}`);
        const json2 = await r2.json();
        const resumos = Object.values(json2.result).filter((i) => i.uid);

        const dadosFormatados = resumos.map((item) => ({
          title: item.title,
          source: item.source,
          link: `https://pubmed.ncbi.nlm.nih.gov/${item.uid}`,
        }));

        setDados(dadosFormatados);
      } catch (e) {
        console.error("Erro ao buscar artigos:", e);
        setErro("Erro ao buscar artigos científicos.");
      } finally {
        setCarregando(false);
      }
    };

    buscarArtigos();
  }, []);

  if (carregando) {
    return (
      <div className="d-flex justify-content-center my-3">
        <Spinner animation="border" role="status" />
      </div>
    );
  }

  if (erro) {
    return <Alert variant="danger" className="mt-3">{erro}</Alert>;
  }

  if (!dados || dados.length === 0) {
    return <Alert variant="warning" className="mt-3">Nenhum artigo encontrado sobre Alzheimer e plantas medicinais.</Alert>;
  }

  return (
    <div className="mt-3">
      {dados.map((item, idx) => (
        <Card key={idx} className="mb-2">
          <Card.Body>
            <Card.Title>{item.title || "Título não disponível"}</Card.Title>
            {item.source && <Card.Text>{item.source}</Card.Text>}
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

export default ArtigosPubmedPlantas;
