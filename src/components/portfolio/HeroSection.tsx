import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MapPin, Briefcase, Download, ArrowRight } from "lucide-react";
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
    <section className="min-h-screen flex items-center justify-center px-4 pt-32 pb-20 relative overflow-hidden" id="home">
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

      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ opacity }}
          className="inline-block bg-gray-100 rounded-full px-4 py-2 mb-8"
        >
          <span className="text-sm text-gray-700">
            <span className="font-bold text-green-600">• </span>Available for freelance work
          </span>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            style={{ y: yText }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 font-['Raleway']">
              Hi, I'm <span className="text-blue-600">Samir</span>
            </h1>
            
            <h3 className="text-2xl sm:text-3xl md:text-4xl text-gray-700 mb-6 font-['Playfair_Display'] min-h-[2.5rem] md:min-h-[3rem]">
              {displayedText}<span className="animate-pulse">|</span>
            </h3>
            
            <div className="text-sm sm:text-base text-gray-600 mb-6 space-y-1 font-['Roboto']">
              <p>I create beautiful, functional, and user-centered digital experiences.</p>
              <p className="hidden sm:block">With 2+ years of experience in web development, I bring ideas to life</p>
              <p className="hidden sm:block">through clean code and thoughtful design.</p>
            </div>
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-6 mb-8 text-gray-700 text-sm">
              <p className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-blue-600" />
                Based in India
              </p>
              <p className="flex items-center gap-2">
                <Briefcase className="h-5 w-5 text-blue-600" />
                Available Now
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <Button 
                size="lg"
                className="bg-black hover:bg-gray-800 text-white rounded-lg"
              >
                <ArrowRight className="mr-2 h-4 w-4" />
                Hire Me
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-2 border-black text-black hover:bg-black hover:text-white rounded-lg transition-all"
              >
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </Button>
            </div>
            
            <div className="border-t border-gray-300 pt-6">
              <p className="text-gray-600 mb-4">Follow me:</p>
              <div className="flex gap-4">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
                   className="text-gray-700 hover:text-blue-600 transition-colors">
                  <i className="fa-brands fa-github text-xl"></i>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                   className="text-gray-700 hover:text-blue-600 transition-colors">
                  <i className="fa-brands fa-linkedin text-xl"></i>
                </a>
                <a href="https://instagram.com/kineee_2" target="_blank" rel="noopener noreferrer"
                   className="text-gray-700 hover:text-blue-600 transition-colors">
                  <i className="fa-brands fa-instagram text-xl"></i>
                </a>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            style={{ y: yImage }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative w-full max-w-md mx-auto">
              <motion.img 
                src="https://harmless-tapir-303.convex.cloud/api/storage/415d74a1-761b-48ff-8e95-1cd542d180b2"
                alt="Samir Khadka - Frontend Developer and UI/UX Designer portfolio hero image"
                loading="lazy"
                className="relative rounded-xl border border-gray-300 shadow-lg w-full"
                style={{ willChange: 'transform' }}
                animate={{
                  x: mousePosition.x,
                  y: mousePosition.y,
                }}
                transition={{
                  type: "spring",
                  stiffness: 150,
                  damping: 15,
                }}
                whileHover={{
                  scale: 1.05,
                  rotate: 2,
                }}
              />
              
              {/* Floating decorative elements around character */}
              <motion.div
                className="absolute -top-4 -right-4 w-16 h-16 bg-blue-400 rounded-full opacity-30 blur-md"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 w-12 h-12 bg-purple-400 rounded-full opacity-30 blur-md"
                animate={{
                  scale: [1, 1.3, 1],
                  rotate: [360, 180, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}