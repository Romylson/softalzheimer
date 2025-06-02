
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Fisiopatologia from './pages/Fisiopatologia.jsx';
import PlantasMedicinais from './pages/PlantasMedicinais.jsx';
import JogoMemoria from './pages/JogoMemoria.jsx';
import Farmacos from './pages/Farmacos.jsx';
import Cerebro3D from './pages/Cerebro3D.jsx';
import Dashboard from "./pages/Dashboard.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import 'leaflet/dist/leaflet.css';
import Jogos from "./pages/Jogos.jsx";
import JogoQuiz from "./pages/JogoQuiz.jsx";
import JogoLab from "./pages/JogoLab.jsx";
import PalavrasCruzadas from "./pages/PalavrasCruzadas.jsx";
import CacaPalavras from "./pages/CacaPalavras.jsx";
import Xadrez from "./pages/Xadrez.jsx";
import QuebraCabeca from "./pages/QuebraCabeca.jsx";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import AppHeader from "./components/AppHeader";


function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <AppHeader />
      <main className="flex-1">
          <Outlet />
    <Router>
      <Navbar />
      <div className="p-4">
        <Routes>
          <Route path="/fisiopatologia" element={<Fisiopatologia />} />
          <Route path="/plantas" element={<PlantasMedicinais />} />
          <Route path="/farmacos" element={<Farmacos />} />
          <Route path="/cerebro3d" element={<Cerebro3D />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/jogos" element={<Jogos />} />
          <Route path="/jogos/memoria" element={<JogoMemoria />} />
          <Route path="/jogos/quiz" element={<JogoQuiz />} />
          <Route path="/jogos/lab" element={<JogoLab />} />
          <Route path="/jogos/palavras-cruzadas" element={<PalavrasCruzadas />} />
          <Route path="/jogos/caca-palavras" element={<CacaPalavras />} />
          <Route path="/jogos/xadrez" element={<Xadrez />} />
          <Route path="/jogos/quebra-cabeca" element={<QuebraCabeca />} />
          <Route path="/" element={<Dashboard />} />


        </Routes>
      </div>
    </Router>
    </main>
      <Footer />
    </div>
  );
}

export default App;
