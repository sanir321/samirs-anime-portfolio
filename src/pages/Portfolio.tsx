import { Navigation } from "@/components/portfolio/Navigation";
import { HeroSection } from "@/components/portfolio/HeroSection";
import { AboutSection } from "@/components/portfolio/AboutSection";
import { ProjectsSection } from "@/components/portfolio/ProjectsSection";
import { ServicesSection } from "@/components/portfolio/ServicesSection";
import { ContactSection } from "@/components/portfolio/ContactSection";
import { Footer } from "@/components/portfolio/Footer";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Portfolio() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger visibility after component mounts
    setIsVisible(true);

    // Add reveal animation on scroll
    const handleScroll = () => {
      const revealElements = document.querySelectorAll('.reveal');
      const windowHeight = window.innerHeight;
      const revealPoint = 150;

      revealElements.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;
        if (elementTop < windowHeight - revealPoint) {
          el.classList.add('active-reveal');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-white text-gray-900"
    >
      <Navigation />
      
      <div className="md:ml-0">
        <div className="reveal"><HeroSection /></div>
        <div className="reveal"><AboutSection /></div>
        <div className="reveal"><ProjectsSection /></div>
        <div className="reveal"><ServicesSection /></div>
        <div className="reveal"><ContactSection /></div>
        <Footer />
      </div>
    </motion.div>
  );
}