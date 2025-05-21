import { db } from "../firebase";
import { collection, addDoc, getDocs, query, orderBy, limit } from "firebase/firestore";
import React, { useState, useEffect } from 'react';


const cardsData = [
  { id: 1, label: 'Ginkgo biloba', pairId: 'A' },
  { id: 2, label: 'Melhora Cognitiva', pairId: 'A' },
  { id: 3, label: 'Curcuma longa', pairId: 'B' },
  { id: 4, label: 'Anti-inflamatório', pairId: 'B' },
  { id: 5, label: 'Bacopa monnieri', pairId: 'C' },
  { id: 6, label: 'Memória/Aprendizado', pairId: 'C' }
];

function shuffle(array) {
  let arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export default function JogoMemoria() {
  const [cards, setCards] = useState([]);
  const [flipped, setFlipped] = useState([]);
  const [matched, setMatched] = useState([]);
  const [moves, setMoves] = useState(0);
  const [bestScore, setBestScore] = useState(() => {
    // Tenta carregar do localStorage, se não existir retorna null
    const saved = localStorage.getItem("melhorPontuacao");
    return saved ? Number(saved) : null;
  });

  useEffect(() => {
    setCards(shuffle(cardsData));
  }, []);

  useEffect(() => {
    if (matched.length === cardsData.length) {
      // Jogo concluído!
      if (bestScore === null || moves < bestScore) {
        setBestScore(moves);
        localStorage.setItem("melhorPontuacao", moves);
      }
    }
  }, [matched, moves, bestScore]);

  const handleClick = (index) => {
    if (flipped.length === 2 || flipped.includes(index) || matched.includes(index)) return;

    const newFlipped = [...flipped, index];
    setFlipped(newFlipped);

    if (newFlipped.length === 2) {
      const [firstIdx, secondIdx] = newFlipped;
      const firstCard = cards[firstIdx];
      const secondCard = cards[secondIdx];
      setMoves(moves + 1);

      if (firstCard.pairId === secondCard.pairId) {
        setMatched([...matched, firstIdx, secondIdx]);
      }

      setTimeout(() => {
        setFlipped([]);
      }, 1000);
    }
  };

  // Mensagem pedagógica de feedback
  const feedback =
    matched.length === cardsData.length
      ? moves <= 7
        ? "Excelente memória! Você fez poucos movimentos."
        : "Muito bem! Continue treinando para melhorar ainda mais."
      : "";
  
  const salvarScore = async (nome, movimentos) => {
  try {
    await addDoc(collection(db, "ranking"), {
      nome,
      movimentos,
      data: new Date()
    });
  } catch (e) {
    alert("Erro ao salvar ranking.");
  }
};
useEffect(() => {
  if (matched.length === cardsData.length) {
    const nome = prompt("Digite seu nome para o ranking:");
    if (nome) {
      salvarScore(nome, moves);
    }
  }
}, [matched]);
const [ranking, setRanking] = useState([]);

const buscarRanking = async () => {
  const q = query(collection(db, "ranking"), orderBy("movimentos"), limit(10));
  const querySnapshot = await getDocs(q);
  let lista = [];
  querySnapshot.forEach((doc) => {
    lista.push(doc.data());
  });
  setRanking(lista);
  
};

useEffect(() => {
  buscarRanking();
}, []);
   

  return (
    <div className="flex flex-col items-center mt-8">
      <h2 className="text-2xl font-bold mb-6">Jogo da Memória: Plantas e Compostos</h2>
      <div className="grid grid-cols-3 gap-4">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`w-40 h-24 flex items-center justify-center border rounded-lg text-lg font-semibold cursor-pointer
                        ${flipped.includes(index) || matched.includes(index) ? 'bg-blue-200' : 'bg-blue-600 text-white'}`}
            onClick={() => handleClick(index)}
          >
            {flipped.includes(index) || matched.includes(index) ? card.label : "?"}
          </div>
        ))}
      </div>
      <p className="mt-6">Movimentos: {moves}</p>
      {bestScore !== null && (
        <p className="mt-1 text-sm text-green-700">Seu recorde: {bestScore} movimentos</p>
      )}
      {matched.length === cards.length && (
        <div className="mt-4 text-lg text-green-700 font-bold animate-bounce">{feedback}</div>
      )}
    </div>
  );
}
