import { useState } from "react";
import LogoInstitucional from "../components/LogoInstitucional";
import ColorPaletteSidebar from "./ColorPaletteSidebar";

export default function Header() {
  const [showPalette, setShowPalette] = useState(false);

  return (
    <>
      <header className="w-full bg-primary text-surface py-2 border-b border-secondary mb-2 flex justify-between items-center px-4">
        <LogoInstitucional direction="row" />
        <button
          onClick={() => setShowPalette(true)}
          aria-label="Selecionar cor"
          className="text-xl"
        >
          🎨
        </button>
      </header>
      <ColorPaletteSidebar open={showPalette} onClose={() => setShowPalette(false)} />
    </>
  );
}

