import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Fisiopatologia from "./pages/Fisiopatologia.jsx";
import PlantasMedicinais from "./pages/PlantasMedicinais.jsx";
import JogoMemoria from "./pages/JogoMemoria.jsx";
import Farmacos from "./pages/Farmacos.jsx";
import Cerebro3D from "./pages/Cerebro3D.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "leaflet/dist/leaflet.css";
import Jogos from "./pages/Jogos.jsx";
import JogoQuiz from "./pages/JogoQuiz.jsx";
import JogoLab from "./pages/JogoLab.jsx";
import PalavrasCruzadas from "./pages/PalavrasCruzadas.jsx";
import CacaPalavras from "./pages/CacaPalavras.jsx";
import Xadrez from "./pages/Xadrez.jsx";
import QuebraCabeca from "./pages/QuebraCabeca.jsx";
import Footer from "./components/Footer";
import ArtigosCientificosTabs from "./components/Artigos/ArtigosCientificosTabs.jsx";
import AssociacaoConceitos from "./pages/AssociacaoConceitos.jsx";
import JogoClassificacao from "./pages/JogoClassificacao.jsx";
import CaminhoNeuronal from "./pages/CaminhoNeuronal.jsx";
import { ThemeProvider } from "./context/ThemeContext.jsx";
import ColorPaletteSidebar from "./components/ColorPaletteSidebar.jsx";
import BackHomeButton from "./components/BackHomeButton.jsx";
import Historico from "./pages/Historico.jsx";
import Apresentacao from "./pages/Apresentacao.jsx";



function App() {
  return (
     <ThemeProvider>
      <Router>
        <div className="min-h-screen flex flex-col">
          <AppHeader />
          <Navbar />
          <main className="flex-1 p-4">
            <BackHomeButton />
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
              <Route path="/historico" element={<Historico />} />
              <Route path="/apresentacao" element={<Apresentacao />} />
              <Route path="/artigos-cientificos" element={<ArtigosCientificosTabs />} />
              <Route path="/jogos/associacao" element={<AssociacaoConceitos />} />
              <Route path="/jogos/classificacao" element={<JogoClassificacao />} />
              <Route path="/jogos/caminhoneuronal" element={<CaminhoNeuronal />} />
            </Routes>
          </main>
          <Footer />
        </div>
        <ColorPaletteSidebar />
      </Router>
    </ThemeProvider>
  );
}

export default App;