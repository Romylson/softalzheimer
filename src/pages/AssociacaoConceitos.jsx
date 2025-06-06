// src/components/Jogos/AssociacaoConceitos.jsx
import React, { useState } from "react";
import { Card, Container, Row, Col } from "react-bootstrap";

const conceitos = [
  { termo: "Beta-amiloide", definicao: "Peptídeo acumulado em placas neurais na Doença de Alzheimer." },
  { termo: "Tau", definicao: "Proteína associada a emaranhados neurofibrilares." },
  { termo: "Colinesterase", definicao: "Enzima que degrada a acetilcolina." },
  { termo: "Donepezila", definicao: "Fármaco inibidor de colinesterase usado no tratamento de Alzheimer." },
];

const shuffleArray = (array) => [...array].sort(() => Math.random() - 0.5);

const AssociacaoConceitos = () => {
  const [respostas, setRespostas] = useState({});
  const [embaralhado] = useState(shuffleArray(conceitos));

  const handleChange = (termo, value) => {
    setRespostas({ ...respostas, [termo]: value });
  };

  const verificarCorreta = (termo, definicao) => {
    const correta = conceitos.find((c) => c.termo === termo)?.definicao;
    return definicao === correta;
  };

  return (
    <Container className="py-4">
      <h2 className="mb-4 text-center">Associação de Conceitos</h2>
      <Row className="g-4">
        {conceitos.map((c, idx) => (
          <Col md={6} key={idx}>
            <Card className="p-3 h-100">
              <strong>{c.termo}</strong>
              <select
                className="form-select mt-2"
                value={respostas[c.termo] || ""}
                onChange={(e) => handleChange(c.termo, e.target.value)}
              >
                <option value="">Selecione...</option>
                {embaralhado.map((d, i) => (
                  <option key={i} value={d.definicao}>
                    {d.definicao}
                  </option>
                ))}
              </select>
              {respostas[c.termo] && (
                <p className={`mt-2 ${verificarCorreta(c.termo, respostas[c.termo]) ? "text-success" : "text-danger"}`}>
                  {verificarCorreta(c.termo, respostas[c.termo]) ? "Correto!" : "Incorreto."}
                </p>
              )}
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default AssociacaoConceitos;
