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
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-500 text-sm uppercase tracking-wider mb-4"
          >
            ABOUT ME
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-4xl md:text-5xl font-bold mb-2 font-['Open_Sans']"
          >
            Building Meaningful
          </motion.h1>
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-4xl md:text-5xl font-bold mb-8 font-['Open_Sans']"
          >
            Digital Experiences
          </motion.h1>
          
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="border-t border-gray-300 mb-12 w-1/3 origin-left"
          />
          
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-gray-600 text-base leading-relaxed"
              >
                I'm a creative front-end developer passionate about building modern and responsive web experiences.
                My journey began with a love for design and evolved into a deep curiosity for how the web works — combining
                logic with creativity to bring ideas to life.
              </motion.p>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="text-gray-600 text-base leading-relaxed"
              >
                When I'm not coding, I enjoy learning new technologies, improving my projects,
                and exploring better ways to make the web faster and more engaging.
                I believe in continuous learning, attention to detail, and the power of clean, meaningful design.
              </motion.p>
              
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="text-2xl font-bold mt-8 mb-6"
              >
                What Drives Me
              </motion.h2>
              
              <div className="space-y-4">
                <motion.div 
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.9 }}
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
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 1.0 }}
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
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 1.1 }}
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
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex justify-center"
            >
              <img 
                src="https://harmless-tapir-303.convex.cloud/api/storage/34a187ae-7bb7-444c-b9dc-a9e98c854629"
                alt="Profile"
                className="rounded-2xl border border-black shadow-lg w-full max-w-md"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}