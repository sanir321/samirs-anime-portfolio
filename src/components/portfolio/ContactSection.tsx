import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Github, Linkedin, Instagram, MessageCircle } from "lucide-react";

export function ContactSection() {
  return (
    <section className="py-8 sm:py-10 md:py-12 px-8 sm:px-12 md:px-16 bg-gray-50 dark:bg-gray-800" id="contact">
      <div className="max-w-3xl mx-auto">
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
            className="text-gray-500 dark:text-gray-400 text-xs uppercase tracking-wider mb-2"
          >
            CONTACT
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-xl sm:text-2xl font-bold mb-3 font-['Open_Sans'] dark:text-white"
          >
            Get in Touch
          </motion.h1>
          
          <div className="max-w-2xl mx-auto">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm mb-4"
            >
              Feel free to reach out through any of these channels
            </motion.p>
            
            <div className="grid sm:grid-cols-2 gap-3 mb-4">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <Card className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-blue-400 dark:hover:border-blue-500 transition-all duration-300 h-full">
                  <CardContent className="p-3 text-center">
                    <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-full inline-flex mb-2">
                      <Mail className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <h3 className="text-sm font-bold mb-1 text-gray-900 dark:text-white">Email</h3>
                    <a 
                      href="mailto:zenosayz05@gmail.com"
                      className="text-xs text-blue-600 dark:text-blue-400 hover:underline break-all"
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
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <Card className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-blue-400 dark:hover:border-blue-500 transition-all duration-300 h-full">
                  <CardContent className="p-4 text-center">
                    <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-full inline-flex mb-2">
                      <Phone className="h-5 w-5 text-green-600 dark:text-green-400" />
                    </div>
                    <h3 className="text-sm font-bold mb-1 text-gray-900 dark:text-white">Phone</h3>
                    <a 
                      href="tel:7904721312"
                      className="text-xs text-blue-600 dark:text-blue-400 hover:underline"
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
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                <Card className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-pink-400 dark:hover:border-pink-500 transition-all duration-300 h-full">
                  <CardContent className="p-4 text-center">
                    <div className="p-2 bg-pink-100 dark:bg-pink-900/30 rounded-full inline-flex mb-2">
                      <Instagram className="h-5 w-5 text-pink-600 dark:text-pink-400" />
                    </div>
                    <h3 className="text-sm font-bold mb-1 text-gray-900 dark:text-white">Instagram</h3>
                    <a 
                      href="https://ig.me/m/kineee_2"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      <MessageCircle className="h-3 w-3" />
                      Send DM
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
                <Card className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-blue-400 dark:hover:border-blue-500 transition-all duration-300 h-full">
                  <CardContent className="p-4 text-center">
                    <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-full inline-flex mb-2">
                      <MapPin className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                    </div>
                    <h3 className="text-sm font-bold mb-1 text-gray-900 dark:text-white">Location</h3>
                    <p className="text-xs text-gray-600 dark:text-gray-400">India</p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="flex justify-center gap-3 pt-1"
            >
              {/* TODO: Replace with your actual GitHub profile URL */}
              <motion.a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                transition={{ duration: 0.2 }}
              >
                <Button
                  size="sm"
                  className="bg-gray-900 hover:bg-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600 text-white rounded-full text-xs px-4 py-2"
                >
                  <Github className="h-4 w-4 mr-1" />
                  GitHub
                </Button>
              </motion.a>
              {/* TODO: Replace with your actual LinkedIn profile URL */}
              <motion.a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                transition={{ duration: 0.2 }}
              >
                <Button
                  size="sm"
                  className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white rounded-full text-xs px-4 py-2"
                >
                  <Linkedin className="h-4 w-4 mr-1" />
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