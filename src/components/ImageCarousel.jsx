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
    link: "https://oglobo.globo.com/saude/noticia/2026/02/25/estudo-aponta-que-alzheimer-pode-comecar-com-queda-silenciosa-no-fluxo-sanguineo-cerebral-entenda.ghtml",     // ✅ ajuste a rota
    external: true,
  },
  {
    src: "/images/fisiopatologia2.jpg",
    alt: "Fisiopatologia",
    subtitulo: "Conheça a",
    titulo: "Fisiopatologia do Alzheimer",
    destaque: "Saiba mais",
    link: "https://www.instagram.com/p/DNic_jUtYLd/",      // ✅ ajuste a rota
    external: true,
  },
  {
    src: "/images/plantasalzheimer.jpg",
    alt: "Plantas medicinais",
    subtitulo: "Acesse nossas",
    titulo: "Plantas em evidência",
    destaque: "Explorar",
    link: "https://blog.plantei.com.br/4-plantas-que-protegem-seu-cerebro-de-alzheimer-depressao-ansiedade-e-outros-problemas/",             // ✅ ajuste a rota
    external: true,
  },
];

function SlideLink({ slide, children }) {
  if (!slide.link) return children;

  if (slide.external) {
    return (
      <a
        href={slide.link}
        target="_blank"
        rel="noopener noreferrer"
        className="carousel-link-wrapper"
      >
        {children}
      </a>
    );
  }

  return (
    <Link to={slide.link} className="carousel-link-wrapper">
      {children}
    </Link>
  );
}

export default function ImageCarousel() {
  return (
    <Carousel className="mb-4 seduc-like-carousel" interval={3500}>
      {slides.map((slide) => (
        <Carousel.Item key={slide.alt}>
          <SlideLink slide={slide}>
            <div className="carousel-slide-wrap">
              <img
                className="carousel-banner-img"
                src={slide.src}
                alt={slide.alt}
              />
              <div className="carousel-overlay">
                <p className="carousel-subtitle">{slide.subtitulo}</p>
                <h3>{slide.titulo}</h3>
                <span className="carousel-cta">{slide.destaque}</span>
              </div>
            </div>
          </SlideLink>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}