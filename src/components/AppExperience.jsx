import React, { useState, useEffect, useRef } from "react";
import {
  VineBranch,
  VineWatermark,
  PhoneMockup,
  useScrollAnimation,
  scrollToSection,
} from "./Shared";

const AppExperience = () => {
  const [ref, isVisible] = useScrollAnimation();

  const benefits = [
    {
      icon: "layout",
      title: "Interface Limpa",
      desc: "Projetada para ser intuitiva, bela e facilitar a imersão no conteúdo.",
    },
    {
      icon: "navigation",
      title: "Navegação Intuitiva",
      desc: "Encontre o que busca com facilidade, sem distrações.",
    },
    {
      icon: "shield-check",
      title: "Ambiente sem Distrações",
      desc: "Um espaço dedicado ao seu crescimento, livre de interrupções.",
    },
    {
      icon: "type",
      title: "Leitura Personalizada",
      desc: "Ajuste o tamanho da fonte, escolha o tema e personalize sua experiência.",
    },
    {
      icon: "zap",
      title: "Rápido como um Pensamento",
      desc: "Conteúdos carregam instantaneamente, sem esperas.",
    },
    {
      icon: "cloud",
      title: "Progresso na Nuvem",
      desc: "Seu progresso sempre a salvo, acessível de qualquer dispositivo.",
    },
  ];

  return (
    <section className="py-20 relative" id="experiencia">
      <div className="container mx-auto px-4">
        <div
          ref={ref}
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-sage-500 mb-6">
            Aprenda Espiritismo no seu ritmo:{" "}
            <span className="italic text-sage-300">
              Simples. Profundo. Transformador.
            </span>
          </h2>
          <p className="text-sage-400">
            Construído do absoluto zero para encantar e facilitar seu foco
            espiritual.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 border border-sage-50"
            >
              <div className="w-12 h-12 rounded-xl feature-icon flex items-center justify-center mb-4">
                <i
                  data-lucide={benefit.icon}
                  className="w-6 h-6 text-white"
                ></i>
              </div>
              <h3 className="font-serif text-lg font-bold text-sage-500 mb-2">
                {benefit.title}
              </h3>
              <p className="text-sm text-sage-400 leading-relaxed">
                {benefit.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default AppExperience;
