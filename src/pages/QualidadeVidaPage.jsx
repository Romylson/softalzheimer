import React, { useMemo, useState } from "react";
import "./SectionPages.css";
import imgExercicio from "../assets/exercicio-bdnf.jpg";
import imgDieta from "../assets/dieta-mediterranea.jpg";
import imgSono from "../assets/sono-memoria.jpg";
import imgNatureza from "../assets/natureza-neuroplasticidade.jpg";

/* =========================
   TÓPICOS
========================= */
const topicos = [
  {
    id: "exercicio",
    titulo: "Exercício físico e BDNF",
    icone: "🏃",
    imagem: imgExercicio,
    base: [
      "Exercício aeróbico regular aumenta BDNF.",
      "Melhora memória e função executiva.",
    ],
    dicas: [
      "150 min/semana",
      "2 dias de força",
      "Comece com 10–15 min",
    ],
    infografico: ["BDNF ↑", "Inflamação ↓", "Cognição ↑"],
  },
  {
    id: "dieta",
    titulo: "Dieta neuroprotetora",
    icone: "🥗",
    imagem: imgDieta,
    base: [
      "Dieta Mediterrânea melhora cognição.",
      "Polifenóis reduzem estresse oxidativo.",
    ],
    dicas: [
      "Vegetais diariamente",
      "Use azeite",
      "Peixe 2–3x semana",
    ],
    infografico: ["Polifenóis ↑", "Inflamação ↓"],
  },
  {
    id: "sono",
    titulo: "Sono e memória",
    icone: "😴",
    imagem: imgSono,
    base: [
      "Sono consolida memória.",
      "Remove toxinas cerebrais.",
    ],
    dicas: [
      "7–9h/noite",
      "Evite telas",
      "Ambiente escuro",
    ],
    infografico: ["Memória ↑", "Fadiga ↓"],
  },
  {
    id: "natureza",
    titulo: "Natureza e cérebro",
    icone: "🌿",
    imagem: imgNatureza,
    base: [
      "Reduz estresse",
      "Melhora atenção",
    ],
    dicas: [
      "Caminhe ao ar livre",
      "Pegue sol",
    ],
    infografico: ["Cortisol ↓", "Bem-estar ↑"],
  },
];

/* =========================
   PERGUNTAS
========================= */
const perguntas = [
  { cat: "sono", texto: "Você dorme 7-9h com qualidade?" },
  { cat: "sono", texto: "Mantém rotina de sono?" },

  { cat: "alimentacao", texto: "Consome vegetais diariamente?" },
  { cat: "alimentacao", texto: "Evita ultraprocessados?" },

  { cat: "atividade", texto: "Faz 150 min/semana?" },
  { cat: "atividade", texto: "Faz treino de força?" },

  { cat: "cognitivo", texto: "Estimula o cérebro?" },
  { cat: "cognitivo", texto: "Tem interação social?" },
];

const opcoes = [
  { label: "Nunca", valor: 0 },
  { label: "Às vezes", valor: 1 },
  { label: "Frequentemente", valor: 2 },
  { label: "Quase sempre", valor: 3 },
];

/* =========================
   COMPONENTE
========================= */
export default function QualidadeVidaPage() {
  const [respostas, setRespostas] = useState(
    Object.fromEntries(perguntas.map((_, i) => [i, 1]))
  );

  const resultado = useMemo(() => {
    const categorias = {
      sono: 0,
      alimentacao: 0,
      atividade: 0,
      cognitivo: 0,
    };

    perguntas.forEach((p, i) => {
      categorias[p.cat] += Number(respostas[i]);
    });

    const total = Object.values(categorias).reduce((a, b) => a + b, 0);

    let nivel = "";
    let cor = "";

    if (total >= 18) {
      nivel = "Excelente";
      cor = "#16a34a";
    } else if (total >= 12) {
      nivel = "Bom";
      cor = "#22c55e";
    } else if (total >= 8) {
      nivel = "Moderado";
      cor = "#f59e0b";
    } else {
      nivel = "Alto Risco";
      cor = "#dc2626";
    }

    return { total, categorias, nivel, cor };
  }, [respostas]);

  const progresso = (resultado.total / 24) * 100;

  return (
    <main className="section-page qualidade-page">
      <h1>Qualidade de Vida e Prevenção</h1>

      {/* ================= TÓPICOS ================= */}
      <section className="section-grid">
        {topicos.map((tema) => (
          <article key={tema.id} className="section-card">
            <h3>{tema.icone} {tema.titulo}</h3>

            <img src={tema.imagem} alt={tema.titulo} className="qualidade-img" />

            <ul>
              {tema.base.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <ul>
              {tema.dicas.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <div className="pills">
              {tema.infografico.map((i) => (
                <span key={i}>{i}</span>
              ))}
            </div>
          </article>
        ))}
      </section>

      {/* ================= AUTOAVALIAÇÃO ================= */}
      <section className="section-card" style={{ marginTop: "20px" }}>
        <h3>Autoavaliação Neuroprotetora</h3>

        <div className="questionario-grid">
          {perguntas.map((p, i) => (
            <div key={i} className="questionario-item">
              <p>{i + 1}. {p.texto}</p>

              {opcoes.map((op) => (
                <label key={op.label}>
                  <input
                    type="radio"
                    name={`q-${i}`}
                    checked={respostas[i] === op.valor}
                    onChange={() =>
                      setRespostas((prev) => ({
                        ...prev,
                        [i]: op.valor,
                      }))
                    }
                  />
                  {op.label}
                </label>
              ))}
            </div>
          ))}
        </div>

        {/* RESULTADO */}
        <div className="resultado-box">
          <p><strong>Score:</strong> {resultado.total}/24</p>
          <p style={{ color: resultado.cor }}>
            <strong>{resultado.nivel}</strong>
          </p>

          <div style={{
            height: "10px",
            background: "#ddd",
            borderRadius: "10px",
            marginTop: "10px"
          }}>
            <div style={{
              width: `${progresso}%`,
              height: "100%",
              background: resultado.cor
            }} />
          </div>
        </div>
      </section>
    </main>
  );
}