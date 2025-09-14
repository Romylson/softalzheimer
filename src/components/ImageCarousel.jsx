import React from "react";
import Carousel from "react-bootstrap/Carousel";

export default function ImageCarousel() {
  return (
    <Carousel className="mb-4" interval={3000}>
      <Carousel.Item>
        <img
          className="d-block w-100 rounded"
          src="/images/planta.jpg"
          alt="Plantas medicinais"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 rounded"
          src="/images/farmaco.jpeg"
          alt="Fármacos"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 rounded"
          src="/images/fisiopatologia.png"
          alt="Fisiopatologia"
        />
      </Carousel.Item>
    </Carousel>
  );
}