// src/pages/JogoQuebraCabeca.jsx
import React, { useState, useEffect } from "react";
import "./quebraCabeca.css";
import imgCamomila from "../assets/camomila.jpg";
import imgBacopa from "../assets/bacopa.jpg";
import imgGinkgo from "../assets/ginkgo.jpg";

const imagens = {
  camomila: imgCamomila,
  ginkgo: imgGinkgo,
  bacopa: imgBacopa,
};

const JogoQuebraCabeca = () => {
  const [tamanho, setTamanho] = useState(3);
  const [imagem, setImagem] = useState("camomila");
  const [pecas, setPecas] = useState([]);
  const [vazia, setVazia] = useState(null);
  const [movimentos, setMovimentos] = useState(0);
  const [tempo, setTempo] = useState(0);

  useEffect(() => {
    inicializarJogo();
    const timer = setInterval(() => setTempo((t) => t + 1), 1000);
    return () => clearInterval(timer);
  }, [tamanho, imagem]);

  const inicializarJogo = () => {
    const total = tamanho * tamanho;
    let ordem = Array.from({ length: total }, (_, i) => i);
    do {
      ordem = ordem.sort(() => Math.random() - 0.5);
    } while (!isSolvable(ordem) || ordem[total - 1] !== total - 1);
    setPecas(ordem);
    setVazia(total - 1);
    setMovimentos(0);
    setTempo(0);
  };

  const isSolvable = (arr) => {
    let inv = 0;
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] !== arr.length - 1 && arr[j] !== arr.length - 1 && arr[i] > arr[j]) inv++;
      }
    }
    return tamanho % 2 === 1 ? inv % 2 === 0 : (inv + Math.floor(vazia / tamanho)) % 2 === 0;
  };

  const trocar = (idx) => {
    const linha = Math.floor(idx / tamanho);
    const col = idx % tamanho;
    const linhaVazia = Math.floor(vazia / tamanho);
    const colVazia = vazia % tamanho;

    const distancia = Math.abs(linha - linhaVazia) + Math.abs(col - colVazia);
    if (distancia === 1) {
      const novasPecas = [...pecas];
      [novasPecas[idx], novasPecas[vazia]] = [novasPecas[vazia], novasPecas[idx]];
      setPecas(novasPecas);
      setVazia(idx);
      setMovimentos((m) => m + 1);
    }
  };

  const resolvido = pecas.every((val, idx) => val === idx);
  const estiloGrid = {
    gridTemplateColumns: `repeat(${tamanho}, 1fr)`
  };

  return (
    <div className="container quebra-cabeca">
      <h2 className="mb-3">Quebra-Cabeça: {imagem}</h2>

      <div className="d-flex gap-2 mb-3">
        <label>
          Planta:
          <select value={imagem} onChange={(e) => setImagem(e.target.value)}>
            {Object.keys(imagens).map((nome) => (
              <option key={nome} value={nome}>{nome}</option>
            ))}
          </select>
        </label>
        <label>
          Tamanho:
          <select value={tamanho} onChange={(e) => setTamanho(Number(e.target.value))}>
            <option value={3}>3x3</option>
            <option value={4}>4x4</option>
            <option value={5}>5x5</option>
          </select>
        </label>
        <button className="btn btn-primary" onClick={inicializarJogo}>Embaralhar</button>
      </div>

      <div className="tabuleiro" style={estiloGrid}>
        {pecas.map((val, idx) => (
          <div
            key={idx}
            className={`peca ${idx === vazia ? "vazia" : ""}`}
            onClick={() => trocar(idx)}
            style={
              val === pecas.length - 1
                ? {}
                : {
                    backgroundImage: `url(${imagens[imagem]})`,
                    backgroundPosition: `${-(val % tamanho) * (100 / (tamanho - 1))}% ${-Math.floor(val / tamanho) * (100 / (tamanho - 1))}%`,
                    backgroundSize: `${tamanho * 100}% ${tamanho * 100}%`
                  }
            }
          ></div>
        ))}
      </div>

      <div className="mt-3">
        <p>Movimentos: {movimentos}</p>
        <p>Tempo: {tempo}s</p>
        {resolvido && <p className="text-success fw-bold">Parabéns! Você completou o quebra-cabeça.</p>}
      </div>
    </div>
  );
};

export default JogoQuebraCabeca;
