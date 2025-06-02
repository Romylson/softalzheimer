import React, { useEffect, useState } from "react";
import Spinner from "react-bootstrap/Spinner";

const nomesEN = {
  "Donepezila": "Donepezil",
  "Memantina": "Memantine",
  "Lecanemabe": "Lecanemab",
  "Galantamina": "Galantamine",
  "Rivastigmina": "Rivastigmine",
  "Bacopa monnieri": "Bacopa monnieri"
};

export default function FarmacoEnsaiosClinicos({ nome }) {
  const [ensaios, setEnsaios] = useState([]);
  const [erro, setErro] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!nome) return;

    setLoading(true);
    setErro("");
    setEnsaios([]);

    const termos = [nome, nomesEN[nome]].filter(Boolean);

    (async () => {
      let found = false;
      for (const termo of termos) {
        try {
          const r1 = await fetch(`http://localhost:3001/api/pubmed?q=${encodeURIComponent(termo)}+alzheimer`);
          const j1 = await r1.json();

          if (!j1.esearchresult || !j1.esearchresult.idlist.length) continue;
          const ids = j1.esearchresult.idlist.join(",");
          const r2 = await fetch(`http://localhost:3001/api/pubmed_summary?ids=${ids}`);
          const j2 = await r2.json();

          if (j2.result && j2.result.uids) {
            const lista = [];
            for (const id of j2.result.uids) {
              const item = j2.result[id];
              if (item) {
                lista.push({
                  title: item.title || "Sem título disponível",
                  url: `https://pubmed.ncbi.nlm.nih.gov/${id}/`,
                  date: item.pubdate || "",
                });
              }
            }
            if (lista.length) {
              setEnsaios(lista);
              found = true;
              break;
            }
          }
        } catch (e) {
          setErro("Erro ao buscar ensaios clínicos.");
        }
      }
      setLoading(false);
      if (!found) setErro("Nenhum ensaio clínico recente encontrado.");
    })();
  }, [nome]);

  return (
    <div className="mt-2">
      {loading && (
        <div className="small text-secondary">
          <Spinner size="sm" /> Buscando ensaios clínicos...
        </div>
      )}
      {!loading && erro && (
        <div className="small text-danger">{erro}</div>
      )}
      {!loading && ensaios.length > 0 && (
        <div>
          <b>Ensaio(s) clínico(s) recente(s):</b>
          <ul className="ps-3" style={{ fontSize: 13 }}>
            {ensaios.map((e, idx) => (
              <li key={idx}>
                <a href={e.url} target="_blank" rel="noopener noreferrer">{e.title}</a>
                <span className="text-muted ms-2">({e.date})</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
