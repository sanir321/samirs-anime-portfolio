import { Navigation } from "@/components/portfolio/Navigation";
import { HeroSection } from "@/components/portfolio/HeroSection";
import { AboutSection } from "@/components/portfolio/AboutSection";
import { ProjectsSection } from "@/components/portfolio/ProjectsSection";
import { ServicesSection } from "@/components/portfolio/ServicesSection";
import { ContactSection } from "@/components/portfolio/ContactSection";
import { Footer } from "@/components/portfolio/Footer";
import { ScrollProgress } from "@/components/ScrollProgress";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Skeleton } from "@/components/ui/skeleton";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Github, Linkedin, Instagram, X } from "lucide-react";

export default function Portfolio() {
  const [showWelcome, setShowWelcome] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate initial content loading - reduced to 300ms for faster loading
    const loadTimer = setTimeout(() => {
      setIsLoading(false);
    }, 300);

    // Hide welcome popup after 3 seconds if showing
    if (showWelcome) {
      const welcomeTimer = setTimeout(() => {
        setShowWelcome(false);
      }, 3000);
      
      return () => {
        clearTimeout(welcomeTimer);
        clearTimeout(loadTimer);
      };
    }

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
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(loadTimer);
    };
  }, [showWelcome]);

  // Skeleton Loader Component
  if (isLoading) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900">
        <ScrollProgress />
        <ThemeToggle />
        
        {/* Navigation Skeleton */}
        <div className="fixed top-0 left-0 w-full z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm hidden md:block">
          <div className="max-w-6xl mx-auto px-8 py-3">
            <Skeleton className="h-12 w-full max-w-2xl mx-auto rounded-full" />
          </div>
        </div>

        <div className="md:ml-0">
          {/* Hero Skeleton */}
          <section className="min-h-screen flex items-center justify-center px-2 sm:px-8 md:px-16 pt-1 md:pt-16 pb-4">
            <div className="max-w-6xl mx-auto w-full">
              <Skeleton className="h-8 w-64 mb-6 rounded-full" />
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-4">
                  <Skeleton className="h-12 w-3/4" />
                  <Skeleton className="h-8 w-2/3" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-5/6" />
                  <div className="flex gap-3 mt-6">
                    <Skeleton className="h-12 w-32 rounded-lg" />
                    <Skeleton className="h-12 w-40 rounded-lg" />
                  </div>
                </div>
                <div className="flex justify-center">
                  <Skeleton className="h-96 w-80 rounded-xl" />
                </div>
              </div>
            </div>
          </section>

          {/* About Skeleton */}
          <section className="py-8 px-8 bg-white dark:bg-gray-900">
            <div className="max-w-6xl mx-auto">
              <Skeleton className="h-6 w-32 mb-4" />
              <Skeleton className="h-8 w-64 mb-6" />
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-5/6" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-32 w-full rounded-lg mt-4" />
                </div>
                <Skeleton className="h-96 w-full rounded-2xl" />
              </div>
            </div>
          </section>

          {/* Projects Skeleton */}
          <section className="py-10 px-8 bg-gray-50 dark:bg-gray-800">
            <div className="max-w-6xl mx-auto">
              <Skeleton className="h-6 w-32 mb-4 mx-auto" />
              <Skeleton className="h-8 w-48 mb-8 mx-auto" />
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <Skeleton key={i} className="h-80 w-full rounded-2xl" />
                ))}
              </div>
            </div>
          </section>

          {/* Services Skeleton */}
          <section className="py-10 px-8 bg-white dark:bg-gray-900">
            <div className="max-w-6xl mx-auto">
              <Skeleton className="h-6 w-32 mb-4 mx-auto" />
              <Skeleton className="h-8 w-64 mb-8 mx-auto" />
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {[1, 2, 3, 4].map((i) => (
                  <Skeleton key={i} className="h-64 w-full rounded-2xl" />
                ))}
              </div>
            </div>
          </section>

          {/* Contact Skeleton */}
          <section className="py-10 px-8 bg-gray-50 dark:bg-gray-800">
            <div className="max-w-3xl mx-auto">
              <Skeleton className="h-6 w-32 mb-4 mx-auto" />
              <Skeleton className="h-8 w-48 mb-8 mx-auto" />
              <div className="grid sm:grid-cols-2 gap-3">
                {[1, 2, 3, 4].map((i) => (
                  <Skeleton key={i} className="h-32 w-full rounded-lg" />
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Welcome Popup */}
      <AnimatePresence>
        {showWelcome && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-[200] flex items-center justify-center bg-white dark:bg-gray-900"
          >
            {/* Close button */}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              onClick={() => {
                setShowWelcome(false);
              }}
              className="absolute top-6 right-6 p-2 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors z-10"
              aria-label="Close welcome popup"
            >
              <X className="h-6 w-6 text-gray-700 dark:text-gray-300" />
            </motion.button>

            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-center"
            >
              <motion.h1
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white"
              >
                Welcome to My Portfolio
              </motion.h1>
              
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex justify-center gap-6"
              >
                {/* TODO: Replace with your actual GitHub profile URL */}
                <motion.a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -5 }}
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  <Github className="h-10 w-10" />
                </motion.a>
                
                {/* Instagram link */}
                <motion.a
                  href="https://instagram.com/kineee_2"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -5 }}
                  className="text-gray-700 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-400 transition-colors"
                >
                  <Instagram className="h-10 w-10" />
                </motion.a>
                
                {/* TODO: Replace with your actual LinkedIn profile URL */}
                <motion.a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -5 }}
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  <Linkedin className="h-10 w-10" />
                </motion.a>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Portfolio Content */}
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
        <ScrollProgress />
        <Navigation />
        <ThemeToggle />
        
        <div className="md:ml-0">
          <div id="home" className="reveal"><HeroSection /></div>
          <div id="about" className="reveal"><AboutSection /></div>
          <div id="project" className="reveal"><ProjectsSection /></div>
          <div id="services" className="reveal"><ServicesSection /></div>
          <div id="contact" className="reveal"><ContactSection /></div>
          <Footer />
        </div>
      </div>
    </>
  );
}