import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MapPin, Briefcase, Download, ArrowRight, Github, Linkedin, Instagram } from "lucide-react";
import { useState, useEffect } from "react";

export function HeroSection() {
  const [displayedText, setDisplayedText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const words = ["Frontend Developer", "UI/UX Designer", "Web Enthusiast", "React Developer"];

  const { scrollY } = useScroll();
  const yImage = useTransform(scrollY, [0, 500], [0, 150]);
  const yText = useTransform(scrollY, [0, 500], [0, -50]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const characterY = useTransform(scrollY, [0, 500], [0, 100]);
  const characterScale = useTransform(scrollY, [0, 300], [1, 0.95]);

  useEffect(() => {
    const typingSpeed = isDeleting ? 50 : 100;
    const currentWord = words[wordIndex];

    const timer = setTimeout(() => {
      if (!isDeleting && charIndex < currentWord.length) {
        setDisplayedText(currentWord.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      } else if (isDeleting && charIndex > 0) {
        setDisplayedText(currentWord.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      } else {
        setIsDeleting(!isDeleting);
        if (!isDeleting) {
          setWordIndex((wordIndex + 1) % words.length);
        }
      }
    }, isDeleting ? typingSpeed : (charIndex === currentWord.length ? 1000 : typingSpeed));

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, wordIndex, words]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center px-8 sm:px-12 md:px-16 pt-24 pb-12 relative overflow-hidden bg-white dark:bg-gray-900" id="home">
      {/* Floating background elements */}
      <motion.div
        className="absolute top-20 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-20 blur-xl"
        animate={{
          y: [0, -30, 0],
          x: [0, 20, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-40 right-20 w-32 h-32 bg-purple-200 rounded-full opacity-20 blur-xl"
        animate={{
          y: [0, 40, 0],
          x: [0, -30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ opacity }}
          className="inline-block bg-gray-100 dark:bg-gray-800 rounded-full px-4 py-2 mb-8"
        >
          <span className="text-sm text-gray-700 dark:text-gray-300">
            <span className="font-bold text-green-600 dark:text-green-400">• </span>Available for freelance work
          </span>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            style={{ y: yText }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 font-['Raleway'] text-gray-900 dark:text-white">
              Hi, I'm <span className="text-blue-600 dark:text-blue-400">Samir</span>
            </h1>
            
            <h3 className="text-xl sm:text-2xl md:text-3xl text-gray-700 dark:text-gray-300 mb-6 font-['Playfair_Display'] min-h-[2rem] md:min-h-[2.5rem]">
              {displayedText}<span className="animate-pulse">|</span>
            </h3>
            
            <div className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-6 space-y-1 font-['Roboto']">
              <p>I create beautiful, functional, and user-centered digital experiences.</p>
              <p className="hidden sm:block">With 2+ years of experience in web development, I bring ideas to life</p>
              <p className="hidden sm:block">through clean code and thoughtful design.</p>
            </div>
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-6 mb-8 text-gray-700 dark:text-gray-300 text-sm">
              <p className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                Based in India
              </p>
              <p className="flex items-center gap-2">
                <Briefcase className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                Available Now
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4 mb-6">
              {/* TODO: Add your hire me link here (e.g., contact form, email, or booking link) */}
              <Button 
                size="lg"
                className="bg-black hover:bg-gray-800 dark:bg-blue-600 dark:hover:bg-blue-700 text-white rounded-lg transition-all"
                onClick={() => {
                  // TODO: Replace with your hire me action
                  // Example: window.location.href = "mailto:zenosayz05@gmail.com?subject=Hire%20Inquiry"
                  // Or: navigate to contact section
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <ArrowRight className="mr-2 h-4 w-4" />
                Hire Me
              </Button>
              {/* TODO: Add your CV download link here */}
              <Button 
                size="lg"
                variant="outline"
                className="border-2 border-black text-black hover:bg-black hover:text-white dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-600 dark:hover:text-white dark:hover:border-blue-600 rounded-lg transition-all"
                onClick={() => {
                  // TODO: Replace with your actual CV file URL
                  // Example: window.open('/path-to-your-cv.pdf', '_blank')
                  console.log('Add your CV download link here');
                }}
              >
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </Button>
            </div>
            
            <div className="border-t border-gray-300 dark:border-gray-700 pt-6">
              <p className="text-gray-600 dark:text-gray-400 mb-4">Follow me:</p>
              <div className="flex gap-4">
                {/* TODO: Replace with your actual GitHub profile URL */}
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
                   className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  <Github className="h-5 w-5" />
                </a>
                {/* TODO: Replace with your actual LinkedIn profile URL */}
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                   className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  <Linkedin className="h-5 w-5" />
                </a>
                {/* Instagram link is already correct */}
                <a href="https://instagram.com/kineee_2" target="_blank" rel="noopener noreferrer"
                   className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.5 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            style={{ y: characterY, scale: characterScale }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative flex justify-center items-center"
          >
            <div className="relative w-full max-w-[220px] sm:max-w-[260px] md:max-w-md mx-auto px-8 sm:px-4 overflow-hidden">
              {/* Magnetic cursor effect container */}
              <motion.div
                className="relative"
                animate={{
                  rotateY: window.innerWidth > 768 ? mousePosition.x * 0.3 : 0,
                  rotateX: window.innerWidth > 768 ? -mousePosition.y * 0.3 : 0,
                }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 20,
                }}
                style={{ 
                  transformStyle: "preserve-3d",
                  perspective: "1000px"
                }}
              >
                <motion.img 
                  src="https://harmless-tapir-303.convex.cloud/api/storage/415d74a1-761b-48ff-8e95-1cd542d180b2"
                  alt="Samir Khadka - Frontend Developer and UI/UX Designer portfolio hero image"
                  loading="lazy"
                  className="relative rounded-xl border border-gray-300 shadow-lg w-full h-auto object-contain max-h-[350px] sm:max-h-[450px]"
                  style={{ 
                    willChange: 'transform',
                    transformStyle: "preserve-3d"
                  }}
                  animate={{
                    scale: [1, 1.03, 1],
                    y: [0, -5, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  whileHover={{
                    scale: window.innerWidth > 768 ? 1.15 : 1,
                    rotate: window.innerWidth > 768 ? -5 : 0,
                    filter: window.innerWidth > 768 ? "brightness(1.1) saturate(1.2)" : "none",
                    transition: {
                      type: "spring",
                      stiffness: 300,
                      damping: 15,
                    }
                  }}
                  whileTap={{
                    scale: window.innerWidth > 768 ? 1.2 : 1,
                    rotate: window.innerWidth > 768 ? 360 : 0,
                    transition: { 
                      scale: {
                        duration: 0.3,
                        ease: "easeOut"
                      },
                      rotate: {
                        duration: 0.8,
                        ease: "easeInOut"
                      }
                    }
                  }}
                />
              </motion.div>
              
              {/* Enhanced floating decorative elements around character */}
              <motion.div
                className="absolute -top-4 -right-4 w-16 h-16 bg-blue-400 rounded-full opacity-30 blur-md"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360],
                  x: [0, 10, 0],
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 w-12 h-12 bg-purple-400 rounded-full opacity-30 blur-md"
                animate={{
                  scale: [1, 1.3, 1],
                  rotate: [360, 180, 0],
                  x: [0, -10, 0],
                  y: [0, 10, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              
              {/* Floating sparkles around the image */}
              <motion.div
                className="absolute top-10 right-10 w-3 h-3 bg-yellow-400 rounded-full"
                animate={{
                  scale: [0, 1, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: 0,
                }}
              />
              <motion.div
                className="absolute bottom-20 left-10 w-2 h-2 bg-blue-400 rounded-full"
                animate={{
                  scale: [0, 1, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: 0.5,
                }}
              />
              <motion.div
                className="absolute top-1/2 right-5 w-2 h-2 bg-pink-400 rounded-full"
                animate={{
                  scale: [0, 1, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: 1,
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}