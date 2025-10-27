import { Github, Linkedin, Instagram } from "lucide-react";

export function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="py-12 px-4 bg-black text-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center gap-6">
          <h2 className="text-2xl font-bold font-['Montserrat']">
            Samir
          </h2>
          
          <ul className="flex flex-wrap justify-center gap-6 text-gray-300">
            <li>
              <button onClick={() => scrollToSection("home")} className="hover:text-blue-500 transition-colors font-medium">
                Home
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection("about")} className="hover:text-blue-500 transition-colors font-medium">
                About
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection("project")} className="hover:text-blue-500 transition-colors font-medium">
                Projects
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection("services")} className="hover:text-blue-500 transition-colors font-medium">
                Services
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection("contact")} className="hover:text-blue-500 transition-colors font-medium">
                Contact
              </button>
            </li>
          </ul>
          
          <div className="flex gap-4">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-blue-500 transition-colors"
            >
              <Github className="h-5 w-5" />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-blue-500 transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a 
              href="https://instagram.com/kineee_2" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-blue-500 transition-colors"
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