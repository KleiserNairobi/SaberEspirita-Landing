import React from "react";
import { ArrowLeft, Download } from "lucide-react";

const LegalHeader = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-sage-100 py-4">
      <div className="container mx-auto px-4 max-w-5xl flex items-center justify-between">
        <a
          href="/"
          className="flex items-center gap-3 group transition-transform hover:-translate-x-0.5"
        >
          <div className="w-9 h-9 flex items-center justify-center rounded-xl bg-sage-50 group-hover:bg-sage-100 transition-colors">
            <img
              src="/assets/logo.png"
              alt="Logotipo Saber Espírita"
              className="w-6 h-6 object-contain"
              width="24"
              height="24"
            />
          </div>
          <div>
            <span className="font-serif text-lg sm:text-xl font-bold text-sage-500 block leading-tight">
              Saber Espírita
            </span>
            <span className="text-[11px] text-sage-300 font-medium flex items-center gap-1">
              <ArrowLeft className="w-3 h-3" /> Voltar ao início
            </span>
          </div>
        </a>

        <a
          href="/#download"
          className="btn-primary text-white px-4 py-2 sm:px-5 sm:py-2 rounded-full text-xs sm:text-sm font-medium flex items-center gap-2 shadow-sm hover:shadow transition-all"
        >
          <Download className="w-4 h-4" />
          <span className="hidden sm:inline">Baixar App</span>
          <span className="sm:hidden">App</span>
        </a>
      </div>
    </header>
  );
};

export default LegalHeader;
