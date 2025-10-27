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
    demo: "#",
    github: "#"
  },
  {
    title: "Portfolio Website",
    description: "Personal portfolio to showcase my design and coding projects.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80",
    tags: ["HTML", "CSS", "Bootstrap"],
    demo: "#",
    github: "#"
  },
  {
    title: "Weather App",
    description: "Responsive app showing real-time weather data using API integration.",
    image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&q=80",
    tags: ["HTML", "CSS", "API"],
    demo: "#",
    github: "#"
  },
  {
    title: "Blog Website",
    description: "Clean and simple blogging platform with markdown support.",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&q=80",
    tags: ["HTML", "Tailwind", "JavaScript"],
    demo: "#",
    github: "#"
  },
  {
    title: "Game Landing Page",
    description: "Landing page for a game with animations and parallax effects.",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&q=80",
    tags: ["HTML", "CSS", "GSAP"],
    demo: "#",
    github: "#"
  },
  {
    title: "Task Manager",
    description: "Task tracking web app with CRUD features and clean UI.",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80",
    tags: ["HTML", "CSS", "JS"],
    demo: "#",
    github: "#"
  }
];

export function ProjectsSection() {
  return (
    <section className="py-20 px-4 bg-gray-50" id="project">
      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-gray-500 text-sm uppercase tracking-wider mb-4">PROJECTS</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-8 font-['Open_Sans']">Featured Work</h1>
          <div className="border-t border-gray-300 mb-8 w-24 mx-auto"></div>
          
          <div className="text-gray-600 mb-12 space-y-1">
            <p>A showcase of my recent projects demonstrating expertise in full-stack</p>
            <p>development, modern frameworks, and creative problem-solving.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -6 }}
              >
                <Card className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all h-full flex flex-col">
                  <div className="relative overflow-hidden">
                    <img 
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover"
                    />
                  </div>
                  <CardContent className="p-6 flex-1 flex flex-col text-left">
                    <h3 className="text-xl font-bold mb-2 text-blue-600">{project.title}</h3>
                    <p className="text-gray-600 text-sm mb-4 flex-1">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map(tag => (
                        <Badge key={tag} className="bg-blue-100 text-blue-800 hover:bg-blue-200 border-0">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex gap-3">
                      <Button 
                        size="sm"
                        className="flex-1 bg-blue-600 hover:bg-blue-700 text-white rounded-full"
                        onClick={() => window.open(project.github, "_blank")}
                      >
                        <Github className="mr-2 h-4 w-4" />
                        GitHub
                      </Button>
                      <Button 
                        size="sm"
                        className="flex-1 bg-blue-600 hover:bg-blue-700 text-white rounded-full"
                        onClick={() => window.open(project.demo, "_blank")}
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Demo
                      </Button>
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