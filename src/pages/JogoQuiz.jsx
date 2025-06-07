// src/components/Jogos/QuizCientifico.jsx
import React, { useState, useEffect } from "react";
import { Card, Button, ProgressBar, Alert } from "react-bootstrap";

const perguntas = [
  {
    categoria: "Fisiopatologia",
    enunciado: "Qual substância se acumula em placas senis na Doença de Alzheimer?",
    alternativas: ["Dopamina", "Tau", "Beta-amiloide", "Serotonina"],
    resposta: "Beta-amiloide"
  },
  {
    categoria: "Tratamento",
    enunciado: "Qual fármaco é um inibidor de colinesterase?",
    alternativas: ["Memantina", "Donepezila", "Lecanemabe", "Fluoxetina"],
    resposta: "Donepezila"
  },
  {
    categoria: "Plantas Medicinais",
    enunciado: "Qual planta é estudada por seus efeitos neuroprotetores em Alzheimer?",
    alternativas: ["Camomila", "Ginkgo biloba", "Lavanda", "Alecrim"],
    resposta: "Ginkgo biloba"
  },
  // Adicione mais perguntas aqui (mínimo de 10)
  {
    categoria: "Fisiopatologia",
    enunciado: "Qual proteína está associada a emaranhados neurofibrilares?",
    alternativas: ["Beta-amiloide", "Insulina", "Tau", "Actina"],
    resposta: "Tau"
  },
  {
    categoria: "Produtos Naturais",
    enunciado: "Withania somnifera é conhecida popularmente como:",
    alternativas: ["Ashwagandha", "Guaraná", "Ginseng", "Bacopa"],
    resposta: "Ashwagandha"
  },
  {
    categoria: "Farmacologia",
    enunciado: "Memantina atua como:",
    alternativas: [
      "Inibidor de acetilcolinesterase",
      "Agonista colinérgico",
      "Antagonista NMDA",
      "Inibidor da monoaminoxidase"
    ],
    resposta: "Antagonista NMDA"
  },
  {
    categoria: "Plantas Medicinais",
    enunciado: "Bacopa monnieri é tradicionalmente usada para:",
    alternativas: ["Alívio de dores", "Estímulo de apetite", "Melhora da memória", "Sedação intensa"],
    resposta: "Melhora da memória"
  },
  {
    categoria: "Estudos",
    enunciado: "Estudos 'in vitro' são realizados:",
    alternativas: ["Em animais vivos", "Em culturas celulares", "Em humanos", "Em pacientes hospitalizados"],
    resposta: "Em culturas celulares"
  },
  {
    categoria: "Estudos",
    enunciado: "Estudos 'in vivo' são realizados:",
    alternativas: ["Em humanos", "Em animais vivos", "Em laboratórios computacionais", "Com simulações"],
    resposta: "Em animais vivos"
  },
  {
    categoria: "Tratamento",
    enunciado: "Lecanemabe é um exemplo de:",
    alternativas: ["Fármaco tradicional", "Monoclonal experimental", "Vitamina", "Fitoterápico"],
    resposta: "Monoclonal experimental"
  }
];

const QuizCientifico = () => {
  const [indice, setIndice] = useState(0);
  const [pontuacao, setPontuacao] = useState(0);
  const [resposta, setResposta] = useState(null);
  const [timer, setTimer] = useState(15);
  const [finalizado, setFinalizado] = useState(false);

  const perguntaAtual = perguntas[indice];

  useEffect(() => {
    if (finalizado) return;
    const interval = setInterval(() => {
      setTimer((t) => {
        if (t <= 1) {
          clearInterval(interval);
          setResposta("tempo");
          return 0;
        }
        return t - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [indice, finalizado]);

  const escolher = (alt) => {
    if (resposta) return;
    setResposta(alt);
    if (alt === perguntaAtual.resposta) setPontuacao(pontuacao + 1);
  };

  const proxima = () => {
    if (indice + 1 < perguntas.length) {
      setIndice(indice + 1);
      setResposta(null);
      setTimer(15);
    } else {
      setFinalizado(true);
    }
  };

  if (finalizado) {
    return (
      <Alert variant="success" className="mt-4">
        <h4>Quiz finalizado!</h4>
        <p>Pontuação: {pontuacao} de {perguntas.length}</p>
        <p>Parabéns por testar seus conhecimentos.</p>
      </Alert>
    );
  }

  return (
    <Card className="mt-4">
      <Card.Header>
        <strong>Categoria:</strong> {perguntaAtual.categoria}
        <span className="float-end">Tempo: {timer}s</span>
      </Card.Header>
      <Card.Body>
        <Card.Title>{perguntaAtual.enunciado}</Card.Title>
        {perguntaAtual.alternativas.map((alt, i) => (
          <Button
            key={i}
            className="d-block my-2"
            variant={
              resposta
                ? alt === perguntaAtual.resposta
                  ? "success"
                  : alt === resposta
                  ? "danger"
                  : "outline-secondary"
                : "outline-primary"
            }
            onClick={() => escolher(alt)}
            disabled={!!resposta}
          >
            {alt}
          </Button>
        ))}
        {resposta && (
          <div className="mt-3 text-end">
            <Button onClick={proxima}>Próxima</Button>
          </div>
        )}
        <ProgressBar className="mt-3" now={((indice + 1) / perguntas.length) * 100} label={`${indice + 1}/${perguntas.length}`} />
      </Card.Body>
    </Card>
  );
};

export default QuizCientifico;
