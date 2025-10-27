import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Home, User, FolderOpen, Code2, Mail, ChevronUp } from "lucide-react";

export function Navigation() {
  const [activeSection, setActiveSection] = useState("home");
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
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
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
        className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md shadow-sm"
      >
        <div className="max-w-7xl mx-auto px-4 py-4">
          <nav className="flex justify-center">
            <ul className="flex gap-8 bg-white shadow-md rounded-full px-6 py-3">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all ${
                      activeSection === item.id 
                        ? "bg-black text-white" 
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    {item.icon}
                    <span className="font-medium hidden md:inline">{item.label}</span>
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
        className="fixed bottom-10 right-10 bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center cursor-pointer z-50 shadow-lg hover:bg-blue-700 transition-colors"
        style={{ display: showBackToTop ? "flex" : "none" }}
      >
        <ChevronUp className="h-6 w-6" />
      </motion.button>
    </>
  );
}