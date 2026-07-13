"use client";
import { motion, Variants } from "framer-motion";
import { Code2, Briefcase, ShieldCheck, Globe2, ArrowRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const SERVICES: Service[] = [
  {
    icon: Code2,
    title: "Développement Web",
    description:
      "Sites vitrines, boutiques e-commerce et applications sur-mesure, pensés pour la performance et l'international dès la conception.",
  },
  {
    icon: Briefcase,
    title: "Applications métier",
    description:
      "Des outils internes taillés pour vos process réels : gestion, suivi client, reporting — pour digitaliser sans complexifier.",
  },
  {
    icon: ShieldCheck,
    title: "Cybersécurité",
    description:
      "Protocoles de sécurité, protection des données et des transactions : une infrastructure fiable pour opérer sereinement à l'international.",
  },
  {
    icon: Globe2,
    title: "Conseil à l'international",
    description:
      "Analyse de marché, stratégie juridique et financière : on cadre votre expansion export avant même le premier développement.",
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function Services() {
  return (
    <section id="services" className="bg-[#FBFAF6] px-6 py-20 lg:px-10">
      <div className="mx-auto max-w-[1280px]">
        {/* En-tête de section */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <span className="mb-4 inline-block text-[11px] font-medium uppercase tracking-[0.2em] text-[#1F7A4D]">
            Nos services
          </span>
          <h2 className="text-3xl font-bold text-[#0B1F3A] lg:text-4xl">
            Quatre expertises, une seule agence.
          </h2>
          <p className="mt-4 text-[15.5px] text-[#4B5A6E]">
            De la stratégie d&apos;export à la sécurité de vos transactions,
            on couvre chaque étape de votre présence en ligne.
          </p>
        </div>

        {/* Grille de cartes */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {SERVICES.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                variants={cardVariants}
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="group flex flex-col rounded-xl border border-[#0B1F3A]/8 bg-white p-7 shadow-[0_2px_10px_rgba(11,31,58,0.04)] transition-shadow duration-300 hover:shadow-[0_20px_40px_rgba(11,31,58,0.12)]"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-[#0B1F3A] transition-colors duration-300 group-hover:bg-[#1F7A4D]">
                  <Icon className="h-5.5 w-5.5 text-[#4CC382] transition-colors duration-300 group-hover:text-white" />
                </div>

                <h3 className="mb-3 text-[17px] font-semibold text-[#0B1F3A]">
                  {service.title}
                </h3>

                <p className="mb-6 flex-1 text-[13.5px] leading-relaxed text-[#4B5A6E]">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
