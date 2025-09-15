import LogoInstitucional from "../components/LogoInstitucional.jsx";
import { useTheme } from "../context/ThemeContext.jsx";

export default function Header() {
    const { setOpen } = useTheme();

  return (
    <header className="w-full bg-primary text-surface py-2 border-b border-secondary mb-2 flex justify-between items-center px-4">
      <LogoInstitucional direction="row" />
      <button
        onClick={() => setOpen(true)}
        aria-label="Selecionar cor"
        className="text-xl"
      >
        🎨
      </button>
    </header>
  );
}

