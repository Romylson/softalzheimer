// Importa funções do Firebase
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Configuração do seu projeto Firebase
const firebaseConfig = {
  apiKey: "AIzaSyByf5VQhIBWMqnYGl5iwM1KwMe1alkWHJI",
  authDomain: "softalzheimer.firebaseapp.com",
  projectId: "softalzheimer",
  storageBucket: "softalzheimer.appspot.com", // Corrigido: .appspot.com
  messagingSenderId: "283649913459",
  appId: "1:283649913459:web:32f90db671c0bee563b006",
  measurementId: "G-Q011RBHXSK"
};

// Inicializa o app e o banco de dados Firestore
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Exporta a instância do banco
export { db };
export { app };
 