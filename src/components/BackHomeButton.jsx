import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function BackHomeButton() {
  const location = useLocation();

  if (location.pathname === '/') {
    return null;
  }

  return (
    <div className="mb-3">
      <Link to="/" className="btn btn-outline-primary">
        ← Voltar para Página Principal
      </Link>
    </div>
  );
}