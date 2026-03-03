import './index.css'
import React, { useEffect } from "react";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import PainPoints from "./components/PainPoints";
import Features from "./components/Features";
import AIChatbots from "./components/AIChatbots";
import AppExperience from "./components/AppExperience";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

const App = () => {
  useEffect(() => {
    // Re-run Lucide icons after React render
    const interval = setInterval(() => {
      if (window.lucide) {
        window.lucide.createIcons();
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="smooth-scroll">
      <Navigation />
      <Hero />
      <PainPoints />
      <Features />
      <AIChatbots />
      <AppExperience />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default App;
