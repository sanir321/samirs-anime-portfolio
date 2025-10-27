import { motion, useScroll, useTransform } from "framer-motion";
import { Code2, GraduationCap, FolderOpen } from "lucide-react";
import { useRef } from "react";

export function AboutSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const yImage = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);

  return (
    <section ref={ref} className="py-12 sm:py-14 md:py-16 px-8 sm:px-12 md:px-16 bg-white dark:bg-gray-900 relative overflow-hidden" id="about">
      {/* Parallax background shapes */}
      <motion.div
        className="absolute top-10 right-10 w-40 h-40 bg-blue-100 rounded-full opacity-30 blur-2xl"
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, -200]) }}
      />
      <motion.div
        className="absolute bottom-20 left-10 w-32 h-32 bg-purple-100 rounded-full opacity-30 blur-2xl"
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, 200]) }}
      />

      <div className="max-w-6xl mx-auto">
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
            className="text-gray-500 dark:text-gray-400 text-sm uppercase tracking-wider mb-4"
          >
            ABOUT ME
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 font-['Open_Sans'] text-gray-900 dark:text-white"
          >
            Building Meaningful
          </motion.h1>
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 font-['Open_Sans'] text-gray-900 dark:text-white"
          >
            Digital Experiences
          </motion.h1>
          
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="border-t border-gray-300 dark:border-gray-700 mb-12 w-24 sm:w-32 md:w-1/3 origin-left"
          />
          
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
            <div className="space-y-6">
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-gray-600 dark:text-gray-400 text-base leading-relaxed"
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
                className="text-gray-600 dark:text-gray-400 text-base leading-relaxed"
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
                className="text-2xl font-bold mt-8 mb-6 text-gray-900 dark:text-white"
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
                  className="bg-white dark:bg-gray-800 border-2 border-black dark:border-gray-600 rounded-lg p-6 transition-all hover:border-red-500 dark:hover:border-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 hover:shadow-lg cursor-pointer"
                >
                  <h3 className="text-xl font-bold mb-2 flex items-center gap-2 text-gray-900 dark:text-white">
                    <Code2 className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                    Languages
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">HTML, CSS, JavaScript, TypeScript, React</p>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 1.0 }}
                  whileHover={{ y: -6, scale: 1.03 }}
                  className="bg-white dark:bg-gray-800 border-2 border-black dark:border-gray-600 rounded-lg p-6 transition-all hover:border-red-500 dark:hover:border-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 hover:shadow-lg cursor-pointer"
                >
                  <h3 className="text-xl font-bold mb-2 flex items-center gap-2 text-gray-900 dark:text-white">
                    <GraduationCap className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                    Education
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">B.Tech CSBS (Computer Science and Business System) at SA Engineering College, Chennai, Tamil Nadu, India</p>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 1.1 }}
                  whileHover={{ y: -6, scale: 1.03 }}
                  className="bg-white dark:bg-gray-800 border-2 border-black dark:border-gray-600 rounded-lg p-6 transition-all hover:border-red-500 dark:hover:border-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 hover:shadow-lg cursor-pointer"
                >
                  <h3 className="text-xl font-bold mb-2 flex items-center gap-2 text-gray-900 dark:text-white">
                    <FolderOpen className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                    Projects
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">Built more than 5 projects</p>
                </motion.div>
              </div>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              style={{ y: yImage, scale }}
              className="flex justify-center relative"
            >
              <motion.img 
                src="https://harmless-tapir-303.convex.cloud/api/storage/34a187ae-7bb7-444c-b9dc-a9e98c854629"
                alt="Samir Khadka - B.Tech CSBS student at SA Engineering College, passionate about web development"
                loading="lazy"
                className="rounded-2xl border border-black shadow-lg w-full max-w-md"
                style={{ willChange: 'transform' }}
                whileHover={{
                  scale: 1.05,
                  rotate: -2,
                }}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 10,
                }}
              />
              
              {/* Floating sparkles around the image */}
              <motion.div
                className="absolute top-10 right-10 w-3 h-3 bg-yellow-400 rounded-full"
                animate={{
                  scale: [0, 1, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: 0,
                }}
              />
              <motion.div
                className="absolute bottom-20 left-10 w-2 h-2 bg-blue-400 rounded-full"
                animate={{
                  scale: [0, 1, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: 0.5,
                }}
              />
              <motion.div
                className="absolute top-1/2 right-5 w-2 h-2 bg-pink-400 rounded-full"
                animate={{
                  scale: [0, 1, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: 1,
                }}
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}