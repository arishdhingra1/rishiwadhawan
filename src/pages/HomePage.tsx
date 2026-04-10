import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { Subscribe } from "../components/Subscribe";
import { ContactSection } from "../components/ContactSection";
import { FAQ } from "../components/FAQ";
import { LegalTeaser } from "../components/LegalTeaser";

export function HomePage() {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;
    const id = hash.replace("#", "");
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth" });
  }, [hash]);

  return (
    <main>
      <Hero />
      <About />
      <Subscribe />
      <ContactSection />
      <FAQ />
      <LegalTeaser />
    </main>
  );
}
