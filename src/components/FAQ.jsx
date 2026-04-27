import React, { useState } from "react";
import { VineWatermark, useScrollAnimation } from "./Shared";

const faqs = [
  {
    question: "O que é espiritismo?",
    answer:
      "O espiritismo é uma doutrina filosófica, científica e moral codificada por Allan Kardec no século XIX. Baseia-se na crença na imortalidade do espírito, na reencarnação e na comunicação entre espíritos e encarnados. O Saber Espírita oferece um caminho estruturado para estudar essa doutrina pelo celular.",
  },
  {
    question: "Quais são as obras básicas de Allan Kardec?",
    answer:
      "As cinco obras básicas da Codificação Kardequiana são: O Livro dos Espíritos (1857), O Livro dos Médiuns (1861), O Evangelho Segundo o Espiritismo (1864), O Céu e o Inferno (1865) e A Gênese (1868). O Saber Espírita utiliza essas obras como base para todos os seus cursos e conteúdos.",
  },
  {
    question: "Como estudar a Doutrina Espírita do zero?",
    answer:
      "O Saber Espírita oferece trilhas de aprendizado estruturadas para iniciantes, partindo dos conceitos fundamentais da Doutrina até temas mais aprofundados. Basta baixar o app gratuitamente, criar uma conta e começar pela trilha de introdução ao espiritismo.",
  },
  {
    question: "O Saber Espírita é gratuito?",
    answer:
      "Sim! O download e uso do Saber Espírita é completamente gratuito, disponível para Android e iOS.",
  },
  {
    question: "O app funciona sem internet?",
    answer:
      "O Saber Espírita requer conexão com a internet para acessar os conteúdos, cursos e funcionalidades do app.",
  },
  {
    question: "O conteúdo é fiel à Codificação Kardequiana?",
    answer:
      "Sim. Todo o conteúdo do Saber Espírita é desenvolvido com rigor doutrinário e fidelidade às obras originais de Allan Kardec, garantindo um estudo seguro e autêntico da Doutrina Espírita.",
  },
  {
    question: "O Saber Espírita está disponível para Android e iOS?",
    answer:
      "Sim! O app está disponível gratuitamente na App Store (iOS/iPhone) e no Google Play (Android).",
  },
];

const FAQItem = ({ question, answer, isOpen, onToggle }) => (
  <div className="glass-card rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300">
    <button
      type="button"
      onClick={onToggle}
      className="w-full flex items-center justify-between gap-4 p-6 text-left cursor-pointer"
      aria-expanded={isOpen}
    >
      <span className="font-serif text-lg font-semibold text-sage-500">
        {question}
      </span>
      <span
        className={`flex-shrink-0 w-8 h-8 rounded-full bg-sage-50 flex items-center justify-center transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
      >
        <i data-lucide="chevron-down" className="w-4 h-4 text-sage-300"></i>
      </span>
    </button>

    <div
      className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
    >
      <p className="text-sage-400 leading-relaxed px-6 pb-6">{answer}</p>
    </div>
  </div>
);

const FAQ = () => {
  const [ref, isVisible] = useScrollAnimation();
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (idx) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <section className="py-20 bg-white relative" id="faq">
      <VineWatermark />
      <div className="container mx-auto px-4 relative z-10">
        <div
          ref={ref}
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <span className="text-sage-300 font-semibold text-sm uppercase tracking-wider">
            Dúvidas Frequentes
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-sage-500 mt-4 mb-6">
            Tudo o que você precisa{" "}
            <span className="italic text-sage-300">saber antes de começar</span>
          </h2>
          <p className="text-sage-400">
            Respondemos as principais dúvidas sobre o espiritismo e o Saber
            Espírita.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, idx) => (
            <FAQItem
              key={idx}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === idx}
              onToggle={() => handleToggle(idx)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
