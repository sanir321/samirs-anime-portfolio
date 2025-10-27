import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Github, Linkedin, Instagram } from "lucide-react";
import { toast } from "sonner";

export function ContactSection() {
  const handleContactSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };
    console.log("Contact form submitted:", data);
    toast.success("Message sent successfully! I'll get back to you soon.");
    e.currentTarget.reset();
  };

  return (
    <section className="py-20 px-4 bg-gray-50" id="contact">
      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-gray-500 text-sm uppercase tracking-wider mb-4">CONTACT</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-12 font-['Open_Sans']">Get in Touch with Us</h1>
          <div className="border-t border-gray-300 mb-12 w-24 mx-auto"></div>
          
          <div className="grid md:grid-cols-2 gap-12 text-left">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <p className="text-gray-600 text-base">
                I'm always open to discuss exciting projects and new opportunities. Let's collaborate!
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-gray-700">
                  <div className="p-3 bg-gray-100 rounded-lg">
                    <Mail className="h-5 w-5 text-blue-600" />
                  </div>
                  <span>zenosayz05@gmail.com</span>
                </div>
                
                <div className="flex items-center gap-4 text-gray-700">
                  <div className="p-3 bg-gray-100 rounded-lg">
                    <Phone className="h-5 w-5 text-blue-600" />
                  </div>
                  <span>7904721312</span>
                </div>
                
                <div className="flex items-center gap-4 text-gray-700">
                  <div className="p-3 bg-gray-100 rounded-lg">
                    <MapPin className="h-5 w-5 text-blue-600" />
                  </div>
                  <span>India</span>
                </div>
              </div>
              
              <div className="flex gap-4 pt-4">
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center bg-gray-100 rounded-full hover:bg-black hover:text-white transition-all hover:-translate-y-1"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center bg-gray-100 rounded-full hover:bg-blue-600 hover:text-white transition-all hover:-translate-y-1"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a 
                  href="https://instagram.com/kineee_2" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center bg-gray-100 rounded-full hover:bg-pink-600 hover:text-white transition-all hover:-translate-y-1"
                >
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white border border-gray-200 shadow-md rounded-2xl">
                <CardContent className="p-8">
                  <form onSubmit={handleContactSubmit} className="space-y-6">
                    <div>
                      <input
                        type="text"
                        name="name"
                        required
                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 text-gray-900"
                        placeholder="Your Name"
                      />
                    </div>
                    
                    <div>
                      <input
                        type="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 text-gray-900"
                        placeholder="Your Email"
                      />
                    </div>
                    
                    <div>
                      <textarea
                        name="message"
                        required
                        rows={5}
                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 text-gray-900 resize-none"
                        placeholder="Your Message"
                      />
                    </div>
                    
                    <Button 
                      type="submit"
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-lg"
                    >
                      Send Message
                    </Button>
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