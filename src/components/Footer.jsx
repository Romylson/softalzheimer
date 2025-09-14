import LogoInstitucional from "../components/LogoInstitucional";

export default function Footer() {
  return (
     <footer className="w-full bg-secondary text-surface py-2 border-t border-primary mt-4 flex flex-col items-center">
      <LogoInstitucional direction="row" small showAddress />
      <div className="text-xs text-black mt-1 text-center">
        &copy; {new Date().getFullYear()} Plantamente • UFPI • Todos os direitos reservados
      </div>
    </footer>
  );
}