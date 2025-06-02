import React from "react";
import Cerebro3DComparativo from "../components/Cerebro3DComparativo";
// import Cerebro3DRA from "../components/Cerebro3DRA"; // Para RA, se quiser


export default function Cerebro3DPage() {
  return (
    <div className="container py-4">
      <h1 className="fw-bold text-center mb-4">Cérebro 3D: Normal vs Alzheimer</h1>
      <Cerebro3DComparativo /> 
      
      {/* <Cerebro3DRA model="normal" /> */}
    </div>
  );
}
