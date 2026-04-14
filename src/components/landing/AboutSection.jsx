import React from "react";
import { motion } from "framer-motion";
import { Shield, Award, Clock, Users } from "lucide-react";

const stats = [
  { icon: Shield, value: "15+", label: "Anos de experiência" },
  { icon: Award, value: "500+", label: "Veículos vendidos" },
  { icon: Users, value: "98%", label: "Clientes satisfeitos" },
  { icon: Clock, value: "24h", label: "Suporte dedicado" },
];

export default function AboutSection() {
  return (
    <section id="sobre" className="py-24 md:py-32 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="w-16 h-px bg-primary mb-6" />
            <p className="font-body text-xs tracking-[0.4em] uppercase text-primary mb-4">
              Quem Somos
            </p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              Tradição e<br />
              <span className="text-primary">Excelência</span>
            </h2>
            <p className="font-body text-base text-muted-foreground leading-relaxed mb-6">
              Há mais de 15 anos no mercado, a Elite Motors é referência na venda de veículos 
              Toyota premium. Nossa missão é proporcionar uma experiência de compra única, 
              com transparência, qualidade e atendimento personalizado.
            </p>
            <p className="font-body text-base text-muted-foreground leading-relaxed">
              Cada veículo em nosso showroom passa por uma rigorosa inspeção de qualidade, 
              garantindo que você leve para casa não apenas um carro, mas uma experiência 
              de excelência em cada quilômetro.
            </p>
          </motion.div>

          {/* Right - Stats */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="bg-card border border-border p-8 text-center hover:border-primary/30 transition-colors duration-300"
              >
                <stat.icon className="w-6 h-6 text-primary mx-auto mb-4" />
                <p className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-1">
                  {stat.value}
                </p>
                <p className="font-body text-xs tracking-wider uppercase text-muted-foreground">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}