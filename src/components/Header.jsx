import LogoInstitucional from "../components/LogoInstitucional";


export default function Header() {
  return (
    <header className="w-full py-2 border-b mb-2 flex justify-center"
        style={{ backgroundColor: "var(--header-bg)" }}>
      <LogoInstitucional direction="row" />
    </header>
  );
}

