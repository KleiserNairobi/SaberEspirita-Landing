import "./index.css";
import React, { useState, useEffect } from "react";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import PainPoints from "./components/PainPoints";
import Features from "./components/Features";
import AIChatbots from "./components/AIChatbots";
import AppExperience from "./components/AppExperience";
import FAQ from "./components/FAQ";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import TermsPage from "./pages/TermsPage";
import PrivacyPage from "./pages/PrivacyPage";

const normalizePath = (p) => {
  if (!p) return "/";
  let clean = p.toLowerCase().trim();
  // Remove trailing slash if not root
  if (clean.length > 1 && clean.endsWith("/")) {
    clean = clean.slice(0, -1);
  }
  // Remove .html suffix if present
  if (clean.endsWith(".html")) {
    clean = clean.slice(0, -5);
  }
  return clean;
};

const App = ({ currentPath }) => {
  const [path, setPath] = useState(() => {
    if (currentPath) return normalizePath(currentPath);
    if (typeof window !== "undefined") {
      return normalizePath(window.location.pathname);
    }
    return "/";
  });

  useEffect(() => {
    const handleLocationChange = () => {
      setPath(normalizePath(window.location.pathname));
    };

    window.addEventListener("popstate", handleLocationChange);
    return () => window.removeEventListener("popstate", handleLocationChange);
  }, []);

  useEffect(() => {
    // Re-run Lucide icons after React render
    const interval = setInterval(() => {
      if (typeof window !== "undefined" && window.lucide) {
        window.lucide.createIcons();
      }
    }, 100);

    return () => clearInterval(interval);
  }, [path]);

  if (path === "/terms") {
    return <TermsPage />;
  }

  if (path === "/privacy") {
    return <PrivacyPage />;
  }

  return (
    <div className="smooth-scroll">
      <Navigation />
      <Hero />
      <PainPoints />
      <Features />
      <AIChatbots />
      <AppExperience />
      <FAQ />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default App;
