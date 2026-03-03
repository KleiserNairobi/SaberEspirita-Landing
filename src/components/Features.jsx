import React, { useState, useEffect, useRef } from "react";
import {
  VineBranch,
  VineWatermark,
  PhoneMockup,
  useScrollAnimation,
  scrollToSection,
} from "./Shared";

const Features = () => {
  const [ref, isVisible] = useScrollAnimation();

  const features = [
    {
      icon: "book-open",
      title: "Estude",
      subtitle: "Trilhas de Aprendizado Estruturado e Fiel",
      desc: "Acesse cursos completos e módulos didáticos exclusivos sobre a Doutrina Espírita, desenvolvidos com rigor e fidelidade à Codificação. Aprenda no seu próprio ritmo, com uma jornada clara que acolhe desde o iniciante curioso até o estudioso avançado.",
      color: "bg-sage-300",
    },
    {
      icon: "brain",
      title: "Fixe",
      subtitle: "Testes Gamificados que Despertam o Interesse",
      desc: "Nossa jornada de aprendizado inclui testes de conhecimento envolventes e gamificados! Integrados aos cursos, os quizzes validam sua compreensão de forma interativa e divertida, transformando a fixação do aprendizado em uma experiência prazerosa.",
      color: "bg-sage-200",
    },
    {
      icon: "leaf",
      title: "Medite",
      subtitle: "Encontre a Paz Interior",
      desc: "Nosso módulo Medite oferece uma pausa compassiva no seu dia, com textos profundos para reflexão e áudios de meditações guiadas. Desenvolva sua serenidade interior e conecte-se com seu eu mais profundo.",
      color: "bg-sage-200",
    },
    {
      icon: "heart",
      title: "Ore",
      subtitle: "Fortaleça Sua Fé",
      desc: "Tenha à disposição um espaço completamente amigável focado em suas orações e preces diárias. Descubra categorias e textos inspiradores para os momentos em que seu coração precisa daquela elevação espiritual.",
      color: "bg-sage-300",
    },
  ];

  return (
    <section className="py-20 relative vine-pattern" id="metodo">
      <VineWatermark />
      <div className="container mx-auto px-4 relative z-10">
        <div
          ref={ref}
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <span className="text-sage-300 font-semibold text-sm uppercase tracking-wider">
            O Método
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-sage-500 mt-4 mb-6">
            A base estruturada para o{" "}
            <span className="italic text-sage-300">estudo do Espiritismo</span>
          </h2>
          <p className="text-sage-400">
            O Saber Espírita é o seu ecossistema completo, cuidadosamente
            desenhado para oferecer um caminho claro e eficaz.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className={`bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 ${idx % 2 === 1 ? "md:mt-12" : ""}`}
            >
              <div
                className={`w-14 h-14 rounded-2xl ${feature.color} flex items-center justify-center mb-6 shadow-lg shadow-sage-100`}
              >
                <i
                  data-lucide={feature.icon}
                  className="w-7 h-7 text-white"
                ></i>
              </div>
              <div className="flex items-baseline gap-3 mb-4">
                <h3 className="font-serif text-2xl font-bold text-sage-500">
                  {feature.title}
                </h3>
                <span className="text-sage-300 text-sm">
                  — {feature.subtitle}
                </span>
              </div>
              <p className="text-sage-400 leading-relaxed mb-6">
                {feature.desc}
              </p>
              {/*
                    <div className="flex items-center gap-2 text-sage-300 text-sm font-medium">
                      <span>Saiba mais</span>
                      <i data-lucide="arrow-right" className="w-4 h-4"></i>
                    </div>
                    */}
            </div>
          ))}
        </div>

        {/* Differential */}
        <div className="mt-20 bg-sage-300 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <div className="relative z-10 max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <i data-lucide="sparkles" className="w-5 h-5"></i>
              <span className="font-semibold text-sm uppercase tracking-wider opacity-90">
                Diferencial
              </span>
            </div>
            <h3 className="font-serif text-2xl md:text-3xl font-bold mb-4">
              Fundamentado nas Obras Básicas
            </h3>
            <p className="text-white/90 leading-relaxed mb-6">
              No Saber Espírita, a autenticidade doutrinária é inegociável.
              Nosso conteúdo é construído com base nos pilares da Codificação de
              Allan Kardec, garantindo que seu estudo seja sempre fiel às fontes
              originais.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 text-sm">
              <div className="flex items-start gap-2">
                <i
                  data-lucide="check-circle"
                  className="w-5 h-5 flex-shrink-0 mt-0.5"
                ></i>
                <span>O Pentateuco Kardequiano completo</span>
              </div>
              <div className="flex items-start gap-2">
                <i
                  data-lucide="check-circle"
                  className="w-5 h-5 flex-shrink-0 mt-0.5"
                ></i>
                <span>Conteúdo sério e organizado</span>
              </div>
              <div className="flex items-start gap-2">
                <i
                  data-lucide="check-circle"
                  className="w-5 h-5 flex-shrink-0 mt-0.5"
                ></i>
                <span>Fidelidade à base doutrinária</span>
              </div>
              <div className="flex items-start gap-2">
                <i
                  data-lucide="check-circle"
                  className="w-5 h-5 flex-shrink-0 mt-0.5 text-sage-100"
                ></i>
                <span className="font-medium text-white">
                  Selo de Fidelidade Doutrinária
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Features;
