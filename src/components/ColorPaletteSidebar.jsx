import React, { useState } from "react";

const presetColors = [
  "#2563eb",
  "#10b981",
  "#f59e0b",
  "#f9f9f9",
  "#ffffff",
  "#1f2937",
];

export default function ColorPaletteSidebar({ open, onClose }) {
  const [color, setColor] = useState(
    getComputedStyle(document.documentElement).getPropertyValue("--primary").trim()
  );

  function handleSelect(c) {
    setColor(c);
    document.documentElement.style.setProperty("--primary", c);
  }

  return (
    <aside
      className={`fixed top-0 right-0 h-full w-56 bg-surface text-text shadow-lg transform transition-transform duration-300 ${open ? "translate-x-0" : "translate-x-full"}`}
    >
      <div className="p-4 flex flex-col h-full">
        <div className="flex justify-between items-center mb-4">
          <h2 className="font-semibold">Cores</h2>
          <button onClick={onClose} aria-label="Fechar" className="text-xl">&times;</button>
        </div>
        <input
          type="color"
          value={color}
          onChange={(e) => handleSelect(e.target.value)}
          className="w-full h-10 mb-4 border border-secondary rounded"
        />
        <div className="grid grid-cols-5 gap-2">
          {presetColors.map((c) => (
            <button
              key={c}
              className="w-8 h-8 rounded"
              style={{ backgroundColor: c }}
              onClick={() => handleSelect(c)}
              aria-label={`Selecionar cor ${c}`}
            />
          ))}
        </div>
        <div className="mt-auto text-xs text-center">
          Selecione uma cor para o tema
        </div>
      </div>
    </aside>
  );
}