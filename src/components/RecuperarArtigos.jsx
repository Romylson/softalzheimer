import React, { useState } from "react";
import { Tabs, Tab, Form, Button, Spinner, Alert, Card } from "react-bootstrap";

const categorias = [
  { chave: "farmacos", rotulo: "Fármacos Convencionais" },
  { chave: "naturais", rotulo: "Produtos Naturais Isolados" },
  { chave: "plantas", rotulo: "Plantas Medicinais" },
];

const exemploTermos = {
  farmacos: "Donepezila",
  naturais: "Curcumina",
  plantas: "Ginkgo biloba",
};

const RecuperarArtigos = () => {
  const [categoria, setCategoria] = useState("farmacos");
  const [busca, setBusca] = useState("");
  const [resultados, setResultados] = useState([]);
  const [carregando, setCarregando] = useState(false);
  const [erro, setErro] = useState(null);

  const buscarArtigos = async () => {
    setCarregando(true);
    setErro(null);
    setResultados([]);
    const termo = `${busca} Alzheimer`;
    try {
      const r1 = await fetch(`/api/pubmed?q=${encodeURIComponent(termo)}`);
      const json1 = await r1.json();
      const ids = json1?.esearchresult?.idlist || [];
      if (!ids.length) {
        setResultados([]);
        return;
      }
      const r2 = await fetch(`/api/pubmed-summary?ids=${ids.join(",")}`);
      const json2 = await r2.json();
      const dados = Object.values(json2.result)
        .filter((i) => i.uid)
        .map((item) => ({
          id: item.uid,
          titulo: item.title,
          fonte: item.source,
          link: `https://pubmed.ncbi.nlm.nih.gov/${item.uid}`,
        }));
      setResultados(dados);
    } catch (e) {
      setErro("Erro ao buscar artigos.");
    } finally {
      setCarregando(false);
    }
  };

  return (
    <div className="container mt-4">
      <h4 className="mb-3">Recuperar Artigos Científicos</h4>
      <Tabs activeKey={categoria} onSelect={setCategoria} className="mb-3">
        {categorias.map((c) => (
          <Tab key={c.chave} eventKey={c.chave} title={c.rotulo} />
        ))}
      </Tabs>

      <Form className="mb-3" onSubmit={(e) => e.preventDefault()}>
        <Form.Group>
          <Form.Label>Termo de Busca ({categoria}):</Form.Label>
          <Form.Control
            type="text"
            placeholder={`Ex: ${exemploTermos[categoria]}`}
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
          />
        </Form.Group>
        <Button className="mt-2" onClick={buscarArtigos} disabled={carregando}>
          {carregando ? <Spinner animation="border" size="sm" /> : "Buscar"}
        </Button>
      </Form>

      {erro && <Alert variant="danger">{erro}</Alert>}
      {resultados.length === 0 && !carregando && !erro && (
        <Alert variant="info">Nenhum artigo encontrado.</Alert>
      )}
      {resultados.map((item, idx) => (
        <Card key={idx} className="mb-2">
          <Card.Body>
            <Card.Title>{item.titulo}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{item.fonte}</Card.Subtitle>
            <Button variant="outline-primary" size="sm" href={item.link} target="_blank">
              Ver no PubMed
            </Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default RecuperarArtigos;
