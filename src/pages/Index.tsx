import { useEffect } from "react";
import Hero from "@/components/landing/Hero";
import EmotionalConnection from "@/components/landing/EmotionalConnection";
import ExpectationBreak from "@/components/landing/ExpectationBreak";
import MethodPresentation from "@/components/landing/MethodPresentation";
import HowItWorks from "@/components/landing/HowItWorks";
import Authority from "@/components/landing/Authority";
import WhatYouGet from "@/components/landing/WhatYouGet";
import Bonuses from "@/components/landing/Bonuses";
import Testimonials from "@/components/landing/Testimonials";
import Guarantee from "@/components/landing/Guarantee";
import Offer from "@/components/landing/Offer";
import FinalCTA from "@/components/landing/FinalCTA";
import Footer from "@/components/landing/Footer";

const Index = () => {
  useEffect(() => {
    // Scroll reveal animation
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    }, observerOptions);

    document.querySelectorAll(".reveal").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <main className="overflow-x-hidden">
      <Hero />
      <EmotionalConnection />
      <ExpectationBreak />
      <MethodPresentation />
      <HowItWorks />
      <Authority />
      <WhatYouGet />
      <Bonuses />
      <Testimonials />
      <Offer />
      <Guarantee />
      <FinalCTA />
      <Footer />
    </main>
  );
};

export default Index;
