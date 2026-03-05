import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";
import "./ImageCarousel.css";

const slides = [
  {
    src: "/images/alzheimer2.jpg",
    alt: "Alzheimer",
    subtitulo: "Conteúdo científico e educativo",
    titulo: "Atualizações sobre Alzheimer",
    destaque: "Clique aqui",
    slug: "atualizacoes-sobre-alzheimer",
  },
  {
    src: "/images/fisiopatologia2.jpg",
    alt: "Fisiopatologia",
    subtitulo: "Conheça a",
    titulo: "Fisiopatologia do Alzheimer",
    destaque: "Saiba mais",
    slug: "fisiopatologia-do-alzheimer",
  },
  {
    src: "/images/plantasalzheimer.jpg",
    alt: "Plantas medicinais",
    subtitulo: "Acesse nossas",
    titulo: "Plantas em evidência",
    destaque: "Explorar",
    slug: "plantas-em-evidencia",
  },
];

export default function ImageCarousel() {
  return (
    <Carousel className="mb-4 seduc-like-carousel" interval={3500}>
      {slides.map((slide) => (
        <Carousel.Item key={slide.alt}>
          <Link to={`/noticias/${slide.slug}`} className="carousel-link-wrapper">
            <div className="carousel-slide-wrap">
              <img className="carousel-banner-img" src={slide.src} alt={slide.alt} />
              <div className="carousel-overlay">
                <p className="carousel-subtitle">{slide.subtitulo}</p>
                <h3>{slide.titulo}</h3>
                <span className="carousel-cta">{slide.destaque}</span>
              </div>
            </div>
          </Link>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}