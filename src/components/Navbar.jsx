import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={{ backgroundColor: "#1e40af", padding: "10px 20px" }}>
      <ul style={{
        display: "flex",
        gap: "20px",
        listStyleType: "none",
        margin: 0,
        padding: 0,
        alignItems: "center"
      }}>
        <li><Link style={{ color: "white", textDecoration: "none" }} to="/">Início</Link></li>
        <li><Link style={{ color: "white", textDecoration: "none" }} to="/fisiopatologia">Fisiopatologia</Link></li>
        <li><Link style={{ color: "white", textDecoration: "none" }} to="/plantas">Plantas Medicinais</Link></li>
        <li><Link style={{ color: "white", textDecoration: "none" }} to="/jogo">Jogo da Memória</Link></li>
        <li><Link style={{ color: "white", textDecoration: "none" }} to="/cerebro3d">Cérebro 3D</Link></li>
        <li><Link style={{ color: "white", textDecoration: "none" }} to="/farmacos">Fármacos</Link></li>
        
      </ul>
    </nav>
  );
};

export default Navbar;


