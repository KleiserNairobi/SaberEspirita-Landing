import React, { useState, useEffect, useRef } from "react";

export const VineBranch = ({ className = "", color = "#839278" }) => (
  <svg
    className={className}
    viewBox="0 0 800 120"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      opacity="0.6"
    >
      {/* Haste principal */}
      <path
        d="M-20,60 Q 50,20 120,60 T 260,60 T 400,60 T 540,60 T 680,60 T 820,60"
        fill="none"
      />

      {/* Folha 1 (Esquerda) */}
      <g transform="translate(180, 60) scale(0.8)">
        <path
          d="M0,0 Q -10,15 -5,30 Q -15,25 -25,35 Q -20,15 -35,5 Q -20,0 -25,-15 Q -10,-5 0,0"
          fill="none"
        />
        <path d="M0,0 L -15,12" />
      </g>

      {/* Folha 2 (Centro) */}
      <g transform="translate(420, 50) scale(1)">
        <path
          d="M0,0 Q -10,-20 0,-40 Q 15,-25 30,-35 Q 20,-15 35,-5 Q 15,0 20,20 Q 5,10 0,0"
          fill="none"
        />
        <path d="M0,0 L 15,-15" />
      </g>

      {/* Gavinha espiral (Centro direita) */}
      <path d="M470,55 Q 490,20 500,40 T 490,60 T 510,50" fill="none" />

      {/* Folha 3 (Direita acoplada ao cacho) */}
      <g transform="translate(620, 55) scale(0.9)">
        <path
          d="M0,0 Q -15,-20 -5,-40 Q 10,-20 25,-30 Q 15,-10 30,5 Q 10,0 15,20 Q 0,10 0,0"
          fill="none"
        />
        <path d="M0,0 L 12,-12M4,-6 L -2,-12 M 8,-1 L 18,2" />
      </g>

      {/* Cacho de Uvas Central */}
      <g transform="translate(560, 65)">
        <path d="M0,0 L 5,10" fill="none" />
        <circle cx="2" cy="12" r="3" /> <circle cx="8" cy="12" r="3" />
        <circle cx="5" cy="16" r="3" /> <circle cx="11" cy="16" r="3" />{" "}
        <circle cx="-1" cy="16" r="3" />
        <circle cx="2" cy="21" r="3" /> <circle cx="8" cy="21" r="3" />{" "}
        <circle cx="14" cy="21" r="3" />
        <circle cx="5" cy="26" r="3" /> <circle cx="11" cy="26" r="3" />
        <circle cx="8" cy="31" r="3" />
      </g>

      {/* Gavinha espiral final (Extrema direita) */}
      <path d="M720,65 Q 750,90 760,70 T 750,50 T 770,60" fill="none" />
    </g>
  </svg>
);

// Vine Background Pattern
export const VineWatermark = () => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-[0.03]">
    <svg
      className="w-full h-full"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
    >
      <path
        d="M0,50 Q25,30 50,50 T100,50"
        stroke="#6F7C60"
        strokeWidth="0.5"
        fill="none"
      />
      <path
        d="M0,60 Q25,40 50,60 T100,60"
        stroke="#6F7C60"
        strokeWidth="0.5"
        fill="none"
      />
      <path
        d="M0,40 Q25,20 50,40 T100,40"
        stroke="#6F7C60"
        strokeWidth="0.5"
        fill="none"
      />
    </svg>
  </div>
);

// Phone Mockup Component
export const PhoneMockup = () => (
  <div className="phone-mockup w-72 h-[580px] bg-white mx-auto animate-float relative">
    <div className="phone-notch"></div>
    <div className="phone-screen relative flex items-center justify-center bg-sage-50 overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-4 bg-white/20 backdrop-blur-md z-20"></div>
      <div className="w-full h-full">
        <img
          src="/assets/home.png"
          alt="Captura de tela do aplicativo Saber Espírita focado no estudo da Doutrina Espírita"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  </div>
);

// Scroll Animation Hook
export const useScrollAnimation = () => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return [ref, isVisible];
};

// Global Navigation Helper
export const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};
