import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";
import "./ImageCarousel.css";
import { noticiasCarousel } from "../data/noticiasCarousel";

export default function ImageCarousel() {
  return (
    <Carousel className="mb-4 seduc-like-carousel" interval={3500}>
      {noticiasCarousel.map((slide) => (
        <Carousel.Item key={slide.slug}>
          <Link to={`/noticias/${slide.slug}`} className="carousel-link-wrapper">
            <div className="carousel-slide-wrap">
              <img className="carousel-banner-img" src={slide.imagem} alt={slide.titulo} />
              <div className="carousel-overlay">
                <p className="carousel-subtitle">{slide.categoria}</p>
                <h3>{slide.titulo}</h3>
                <span className="carousel-cta">Clique aqui</span>
              </div>
            </div>
          </Link>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}