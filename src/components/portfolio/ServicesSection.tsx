import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Code2, Smartphone, Mail, TrendingUp } from "lucide-react";

const services = [
  {
    icon: <Code2 className="h-16 w-16" />,
    title: "Web Development",
    description: "Building responsive and performant web applications using modern technologies and best practices."
  },
  {
    icon: <Smartphone className="h-16 w-16" />,
    title: "App Development",
    description: "Creating mobile-first applications with seamless user experiences across all devices."
  },
  {
    icon: <TrendingUp className="h-16 w-16" />,
    title: "Digital Marketing",
    description: "Helping businesses grow their online presence through strategic digital marketing solutions."
  },
  {
    icon: <Mail className="h-16 w-16" />,
    title: "Email Marketing",
    description: "Designing and implementing effective email campaigns to engage and convert your audience."
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
          <p className="text-gray-500 text-sm uppercase tracking-wider mb-4">SERVICES</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-8 font-['Open_Sans']">Our Features & Services</h1>
          <div className="border-t border-gray-300 mb-12 w-24 mx-auto"></div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 h-full group relative overflow-hidden">
                  <div className="absolute inset-0 bg-blue-600 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 z-0"></div>
                  <CardContent className="p-6 text-center relative z-10">
                    <div className="inline-flex mb-4 text-blue-600 group-hover:text-white transition-colors duration-500">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-blue-600 group-hover:text-white transition-colors duration-500">{service.title}</h3>
                    <p className="text-gray-600 text-sm group-hover:text-white transition-colors duration-500">{service.description}</p>
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