import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Code2, Smartphone, Mail, TrendingUp } from "lucide-react";

const services = [
  {
    icon: <Code2 className="h-16 w-16" />,
    title: "Web Development",
    description: "Building responsive and performant web applications using modern technologies and best practices.",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    icon: <Smartphone className="h-16 w-16" />,
    title: "App Development",
    description: "Creating mobile-first applications with seamless user experiences across all devices.",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    icon: <TrendingUp className="h-16 w-16" />,
    title: "Digital Marketing",
    description: "Helping businesses grow their online presence through strategic digital marketing solutions.",
    gradient: "from-orange-500 to-red-500"
  },
  {
    icon: <Mail className="h-16 w-16" />,
    title: "Email Marketing",
    description: "Designing and implementing effective email campaigns to engage and convert your audience.",
    gradient: "from-green-500 to-emerald-500"
  }
];

export function ServicesSection() {
  return (
    <section className="py-20 px-4 bg-white" id="services">
      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-500 text-sm uppercase tracking-wider mb-4"
          >
            SERVICES
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 font-['Open_Sans']"
          >
            Our Features & Services
          </motion.h1>
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="border-t border-gray-300 mb-12 w-24 mx-auto"
          />
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                whileHover={{ y: -12, scale: 1.05 }}
              >
                <Card className="bg-white border-2 border-gray-200 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 h-full group relative overflow-hidden">
                  {/* Gradient background on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0`}></div>
                  
                  {/* Animated circle background */}
                  <motion.div 
                    className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${service.gradient} rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-500`}
                    animate={{
                      scale: [1, 1.2, 1],
                      rotate: [0, 90, 0],
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                  
                  <CardContent className="p-8 text-center relative z-10">
                    {/* Icon container with gradient background */}
                    <motion.div 
                      className={`inline-flex mb-6 p-4 rounded-2xl bg-gradient-to-br ${service.gradient} text-white shadow-lg group-hover:shadow-xl transition-all duration-500 cursor-pointer`}
                      whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                      title={service.title}
                    >
                      {service.icon}
                    </motion.div>
                      
                      <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-white transition-colors duration-500">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed group-hover:text-white/90 transition-colors duration-500">
                        {service.description}
                      </p>
                      
                      {/* Decorative dots */}
                      <div className="flex justify-center gap-1 mt-6">
                        {[...Array(3)].map((_, i) => (
                          <motion.div
                            key={i}
                            className="w-2 h-2 rounded-full bg-gray-300 group-hover:bg-white transition-colors duration-500"
                            animate={{
                              scale: [1, 1.3, 1],
                            }}
                            transition={{
                              duration: 1.5,
                              repeat: Infinity,
                              delay: i * 0.2,
                            }}
                          />
                        ))}
                      </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}