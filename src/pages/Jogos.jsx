// src/pages/Jogos.jsx
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import AssociacaoConceitos from "../components/Jogos/AssociacaoConceitos";
// Os demais jogos virão aqui futuramente

const Jogos = () => {
  return (
    <Container className="mt-4">
      <h2 className="mb-4 text-center">Jogos Educativos</h2>
      <Row>
        <Col md={12}>
          <AssociacaoConceitos />
        </Col>
      </Row>
      <Row className="mt-4 text-center">
        <Col>
          <p>Mais jogos em breve:</p>
          <ul style={{ listStyle: "none", padding: 0 }}>
            <li>
              <Link to="#">Quiz Científico (em desenvolvimento)</Link>
            </li>
            <li>
              <Link to="#">Memória com Plantas (em desenvolvimento)</Link>
            </li>
            <li>
              <Link to="#">Arrastar e Soltar (Classificação) (em desenvolvimento)</Link>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default Jogos;
