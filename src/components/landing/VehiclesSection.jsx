import React from "react";
import { motion } from "framer-motion";
import VehicleCard from "./VehicleCard";

export default function VehiclesSection({ vehicles }) {
  return (
    <section id="veiculos" className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16 md:mb-20"
        >
          <div className="w-16 h-px bg-primary mx-auto mb-6" />
          <p className="font-body text-xs tracking-[0.4em] uppercase text-primary mb-4">
            Nossa Frota
          </p>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
            Veículos em Destaque
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {vehicles.map((vehicle, index) => (
            <VehicleCard key={vehicle.name} vehicle={vehicle} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}