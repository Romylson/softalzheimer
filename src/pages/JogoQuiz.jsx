// src/components/Jogos/QuizCientifico.jsx
import React, { useState, useEffect } from "react";
import perguntasQuiz from "../data/perguntasQuizAlzheimer";
import { Button, ProgressBar, Card } from "react-bootstrap";

const JogoQuiz = () => {
  const [perguntaAtual, setPerguntaAtual] = useState(0);
  const [respostasCorretas, setRespostasCorretas] = useState(0);
  const [tempo, setTempo] = useState(0);
  const [respondido, setRespondido] = useState(false);
  const [quizFinalizado, setQuizFinalizado] = useState(false);
  const [embaralhadas, setEmbaralhadas] = useState([]);

  useEffect(() => {
    const perguntasAleatorias = [...perguntasQuiz].sort(() => Math.random() - 0.5);
    setEmbaralhadas(perguntasAleatorias);
  }, []);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setTempo((t) => t + 1);
    }, 1000);
    return () => clearInterval(intervalo);
  }, []);

  const handleResposta = (opcao) => {
    if (respondido) return;
    setRespondido(true);

    if (opcao === embaralhadas[perguntaAtual].correta) {
      setRespostasCorretas(respostasCorretas + 1);
    }

    setTimeout(() => {
      const proxima = perguntaAtual + 1;
      if (proxima < embaralhadas.length) {
        setPerguntaAtual(proxima);
        setRespondido(false);
      } else {
        setQuizFinalizado(true);
      }
    }, 1000);
  };

  if (!embaralhadas.length) return <p>Carregando perguntas...</p>;

  return (
    <div className="container mt-4">
      <Card>
        <Card.Header className="bg-primary text-white">
          <strong>Categoria:</strong> Ensaios &mdash; <strong>Tempo:</strong> {tempo}s
        </Card.Header>
        <Card.Body>
          {!quizFinalizado ? (
            <>
              <ProgressBar
                now={((perguntaAtual + 1) / embaralhadas.length) * 100}
                label={`${perguntaAtual + 1} / ${embaralhadas.length}`}
              />
              <h5 className="mt-3">{embaralhadas[perguntaAtual].pergunta}</h5>
              {embaralhadas[perguntaAtual].opcoes.map((opcao, i) => (
                <Button
                  key={i}
                  variant="primary"
                  onClick={() => handleResposta(opcao)}
                  className="d-block w-100 my-2"
                >
                  {opcao}
                </Button>
              ))}
            </>
          ) : (
            <div className="text-center">
              <h4>Você acertou {respostasCorretas} de {embaralhadas.length} perguntas!</h4>
              <Button variant="success" onClick={() => window.location.reload()} className="mt-3">
                Tentar novamente
              </Button>
            </div>
          )}
        </Card.Body>
      </Card>
    </div>
  );
};

export default JogoQuiz;
