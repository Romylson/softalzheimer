import React, { useState } from "react";
import { Card } from "react-bootstrap";

const conceitos = [
  { termo: "Beta-amiloide", definicao: "Peptídeo acumulado em placas neurais na Doença de Alzheimer." },
  { termo: "Tau", definicao: "Proteína associada a emaranhados neurofibrilares." },
  { termo: "Colinesterase", definicao: "Enzima que degrada a acetilcolina." },
  { termo: "Donepezila", definicao: "Fármaco inibidor de colinesterase usado no tratamento de Alzheimer." },
];

const shuffleArray = (array) => [...array].sort(() => Math.random() - 0.5);

const AssociacaoConceitos = () => {
  const [respostas, setRespostas] = useState({});
  const [embaralhado, setEmbaralhado] = useState(shuffleArray(conceitos));

  const handleChange = (termo, value) => {
    setRespostas({ ...respostas, [termo]: value });
  };

  const verificarCorreta = (termo, definicao) => {
    const correta = conceitos.find((c) => c.termo === termo)?.definicao;
    return definicao === correta;
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
      <div>
        <h2 className="text-xl font-bold mb-2">Termos</h2>
        {conceitos.map((c, idx) => (
          <Card key={idx} className="p-3 mb-2">
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
              <p className={`mt-2 ${verificarCorreta(c.termo, respostas[c.termo]) ? "text-green-600" : "text-red-600"}`}>
                {verificarCorreta(c.termo, respostas[c.termo]) ? "Correto!" : "Incorreto."}
              </p>
            )}
          </Card>
        ))}
      </div>
    </div>
  );
};

export default AssociacaoConceitos;
