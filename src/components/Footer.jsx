import LogoInstitucional from "../components/LogoInstitucional";



export default function Footer() {
  return (
    <footer className="w-full bg-white py-2 border-t mt-4 flex flex-col items-center">
      <LogoInstitucional direction="row" small />
      <div className="text-xs text-gray-500 mt-1 text-center">
        &copy; {new Date().getFullYear()} SoftAlzheimer • UFPI • Todos os direitos reservados
      </div>
    </footer>
  );
}