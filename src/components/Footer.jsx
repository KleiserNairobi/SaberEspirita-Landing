import React, { useState, useEffect, useRef } from "react";
import {
  VineBranch,
  VineWatermark,
  PhoneMockup,
  useScrollAnimation,
  scrollToSection,
} from "./Shared";

const Footer = () => {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <footer className="relative bg-sage-50 pt-20 pb-8" id="download">
      <div className="container mx-auto px-4">
        {/* Final CTA */}
        <div
          ref={ref}
          className={`text-center max-w-3xl mx-auto mb-20 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-sage-500 mb-6">
            Junte-se a milhares de pessoas nesta{" "}
            <span className="text-gradient italic">jornada de evolução</span>
          </h2>
          <p className="text-sage-400 text-lg mb-8 leading-relaxed">
            Baixe o Saber Espírita e encontre um caminho mais estruturado para a
            fé e o estudo diário. Comece sua jornada hoje.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a
              href="https://apps.apple.com/br/app/saber-esp%C3%ADrita/id6751443526"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-sage-500 text-white px-8 py-4 rounded-2xl font-semibold hover:bg-sage-400 transition-all hover:scale-105 shadow-lg shadow-sage-300/30"
            >
              <i data-lucide="apple" className="w-6 h-6"></i>
              <div className="text-left">
                <div className="text-[10px] opacity-80">Baixar na</div>
                <div className="text-sm font-bold">App Store</div>
                <div className="text-[9px] opacity-70 mt-0.5 font-normal">
                  Baixe gratuitamente
                </div>
              </div>
            </a>

            <a
              href="https://play.google.com/store/apps/details?id=app.saberespirita"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-white text-sage-500 border-2 border-sage-200 px-8 py-4 rounded-2xl font-semibold hover:border-sage-400 transition-all hover:scale-105"
            >
              <i data-lucide="play" className="w-6 h-6 text-sage-300"></i>
              <div className="text-left">
                <div className="text-[10px] text-sage-400">Baixar no</div>
                <div className="text-sm font-bold">Google Play</div>
                <div className="text-[9px] text-sage-400 mt-0.5 font-normal">
                  Baixe gratuitamente
                </div>
              </div>
            </a>
          </div>
        </div>

        <VineBranch className="w-full mb-12" />

        {/* Footer Content */}
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 flex items-center justify-center">
                <img
                  src="assets/logo.png"
                  alt="Logotipo do Saber Espírita - Aplicativo de Estudos"
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="font-serif text-2xl font-bold text-sage-500">
                Saber Espírita
              </span>
            </div>
            <p className="text-sage-400 text-sm leading-relaxed max-w-sm">
              Iluminando mentes, confortando corações com a luz da Codificação.
              Seu ecossistema completo de estudo espírita.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-sage-500 mb-4">Site</h4>
            <ul className="space-y-2 text-sm text-sage-400">
              <li>
                <a
                  href="#desafios"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("desafios");
                  }}
                  className="hover:text-sage-300 transition-colors"
                >
                  Desafios
                </a>
              </li>
              <li>
                <a
                  href="#metodo"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("metodo");
                  }}
                  className="hover:text-sage-300 transition-colors"
                >
                  Método
                </a>
              </li>
              <li>
                <a
                  href="#ia"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("ia");
                  }}
                  className="hover:text-sage-300 transition-colors"
                >
                  IA
                </a>
              </li>
              <li>
                <a
                  href="#experiencia"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("experiencia");
                  }}
                  className="hover:text-sage-300 transition-colors"
                >
                  Recursos
                </a>
              </li>
              <li>
                <a
                  href="#depoimentos"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("depoimentos");
                  }}
                  className="hover:text-sage-300 transition-colors"
                >
                  Depoimentos
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sage-500 mb-4">Método</h4>
            <ul className="space-y-2 text-sm text-sage-400">
              <li>
                <a
                  href="#metodo"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("metodo");
                  }}
                  className="hover:text-sage-300 transition-colors"
                >
                  Estude
                </a>
              </li>
              <li>
                <a
                  href="#metodo"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("metodo");
                  }}
                  className="hover:text-sage-300 transition-colors"
                >
                  Fixe
                </a>
              </li>
              <li>
                <a
                  href="#metodo"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("metodo");
                  }}
                  className="hover:text-sage-300 transition-colors"
                >
                  Medite
                </a>
              </li>
              <li>
                <a
                  href="#metodo"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("metodo");
                  }}
                  className="hover:text-sage-300 transition-colors"
                >
                  Ore
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sage-500 mb-4">Contato</h4>
            <ul className="space-y-2 text-sm text-sage-400">
              <li className="flex items-center gap-2">
                <i data-lucide="mail" className="w-4 h-4"></i>
                <span>app.saberespirita@gmail.com</span>
              </li>
              <li className="flex items-center gap-2">
                <i data-lucide="instagram" className="w-4 h-4"></i>
                <span>@comunidade.saberespirita</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-sage-200 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <p className="text-sage-400 text-sm font-serif italic">
            "Saber Espírita — Iluminando mentes, confortando corações."
          </p>
          <p className="text-sage-400 text-xs">
            © 2025 Saber Espírita. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
