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
      "A prática regular de exercício físico, especialmente aeróbico, está associada ao aumento do BDNF (Brain-Derived Neurotrophic Factor), proteína essencial para neuroplasticidade.",
      "O BDNF promove sobrevivência neuronal, formação de novas sinapses e melhora da memória e aprendizagem.",
      "Estudos demonstram que exercícios combinados (aeróbico + resistência) melhoram função executiva, atenção e velocidade de processamento.",
      "Além disso, o exercício reduz inflamação sistêmica e melhora a perfusão cerebral."
    ],
    dicas: [
      "Realize pelo menos 150 minutos/semana de atividade aeróbica moderada.",
      "Inclua musculação ou exercícios de resistência 2–3 vezes por semana.",
      "Adicione treinos de equilíbrio e coordenação (especialmente em idosos).",
      "Comece com sessões curtas (10–15 min) e aumente progressivamente.",
      "Prefira atividades prazerosas para maior adesão a longo prazo."
    ],
    infografico: [
      "BDNF ↑",
      "Neuroplasticidade ↑",
      "Inflamação ↓",
      "Memória ↑",
      "Risco de declínio cognitivo ↓"
    ],
  },

  {
    id: "dieta",
    titulo: "Dieta neuroprotetora (Mediterrânea e MIND)",
    icone: "🥗",
    imagem: imgDieta,
    base: [
      "A dieta Mediterrânea e o padrão MIND estão associados à redução do risco de Alzheimer e declínio cognitivo.",
      "Esses padrões são ricos em antioxidantes, ácidos graxos monoinsaturados e compostos anti-inflamatórios.",
      "Polifenóis presentes em frutas, vegetais e azeite auxiliam na proteção contra estresse oxidativo.",
      "O consumo de peixes fornece ômega-3, importante para integridade das membranas neuronais.",
      "A saúde vascular cerebral é diretamente influenciada pela alimentação."
    ],
    dicas: [
      "Consuma vegetais e folhas diariamente (base da alimentação).",
      "Utilize azeite de oliva como principal fonte de gordura.",
      "Inclua peixes (ricos em ômega-3) pelo menos 2x por semana.",
      "Reduza alimentos ultraprocessados, açúcar e gorduras trans.",
      "Inclua oleaginosas, frutas vermelhas e leguminosas regularmente."
    ],
    infografico: [
      "Antioxidantes ↑",
      "Estresse oxidativo ↓",
      "Inflamação ↓",
      "Saúde vascular ↑",
      "Proteção neuronal ↑"
    ],
  },

  {
    id: "sono",
    titulo: "Sono e consolidação da memória",
    icone: "😴",
    imagem: imgSono,
    base: [
      "O sono é fundamental para a consolidação da memória e reorganização sináptica.",
      "Durante o sono profundo ocorre ativação do sistema glinfático, responsável pela remoção de metabólitos neurotóxicos.",
      "A privação de sono está associada a prejuízos cognitivos, déficit de atenção e aumento do risco de doenças neurodegenerativas.",
      "Alterações no ciclo circadiano impactam diretamente humor, desempenho cognitivo e saúde cerebral."
    ],
    dicas: [
      "Durma entre 7–9 horas por noite com regularidade.",
      "Mantenha horários consistentes para dormir e acordar.",
      "Evite telas, cafeína e estímulos intensos antes de dormir.",
      "Crie ambiente escuro, silencioso e confortável.",
      "Exponha-se à luz natural pela manhã para regular o ciclo circadiano."
    ],
    infografico: [
      "Memória consolidada ↑",
      "Toxinas cerebrais ↓",
      "Atenção ↑",
      "Humor equilibrado ↑",
      "Desempenho cognitivo ↑"
    ],
  },

  {
    id: "natureza",
    titulo: "Contato com a natureza e saúde cerebral",
    icone: "🌿",
    imagem: imgNatureza,
    base: [
      "A exposição a ambientes naturais está associada à redução do estresse e melhora da função cognitiva.",
      "Estudos indicam que ambientes verdes aumentam atenção sustentada e reduzem fadiga mental.",
      "O contato com a natureza modula níveis de cortisol e melhora o bem-estar psicológico.",
      "Atividades ao ar livre também incentivam movimento físico e interação social."
    ],
    dicas: [
      "Realize caminhadas em áreas verdes regularmente.",
      "Busque exposição à luz solar natural diariamente.",
      "Faça pausas ao ar livre durante trabalho ou estudo.",
      "Combine respiração consciente com contato com a natureza.",
      "Integre atividades físicas ao ambiente externo sempre que possível."
    ],
    infografico: [
      "Cortisol ↓",
      "Estresse ↓",
      "Atenção ↑",
      "Bem-estar ↑",
      "Neuroplasticidade ↑"
    ],
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