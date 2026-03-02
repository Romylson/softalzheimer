import React, { useMemo, useState } from "react";
import PlantaModal from "../components/PlantaModal";
import plantas from "../data/plantas";
import "./PlantasEvidenciaPage.css";

const letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

const normalizar = (texto = "") =>
  texto
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toUpperCase();

const resumo = (planta) => {
  const base = planta.usos || planta.mecanismos || "";
  return base.length > 120 ? `${base.slice(0, 120)}...` : base;
};

export default function PlantasEvidenciaPage() {
  const [busca, setBusca] = useState("");
  const [letraAtiva, setLetraAtiva] = useState("");
  const [plantaSelecionada, setPlantaSelecionada] = useState(null);

  const plantasFiltradas = useMemo(() => {
    return plantas.filter((planta) => {
      const nomeRef = normalizar(planta.nome_cientifico || planta.nome);
      const passaLetra = letraAtiva ? nomeRef.startsWith(letraAtiva) : true;
      const textoBusca = normalizar(
        `${planta.nome} ${planta.nome_cientifico} ${planta.origem} ${planta.mecanismos}`
      );
      const passaBusca = busca ? textoBusca.includes(normalizar(busca)) : true;
      return passaLetra && passaBusca;
    });
  }, [busca, letraAtiva]);

  const limpar = () => {
    setBusca("");
    setLetraAtiva("");
  };

  return (
    <main className="plantas-evidencia-page">
      <h1>PLANTAS MEDICINAIS</h1>
      <p>
        Encontre aqui monografias de plantas medicinais por ordem alfabética. No campo abaixo,
        digite o nome científico ou popular da espécie medicinal de interesse.
      </p>

      <div className="filtros-topo">
        <input
          type="text"
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
          placeholder="Digite o nome da planta..."
        />
        <button type="button">Pesquisar</button>
        <button type="button" onClick={limpar}>Limpar filtro</button>
      </div>

      <div className="alfabeto">
        {letras.map((letra) => (
          <button
            key={letra}
            type="button"
            className={letraAtiva === letra ? "ativo" : ""}
            onClick={() => setLetraAtiva((prev) => (prev === letra ? "" : letra))}
          >
            {letra}
          </button>
        ))}
      </div>

      <section className="grade-plantas">
        {plantasFiltradas.map((planta) => (
          <article key={planta.id} className="planta-card-lista">
            <img src={planta.imagem} alt={planta.nome} />
            <div>
              <h3>{planta.nome_cientifico}</h3>
              <p className="nome-popular">{planta.nome.split("(")[0].trim()}.</p>
              <p>{resumo(planta)}</p>
              <button type="button" onClick={() => setPlantaSelecionada(planta)}>
                leia mais
              </button>
            </div>
          </article>
        ))}
      </section>

      {plantaSelecionada && (
        <PlantaModal planta={plantaSelecionada} onClose={() => setPlantaSelecionada(null)} />
      )}
    </main>
  );
}
