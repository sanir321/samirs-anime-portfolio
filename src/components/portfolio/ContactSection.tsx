import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Github, Linkedin, Instagram, MessageCircle } from "lucide-react";

export function ContactSection() {
  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 bg-gray-50 dark:bg-gray-800" id="contact">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-500 dark:text-gray-400 text-sm uppercase tracking-wider mb-4"
          >
            CONTACT
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 md:mb-12 font-['Open_Sans'] dark:text-white"
          >
            Get in Touch with Me
          </motion.h1>
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="border-t border-gray-300 dark:border-gray-700 mb-8 md:mb-12 w-24 mx-auto"
          />
          
          <div className="max-w-3xl mx-auto">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-gray-600 dark:text-gray-300 text-base sm:text-lg mb-12"
            >
              I'm always open to discuss exciting projects and new opportunities. Feel free to reach out through any of these channels!
            </motion.p>
            
            <div className="grid sm:grid-cols-2 gap-6 mb-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <Card className="bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-700 shadow-lg rounded-2xl hover:shadow-xl hover:border-blue-400 dark:hover:border-blue-500 transition-all duration-300 h-full">
                  <CardContent className="p-6 text-center">
                    <div className="p-4 bg-blue-100 dark:bg-blue-900/30 rounded-full inline-flex mb-4">
                      <Mail className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Email</h3>
                    <a 
                      href="mailto:zenosayz05@gmail.com"
                      className="text-blue-600 dark:text-blue-400 hover:underline break-all"
                    >
                      zenosayz05@gmail.com
                    </a>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                <Card className="bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-700 shadow-lg rounded-2xl hover:shadow-xl hover:border-blue-400 dark:hover:border-blue-500 transition-all duration-300 h-full">
                  <CardContent className="p-6 text-center">
                    <div className="p-4 bg-green-100 dark:bg-green-900/30 rounded-full inline-flex mb-4">
                      <Phone className="h-8 w-8 text-green-600 dark:text-green-400" />
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Phone</h3>
                    <a 
                      href="tel:7904721312"
                      className="text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      7904721312
                    </a>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <Card className="bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-700 shadow-lg rounded-2xl hover:shadow-xl hover:border-pink-400 dark:hover:border-pink-500 transition-all duration-300 h-full">
                  <CardContent className="p-6 text-center">
                    <div className="p-4 bg-pink-100 dark:bg-pink-900/30 rounded-full inline-flex mb-4">
                      <Instagram className="h-8 w-8 text-pink-600 dark:text-pink-400" />
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Instagram</h3>
                    <a 
                      href="https://ig.me/m/kineee_2"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      <MessageCircle className="h-4 w-4" />
                      Send me a DM
                    </a>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.9 }}
              >
                <Card className="bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-700 shadow-lg rounded-2xl hover:shadow-xl hover:border-blue-400 dark:hover:border-blue-500 transition-all duration-300 h-full">
                  <CardContent className="p-6 text-center">
                    <div className="p-4 bg-purple-100 dark:bg-purple-900/30 rounded-full inline-flex mb-4">
                      <MapPin className="h-8 w-8 text-purple-600 dark:text-purple-400" />
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Location</h3>
                    <p className="text-gray-600 dark:text-gray-400">India</p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 1.0 }}
              className="flex justify-center gap-4 pt-4"
            >
              <motion.a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -4 }}
                transition={{ duration: 0.2 }}
              >
                <Button
                  size="lg"
                  className="bg-gray-900 hover:bg-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600 text-white rounded-full"
                >
                  <Github className="h-5 w-5 mr-2" />
                  GitHub
                </Button>
              </motion.a>
              <motion.a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -4 }}
                transition={{ duration: 0.2 }}
              >
                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white rounded-full"
                >
                  <Linkedin className="h-5 w-5 mr-2" />
                  LinkedIn
                </Button>
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}