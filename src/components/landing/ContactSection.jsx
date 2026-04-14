import React, { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const contactInfo = [
  { icon: MapPin, label: "Endereço", value: "Av. Paulista, 1000 - São Paulo, SP" },
  { icon: Phone, label: "Telefone", value: "(11) 99999-9999" },
  { icon: Mail, label: "E-mail", value: "contato@elitemotors.com.br" },
  { icon: Clock, label: "Horário", value: "Seg - Sáb: 9h às 19h" },
];

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    // Simulate send
    await new Promise((r) => setTimeout(r, 1000));
    toast.success("Mensagem enviada com sucesso! Entraremos em contato em breve.");
    setForm({ name: "", phone: "", email: "", message: "" });
    setSending(false);
  };

  return (
    <section id="contato" className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="w-16 h-px bg-primary mx-auto mb-6" />
          <p className="font-body text-xs tracking-[0.4em] uppercase text-primary mb-4">
            Contato
          </p>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
            Fale Conosco
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >
            <p className="font-body text-base text-muted-foreground leading-relaxed">
              Tem interesse em algum de nossos veículos? Entre em contato e nossa equipe 
              especializada terá prazer em atendê-lo com toda a atenção que você merece.
            </p>
            <div className="space-y-6">
              {contactInfo.map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-body text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-1">
                      {item.label}
                    </p>
                    <p className="font-body text-sm text-foreground">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <Input
                  placeholder="Seu nome"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required
                  className="bg-card border-border font-body text-sm rounded-none py-6 placeholder:text-muted-foreground/50"
                />
                <Input
                  placeholder="Seu telefone"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  required
                  className="bg-card border-border font-body text-sm rounded-none py-6 placeholder:text-muted-foreground/50"
                />
              </div>
              <Input
                type="email"
                placeholder="Seu e-mail"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
                className="bg-card border-border font-body text-sm rounded-none py-6 placeholder:text-muted-foreground/50"
              />
              <Textarea
                placeholder="Qual veículo te interessa? Conte-nos mais..."
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                required
                rows={5}
                className="bg-card border-border font-body text-sm rounded-none resize-none placeholder:text-muted-foreground/50"
              />
              <Button
                type="submit"
                disabled={sending}
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-body text-xs tracking-widest uppercase rounded-none py-6"
              >
                {sending ? (
                  <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                ) : (
                  <>
                    <Send className="w-3.5 h-3.5 mr-2" />
                    Enviar Mensagem
                  </>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}