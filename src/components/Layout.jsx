// src/components/Layout.jsx
import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
     <div className="flex flex-col min-h-screen ">
      <Header />

      {/* 
        Container centralizado:
        px-4 em xs, px-6 em sm, px-8 em md e acima,
        e max-w-screen-lg para não esticar demais em telas muito largas
      */}
      <main className="flex-1 container mx-auto px-4 sm:px-6 md:px-8">
        {children}
      </main>

      <Footer />
    </div>
  );
}
