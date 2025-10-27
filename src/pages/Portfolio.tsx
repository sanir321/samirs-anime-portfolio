import { motion } from "framer-motion";
import { useNavigate } from "react-router";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Github, 
  Linkedin, 
  Instagram, 
  Mail, 
  Phone, 
  MapPin, 
  Download,
  ExternalLink,
  Code2,
  Palette,
  Smartphone,
  MessageSquare,
  ChevronDown,
  ArrowUp
} from "lucide-react";
import { useState, useEffect } from "react";
import { toast } from "sonner";

export default function Portfolio() {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState("home");
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [typedText, setTypedText] = useState("");
  const titles = ["B.Tech CSE Student", "Web Developer", "UI/UX Enthusiast", "Anime Lover"];
  const [titleIndex, setTitleIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
      
      const sections = ["home", "about", "projects", "services", "contact"];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    let currentText = "";
    let charIndex = 0;
    const currentTitle = titles[titleIndex];
    
    const typeInterval = setInterval(() => {
      if (charIndex < currentTitle.length) {
        currentText += currentTitle[charIndex];
        setTypedText(currentText);
        charIndex++;
      } else {
        clearInterval(typeInterval);
        setTimeout(() => {
          setTitleIndex((prev) => (prev + 1) % titles.length);
        }, 2000);
      }
    }, 100);

    return () => clearInterval(typeInterval);
  }, [titleIndex]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const handleContactSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    };
    console.log("Contact form submitted:", data);
    toast.success("Message sent successfully! I'll get back to you soon.");
    e.currentTarget.reset();
  };

  const projects = [
    {
      title: "Anime Streaming Platform",
      description: "A modern anime streaming platform with user authentication, watchlists, and real-time updates. Built with React and Convex.",
      image: "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=800&q=80",
      tags: ["React", "TypeScript", "Convex", "Tailwind"],
      demo: "#",
      github: "#",
      metrics: "10K+ users"
    },
    {
      title: "Portfolio Website",
      description: "Personal portfolio showcasing projects and skills with anime-inspired design and smooth animations.",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80",
      tags: ["React", "Framer Motion", "Tailwind"],
      demo: "#",
      github: "#",
      metrics: "98% performance score"
    },
    {
      title: "Task Management App",
      description: "Collaborative task management application with real-time updates and team features.",
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80",
      tags: ["React", "Node.js", "MongoDB"],
      demo: "#",
      github: "#",
      metrics: "500+ active users"
    }
  ];

  const skills = [
    { name: "HTML/CSS", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "TypeScript", level: 80 },
    { name: "React", level: 85 },
    { name: "Node.js", level: 75 },
    { name: "Tailwind CSS", level: 90 },
    { name: "Git/GitHub", level: 80 },
    { name: "UI/UX Design", level: 75 }
  ];

  const services = [
    {
      icon: <Code2 className="h-8 w-8" />,
      title: "Web Development",
      description: "Building responsive and performant web applications using modern technologies and best practices."
    },
    {
      icon: <Palette className="h-8 w-8" />,
      title: "UI/UX Design",
      description: "Creating beautiful and intuitive user interfaces with attention to detail and user experience."
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Responsive Design",
      description: "Ensuring your website looks perfect on all devices, from mobile phones to desktop computers."
    },
    {
      icon: <MessageSquare className="h-8 w-8" />,
      title: "Technical Consulting",
      description: "Providing expert advice on technology choices, architecture, and best practices for your projects."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 text-white">
      {/* Navigation */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-lg border-b border-purple-500/20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent cursor-pointer"
              onClick={() => scrollToSection("home")}
            >
              Samir.dev
            </motion.div>
            
            <div className="hidden md:flex items-center gap-8">
              {["home", "about", "projects", "services", "contact"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-colors ${
                    activeSection === section 
                      ? "text-purple-400" 
                      : "text-gray-300 hover:text-purple-400"
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-16 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge className="mb-4 bg-purple-500/20 text-purple-300 border-purple-500/50">
              Available for freelance work
            </Badge>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              Hi, I'm <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Samir</span>
            </h1>
            
            <div className="text-2xl md:text-3xl text-gray-300 mb-6 h-12">
              {typedText}<span className="animate-pulse">|</span>
            </div>
            
            <p className="text-lg text-gray-400 mb-8 max-w-xl">
              I create beautiful, functional, and user-centered digital experiences. 
              Currently pursuing B.Tech in Computer Science at SA Engineering College, 
              bringing ideas to life through clean code and thoughtful design.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
                onClick={() => scrollToSection("projects")}
              >
                View Projects
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-purple-500 text-purple-300 hover:bg-purple-500/10"
                onClick={() => scrollToSection("contact")}
              >
                Contact Me
              </Button>
            </div>
            
            <div className="flex items-center gap-4">
              <span className="text-gray-400">Follow me:</span>
              <div className="flex gap-3">
                <motion.a
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-slate-800 rounded-lg hover:bg-purple-500/20 transition-colors"
                >
                  <Github className="h-5 w-5" />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-slate-800 rounded-lg hover:bg-purple-500/20 transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  href="https://instagram.com/kineee_2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-slate-800 rounded-lg hover:bg-purple-500/20 transition-colors"
                >
                  <Instagram className="h-5 w-5" />
                </motion.a>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative w-full max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl blur-3xl opacity-30 animate-pulse"></div>
              <img 
                src="https://harmless-tapir-303.convex.cloud/api/storage/1362a634-b964-45f0-985d-709e7815c1ff"
                alt="Samir Khadka"
                className="relative rounded-3xl border-4 border-purple-500/50 shadow-2xl w-full"
              />
            </div>
          </motion.div>
        </div>
        
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
          onClick={() => scrollToSection("about")}
        >
          <ChevronDown className="h-8 w-8 text-purple-400" />
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
              About <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Me</span>
            </h2>
            <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
              Passionate developer with a love for creating amazing digital experiences
            </p>
            
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <img 
                  src="https://harmless-tapir-303.convex.cloud/api/storage/9451c778-2fce-485e-b5e7-3fae877ef251"
                  alt="Profile"
                  className="rounded-2xl border-4 border-purple-500/50 shadow-2xl"
                />
              </div>
              
              <div className="space-y-6">
                <p className="text-gray-300 text-lg leading-relaxed">
                  Hello! I'm Samir Khadka, a passionate B.Tech Computer Science student at SA Engineering College. 
                  I specialize in creating beautiful and functional web applications that provide excellent user experiences.
                </p>
                
                <p className="text-gray-300 text-lg leading-relaxed">
                  My journey in web development started with a curiosity about how websites work, and it has evolved 
                  into a passion for creating digital solutions that make a difference. I love combining my technical 
                  skills with creative design to build projects that are both functional and visually appealing.
                </p>
                
                <div className="flex flex-wrap gap-4 pt-4">
                  <div className="flex items-center gap-2 text-gray-300">
                    <MapPin className="h-5 w-5 text-purple-400" />
                    <span>India</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-300">
                    <Mail className="h-5 w-5 text-purple-400" />
                    <span>zenosayz05@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-300">
                    <Phone className="h-5 w-5 text-purple-400" />
                    <span>7904721312</span>
                  </div>
                </div>
                
                <Button 
                  className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download CV
                </Button>
              </div>
            </div>
            
            {/* Skills */}
            <div className="mt-16">
              <h3 className="text-3xl font-bold text-center mb-12">My Skills</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-purple-400">{skill.level}%</span>
                    </div>
                    <div className="h-3 bg-slate-800 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
              Featured <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Projects</span>
            </h2>
            <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
              Here are some of my recent projects that showcase my skills and passion
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                >
                  <Card className="bg-slate-800/50 border-purple-500/20 overflow-hidden group hover:border-purple-500/50 transition-all duration-300">
                    <div className="relative overflow-hidden">
                      <img 
                        src={project.image}
                        alt={project.title}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-purple-500/80 text-white">
                          {project.metrics}
                        </Badge>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
                      <p className="text-gray-400 mb-4">{project.description}</p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map(tag => (
                          <Badge key={tag} variant="outline" className="border-purple-500/50 text-purple-300">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      
                      <div className="flex gap-3">
                        <Button 
                          size="sm"
                          className="flex-1 bg-purple-500 hover:bg-purple-600"
                          onClick={() => window.open(project.demo, "_blank")}
                        >
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Demo
                        </Button>
                        <Button 
                          size="sm"
                          variant="outline"
                          className="flex-1 border-purple-500 text-purple-300 hover:bg-purple-500/10"
                          onClick={() => window.open(project.github, "_blank")}
                        >
                          <Github className="mr-2 h-4 w-4" />
                          Code
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

      {/* Services Section */}
      <section id="services" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
              My <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
              What I can do for you
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="bg-slate-800/50 border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 h-full group">
                    <CardContent className="p-6 text-center">
                      <div className="inline-flex p-4 bg-purple-500/10 rounded-2xl mb-4 text-purple-400 group-hover:bg-purple-500/20 transition-colors">
                        {service.icon}
                      </div>
                      <h3 className="text-xl font-bold mb-3 text-white">{service.title}</h3>
                      <p className="text-gray-400">{service.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-slate-900/50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
              Get In <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Touch</span>
            </h2>
            <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
              Have a project in mind? Let's work together!
            </p>
            
            <Card className="bg-slate-800/50 border-purple-500/20">
              <CardContent className="p-8">
                <form onSubmit={handleContactSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2 text-gray-300">Name</label>
                      <input
                        type="text"
                        name="name"
                        required
                        className="w-full px-4 py-3 bg-slate-900 border border-purple-500/30 rounded-lg focus:outline-none focus:border-purple-500 text-white"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-gray-300">Email</label>
                      <input
                        type="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 bg-slate-900 border border-purple-500/30 rounded-lg focus:outline-none focus:border-purple-500 text-white"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-300">Subject</label>
                    <input
                      type="text"
                      name="subject"
                      required
                      className="w-full px-4 py-3 bg-slate-900 border border-purple-500/30 rounded-lg focus:outline-none focus:border-purple-500 text-white"
                      placeholder="Project inquiry"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-300">Message</label>
                    <textarea
                      name="message"
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-slate-900 border border-purple-500/30 rounded-lg focus:outline-none focus:border-purple-500 text-white resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </div>
                  
                  <Button 
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-purple-500/20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-gray-400">
              © 2024 Samir Khadka. All rights reserved.
            </div>
            
            <div className="flex gap-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://instagram.com/kineee_2" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      {showBackToTop && (
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          onClick={() => scrollToSection("home")}
          className="fixed bottom-8 right-8 p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full shadow-lg hover:shadow-purple-500/50 transition-shadow z-50"
        >
          <ArrowUp className="h-6 w-6" />
        </motion.button>
      )}
    </div>
  );
}
