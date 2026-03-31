import React, { useMemo, useState } from "react";
import "./SectionPages.css";
import imgExercicio from "../assets/exercicio-bdnf.jpg";
import imgDieta from "../assets/dieta-mediterranea.jpg";
import imgSono from "../assets/sono-memoria.jpg";
import imgNatureza from "../assets/natureza-neuroplasticidade.jpg";

const topicos = [
  {
    id: "exercicio",
    titulo: "Exercício físico e BDNF",
    icone: "🏃",
    imagem: imgExercicio,
    base: [
      "Exercício aeróbico regular está associado a maior expressão de BDNF, fator-chave para plasticidade sináptica.",
      "Treino combinado (aeróbico + força) pode contribuir para atenção, memória e função executiva em idosos.",
    ],
    dicas: [
      "Meta prática: 150 minutos/semana de atividade moderada.",
      "Inclua 2 dias de fortalecimento muscular e treino de equilíbrio.",
      "Comece com blocos curtos (10–15 min) e progrida semanalmente.",
    ],
    infografico: ["BDNF ↑", "Inflamação sistêmica ↓", "Risco cognitivo ↓"],
  },
  {
    id: "dieta",
    titulo: "Dieta neuroprotetora (Mediterrânea, MIND)",
    icone: "🥗",
    imagem: imgDieta,
    base: [
      "Padrões alimentares do tipo Mediterrânea/MIND associam-se a melhor desempenho cognitivo e menor declínio longitudinal.",
      "Ênfase em vegetais, leguminosas, azeite, peixes e alimentos ricos em polifenóis ajuda no equilíbrio oxidativo e inflamatório.",
    ],
    dicas: [
      "Preencha metade do prato com vegetais e folhas diariamente.",
      "Use azeite de oliva como principal gordura culinária.",
      "Inclua peixes 2–3x por semana e reduza ultraprocessados.",
    ],
    infografico: ["Polifenóis ↑", "Estresse oxidativo ↓", "Saúde vascular cerebral ↑"],
  },
  {
    id: "sono",
    titulo: "Sono e consolidação de memória",
    icone: "😴",
    imagem: imgSono,
    base: [
      "Sono insuficiente ou fragmentado prejudica consolidação mnésica e desempenho executivo.",
      "Qualidade do sono está ligada à depuração metabólica cerebral e ao equilíbrio neuroimune.",
    ],
    dicas: [
      "Busque 7–9h/noite com rotina de horário consistente.",
      "Evite telas e cafeína nas horas anteriores ao sono.",
      "Priorize ambiente escuro, silencioso e temperatura confortável.",
    ],
    infografico: ["Memória consolidada ↑", "Fadiga mental ↓", "Regulação emocional ↑"],
  },
  {
    id: "natureza",
    titulo: "Contato com a natureza e neuroplasticidade",
    icone: "🌿",
    imagem: imgNatureza,
    base: [
      "Exposição a ambientes verdes associa-se a menor estresse percebido e melhor atenção sustentada.",
      "Atividades ao ar livre podem modular humor, sono e engajamento físico, com efeitos indiretos pró-cérebro.",
    ],
    dicas: [
      "Inclua caminhadas em áreas verdes 3–4x por semana.",
      "Combine luz natural matinal + respiração consciente por 10 minutos.",
      "Use pausas curtas ao ar livre durante trabalho/estudo.",
    ],
    infografico: ["Cortisol ↓", "Atenção restaurada ↑", "Bem-estar emocional ↑"],
  },
];

const perguntas = [
  {
    chave: "sono",
    texto: "Você dorme entre 7 e 9 horas com boa qualidade na maioria dos dias?",
  },
  {
    chave: "sono",
    texto: "Você mantém horário regular para dormir e acordar?",
  },
  {
    chave: "alimentacao",
    texto: "Sua alimentação inclui vegetais, frutas e leguminosas diariamente?",
  },
  {
    chave: "alimentacao",
    texto: "Você limita ultraprocessados e excesso de açúcar na semana?",
  },
  {
    chave: "atividade",
    texto: "Você realiza atividade física aeróbica pelo menos 150 min/semana?",
  },
  {
    chave: "atividade",
    texto: "Você inclui força/equilíbrio ao menos 2x por semana?",
  },
  {
    chave: "cognitivo",
    texto: "Você pratica estímulo cognitivo (leitura, estudo, jogos mentais) frequentemente?",
  },
  {
    chave: "cognitivo",
    texto: "Você mantém interação social e novos aprendizados de forma regular?",
  },
];

const opcoes = [
  { label: "Nunca", valor: 0 },
  { label: "Às vezes", valor: 1 },
  { label: "Frequentemente", valor: 2 },
  { label: "Quase sempre", valor: 3 },
];

export default function QualidadeVidaPage() {
  const [respostas, setRespostas] = useState(() => Object.fromEntries(perguntas.map((_, i) => [i, 1])));

  const { total, porCategoria, perfil } = useMemo(() => {
    const categorias = { sono: 0, alimentacao: 0, atividade: 0, cognitivo: 0 };
    perguntas.forEach((pergunta, idx) => {
      categorias[pergunta.chave] += Number(respostas[idx] ?? 0);
    });

    const soma = Object.values(categorias).reduce((acc, v) => acc + v, 0);
    const classificacao = soma >= 18 ? "Cérebro em Equilíbrio" : soma >= 10 ? "Risco Moderado" : "Alto Potencial de Melhora";
    return { total: soma, porCategoria: categorias, perfil: classificacao };
  }, [respostas]);

  const recomendacaoPerfil =
    perfil === "Cérebro em Equilíbrio"
      ? "Excelente base neuroprotetora. Mantenha constância e monitore sono/atividade em semanas de maior estresse."
      : perfil === "Risco Moderado"
      ? "Bom ponto de partida. Priorize 1 a 2 hábitos com menor pontuação nas próximas 4 semanas."
      : "Há grande oportunidade de melhora. Comece por metas pequenas e progressivas com apoio profissional quando possível.";

  return (
    <main className="section-page qualidade-page">
      <h1>Qualidade de Vida e Prevenção</h1>
      <p className="section-lead">Seção prática baseada em evidências para transformar ciência em rotina de saúde cerebral.</p>

      <section className="section-grid">
        {topicos.map((tema) => (
          <article key={tema.id} className="section-card qualidade-card">
            <h3>
              <span className="qualidade-icone" aria-hidden="true">{tema.icone}</span>
              <span className="qualidade-titulo">{tema.titulo}</span>
            </h3>
            {/* 👇 IMAGEM AQUI */}
            <div className="qualidade-img-wrap">
              <img
                src={tema.imagem}
                alt={tema.titulo}
                className="qualidade-img"
              />
            </div>

            <h4>Base científica</h4>
            <ul>
              {tema.base.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <h4>Dicas práticas</h4>
            <ul>
              {tema.dicas.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <h4>Infográfico resumido</h4>
            <div className="pills qualidade-pills">
              {tema.infografico.map((insight) => (
                <span key={insight}>{insight}</span>
              ))}
            </div>
          </article>
        ))}
      </section>

      const perguntas = [
  { cat: "sono", texto: "Você dorme entre 7–9h com qualidade?" },
  { cat: "sono", texto: "Mantém rotina regular de sono?" },

  { cat: "alimentacao", texto: "Consome vegetais e frutas diariamente?" },
  { cat: "alimentacao", texto: "Evita ultraprocessados?" },

  { cat: "atividade", texto: "Faz ≥150 min/semana de exercício?" },
  { cat: "atividade", texto: "Inclui treino de força?" },

  { cat: "cognitivo", texto: "Estimula o cérebro (leitura/jogos)?" },
  { cat: "cognitivo", texto: "Mantém interação social?" },
];

const opcoes = [
  { label: "Nunca", valor: 0 },
  { label: "Às vezes", valor: 1 },
  { label: "Frequentemente", valor: 2 },
  { label: "Quase sempre", valor: 3 },
];

export default function AutoavaliacaoNeuro() {
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

  const feedbackCategoria = (valor) => {
    if (valor >= 5) return "Ótimo";
    if (valor >= 3) return "Regular";
    return "Precisa melhorar";
  };

  return (
    <section className="section-card">
      <h3>Autoavaliação Neuroprotetora</h3>
      <p>Responda e veja seu score cognitivo:</p>

      <div className="questionario-grid">
        {perguntas.map((p, i) => (
          <div key={i} className="questionario-item">
            <p>{i + 1}. {p.texto}</p>
            <div>
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
          </div>
        ))}
      </div>

      {/* RESULTADO */}
      <div className="resultado-box" style={{ marginTop: "20px" }}>
        <h4>Resultado</h4>

        <p><strong>Score:</strong> {resultado.total}/24</p>
        <p>
          <strong>Nível:</strong>{" "}
          <span style={{ color: resultado.cor }}>
            {resultado.nivel}
          </span>
        </p>

        {/* BARRA */}
        <div style={{
          height: "12px",
          background: "#ddd",
          borderRadius: "10px",
          overflow: "hidden",
          margin: "10px 0"
        }}>
          <div style={{
            width: `${progresso}%`,
            height: "100%",
            background: resultado.cor,
            transition: "0.4s"
          }} />
        </div>

        {/* CATEGORIAS */}
        <div className="pills">
          <span>Sono: {resultado.categorias.sono}/6 ({feedbackCategoria(resultado.categorias.sono)})</span>
          <span>Alimentação: {resultado.categorias.alimentacao}/6 ({feedbackCategoria(resultado.categorias.alimentacao)})</span>
          <span>Atividade: {resultado.categorias.atividade}/6 ({feedbackCategoria(resultado.categorias.atividade)})</span>
          <span>Cognitivo: {resultado.categorias.cognitivo}/6 ({feedbackCategoria(resultado.categorias.cognitivo)})</span>
        </div>

        {/* RECOMENDAÇÃO */}
        <div style={{ marginTop: "10px" }}>
          {resultado.nivel === "Excelente" && "Manutenção ideal! Continue assim."}
          {resultado.nivel === "Bom" && "Você está bem, mas pode otimizar alguns hábitos."}
          {resultado.nivel === "Moderado" && "Atenção: ajuste 1–2 hábitos prioritários."}
          {resultado.nivel === "Alto Risco" && "Intervenção urgente recomendada em estilo de vida."}
        </div>
      </div>
    </section>
  );
}