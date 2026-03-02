import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./ImageCarousel.css";

const slides = [
  {
    src: "/images/alzheimer.png",
    alt: "Alzheimer",
    titulo: "Informação científica com linguagem acessível",
  },
  {
    src: "/images/fisiopatologia.png",
    alt: "Fisiopatologia",
    titulo: "Compreenda mecanismos da doença em visual didático",
  },
  {
    src: "/images/plantas.jpg",
    alt: "Plantas medicinais",
    titulo: "Evidências sobre plantas e compostos naturais",
  },
];

export default function ImageCarousel() {
  return (
    <Carousel className="mb-4 seduc-like-carousel" interval={3500}>
      {slides.map((slide) => (
        <Carousel.Item key={slide.alt}>
          <div className="carousel-slide-wrap">
            <img className="carousel-banner-img" src={slide.src} alt={slide.alt} />
            <div className="carousel-overlay">
              <span className="carousel-badge">PlantaMente</span>
              <h3>{slide.titulo}</h3>
            </div>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}
