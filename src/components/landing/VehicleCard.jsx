import React from "react";
import { motion } from "framer-motion";
import { Fuel, Gauge, Settings, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function VehicleCard({ vehicle, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, delay: index * 0.2 }}
      className="group"
    >
      <div className="relative bg-card border border-border overflow-hidden hover:border-primary/30 transition-all duration-500">
        {/* Image */}
        <div className="relative aspect-[3/2] overflow-hidden">
          <img
            src={vehicle.image}
            alt={vehicle.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
          <div className="absolute top-4 left-4">
            <span className="font-body text-[10px] tracking-[0.3em] uppercase bg-primary text-primary-foreground px-3 py-1.5">
              {vehicle.tag}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8">
          <p className="font-body text-[10px] tracking-[0.3em] uppercase text-primary mb-2">
            {vehicle.brand}
          </p>
          <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-1">
            {vehicle.name}
          </h3>
          <p className="font-body text-sm text-muted-foreground mb-6 leading-relaxed">
            {vehicle.description}
          </p>

          {/* Specs */}
          <div className="grid grid-cols-3 gap-4 mb-6 pb-6 border-b border-border">
            <div className="flex flex-col items-center text-center gap-1.5">
              <Gauge className="w-4 h-4 text-primary" />
              <span className="font-body text-xs text-muted-foreground">{vehicle.power}</span>
            </div>
            <div className="flex flex-col items-center text-center gap-1.5">
              <Fuel className="w-4 h-4 text-primary" />
              <span className="font-body text-xs text-muted-foreground">{vehicle.fuel}</span>
            </div>
            <div className="flex flex-col items-center text-center gap-1.5">
              <Settings className="w-4 h-4 text-primary" />
              <span className="font-body text-xs text-muted-foreground">{vehicle.transmission}</span>
            </div>
          </div>

          <div className="flex justify-end">
            <a href="#contato">
              <Button variant="outline" className="border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground font-body text-xs tracking-widest uppercase rounded-none px-6 py-5 group/btn">
                Consultar
                <ArrowRight className="w-3.5 h-3.5 ml-2 group-hover/btn:translate-x-1 transition-transform" />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}