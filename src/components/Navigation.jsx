import React, { useState, useEffect, useRef } from "react";
import {
  VineBranch,
  VineWatermark,
  PhoneMockup,
  useScrollAnimation,
  scrollToSection,
} from "./Shared";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-6"}`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <div className="w-8 h-8 flex items-center justify-center">
            <img
              src="/assets/logo.png"
              alt="Logotipo do Saber Espírita - Aplicativo de Estudos"
              className="w-full h-full object-contain"
            />
          </div>
          <span className="font-serif text-xl font-bold text-sage-500">
            Saber Espírita
          </span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm text-sage-400">
          <a
            href="#desafios"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("desafios");
            }}
            className="hover:text-sage-500 transition-colors cursor-pointer"
          >
            Desafios
          </a>
          <a
            href="#metodo"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("metodo");
            }}
            className="hover:text-sage-500 transition-colors cursor-pointer"
          >
            Método
          </a>
          <a
            href="#ia"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("ia");
            }}
            className="hover:text-sage-500 transition-colors cursor-pointer"
          >
            IA
          </a>
          <a
            href="#experiencia"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("experiencia");
            }}
            className="hover:text-sage-500 transition-colors cursor-pointer"
          >
            Recursos
          </a>
          <a
            href="#depoimentos"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("depoimentos");
            }}
            className="hover:text-sage-500 transition-colors cursor-pointer"
          >
            Depoimentos
          </a>
        </div>
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("download");
          }}
          className="btn-primary relative z-50 text-white p-2 sm:px-6 sm:py-2 rounded-full text-sm font-medium flex items-center justify-center gap-2 w-10 h-10 sm:w-auto sm:h-auto cursor-pointer"
          aria-label="Baixar App"
        >
          <i
            data-lucide="download"
            className="w-5 h-5 sm:w-4 sm:h-4 pointer-events-none"
          ></i>
          <span className="hidden sm:inline pointer-events-none">
            Baixar App
          </span>
        </button>
      </div>
    </nav>
  );
};
export default Navigation;
