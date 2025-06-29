// src/pages/Jogos.jsx
import React from "react";
import { Link } from "react-router-dom";
import associacaoImg from "../assets/associacao.jpg";
import quizImg from "../assets/quiz.avif";
import memoriaImg from "../assets/memoria.jpg";
import labImg from "../assets/lab.jpg";
import palavrasImg from "../assets/camomila.jpg";
import cacaImg from "../assets/caca-palavras.jpg";
import xadrezImg from "../assets/xadrez.jpg";
import quebraImg from "../assets/quebra-cabeca.jpg";
import imgClassificacao  from "../assets/classificacao.jpg";
import imgCaminhoNeuronal from "../assets/caminhoneuronal.jpg"

export default function Jogos() {
  return (
    <div className="container py-4">
      <h1 className="fw-bold mb-4">Jogos Educativos: Produtos Naturais 🌱 & Alzheimer</h1>
      <p className="text-muted mb-4">Escolha um jogo para aprender se divertindo!</p>

      <div className="row g-4">
        <div className="col-md-4">
          <div className="card h-100 shadow">
            <img src={associacaoImg} alt="Associação de Conceitos" className="card-img-top" style={{ height: 160, objectFit: "cover" }} />
            <div className="card-body">
              <h5 className="card-title">Associação de Conceitos</h5>
              <p className="card-text">Associe sintomas, tratamentos e mecanismos relacionados ao Alzheimer.</p>
              <Link to="/jogos/associacao" className="btn btn-primary">Jogar</Link>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card h-100 shadow">
            <img src={quizImg} alt="Quiz Científico" className="card-img-top" style={{ height: 160, objectFit: "cover" }} />
            <div className="card-body">
              <h5 className="card-title">Quiz Científico</h5>
              <p className="card-text">Desafie seus conhecimentos sobre Alzheimer e farmacognosia.</p>
              <Link to="/jogos/quiz" className="btn btn-success">Jogar</Link>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card h-100 shadow">
            <img src={memoriaImg} alt="Memória com Plantas" className="card-img-top" style={{ height: 160, objectFit: "cover" }} />
            <div className="card-body">
              <h5 className="card-title">Memória com Plantas</h5>
              <p className="card-text">Encontre pares de plantas e descubra seus compostos bioativos.</p>
              <Link to="/jogos/memoria" className="btn btn-warning">Jogar</Link>
            </div>
          </div>
        </div>
      </div>

      <div className="row g-4 mt-3">
        <div className="col-md-6 col-lg-4">
          <Link to="/jogos/lab" className="card shadow text-decoration-none h-100">
            <img src={labImg} alt="Laboratório" className="card-img-top" style={{ height: 160, objectFit: "cover" }} />
            <div className="card-body">
              <h5 className="card-title">Desafio do Laboratório</h5>
              <p className="card-text">Classifique extratos, compostos e efeitos terapêuticos em um jogo de lógica.</p>
              <Link to="/jogos/lab" className="btn btn-primary">Jogar</Link>
            </div>
          </Link>
        </div>

        <div className="col-md-6 col-lg-4">
          <Link to="/jogos/palavras-cruzadas" className="card shadow text-decoration-none h-100">
            <img src={palavrasImg} alt="Palavras Cruzadas" className="card-img-top" style={{ height: 160, objectFit: "cover" }} />
            <div className="card-body">
              <h5 className="card-title">Palavras Cruzadas</h5>
              <p className="card-text">Complete o grid com nomes de plantas e conceitos sobre Alzheimer.</p>
              <Link to="/jogos/palavras-cruzadas" className="btn btn-warning">Jogar</Link>
            </div>
          </Link>
        </div>

        <div className="col-md-6 col-lg-4">
          <Link to="/jogos/caca-palavras" className="card shadow text-decoration-none h-100">
            <img src={cacaImg} alt="Caça-palavras" className="card-img-top" style={{ height: 160, objectFit: "cover" }} />
            <div className="card-body">
              <h5 className="card-title">Caça-palavras</h5>
              <p className="card-text">Encontre nomes de compostos e espécies vegetais em uma grade interativa.</p>
              <Link to="/jogos/caca-palavras" className="btn btn-warning">Jogar</Link>
            </div>
          </Link>
        </div>

        <div className="col-md-6 col-lg-4">
          <Link to="/jogos/xadrez" className="card shadow text-decoration-none h-100">
            <img src={xadrezImg} alt="Xadrez" className="card-img-top" style={{ height: 160, objectFit: "cover" }} />
            <div className="card-body">
              <h5 className="card-title">Xadrez</h5>
              <p className="card-text">Treine seu raciocínio lógico e memória com o clássico jogo de xadrez.</p>
              <Link to="/jogos/xadrez" className="btn btn-primary">Jogar</Link>
            </div>
          </Link>
        </div>

        <div className="col-md-6 col-lg-4">
          <Link to="/jogos/quebra-cabeca" className="card shadow text-decoration-none h-100">
            <img src={quebraImg} alt="Quebra-cabeça" className="card-img-top" style={{ height: 160, objectFit: "cover" }} />
            <div className="card-body">
              <h5 className="card-title">Quebra-cabeça</h5>
              <p className="card-text">Monte imagens relacionadas à farmacobotânica e tratamentos naturais.</p>
              <Link to="/jogos/quebra-cabeca" className="btn btn-warning">Jogar</Link>
            </div>
          </Link>
        </div>
        <div className="col-md-6 col-lg-4">
          <Link to="/jogos/classificacao" className="card shadow text-decoration-none h-100">
            <img src={imgClassificacao} alt="Classificação" className="card-img-top" style={{ height: 160, objectFit: "cover" }} />
            <div className="card-body">
              <h5 className="card-title">Classificação</h5>
              <p className="card-text">Arraste conceitos e substâncias para suas categorias corretas.</p>
              <Link to="/jogos/classificacao" className="btn btn-warning">Jogar</Link>
            </div>
          </Link>
        </div>
        <div className="col-md-6 col-lg-4">
          <Link to="/jogos/caminhoneuronal" className="card shadow text-decoration-none h-100">
            <img src={imgCaminhoNeuronal} alt="Caminho Neuronal" className="card-img-top" style={{ height: 160, objectFit: "cover" }} />
            <div className="card-body">
              <h5 className="card-title">Caminho Neuronal</h5>
              <p className="card-text">Treine suas habilidadees com o labirinto.</p>
              <Link to="/jogos/caminhoneuronal" className="btn btn-warning">Jogar</Link>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
