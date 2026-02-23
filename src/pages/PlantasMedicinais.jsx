import React, { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import plantas from "../data/plantas";
import PlantaModal from "../components/PlantaModal";
import "./PlantasMedicinaisPage.css";

const letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

const normalizar = (txt = "") =>
  txt
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toUpperCase();

const truncar = (txt = "", limite = 72) => (txt.length > limite ? `${txt.slice(0, limite)}...` : txt);

export default function PlantasMedicinais() {
  const { t } = useTranslation();
  const [busca, setBusca] = useState("");
  const [letraAtiva, setLetraAtiva] = useState("");
  const [plantaSelecionada, setPlantaSelecionada] = useState(null);

  const plantasFiltradas = useMemo(() => {
    return plantas.filter((planta) => {
      const nomeRef = normalizar(planta.nome_cientifico || planta.nome);
      const passaLetra = letraAtiva ? nomeRef.startsWith(letraAtiva) : true;
      const textoBusca = normalizar(
        `${planta.nome} ${planta.nome_cientifico} ${planta.origem} ${planta.usos} ${planta.mecanismos}`
      );
      const passaBusca = busca ? textoBusca.includes(normalizar(busca)) : true;
      return passaLetra && passaBusca;
    });
  }, [busca, letraAtiva]);

  const limparFiltros = () => {
    setBusca("");
    setLetraAtiva("");
  };

  return (
    <div className="plantas-page-wrapper">
      <div className="plantas-page-container">
        <h1>PLANTAS MEDICINAIS</h1>
        <p>
          Encontre aqui monografias de plantas medicinais por ordem alfabética. No campo abaixo,
          digite o nome científico ou popular da espécie medicinal de interesse.
        </p>

        <div className="plantas-filtros-topo">
          <input
            type="text"
            placeholder={t("buscar_nome_origem") || "Digite o nome da planta..."}
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
          />
          <button type="button">Pesquisar</button>
          <button type="button" onClick={limparFiltros}>Limpar filtro</button>
        </div>

        <div className="plantas-alfabeto">
          {letras.map((letra) => (
            <button
              type="button"
              key={letra}
              className={letraAtiva === letra ? "ativo" : ""}
              onClick={() => setLetraAtiva((prev) => (prev === letra ? "" : letra))}
            >
              {letra}
            </button>
          ))}
        </div>

        <section className="plantas-grade">
          {plantasFiltradas.map((planta) => (
            <article className="planta-item-card" key={planta.id}>
              <img src={planta.imagem} alt={planta.nome} />
              <div>
                <h3>{planta.nome_cientifico}</h3>
                <p className="nome-popular">{truncar(planta.nome.replace(/\s*\(.*/, ""), 38)}.</p>
                <p>{truncar(planta.usos || planta.mecanismos, 82)}</p>
                <button type="button" onClick={() => setPlantaSelecionada(planta)}>leia mais</button>
              </div>
            </article>
          ))}
        </section>

        {plantaSelecionada && (
          <PlantaModal planta={plantaSelecionada} onClose={() => setPlantaSelecionada(null)} />
        )}
      </div>
    </div>
  );
}
