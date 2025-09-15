import React from "react";
import { useTheme } from "../context/ThemeContext";

const presetColors = ["#2563eb", "#10b981", "#f59e0b", "#f9f9f9", "#ffffff", "#1f2937"];

const labels = {
  primary: "Primária",
  secondary: "Secundária",
  accent: "Acento",
  background: "Fundo",
  surface: "Superfície",
  text: "Texto",
};

export default function ThemeSettings() {
  const { colors, setColor, resetColors } = useTheme();

  return (
    <div className="max-w-xl mx-auto p-4 bg-surface text-text">
      <h1 className="text-2xl font-semibold mb-4">Paleta de Cores</h1>
      {Object.keys(labels).map((key) => (
        <div key={key} className="mb-6">
          <label className="block text-sm mb-1">{labels[key]}</label>
          <input
            type="color"
            value={colors[key]}
            onChange={(e) => setColor(key, e.target.value)}
            className="w-12 h-12 border border-secondary rounded"
          />
          <input
            type="text"
            value={colors[key]}
            onChange={(e) => setColor(key, e.target.value)}
            className="ml-2 px-2 py-1 border rounded text-sm"
          />
          <div className="mt-2 flex flex-wrap gap-2">
            {presetColors.map((c) => (
              <button
                key={c}
                className="w-8 h-8 rounded"
                style={{ backgroundColor: c }}
                onClick={() => setColor(key, c)}
                aria-label={`Selecionar cor ${c}`}
              />
            ))}
          </div>
        </div>
      ))}
      <button
        onClick={resetColors}
        className="mt-4 px-4 py-2 bg-secondary text-surface rounded"
      >
        Restaurar padrão
      </button>
    </div>
  );
}