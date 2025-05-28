import { db } from "../firebase";
import { collection, addDoc, getDocs, query, orderBy, limit } from "firebase/firestore";
import React, { useState, useEffect } from 'react';
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation();
  const [cards, setCards] = useState([]);
  const [flipped, setFlipped] = useState([]);
  const [matched, setMatched] = useState([]);
  const [moves, setMoves] = useState(0);
  const [bestScore, setBestScore] = useState(() => {
    const saved = localStorage.getItem("melhorPontuacao");
    return saved ? Number(saved) : null;
  });
  const [ranking, setRanking] = useState([]);

  useEffect(() => {
    setCards(shuffle(cardsData));
  }, []);

  useEffect(() => {
    if (matched.length === cardsData.length) {
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

  // Mensagem pedagógica de feedback (agora usando o t())
  const feedback =
    matched.length === cardsData.length
      ? moves <= 7
        ? t("excellent_memory")
        : t("keep_training")
      : "";

  const salvarScore = async (nome, movimentos) => {
    try {
      await addDoc(collection(db, "ranking"), {
        nome,
        movimentos,
        data: new Date()
      });
    } catch (e) {
      alert(t("error_saving_ranking"));
    }
  };

  useEffect(() => {
    if (matched.length === cardsData.length) {
      const nome = prompt(t("enter_name_for_ranking"));
      if (nome) {
        salvarScore(nome, moves);
      }
    }
    // eslint-disable-next-line
  }, [matched]);

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
      <h2 className="text-2xl font-bold mb-6">{t("memory_game_title")}</h2>
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
      <p className="mt-6">{t("moves")}: {moves}</p>
      {bestScore !== null && (
        <p className="mt-1 text-sm text-green-700">{t("your_record")}: {bestScore} {t("moves")}</p>
      )}
      {matched.length === cards.length && (
        <div className="mt-4 text-lg text-green-700 font-bold animate-bounce">{feedback}</div>
      )}

      <h3 className="mt-8 text-xl font-bold">{t("top10_ranking")}</h3>
      <ul className="mb-6">
        {ranking.map((item, idx) => (
          <li key={idx}>
            {idx + 1}. {item.nome} - {item.movimentos} {t("moves")}
          </li>
        ))}
      </ul>
    </div>
  );
}
