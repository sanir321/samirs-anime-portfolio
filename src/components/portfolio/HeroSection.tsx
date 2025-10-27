import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MapPin, Briefcase, Download, ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 pt-20" id="home">
      <div className="max-w-7xl mx-auto w-full">
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-purple-400 mb-8"
        >
          <span className="text-2xl">. </span>Available for freelance work
        </motion.p>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              Hi, I'm <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Samir</span>
            </h1>
            
            <h3 className="text-3xl text-gray-300 mb-6">Frontend Developer</h3>
            
            <div className="text-lg text-gray-400 mb-6 space-y-2">
              <p>I create beautiful, functional, and user-centered digital experiences. With</p>
              <p>2+ years of experience in web development, I bring ideas to life through</p>
              <p>clean code and thoughtful design</p>
            </div>
            
            <div className="flex items-center gap-6 mb-8 text-gray-300">
              <p className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-purple-400" />
                Based in India
              </p>
              <p className="flex items-center gap-2">
                <Briefcase className="h-5 w-5 text-purple-400" />
                Available Now
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
              >
                <ArrowRight className="mr-2 h-4 w-4" />
                Hire Me
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-purple-500 text-purple-300 hover:bg-purple-500/10"
              >
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </Button>
            </div>
            
            <div className="border-t border-purple-500/20 pt-6">
              <p className="text-gray-400 mb-4">Follow me:</p>
              <div className="flex gap-4">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
                   className="text-gray-400 hover:text-purple-400 transition-colors">
                  <i className="fa-brands fa-github text-xl"></i>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                   className="text-gray-400 hover:text-purple-400 transition-colors">
                  <i className="fa-brands fa-linkedin text-xl"></i>
                </a>
                <a href="https://instagram.com/kineee_2" target="_blank" rel="noopener noreferrer"
                   className="text-gray-400 hover:text-purple-400 transition-colors">
                  <i className="fa-brands fa-instagram text-xl"></i>
                </a>
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
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl blur-3xl opacity-30"></div>
              <img 
                src="https://harmless-tapir-303.convex.cloud/api/storage/1362a634-b964-45f0-985d-709e7815c1ff"
                alt="Samir Khadka"
                className="relative rounded-3xl border-4 border-purple-500/50 shadow-2xl w-full"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
