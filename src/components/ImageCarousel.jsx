// src/components/ImageCarousel.jsx
import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";
import "./ImageCarousel.css";
import { noticiasCarousel } from "../data/noticiasCarousel.js";

const slides = [
  {
    src: "/images/alzheimer2.jpg",
    alt: "Atualizações sobre Alzheimer",
    subtitulo: "Conteúdo científico e educativo",
    titulo: "Atualizações sobre Alzheimer",
    destaque: "Ler notícia",
    link: "/noticias/atualizacoes-sobre-alzheimer",
  },
  {
    src: "/images/fisiopatologia2.jpg",
    alt: "Fisiopatologia do Alzheimer",
    subtitulo: "Conheça a",
    titulo: "Fisiopatologia do Alzheimer",
    destaque: "Saiba mais",
    link: "/noticias/fisiopatologia-do-alzheimer",
  },
  {
    src: "/images/plantasalzheimer.jpg",
    alt: "Plantas em evidência",
    subtitulo: "Acesse nossas",
    titulo: "Plantas em evidência",
    destaque: "Explorar",
    link: "/noticias/plantas-em-evidencia",
  },
];

export default function ImageCarousel() {
  return (
    <Carousel className="mb-4 seduc-like-carousel" interval={4500}>
      {noticiasCarousel.map((slide) => (
        <Carousel.Item key={slide.slug}>
          <Link to={slide.rota} className="carousel-link-wrapper">
            <div className="carousel-slide-wrap">
              <img
                className="carousel-banner-img"
                src={slide.imagem}
                alt={slide.titulo}
              />
              <div className="carousel-overlay">
                <p className="carousel-subtitle">{slide.subtitulo}</p>
                <h3 className="carousel-title">{slide.titulo}</h3>
                <span className="carousel-cta">{slide.cta}</span>
              </div>
            </div>
          </Link>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}