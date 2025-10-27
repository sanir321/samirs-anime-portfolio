import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Website",
    description: "Modern online store with product filtering, cart, and payment system.",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
    tags: ["HTML", "CSS", "JavaScript"],
    demo: "#", // TODO: Replace with your actual demo link
    github: "#" // TODO: Replace with your actual GitHub repository link
  },
  {
    title: "Portfolio Website",
    description: "Personal portfolio to showcase my design and coding projects.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80",
    tags: ["HTML", "CSS", "Bootstrap"],
    demo: "#", // TODO: Replace with your actual demo link
    github: "#" // TODO: Replace with your actual GitHub repository link
  },
  {
    title: "Weather App",
    description: "Responsive app showing real-time weather data using API integration.",
    image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&q=80",
    tags: ["HTML", "CSS", "API"],
    demo: "#", // TODO: Replace with your actual demo link
    github: "#" // TODO: Replace with your actual GitHub repository link
  },
  {
    title: "Blog Website",
    description: "Clean and simple blogging platform with markdown support.",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&q=80",
    tags: ["HTML", "Tailwind", "JavaScript"],
    demo: "#", // TODO: Replace with your actual demo link
    github: "#" // TODO: Replace with your actual GitHub repository link
  },
  {
    title: "Game Landing Page",
    description: "Landing page for a game with animations and parallax effects.",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&q=80",
    tags: ["HTML", "CSS", "GSAP"],
    demo: "#", // TODO: Replace with your actual demo link
    github: "#" // TODO: Replace with your actual GitHub repository link
  },
  {
    title: "Task Manager",
    description: "Task tracking web app with CRUD features and clean UI.",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80",
    tags: ["HTML", "CSS", "JS"],
    demo: "#", // TODO: Replace with your actual demo link
    github: "#" // TODO: Replace with your actual GitHub repository link
  }
];

export function ProjectsSection() {
  return (
    <section className="py-12 sm:py-14 md:py-16 px-8 sm:px-12 md:px-16 bg-gray-50 dark:bg-gray-800" id="project">
      <div className="max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-500 dark:text-gray-400 text-sm uppercase tracking-wider mb-4"
          >
            PROJECTS
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 font-['Open_Sans'] text-gray-900 dark:text-white"
          >
            Featured Work
          </motion.h1>
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="border-t border-gray-300 dark:border-gray-700 mb-6 w-24 mx-auto"
          />
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-gray-600 dark:text-gray-400 mb-8 text-sm sm:text-base px-4 sm:px-0"
          >
            <p>A showcase of my recent projects demonstrating expertise in full-stack</p>
            <p>development, modern frameworks, and creative problem-solving.</p>
          </motion.div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <Card className="bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-700 rounded-2xl overflow-hidden shadow-md hover:shadow-2xl hover:border-blue-400 dark:hover:border-blue-500 transition-all duration-300 h-full flex flex-col group">
                  <motion.div 
                    className="relative overflow-hidden"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  >
                    <img 
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover transition-all duration-300 group-hover:brightness-110"
                    />
                    <div className="absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                  </motion.div>
                  <CardContent className="p-6 flex-1 flex flex-col text-left">
                    <motion.h3 
                      className="text-xl font-bold mb-2 text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors duration-300"
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.2 }}
                    >
                      {project.title}
                    </motion.h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 flex-1 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-300">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map(tag => (
                        <motion.div
                          key={tag}
                          whileHover={{ scale: 1.1, y: -2 }}
                          transition={{ duration: 0.2 }}
                        >
                          <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200 border-0 cursor-pointer">
                            {tag}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                    
                    <div className="flex gap-3 opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                      <motion.div
                        className="flex-1"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Button 
                          size="sm"
                          className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white rounded-full transition-all duration-300"
                          onClick={() => window.open(project.github, "_blank")}
                        >
                          <Github className="mr-2 h-4 w-4" />
                          GitHub
                        </Button>
                      </motion.div>
                      <motion.div
                        className="flex-1"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Button 
                          size="sm"
                          className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white rounded-full transition-all duration-300"
                          onClick={() => window.open(project.demo, "_blank")}
                        >
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Demo
                        </Button>
                      </motion.div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}