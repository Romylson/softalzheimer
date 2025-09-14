import React from "react";
import Carousel from "react-bootstrap/Carousel";

export default function ImageCarousel() {
  return (
    <Carousel className="mb-4" interval={3000}>
      <Carousel.Item>
        <img
          className="d-block w-75 mx-auto rounded"
          style={{ maxHeight: "300px", objectFit: "cover" }}
          src="/images/alzheimer.png"
          alt="Alzheimer"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-75 mx-auto rounded"
          style={{ maxHeight: "300px", objectFit: "cover" }}
          src="/images/plantas.jpg"
          alt="Plantas medicinais"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-75 mx-auto rounded"
          style={{ maxHeight: "300px", objectFit: "cover" }}
          src="/images/farmaco.jpeg"
          alt="Fármacos"
        />
      </Carousel.Item>
    </Carousel>
  );
}