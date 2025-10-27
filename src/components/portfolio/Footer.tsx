import { Github, Linkedin, Instagram } from "lucide-react";

export function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="py-12 px-4 border-t border-purple-500/20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center gap-6">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Samir
          </h2>
          
          <ul className="flex flex-wrap justify-center gap-6 text-gray-400">
            <li>
              <button onClick={() => scrollToSection("home")} className="hover:text-purple-400 transition-colors">
                Home
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection("about")} className="hover:text-purple-400 transition-colors">
                About
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection("project")} className="hover:text-purple-400 transition-colors">
                Projects
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection("services")} className="hover:text-purple-400 transition-colors">
                Services
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection("contact")} className="hover:text-purple-400 transition-colors">
                Contact
              </button>
            </li>
          </ul>
          
          <div className="flex gap-4">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-purple-400 transition-colors"
            >
              <Github className="h-5 w-5" />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-purple-400 transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a 
              href="https://instagram.com/kineee_2" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-purple-400 transition-colors"
            >
              <Instagram className="h-5 w-5" />
            </a>
          </div>
          
          <p className="text-gray-400 text-sm">
            &copy; 2025 Samir. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
