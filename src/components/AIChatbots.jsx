import React, { useState, useEffect, useRef } from "react";
import {
  VineBranch,
  VineWatermark,
  PhoneMockup,
  useScrollAnimation,
  scrollToSection,
} from "./Shared";

const AIChatbots = () => {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section className="py-20 bg-white relative overflow-hidden" id="ia">
      <div className="absolute inset-0 bg-gradient-to-b from-sage-50/50 to-transparent"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div
          ref={ref}
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sage-50 border border-sage-100 mb-6">
            <i data-lucide="bot" className="w-4 h-4 text-sage-300"></i>
            <span className="text-xs font-medium text-sage-400">
              Inteligência Artificial
            </span>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-sage-500 mb-6">
            Sabedoria Espírita e Acolhimento com{" "}
            <span className="italic text-sage-300">
              Inteligência Artificial
            </span>
          </h2>
          <p className="text-sage-400 text-lg">
            Seus Guias Virtuais sempre à disposição para iluminar seu caminho
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Chatbot 1 */}
          <div className="group relative bg-white rounded-3xl p-8 shadow-lg border border-sage-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-sage-100/50 to-transparent rounded-full -translate-y-1/2 translate-x-1/2"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-sage-300 flex items-center justify-center mb-6 shadow-lg shadow-sage-200">
                <i
                  data-lucide="message-circle-heart"
                  className="w-8 h-8 text-white"
                ></i>
              </div>
              <h3 className="font-serif text-2xl font-bold text-sage-500 mb-2">
                Converse com o Guia
              </h3>
              <p className="text-sm text-sage-300 font-medium mb-4">
                Apoio emocional e acolhimento
              </p>
              <p className="text-sage-400 leading-relaxed mb-6">
                Um espaço de apoio emocional e acolhimento. Funciona como um
                ombro amigo virtual, oferecendo palavras de paz, equilíbrio e
                conforto nos momentos desafiadores da vida.
              </p>
              <div className="flex items-center gap-2 text-sm text-sage-300">
                <i data-lucide="heart" className="w-4 h-4"></i>
                <span>Ênfase em empatia e conforto espiritual</span>
              </div>
            </div>
          </div>

          {/* Chatbot 2 */}
          <div className="group relative bg-white rounded-3xl p-8 shadow-lg border border-sage-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-sage-100/50 to-transparent rounded-full -translate-y-1/2 translate-x-1/2"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-sage-200 flex items-center justify-center mb-6 shadow-lg shadow-sage-200">
                <i
                  data-lucide="graduation-cap"
                  className="w-8 h-8 text-white"
                ></i>
              </div>
              <h3 className="font-serif text-2xl font-bold text-sage-500 mb-2">
                Pergunte ao Sr. Allan
              </h3>
              <p className="text-sm text-sage-300 font-medium mb-4">
                Especialista em Doutrina
              </p>
              <p className="text-sage-400 leading-relaxed mb-6">
                Focado no aspecto científico e filosófico, é ideal para tirar
                dúvidas sobre as obras básicas e aprofundar-se na Codificação
                Kardequiana com respostas precisas e embasadas.
              </p>
              <div className="flex items-center gap-2 text-sm text-sage-300">
                <i data-lucide="book-marked" className="w-4 h-4"></i>
                <span>Ênfase em precisão doutrinária</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AIChatbots;
