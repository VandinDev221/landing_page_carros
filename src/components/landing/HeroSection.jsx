import React from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroSection({ heroImage }) {
  return (
    <section id="hero" className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Showroom Elite Motors"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 80 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-px bg-primary mb-8"
          />
          <p className="font-body text-xs tracking-[0.4em] uppercase text-primary mb-4">
            Excelência em automóveis
          </p>
          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold text-foreground leading-[0.95] mb-6">
            Dirija o
            <br />
            <span className="text-primary">Extraordinário</span>
          </h1>
          <p className="font-body text-base md:text-lg text-muted-foreground max-w-md leading-relaxed mb-10">
            Descubra nossa seleção exclusiva de veículos Toyota premium. 
            Potência, conforto e sofisticação em cada detalhe.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#veiculos">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-body text-xs tracking-widest uppercase rounded-none px-10 py-6">
                Ver Veículos
              </Button>
            </a>
            <a href="#contato">
              <Button variant="outline" className="border-foreground/20 text-foreground hover:bg-foreground/5 font-body text-xs tracking-widest uppercase rounded-none px-10 py-6">
                Fale Conosco
              </Button>
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
      >
        <a href="#veiculos" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
          <span className="font-body text-[10px] tracking-[0.3em] uppercase">Explore</span>
          <ChevronDown className="w-5 h-5" />
        </a>
      </motion.div>
    </section>
  );
}