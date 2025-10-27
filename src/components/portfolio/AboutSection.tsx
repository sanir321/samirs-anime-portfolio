import { motion } from "framer-motion";
import { Code2, GraduationCap, FolderOpen } from "lucide-react";

export function AboutSection() {
  return (
    <section className="py-20 px-4 bg-white" id="about">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-gray-500 text-sm uppercase tracking-wider mb-4">ABOUT ME</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-2 font-['Open_Sans']">Building Meaningful</h1>
          <h1 className="text-4xl md:text-5xl font-bold mb-8 font-['Open_Sans']">Digital Experiences</h1>
          
          <div className="border-t border-gray-300 mb-12 w-1/3"></div>
          
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <p className="text-gray-600 text-base leading-relaxed">
                I'm a creative front-end developer passionate about building modern and responsive web experiences.
                My journey began with a love for design and evolved into a deep curiosity for how the web works — combining
                logic with creativity to bring ideas to life.
              </p>
              
              <p className="text-gray-600 text-base leading-relaxed">
                When I'm not coding, I enjoy learning new technologies, improving my projects,
                and exploring better ways to make the web faster and more engaging.
                I believe in continuous learning, attention to detail, and the power of clean, meaningful design.
              </p>
              
              <h2 className="text-2xl font-bold mt-8 mb-6">What Drives Me</h2>
              
              <div className="space-y-4">
                <motion.div 
                  whileHover={{ y: -6, scale: 1.03 }}
                  className="bg-white border-2 border-black rounded-lg p-6 transition-all hover:border-red-500 hover:bg-red-50 hover:shadow-lg cursor-pointer"
                >
                  <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                    <Code2 className="h-5 w-5 text-blue-600" />
                    Languages
                  </h3>
                  <p className="text-gray-600">HTML, CSS, JavaScript, TypeScript, React</p>
                </motion.div>
                
                <motion.div 
                  whileHover={{ y: -6, scale: 1.03 }}
                  className="bg-white border-2 border-black rounded-lg p-6 transition-all hover:border-red-500 hover:bg-red-50 hover:shadow-lg cursor-pointer"
                >
                  <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                    <GraduationCap className="h-5 w-5 text-blue-600" />
                    Education
                  </h3>
                  <p className="text-gray-600">B.Tech CSE at SA Engineering College</p>
                </motion.div>
                
                <motion.div 
                  whileHover={{ y: -6, scale: 1.03 }}
                  className="bg-white border-2 border-black rounded-lg p-6 transition-all hover:border-red-500 hover:bg-red-50 hover:shadow-lg cursor-pointer"
                >
                  <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                    <FolderOpen className="h-5 w-5 text-blue-600" />
                    Projects
                  </h3>
                  <p className="text-gray-600">Built more than 5 projects</p>
                </motion.div>
              </div>
            </div>
            
            <div className="flex justify-center">
              <img 
                src="https://harmless-tapir-303.convex.cloud/api/storage/9451c778-2fce-485e-b5e7-3fae877ef251"
                alt="Profile"
                className="rounded-2xl border border-black shadow-lg w-full max-w-md"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}