import React, { useState, useEffect, useRef } from "react";
import {
  VineBranch,
  VineWatermark,
  PhoneMockup,
  useScrollAnimation,
  scrollToSection,
} from "./Shared";

const Testimonials = () => {
  const [ref, isVisible] = useScrollAnimation();
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      text: "O Saber Espírita é uma ferramenta maravilhosa de estudo e também de entretenimento. De fácil entendimento e muito completo, oferece diversos assuntos da doutrina ao alcance das mãos a qualquer momento. Facilitou demais os meus estudos!",
      author: "Márcia Carvalho",
      role: "Trabalhadora Espírita",
    },
    {
      text: "Finalmente um app que leva a Doutrina a sério. As trilhas de estudo são profundas e os quizzes me ajudaram a fixar O Livro dos Espíritos como nunca.",
      author: "Carlos M.",
      role: "Estudante e Trabalhador Espírita",
    },
    {
      text: "O chat com o Guia chegou num momento difícil da minha vida. Foi um abraço virtual que me trouxe de volta a paz. Ferramenta linda e necessária.",
      author: "Ana P. S.",
      role: "Usuária do Módulo Ore",
    },
    {
      text: "Sempre tive dúvidas sobre a Doutrina, mas o app me ajuda a compreender com clareza e confiança. É como ter um guia de estudos sempre comigo.”",
      author: "Rafael Mendes",
      role: "Trabalhador Espírita",
    },
    {
      text: "Com o Saber Espírita, o conhecimento ganha direção e o aprendizado se transforma em crescimento espiritual diário.",
      author: "Regina Arruda",
      role: "Simpatizante da Doutrina",
    },
    {
      text: "Os chatbots de IA são incríveis! Posso tirar dúvidas a qualquer momento do dia.",
      author: "Ana Carolina",
      role: "Iniciante na Doutrina",
    },
    {
      text: "Ao responder às perguntas e consultar as explicações com as referências bibliográficas das obras doutrinárias, sinto que interiorizo o conhecimento de forma leve e gradativa. Excelente!",
      author: "Reggiane Tessari de Moura",
      role: "Evangelizadora Espírita",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="py-20 bg-sage-300 relative overflow-hidden"
      id="depoimentos"
    >
      <div className="absolute inset-0 opacity-10">
        <VineBranch className="absolute top-10 left-0 w-full" color="white" />
        <VineBranch
          className="absolute bottom-10 left-0 w-full rotate-180"
          color="white"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div
          ref={ref}
          className={`text-center max-w-3xl mx-auto mb-12 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
            O que nossos usuários dizem
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/20">
            <div className="absolute top-6 left-8 text-6xl font-serif text-white/30">
              "
            </div>

            <div className="relative z-10 text-center">
              <p className="font-serif text-xl md:text-2xl text-white leading-relaxed mb-8 italic">
                {testimonials[activeIndex].text}
              </p>
              <div className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                  <i data-lucide="user" className="w-6 h-6 text-white"></i>
                </div>
                <div className="text-white font-semibold">
                  {testimonials[activeIndex].author}
                </div>
                <div className="text-white/70 text-sm">
                  {testimonials[activeIndex].role}
                </div>
              </div>
            </div>

            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`w-2 h-2 rounded-full transition-all ${idx === activeIndex ? "bg-white w-8" : "bg-white/40"}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Testimonials;
