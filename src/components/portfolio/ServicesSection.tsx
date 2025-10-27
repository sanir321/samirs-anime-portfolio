import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Code2, Smartphone, Mail, TrendingUp } from "lucide-react";

const services = [
  {
    icon: <Code2 className="h-12 w-12" />,
    title: "Web Development",
    description: "Building responsive and performant web applications using modern technologies and best practices."
  },
  {
    icon: <Smartphone className="h-12 w-12" />,
    title: "App Development",
    description: "Creating mobile-first applications with seamless user experiences across all devices."
  },
  {
    icon: <TrendingUp className="h-12 w-12" />,
    title: "Digital Marketing",
    description: "Helping businesses grow their online presence through strategic digital marketing solutions."
  },
  {
    icon: <Mail className="h-12 w-12" />,
    title: "Email Marketing",
    description: "Designing and implementing effective email campaigns to engage and convert your audience."
  }
];

export function ServicesSection() {
  return (
    <section className="py-20 px-4" id="services">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-purple-400 text-sm uppercase tracking-wider mb-4">SERVICES</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-8">Our Features & Services</h1>
          <div className="border-t border-purple-500/20 mb-12"></div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="bg-slate-800/50 border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 h-full group">
                  <CardContent className="p-6 text-center">
                    <div className="inline-flex p-4 bg-purple-500/10 rounded-2xl mb-4 text-purple-400 group-hover:bg-purple-500/20 transition-colors">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-white">{service.title}</h3>
                    <p className="text-gray-400">{service.description}</p>
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
