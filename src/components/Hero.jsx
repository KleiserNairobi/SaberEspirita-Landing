import React, { useState, useEffect, useRef } from "react";
import {
  VineBranch,
  VineWatermark,
  PhoneMockup,
  useScrollAnimation,
  scrollToSection,
} from "./Shared";

const Hero = () => {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section
      className="relative min-h-screen pt-32 pb-20 overflow-hidden glow-golden glow-blue"
      id="inicio"
    >
      <VineWatermark />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div
            ref={ref}
            className={`space-y-8 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <div className="inline-flex items-center gap-3 text-xs font-medium text-sage-400 bg-white border border-sage-100 shadow-sm p-1.5 pr-5 rounded-full">
              <div className="flex -space-x-2">
                <img
                  src="https://randomuser.me/api/portraits/women/44.jpg"
                  alt="Foto de usuária estudante da Doutrina Espírita"
                  className="w-8 h-8 rounded-full border-2 border-white object-cover"
                />
                <img
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  alt="Foto de usuário estudando o Espiritismo"
                  className="w-8 h-8 rounded-full border-2 border-white object-cover"
                />
                <img
                  src="https://randomuser.me/api/portraits/women/68.jpg"
                  alt="Foto de usuária do aplicativo Saber Espírita"
                  className="w-8 h-8 rounded-full border-2 border-white object-cover"
                />
              </div>
              <p>Faça parte da nossa comunidade</p>
            </div>

            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-sage-500 leading-tight">
              Saber Espírita: <br />
              <span className="text-gradient italic">
                O ecossistema digital que transforma estudo em evolução
                espiritual.
              </span>
            </h1>

            <p className="text-lg md:text-xl text-sage-400 max-w-lg leading-relaxed">
              Estude, Fixe, Medite e Ore em um único ecossistema digital. Viva o
              Espiritismo todos os dias.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 relative z-10">
              <a
                href="https://apps.apple.com/br/app/saber-esp%C3%ADrita/id6751443526"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-sage-500 text-white px-6 py-4 rounded-2xl font-semibold hover:bg-sage-400 transition-all hover:scale-105 shadow-lg shadow-sage-300/30"
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
                className="flex items-center justify-center gap-3 bg-white text-sage-500 border-2 border-sage-100 px-6 py-4 rounded-2xl font-semibold hover:border-sage-300 transition-all hover:scale-105"
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

          <div className="relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-sage-100/50 rounded-full blur-3xl animate-pulse-slow"></div>
            <div className="relative z-10">
              <PhoneMockup />
            </div>

            {/* Floating elements */}
            {/* Estude (Livro) - Topo Esquerda */}
            <div
              className="absolute top-16 -left-6 lg:-left-12 glass-card p-3 rounded-xl animate-float"
              style={{ animationDelay: "0s" }}
              title="Estude"
            >
              <i data-lucide="book-open" className="w-5 h-5 text-sage-300"></i>
            </div>

            {/* Fixe (Cérebro/Quiz) - Base Esquerda */}
            <div
              className="absolute bottom-32 -left-4 lg:-left-8 glass-card p-3 rounded-xl animate-float"
              style={{ animationDelay: "1.5s" }}
              title="Fixe"
            >
              <i data-lucide="brain" className="w-5 h-5 text-sage-300"></i>
            </div>

            {/* Medite (Folha/Serenidade) - Topo Direita */}
            <div
              className="absolute top-24 -right-4 lg:-right-8 glass-card p-3 rounded-xl animate-float"
              style={{ animationDelay: "1s" }}
              title="Medite"
            >
              <i data-lucide="leaf" className="w-5 h-5 text-sage-300"></i>
            </div>

            {/* Ore (Coração/Fé) - Base Direita */}
            <div
              className="absolute bottom-20 -right-6 lg:-right-12 glass-card p-3 rounded-xl animate-float"
              style={{ animationDelay: "2.5s" }}
              title="Ore"
            >
              <i data-lucide="heart" className="w-5 h-5 text-sage-300"></i>
            </div>
          </div>
        </div>
      </div>

      <VineBranch className="absolute bottom-4 left-0 right-0 w-full z-0 pointer-events-none" />
    </section>
  );
};
export default Hero;
