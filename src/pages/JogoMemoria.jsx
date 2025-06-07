// src/components/Jogos/MemoriaJogo.jsx
import React, { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";
import imgBacopa from "../assets/bacopa.jpg";
import imgGinkgo from "../assets/ginkgo.jpg";
import imgCamomila from "../assets/camomila.jpg"; // Exemplo, baixe/adicione as imagens!
import imgLavanda from "../assets/lavanda.jpg";
import imgAlecrim from "../assets/alecrim.jpg";
import imgErvadoce from "../assets/erva-doce.jpg";

import "./memoria.css"; // crie este arquivo para estilo personalizado

const plantas = [
  {
    nome: "Camomila",
    descricao: "Calmante natural, utilizada contra ansiedade e insônia.",
    imagem: imgCamomila
  },
  {
    nome: "Ginkgo biloba",
    descricao: "Melhora a circulação cerebral e a memória.",
    imagem: imgGinkgo
  },
  {
    nome: "Bacopa monnieri",
    descricao: "Estimulante cognitivo, usada em Ayurveda.",
    imagem: imgBacopa
  },
  {
    nome: "Lavanda",
    descricao: "Propriedades ansiolíticas e relaxantes.",
    imagem: imgLavanda
  },
  {
    nome: "Alecrim",
    descricao: "Estimulante da memória e antioxidante.",
    imagem: imgAlecrim
  },
  {
    nome: "Erva-doce",
    descricao: "Calmante leve, usada em distúrbios digestivos e estresse.",
    imagem: imgErvadoce
  },
];

const gerarCartas = () => {
  const duplicadas = [...plantas, ...plantas];
  return duplicadas
    .map((planta) => ({ ...planta, id: Math.random(), virada: false, encontrada: false }))
    .sort(() => 0.5 - Math.random());
};

const MemoriaJogo = () => {
  const [cartas, setCartas] = useState([]);
  const [selecionadas, setSelecionadas] = useState([]);
  const [jogadas, setJogadas] = useState(0);
  const [acertos, setAcertos] = useState(0);
  const [timer, setTimer] = useState(120);

  useEffect(() => {
    setCartas(gerarCartas());
  }, []);

  useEffect(() => {
    const intervalo = setInterval(() => setTimer((t) => (t > 0 ? t - 1 : 0)), 1000);
    return () => clearInterval(intervalo);
  }, []);

  useEffect(() => {
    if (selecionadas.length === 2) {
      setTimeout(() => {
        const [c1, c2] = selecionadas;
        if (c1.nome === c2.nome) {
          setCartas((prev) =>
            prev.map((c) => (c.nome === c1.nome ? { ...c, encontrada: true } : c))
          );
          setAcertos((a) => a + 1);
        }
        setCartas((prev) =>
          prev.map((c) => (c.id === c1.id || c.id === c2.id ? { ...c, virada: false } : c))
        );
        setSelecionadas([]);
        setJogadas((j) => j + 1);
      }, 1000);
    }
  }, [selecionadas]);

  const virarCarta = (id) => {
    const carta = cartas.find((c) => c.id === id);
    if (carta.virada || carta.encontrada || selecionadas.length === 2) return;
    const novasCartas = cartas.map((c) => (c.id === id ? { ...c, virada: true } : c));
    setCartas(novasCartas);
    setSelecionadas([...selecionadas, { ...carta }]);
  };

  const reiniciar = () => {
    setCartas(gerarCartas());
    setSelecionadas([]);
    setJogadas(0);
    setAcertos(0);
    setTimer(120);
  };

  return (
    <div className="container text-center py-4">
      <h2 className="mb-3">Jogo da Memória com Plantas Medicinais</h2>
      <p>
        Tempo restante: <strong>{timer}s</strong> | Jogadas: <strong>{jogadas}</strong> | Acertos: <strong>{acertos}</strong>
      </p>
      <div className="grid-memoria">
        {cartas.map((carta) => (
          <Card
            key={carta.id}
            className={`memoria-carta ${carta.virada || carta.encontrada ? "virada" : ""}`}
            onClick={() => virarCarta(carta.id)}
          >
            <Card.Body>
              {carta.virada || carta.encontrada ? (
                <>
                  <img src={carta.imagem} alt={carta.nome} className="img-fluid" />
                  <p className="mt-2"><strong>{carta.nome}</strong><br /><small>{carta.descricao}</small></p>
                </>
              ) : (
                <div className="back">?</div>
              )}
            </Card.Body>
          </Card>
        ))}
      </div>
      <Button variant="dark" className="mt-4" onClick={reiniciar}>Reiniciar</Button>
    </div>
  );
};

export default MemoriaJogo;
