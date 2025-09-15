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

export default function ColorPaletteSidebar() {
  const { colors, setColor, resetColors, open, setOpen } = useTheme();

  return (
    <aside
      className={`fixed top-0 right-0 h-full w-56 bg-surface text-text shadow-lg transform transition-transform duration-300 ${open ? "translate-x-0" : "translate-x-full"}`}
    >
      <div className="p-4 flex flex-col h-full overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="font-semibold">Cores</h2>
          <button onClick={() => setOpen(false)} aria-label="Fechar" className="text-xl">
            &times;
          </button>
        </div>
        {Object.keys(labels).map((key) => (
          <div key={key} className="mb-6">
            <label className="block text-sm mb-1">{labels[key]}</label>
            <input
              type="color"
              value={colors[key]}
              onChange={(e) => setColor(key, e.target.value)}
              className="w-full h-10 mb-2 border border-secondary rounded"
            />
            <input
              type="text"
              value={colors[key]}
              onChange={(e) => setColor(key, e.target.value)}
              className="w-full mb-2 px-2 py-1 border rounded text-sm"
            />
            <div className="grid grid-cols-5 gap-2">
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
          className="mt-auto w-full py-2 bg-secondary text-surface rounded"
        >
          Restaurar padrão
        </button>
      </div>
    </aside>
  );
}
