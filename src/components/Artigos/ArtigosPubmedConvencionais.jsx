import React, { useEffect, useState } from "react";
import Spinner from "react-bootstrap/Spinner";
import Alert from "react-bootstrap/Alert";
import Card from "react-bootstrap/Card";

const ArtigosPubmedConvencionais = () => {
  const [dados, setDados] = useState([]);
  const [carregando, setCarregando] = useState(false);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    const buscarArtigos = async () => {
      setCarregando(true);
      setErro(null);
      setDados([]);

      try {
        const response = await fetch(`/api/pubmed?q=Alzheimer+AND+therapeutic+agents`);


        if (!response.ok) {
          throw new Error(`Erro HTTP ${response.status}`);
        }

        const json = await response.json();
        const ids = json?.esearchresult?.idlist;

        if (!ids || ids.length === 0) {
          setDados([]);
          return;
        }

        const res = await fetch(`/api/pubmed-summary?ids=${ids.join(",")}`);

        if (!res.ok) {
          throw new Error(`Erro HTTP ${res.status}`);
        }

        const sumario = await res.json();
        const artigos = Object.values(sumario.result).filter((i) => i.uid);

        const formatado = artigos.map((item) => ({
          title: item.title,
          link: `https://pubmed.ncbi.nlm.nih.gov/${item.uid}`,
          fonte: item.source
        }));

        setDados(formatado);
      } catch (e) {
        console.error("Erro ao buscar artigos PubMed:", e);
        setErro("Erro ao buscar artigos PubMed.");
      } finally {
        setCarregando(false);
      }
    };

    buscarArtigos();
  }, []);

  if (carregando) return <Spinner animation="border" className="mt-3" />;

  if (erro) return <Alert variant="danger" className="mt-3">{erro}</Alert>;

  if (!dados || dados.length === 0) {
    return <Alert variant="warning" className="mt-3">Nenhum artigo encontrado.</Alert>;
  }

  return (
    <div className="mt-3">
      {dados.map((artigo, idx) => (
        <Card key={idx} className="mb-2">
          <Card.Body>
            <Card.Title>{artigo.title || "Sem título"}</Card.Title>
            <Card.Text><strong>Fonte:</strong> {artigo.fonte}</Card.Text>
            <a
              href={artigo.link}
              className="btn btn-primary btn-sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver no PubMed
            </a>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default ArtigosPubmedConvencionais;
