import React from "react";
import { useTranslation } from "react-i18next";

export default function FiltrosCategorias({ categoria, setCategoria }) {
  const { t } = useTranslation();
  const categorias = [
    { key: "todos", label: t("categoria_todos") },
    { key: "inibidores", label: t("categoria_inibidores") },
    { key: "moduladores", label: t("categoria_moduladores") },
    { key: "anticorpos", label: t("categoria_anticorpos") },
  ];
  return (
    <div className="mb-3 d-flex gap-2 justify-content-center">
      {categorias.map(c => (
        <button
          key={c.key}
          className={`btn btn-sm ${categoria === c.key ? "btn-primary" : "btn-outline-primary"}`}
          onClick={() => setCategoria(c.key)}
        >
          {c.label}
        </button>
      ))}
    </div>
  );
}
