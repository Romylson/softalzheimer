import LogoInstitucional from "../components/LogoInstitucional";



export default function Footer() {
  return (
    <footer className="w-full bg-green-200 py-2 border-t border-green-500 mt-4 flex flex-col items-center">
      <LogoInstitucional direction="row" small />
      <div className="text-xs text-black mt-1 text-center">
        &copy; {new Date().getFullYear()} Plantamente • UFPI • Todos os direitos reservados
      </div>
    </footer>
  );
}