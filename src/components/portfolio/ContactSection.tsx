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
    <section className="py-20 px-4 bg-slate-900/50" id="contact">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-purple-400 text-sm uppercase tracking-wider mb-4">CONTACT</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-12">Get in Touch with Us</h1>
          
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <p className="text-gray-300 text-lg">
                I'm always open to discuss exciting projects and new opportunities. Let's collaborate!
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-gray-300">
                  <div className="p-3 bg-purple-500/10 rounded-lg">
                    <Mail className="h-5 w-5 text-purple-400" />
                  </div>
                  <span>zenosayz05@gmail.com</span>
                </div>
                
                <div className="flex items-center gap-4 text-gray-300">
                  <div className="p-3 bg-purple-500/10 rounded-lg">
                    <Phone className="h-5 w-5 text-purple-400" />
                  </div>
                  <span>7904721312</span>
                </div>
                
                <div className="flex items-center gap-4 text-gray-300">
                  <div className="p-3 bg-purple-500/10 rounded-lg">
                    <MapPin className="h-5 w-5 text-purple-400" />
                  </div>
                  <span>India</span>
                </div>
              </div>
              
              <div className="flex gap-4 pt-4">
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 bg-slate-800 rounded-lg hover:bg-purple-500/20 transition-colors"
                >
                  <Github className="h-6 w-6 text-purple-400" />
                </a>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 bg-slate-800 rounded-lg hover:bg-purple-500/20 transition-colors"
                >
                  <Linkedin className="h-6 w-6 text-purple-400" />
                </a>
                <a 
                  href="https://instagram.com/kineee_2" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 bg-slate-800 rounded-lg hover:bg-purple-500/20 transition-colors"
                >
                  <Instagram className="h-6 w-6 text-purple-400" />
                </a>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="bg-slate-800/50 border-purple-500/20">
                <CardContent className="p-8">
                  <form onSubmit={handleContactSubmit} className="space-y-6">
                    <div>
                      <input
                        type="text"
                        name="name"
                        required
                        className="w-full px-4 py-3 bg-slate-900 border border-purple-500/30 rounded-lg focus:outline-none focus:border-purple-500 text-white"
                        placeholder="Your Name"
                      />
                    </div>
                    
                    <div>
                      <input
                        type="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 bg-slate-900 border border-purple-500/30 rounded-lg focus:outline-none focus:border-purple-500 text-white"
                        placeholder="Your Email"
                      />
                    </div>
                    
                    <div>
                      <textarea
                        name="message"
                        required
                        rows={5}
                        className="w-full px-4 py-3 bg-slate-900 border border-purple-500/30 rounded-lg focus:outline-none focus:border-purple-500 text-white resize-none"
                        placeholder="Your Message"
                      />
                    </div>
                    
                    <Button 
                      type="submit"
                      className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
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
