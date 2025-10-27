import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Home, User, FolderOpen, Code2, Mail, ChevronUp } from "lucide-react";

export function Navigation() {
  const [activeSection, setActiveSection] = useState("home");
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    // Keyboard navigation
    const handleKeyDown = (e: KeyboardEvent) => {
      // Only handle Page Up/Down and Home/End keys for section navigation
      // Allow normal arrow key scrolling
      if (e.key === "PageDown") {
        e.preventDefault();
        const sections = ["home", "about", "project", "services", "contact"];
        const currentIndex = sections.indexOf(activeSection);
        if (currentIndex < sections.length - 1) {
          scrollToSection(sections[currentIndex + 1]);
        }
      } else if (e.key === "PageUp") {
        e.preventDefault();
        const sections = ["home", "about", "project", "services", "contact"];
        const currentIndex = sections.indexOf(activeSection);
        if (currentIndex > 0) {
          scrollToSection(sections[currentIndex - 1]);
        }
      } else if (e.key === "Home") {
        e.preventDefault();
        scrollToSection("home");
      } else if (e.key === "End") {
        e.preventDefault();
        scrollToSection("contact");
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    
    const handleScroll = () => {
      const scrollPos = window.scrollY + 100;
      const sections = ["home", "about", "project", "services", "contact"];
      
      // Update active section based on scroll position
      sections.forEach(sectionId => {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          const offsetTop = window.scrollY + rect.top;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPos >= offsetTop && scrollPos < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
          }
        }
      });

      // Show/hide back to top button
      setShowBackToTop(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeSection]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth"
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navItems = [
    { id: "home", label: "Home", icon: <Home className="h-5 w-5" /> },
    { id: "about", label: "About", icon: <User className="h-5 w-5" /> },
    { id: "project", label: "Projects", icon: <FolderOpen className="h-5 w-5" /> },
    { id: "services", label: "Services", icon: <Code2 className="h-5 w-5" /> },
    { id: "contact", label: "Contact", icon: <Mail className="h-5 w-5" /> }
  ];

  return (
    <>
      <motion.header 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 w-full z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm hidden md:block"
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-3">
          <nav className="flex justify-center">
            <ul className="flex gap-2 sm:gap-4 md:gap-8 bg-white dark:bg-gray-800 shadow-md rounded-full px-3 sm:px-6 py-2 sm:py-3 overflow-x-auto">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    aria-label={`Navigate to ${item.label} section`}
                    aria-current={activeSection === item.id ? "page" : undefined}
                    className={`flex items-center gap-1 sm:gap-2 px-2 sm:px-4 py-2 rounded-full transition-all whitespace-nowrap ${
                      activeSection === item.id 
                        ? "bg-primary text-primary-foreground shadow-sm" 
                        : "text-foreground/80 hover:bg-secondary hover:text-foreground"
                    }`}
                  >
                    <span className="flex-shrink-0">{item.icon}</span>
                    <span className="font-medium hidden sm:inline text-sm md:text-base">{item.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </motion.header>

      {/* Back to Top Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ 
          opacity: showBackToTop ? 1 : 0,
          scale: showBackToTop ? 1 : 0,
          display: showBackToTop ? "flex" : "none"
        }}
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        onClick={scrollToTop}
        aria-label="Scroll back to top"
        className="fixed bottom-6 right-6 sm:bottom-10 sm:right-10 bg-blue-600 text-white w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center cursor-pointer z-50 shadow-lg hover:bg-blue-700 transition-colors"
        style={{ display: showBackToTop ? "flex" : "none" }}
      >
        <ChevronUp className="h-5 w-5 sm:h-6 sm:w-6" />
      </motion.button>
    </>
  );
}