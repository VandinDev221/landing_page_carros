import React from "react";

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <span className="font-heading text-xl font-bold text-primary tracking-wide">
              ELITE
            </span>
            <span className="font-heading text-xl font-light text-foreground tracking-widest">
              MOTORS
            </span>
          </div>
          <p className="font-body text-xs text-muted-foreground tracking-wider">
            © {new Date().getFullYear()} Elite Motors. Todos os direitos reservados.
          </p>
          <div className="flex gap-8">
            <a href="#" className="font-body text-xs tracking-wider text-muted-foreground hover:text-primary transition-colors">
              Política de Privacidade
            </a>
            <a href="#" className="font-body text-xs tracking-wider text-muted-foreground hover:text-primary transition-colors">
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}