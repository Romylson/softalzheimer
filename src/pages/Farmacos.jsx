
import React from 'react';

function Farmacos() {
  const farmacos = [
    { nome: "Donepezila", tipo: "Inibidor de colinesterase" },
    { nome: "Memantina", tipo: "Antagonista NMDA" },
    { nome: "Lecanemabe", tipo: "Anticorpo monoclonal" }
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Fármacos</h2>
      <ul className="space-y-2">
        {farmacos.map((f, i) => (
          <li key={i} className="bg-white p-4 shadow rounded">
            <strong>{f.nome}</strong>: {f.tipo}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Farmacos;
