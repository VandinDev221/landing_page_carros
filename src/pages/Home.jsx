import React from "react";
import Navbar from "../components/landing/Navbar";
import HeroSection from "../components/landing/HeroSection";
import VehiclesSection from "../components/landing/VehiclesSection";
import AboutSection from "../components/landing/AboutSection";
import ContactSection from "../components/landing/ContactSection";
import Footer from "../components/landing/Footer";

/** Base única das imagens da landing; só alterar aqui para trocar o CDN/pasta. */
const IMAGE_BASE =
  "https://media.base44.com/images/public/69de86d79fa0105d32efd1a6";

const HERO_IMAGE = `${IMAGE_BASE}/f4b4e7c81_generated_798f7fff.png`;

const vehicles = [
  {
    name: "SW4",
    brand: "Toyota",
    tag: "SUV Premium",
    image: `${IMAGE_BASE}/0214b657e_generated_492d5efe.png`,
    description:
      "O SUV que une robustez e sofisticação. Interior luxuoso, motor potente e tecnologia de ponta para todas as aventuras.",
    power: "204 cv",
    fuel: "Diesel",
    transmission: "Automático",
  },
  {
    name: "Corolla",
    brand: "Toyota",
    tag: "Sedan Executivo",
    image: `${IMAGE_BASE}/db704c847_generated_03f7eafd.png`,
    description:
      "O sedan mais desejado do Brasil. Elegância, economia e tecnologia híbrida em perfeita harmonia.",
    power: "184 cv",
    fuel: "Híbrido Flex",
    transmission: "CVT",
  },
  {
    name: "Hilux",
    brand: "Toyota",
    tag: "Pickup de Luxo",
    image: `${IMAGE_BASE}/cff624081_generated_ac60d0ee.png`,
    description:
      "Força e prestígio em uma pickup lendária. Capacidade surpreendente com acabamento de alto padrão.",
    power: "224 cv",
    fuel: "Diesel",
    transmission: "Automático",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-body">
      <Navbar />
      <HeroSection heroImage={HERO_IMAGE} />
      <VehiclesSection vehicles={vehicles} />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
}