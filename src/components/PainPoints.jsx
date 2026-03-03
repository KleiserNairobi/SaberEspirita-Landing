import React, { useState, useEffect, useRef } from "react";
import {
  VineBranch,
  VineWatermark,
  PhoneMockup,
  useScrollAnimation,
  scrollToSection,
} from "./Shared";

const PainPoints = () => {
  const [ref, isVisible] = useScrollAnimation();

  const pains = [
    {
      icon: "calendar-clock",
      title: "Falta de constância",
      desc: "A rotina corrida dificulta manter o ritmo de estudos.",
    },
    {
      icon: "repeat",
      title: "Dificuldade em revisar",
      desc: "Como fixar o que foi aprendido de forma eficaz?",
    },
    {
      icon: "hourglass",
      title: "Pouco tempo",
      desc: "A paz interior parece um luxo distante no dia a dia.",
    },
    {
      icon: "smartphone",
      title: "Distrações digitais",
      desc: "O ambiente online nem sempre favorece a concentração.",
    },
  ];

  return (
    <section className="py-20 bg-white relative" id="desafios">
      <div className="container mx-auto px-4">
        <div
          ref={ref}
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-sage-500 mb-6">
            Você quer estudar mais a Doutrina Espírita… mas falta{" "}
            <span className="italic text-sage-300">organização?</span>
          </h2>
          <p className="text-sage-400 leading-relaxed">
            Sabemos que a jornada espiritual é profunda e exige dedicação. Mas,
            no dia a dia, é comum enfrentar desafios que impedem seu
            crescimento.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pains.map((pain, idx) => (
            <div
              key={idx}
              className="glass-card p-6 rounded-2xl hover:shadow-lg transition-all hover:-translate-y-1 group"
            >
              <div className="w-12 h-12 rounded-xl bg-sage-50 flex items-center justify-center mb-4 group-hover:bg-sage-300 transition-colors">
                <i
                  data-lucide={pain.icon}
                  className="w-6 h-6 text-sage-300 group-hover:text-white transition-colors"
                ></i>
              </div>
              <h3 className="font-serif text-lg font-semibold text-sage-500 mb-2">
                {pain.title}
              </h3>
              <p className="text-sm text-sage-400 leading-relaxed">
                {pain.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="font-serif text-sage-300 italic text-xl md:text-2xl pt-4">
            Se você se identificou, o Saber Espírita foi feito para você.
            <br className="hidden md:block" />É hora de transformar esses
            desafios em oportunidades de crescimento.
          </p>
        </div>
      </div>
    </section>
  );
};
export default PainPoints;
