import LogoInstitucional from "../components/LogoInstitucional";

export default function Header() {
  return (
    <header className="w-full bg-black py-2 border-b mb-2 flex justify-center">
      <LogoInstitucional direction="row" />
    </header>
  );
}

