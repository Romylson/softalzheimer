
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



function App() {
  return (
    <Router>
      <Navbar />
      <div className="p-4">
        <Routes>
          <Route path="/fisiopatologia" element={<Fisiopatologia />} />
          <Route path="/plantas" element={<PlantasMedicinais />} />
          <Route path="/jogo" element={<JogoMemoria />} />
          <Route path="/farmacos" element={<Farmacos />} />
          <Route path="/cerebro3d" element={<Cerebro3D />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/" element={<Dashboard />} />


        </Routes>
      </div>
    </Router>
  );
}

export default App;
