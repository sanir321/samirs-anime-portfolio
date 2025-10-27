import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Github, Linkedin, Instagram } from "lucide-react";
import { toast } from "sonner";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useState } from "react";

export function ContactSection() {
  const submitContact = useMutation(api.contact.submitContactForm);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    message?: string;
  }>({});
  const [touched, setTouched] = useState<{
    name?: boolean;
    email?: boolean;
    message?: boolean;
  }>({});

  const validateField = (field: string, value: string) => {
    const newErrors = { ...errors };

    if (field === "name") {
      if (!value.trim()) {
        newErrors.name = "Name is required";
      } else if (value.trim().length < 2) {
        newErrors.name = "Name must be at least 2 characters";
      } else {
        delete newErrors.name;
      }
    }

    if (field === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!value.trim()) {
        newErrors.email = "Email is required";
      } else if (!emailRegex.test(value)) {
        newErrors.email = "Please enter a valid email address";
      } else {
        delete newErrors.email;
      }
    }

    if (field === "message") {
      if (!value.trim()) {
        newErrors.message = "Message is required";
      } else if (value.trim().length < 10) {
        newErrors.message = "Message must be at least 10 characters";
      } else {
        delete newErrors.message;
      }
    }

    setErrors(newErrors);
  };

  const validateForm = (data: {
    name: string;
    email: string;
    message: string;
  }) => {
    const newErrors: typeof errors = {};

    if (!data.name.trim()) {
      newErrors.name = "Name is required";
    } else if (data.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!data.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(data.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!data.message.trim()) {
      newErrors.message = "Message is required";
    } else if (data.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleContactSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      message: formData.get("message") as string,
    };

    if (!validateForm(data)) {
      toast.error("Please fix the errors in the form");
      return;
    }

    setIsSubmitting(true);

    try {
      await submitContact(data);
      toast.success("Message sent successfully! I'll get back to you soon.");
      e.currentTarget.reset();
      setErrors({});
      setTouched({});
    } catch (error) {
      console.error("Failed to send message:", error);
      const errorMessage = error instanceof Error ? error.message : "Failed to send message. Please try again.";
      toast.error(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

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
            Get in Touch with Us
          </motion.h1>
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="border-t border-gray-300 dark:border-gray-700 mb-8 md:mb-12 w-24 mx-auto"
          />
          
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 text-left">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="space-y-6 md:space-y-8"
            >
              <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
                I'm always open to discuss exciting projects and new opportunities. Let's collaborate!
              </p>
              
              <div className="space-y-4">
                <motion.div 
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="flex items-center gap-3 sm:gap-4 text-gray-700 dark:text-gray-300 text-sm sm:text-base"
                >
                  <div className="p-2 sm:p-3 bg-gray-100 dark:bg-gray-800 rounded-lg flex-shrink-0">
                    <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <span className="break-all">zenosayz05@gmail.com</span>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  className="flex items-center gap-3 sm:gap-4 text-gray-700 dark:text-gray-300 text-sm sm:text-base"
                >
                  <div className="p-2 sm:p-3 bg-gray-100 dark:bg-gray-800 rounded-lg flex-shrink-0">
                    <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <span>7904721312</span>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  className="flex items-center gap-3 sm:gap-4 text-gray-700 dark:text-gray-300 text-sm sm:text-base"
                >
                  <div className="p-2 sm:p-3 bg-gray-100 dark:bg-gray-800 rounded-lg flex-shrink-0">
                    <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <span>India</span>
                </motion.div>
              </div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.9 }}
                className="flex gap-3 sm:gap-4 pt-4"
              >
                <motion.a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -4 }}
                  transition={{ duration: 0.2 }}
                  className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all"
                >
                  <Github className="h-4 w-4 sm:h-5 sm:w-5" />
                </motion.a>
                <motion.a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -4 }}
                  transition={{ duration: 0.2 }}
                  className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-blue-600 hover:text-white transition-all"
                >
                  <Linkedin className="h-4 w-4 sm:h-5 sm:w-5" />
                </motion.a>
                <motion.a 
                  href="https://instagram.com/kineee_2" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -4 }}
                  transition={{ duration: 0.2 }}
                  className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-pink-600 hover:text-white transition-all"
                >
                  <Instagram className="h-4 w-4 sm:h-5 sm:w-5" />
                </motion.a>
              </motion.div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Card className="bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-700 shadow-lg rounded-2xl hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6 sm:p-8">
                  <form onSubmit={handleContactSubmit} className="space-y-5 sm:space-y-6">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.6 }}
                    >
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Your Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="name"
                        type="text"
                        name="name"
                        disabled={isSubmitting}
                        onBlur={(e) => {
                          setTouched({ ...touched, name: true });
                          validateField("name", e.target.value);
                        }}
                        onChange={(e) => {
                          if (touched.name) {
                            validateField("name", e.target.value);
                          }
                        }}
                        aria-invalid={errors.name ? "true" : "false"}
                        aria-describedby={errors.name ? "name-error" : undefined}
                        className={`w-full px-4 py-3 bg-white dark:bg-gray-900 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white disabled:opacity-50 disabled:cursor-not-allowed transition-all ${
                          errors.name ? "border-red-500" : "border-gray-300 dark:border-gray-600"
                        }`}
                        placeholder="John Doe"
                      />
                      {errors.name && (
                        <p id="name-error" className="mt-1 text-sm text-red-500" role="alert">{errors.name}</p>
                      )}
                    </motion.div>
                    
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.7 }}
                    >
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Your Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        disabled={isSubmitting}
                        onBlur={(e) => {
                          setTouched({ ...touched, email: true });
                          validateField("email", e.target.value);
                        }}
                        onChange={(e) => {
                          if (touched.email) {
                            validateField("email", e.target.value);
                          }
                        }}
                        aria-invalid={errors.email ? "true" : "false"}
                        aria-describedby={errors.email ? "email-error" : undefined}
                        className={`w-full px-4 py-3 bg-white dark:bg-gray-900 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white disabled:opacity-50 disabled:cursor-not-allowed transition-all ${
                          errors.email ? "border-red-500" : "border-gray-300 dark:border-gray-600"
                        }`}
                        placeholder="john@example.com"
                      />
                      {errors.email && (
                        <p id="email-error" className="mt-1 text-sm text-red-500" role="alert">{errors.email}</p>
                      )}
                    </motion.div>
                    
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.8 }}
                    >
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Your Message <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        disabled={isSubmitting}
                        onBlur={(e) => {
                          setTouched({ ...touched, message: true });
                          validateField("message", e.target.value);
                        }}
                        onChange={(e) => {
                          if (touched.message) {
                            validateField("message", e.target.value);
                          }
                        }}
                        aria-invalid={errors.message ? "true" : "false"}
                        aria-describedby={errors.message ? "message-error" : undefined}
                        className={`w-full px-4 py-3 bg-white dark:bg-gray-900 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white resize-none disabled:opacity-50 disabled:cursor-not-allowed transition-all ${
                          errors.message ? "border-red-500" : "border-gray-300 dark:border-gray-600"
                        }`}
                        placeholder="Tell me about your project..."
                      />
                      {errors.message && (
                        <p id="message-error" className="mt-1 text-sm text-red-500" role="alert">{errors.message}</p>
                      )}
                    </motion.div>
                    
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.9 }}
                    >
                      <Button 
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-semibold py-3 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 shadow-md hover:shadow-lg"
                      >
                        {isSubmitting ? (
                          <span className="flex items-center justify-center gap-2">
                            <span className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full"></span>
                            Sending...
                          </span>
                        ) : (
                          "Send Message"
                        )}
                      </Button>
                    </motion.div>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}