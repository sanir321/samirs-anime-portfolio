import { motion } from "framer-motion";
import { Code2, GraduationCap, FolderOpen } from "lucide-react";

export function AboutSection() {
  return (
    <section className="py-20 px-4" id="about">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-purple-400 text-sm uppercase tracking-wider mb-4">ABOUT ME</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-2">Building Meaningful</h1>
          <h1 className="text-4xl md:text-5xl font-bold mb-8">Digital Experiences</h1>
          
          <div className="border-t border-purple-500/20 mb-12"></div>
          
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <p className="text-gray-300 text-lg leading-relaxed">
                I'm a creative front-end developer passionate about building modern and responsive web experiences.
                My journey began with a love for design and evolved into a deep curiosity for how the web works — combining
                logic with creativity to bring ideas to life.
              </p>
              
              <p className="text-gray-300 text-lg leading-relaxed">
                When I'm not coding, I enjoy learning new technologies, improving my projects,
                and exploring better ways to make the web faster and more engaging.
                I believe in continuous learning, attention to detail, and the power of clean, meaningful design.
              </p>
              
              <h2 className="text-2xl font-bold mt-8 mb-6">What Drives Me</h2>
              
              <div className="space-y-4">
                <div className="bg-slate-800/50 border border-purple-500/20 rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                    <Code2 className="h-5 w-5 text-purple-400" />
                    Languages
                  </h3>
                  <p className="text-gray-400">HTML, CSS, JavaScript, TypeScript, React</p>
                </div>
                
                <div className="bg-slate-800/50 border border-purple-500/20 rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                    <GraduationCap className="h-5 w-5 text-purple-400" />
                    Education
                  </h3>
                  <p className="text-gray-400">B.Tech CSE at SA Engineering College</p>
                </div>
                
                <div className="bg-slate-800/50 border border-purple-500/20 rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                    <FolderOpen className="h-5 w-5 text-purple-400" />
                    Projects
                  </h3>
                  <p className="text-gray-400">Built more than 5 projects</p>
                </div>
              </div>
            </div>
            
            <div>
              <img 
                src="https://harmless-tapir-303.convex.cloud/api/storage/9451c778-2fce-485e-b5e7-3fae877ef251"
                alt="Profile"
                className="rounded-2xl border-4 border-purple-500/50 shadow-2xl w-full"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
