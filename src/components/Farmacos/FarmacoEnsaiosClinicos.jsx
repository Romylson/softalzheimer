import React, { useEffect, useRef, useState } from "react";
import Spinner from "react-bootstrap/Spinner";

const nomesEN = {
  Donepezila: "Donepezil",
  Memantina: "Memantine",
  Lecanemabe: "Lecanemab",
};

export default function FarmacoEnsaiosClinicos({ nome }) {
  const [ensaios, setEnsaios] = useState([]);
  const [erro, setErro] = useState("");
  const [loading, setLoading] = useState(false);

  const lastEnsaios = useRef([]);
  const lastErro = useRef("");

  useEffect(() => {
    if (!nome) return;

    let ativo = true;
    setLoading(true);

    const tentativas = [nome, nomesEN[nome]].filter(Boolean);

    (async () => {
      let encontrou = false;
      let resultado = [];
      let ultimoErro = "";

      for (const termo of tentativas) {
        try {
          const r1 = await fetch(`http://localhost:3001/api/pubmed?q=${encodeURIComponent(termo)}+alzheimer`);
          const j1 = await r1.json();

          if (!j1.esearchresult || !j1.esearchresult.idlist.length) {
            ultimoErro = "Nenhum ensaio clínico recente encontrado.";
            continue;
          }
          const ids = j1.esearchresult.idlist.join(",");
          const r2 = await fetch(`http://localhost:3001/api/pubmed_summary?ids=${ids}`);
          const j2 = await r2.json();

          resultado = [];
          for (const id of j1.esearchresult.idlist) {
            const item = j2.result && j2.result[id];
            if (item) {
              resultado.push({
                title: item.title || "Sem título disponível",
                url: `https://pubmed.ncbi.nlm.nih.gov/${id}/`,
                date: item.pubdate || "",
              });
            }
          }
          if (resultado.length) {
            encontrou = true;
            break;
          } else {
            ultimoErro = "Nenhum ensaio clínico recente encontrado.";
          }
        } catch (e) {
          ultimoErro = "Erro ao buscar ensaios clínicos.";
        }
      }

      if (ativo) {
        setLoading(false);
        if (encontrou) {
          setEnsaios(resultado);
          setErro("");
          lastEnsaios.current = resultado;
          lastErro.current = "";
        } else {
          setErro(ultimoErro);
          setEnsaios([]);
          lastEnsaios.current = [];
          lastErro.current = ultimoErro;
        }
      }
    })();

    return () => {
      ativo = false;
    };
  }, [nome]);

  return (
    <div className="mt-2">
      {loading && (
        <>
          {lastEnsaios.current.length > 0 && (
            <div>
              <b>Ensaio(s) clínico(s) recente(s) (último resultado):</b>
              <ul className="ps-3" style={{ fontSize: 13 }}>
                {lastEnsaios.current.map((e, idx) => (
                  <li key={idx}>
                    <a href={e.url} target="_blank" rel="noopener noreferrer">{e.title}</a>
                    <span className="text-muted ms-2">({e.date})</span>
                  </li>
                ))}
              </ul>
              <div className="small text-secondary"><Spinner size="sm" /> Buscando ensaios clínicos atualizados...</div>
            </div>
          )}
          {lastEnsaios.current.length === 0 && (
            <div className="small text-secondary">
              <Spinner size="sm" /> Buscando ensaios clínicos...
            </div>
          )}
        </>
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
