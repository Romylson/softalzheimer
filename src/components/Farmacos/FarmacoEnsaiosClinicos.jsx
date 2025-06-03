// src/components/Farmacos/FarmacoEnsaiosClinicos.jsx
import React, { useState, useEffect } from 'react';
// Certifique-se de ter instalado o react-bootstrap e de importar o Spinner corretamente:
import Spinner from 'react-bootstrap/Spinner';

// Caso não use React-Bootstrap, basta trocar <Spinner> por qualquer outro indicador de loading.

const FarmacoEnsaiosClinicos = ({ nomeFarmaco }) => {
  const [dados, setDados] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    // Sempre que o nomeFarmaco mudar, refaz a busca
    const buscarEnsaios = async () => {
      setCarregando(true);
      setErro(null);

      // Usamos uma URL relativa: em produção, o Vercel vai procurar /api/pubmed
      // Em dev, se seu backend estiver rodando em /api/pubmed local, ok.
      const urlBase = process.env.REACT_APP_API_BASE_URL || ''; 
      const url = `${urlBase}/api/pubmed?q=${encodeURIComponent(nomeFarmaco)}`;

      try {
        const resp = await fetch(url);
        // Se a resposta não for 2xx, dispara exceção
        if (!resp.ok) {
          throw new Error(`Erro HTTP ${resp.status}`);
        }
        const json = await resp.json();
        setDados(json);
      } catch (e) {
        console.error('Erro ao buscar PubMed:', e);
        // Avise ao usuário que não foi possível carregar
        setErro('Não foi possível carregar os ensaios clínicos no momento.');
      } finally {
        setCarregando(false);
      }
    };

    // Só busca se tiver um nomeFarmaco válido
    if (nomeFarmaco) {
      buscarEnsaios();
    } else {
      setCarregando(false);
    }
  }, [nomeFarmaco]);

  // Render enquanto carrega
  if (carregando) {
    return (
      <div className="d-flex justify-content-center mt-4">
        <Spinner animation="border" role="status" />
      </div>
    );
  }

  // Renderizamos erro, se existir
  if (erro) {
    return (
      <div className="alert alert-danger mt-4">
        {erro}
      </div>
    );
  }

  // Se não houver dados (array vazio), informamos ao usuário
  if (!dados || dados.length === 0) {
    return (
      <div className="alert alert-warning mt-4">
        Nenhum ensaio clínico encontrado para “{nomeFarmaco}”.
      </div>
    );
  }

  // Caso contrário, renderizamos a lista de ensaios
  return (
    <div className="mt-4">
      {dados.map((item, idx) => (
        <div key={idx} className="card mb-3">
          <div className="card-body">
            <h5 className="card-title">{item.title}</h5>
            {item.abstract && (
              <p className="card-text">{item.abstract}</p>
            )}
            {/* Exemplo: se existir link para PubMed */}
            {item.link && (
              <a href={item.link} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-primary">
                Ver no PubMed
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FarmacoEnsaiosClinicos;
