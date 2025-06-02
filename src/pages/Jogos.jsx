import React from "react";
import { Link } from "react-router-dom";
import camomilaImg from "../assets/camomila.jpg";
import cacaPalavrasImg from "../assets/caca-palavras.jpg";
import xadrezImg from "../assets/xadrez.jpg";
import quebraCabecaImg from "../assets/quebra-cabeca.jpg";
// Adicione as imagens em src/assets! Use nomes idênticos.

export default function Jogos() {
  return (
    <div className="container py-4">
      <h1 className="fw-bold mb-4">Jogos Educativos: Produtos Naturais 🌱 & Alzheimer</h1>
      <p className="text-muted mb-4">Escolha um jogo para aprender se divertindo!</p>
      <p>Teste seu conhecimento, memorize e descubra sobre tratamentos naturais!</p>
      <div className="row g-4">
        {/* Jogo da Memória */}
        <div className="col-md-4">
          <div className="card h-100 shadow">
            <div className="card-body">
              <h5 className="card-title">Jogo da Memória</h5>
              <p>Associe compostos bioativos às plantas de origem.</p>
              <Link to="/jogos/memoria" className="btn btn-primary">Jogar</Link>
            </div>
          </div>
        </div>
        {/* Quiz Científico */}
        <div className="col-md-4">
          <div className="card h-100 shadow">
            <div className="card-body">
              <h5 className="card-title">Quiz Científico</h5>
              <p>Perguntas sobre farmacognosia e neurodegeneração.</p>
              <Link to="/jogos/quiz" className="btn btn-success">Jogar</Link>
            </div>
          </div>
        </div>
        {/* Desafio do Laboratório */}
        <div className="col-md-4">
          <div className="card h-100 shadow">
            <div className="card-body">
              <h5 className="card-title">Desafio do Laboratório</h5>
              <p>Simule uma triagem de extratos vegetais.</p>
              <Link to="/jogos/lab" className="btn btn-warning">Jogar</Link>
            </div>
          </div>
        </div>
      </div>
      {/* Grid extra para os demais jogos */}
      <div className="row g-4 mt-3">
        <div className="col-md-6 col-lg-4">
          <Link to="/jogos/palavras-cruzadas" className="card shadow text-decoration-none h-100">
            <img src={camomilaImg} alt="Palavras Cruzadas" className="card-img-top" style={{height: 160, objectFit: "cover"}} />
            <div className="card-body">
              <h5 className="card-title">Palavras Cruzadas</h5>
              <p className="card-text">Descubra plantas medicinais no grid visual, com dicas e imagens.</p>
            </div>
          </Link>
        </div>
        <div className="col-md-6 col-lg-4">
          <Link to="/jogos/caca-palavras" className="card shadow text-decoration-none h-100">
            <img src={cacaPalavrasImg} alt="Caça-palavras" className="card-img-top" style={{height: 160, objectFit: "cover"}} />
            <div className="card-body">
              <h5 className="card-title">Caça-palavras</h5>
              <p className="card-text">Encontre nomes de plantas medicinais escondidos em uma grade de letras.</p>
            </div>
          </Link>
        </div>
        <div className="col-md-6 col-lg-4">
          <Link to="/jogos/xadrez" className="card shadow text-decoration-none h-100">
            <img src={xadrezImg} alt="Xadrez" className="card-img-top" style={{height: 160, objectFit: "cover"}} />
            <div className="card-body">
              <h5 className="card-title">Xadrez</h5>
              <p className="card-text">Treine o cérebro com o clássico xadrez! Ideal para estimular a memória.</p>
            </div>
          </Link>
        </div>
        <div className="col-md-6 col-lg-4">
          <Link to="/jogos/quebra-cabeca" className="card shadow text-decoration-none h-100">
            <img src={quebraCabecaImg} alt="Quebra-cabeça" className="card-img-top" style={{height: 160, objectFit: "cover"}} />
            <div className="card-body">
              <h5 className="card-title">Quebra-cabeça</h5>
              <p className="card-text">Monte imagens de plantas medicinais em desafios de quebra-cabeça.</p>
            </div>
          </Link>
        </div>
        {/* Adicione mais jogos aqui */}
      </div>
    </div>
  );
}
