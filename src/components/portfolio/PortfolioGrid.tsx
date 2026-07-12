"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { Search, Code, ShieldCheck, Lightbulb, Globe, Wrench } from "lucide-react";

type Category =
  | "Tous"
  | "Stratégie"
  | "Conception"
  | "Développement"
  | "Déploiement";

type MethodStep = {
  id: string;
  icon: typeof Search;
  phaseNumber: number;
  title: string;
  category: Exclude<Category, "Tous">;
  tagline: string;
  description: string;
  deliverables: string[];
};

const CATEGORIES: Category[] = [
  "Tous",
  "Stratégie",
  "Conception",
  "Développement",
  "Déploiement",
];

const STEPS: MethodStep[] = [
  {
    id: "audit-marche",
    icon: Search,
    phaseNumber: 1,
    title: "Audit & Étude de Marché",
    category: "Stratégie",
    tagline: "Comprendre avant de construire",
    description:
      "Analyse approfondie de votre marché cible international, étude de la concurrence, identification des opportunités et évaluation de la faisabilité technique et juridique.",
    deliverables: [
      "Rapport d'opportunité marché",
      "Analyse concurrentielle",
      "Cadrage juridique export",
    ],
  },
  {
    id: "strategie-digitale",
    icon: Lightbulb,
    phaseNumber: 2,
    title: "Stratégie Digitale",
    category: "Stratégie",
    tagline: "Se faire voir, se faire choisir",
    description:
      "Positionnement de marque, stratégie de contenu multilingue, SEO international et campagnes ciblées. Votre 'Made in Bénin' devient une force compétitive sur le web mondial.",
    deliverables: [
      "Plan de communication",
      "Stratégie SEO multilingue",
      "Calendrier éditorial",
    ],
  },
  {
    id: "architecture-ux",
    icon: Globe,
    phaseNumber: 3,
    title: "Conception UX/UI",
    category: "Conception",
    tagline: "Penser l'expérience avant le code",
    description:
      "Wireframes, maquettes interactives et architecture technique. Chaque écran est pensé pour la conversion internationale (multi-devises, multi-langues, accessibilité).",
    deliverables: [
      "Maquettes Figma haute fidélité",
      "Prototype interactif",
      "Spécifications techniques",
    ],
  },
  {
    id: "dev-agile",
    icon: Code,
    phaseNumber: 4,
    title: "Développement Agile",
    category: "Développement",
    tagline: "Construire vite, construire bien",
    description:
      "Développement itératif avec livraisons régulières. E-commerce, applications métier ou sites vitrines — chaque ligne de code est optimisée pour la performance et le SEO international.",
    deliverables: [
      "Sprints de 2 semaines",
      "Tests automatisés",
      "Documentation technique",
    ],
  },
  {
    id: "cyber-rms",
    icon: ShieldCheck,
    phaseNumber: 5,
    title: "Sécurisation RMS",
    category: "Déploiement",
    tagline: "Protéger ce qui compte",
    description:
      "Durcissement de l'infrastructure, protocoles de protection des données, conformité RGPD/African Data Laws. Votre plateforme est prête pour les transactions internationales en toute sécurité.",
    deliverables: [
      "Audit de sécurité complet",
      "Certificat SSL & chiffrement",
      "Plan de continuité",
    ],
  },
  {
    id: "deploiement-suivi",
    icon: Wrench,
    phaseNumber: 6,
    title: "Déploiement & Suivi",
    category: "Déploiement",
    tagline: "Lancer, puis optimiser",
    description:
      "Mise en production, formation de vos équipes, monitoring des performances et maintenance proactive. Nous restons votre partenaire technique après le go-live.",
    deliverables: [
      "Formation équipe",
      "Monitoring 24/7",
      "Support & évolutions",
    ],
  },
];

const gridVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
  },
  exit: { opacity: 0, y: -12, transition: { duration: 0.2 } },
};

interface PortfolioGridProps {
  isStandalone?: boolean;
}

export default function PortfolioGrid({ isStandalone = false }: PortfolioGridProps) {
  const [active, setActive] = useState<Category>("Tous");

  const filtered = useMemo(
    () =>
      active === "Tous"
        ? STEPS
        : STEPS.filter((s) => s.category === active),
    [active]
  );

  return (
    <section
      id={isStandalone ? undefined : "methodologie"}
      className="bg-[#FBFAF6] px-6 py-20 lg:px-10"
    >
      <div className="mx-auto max-w-[1280px]">
        {/* Header */}
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <span className="mb-3 inline-block text-[11px] font-medium uppercase tracking-[0.2em] text-[#1F7A4D]">
            Notre méthodologie
          </span>
          <h2 className="mb-4 text-3xl font-bold text-[#0B1F3A]">
            De l'idée au déploiement sécurisé.
          </h2>
          <p className="text-[14px] leading-relaxed text-[#4B5A6E]">
            Une approche structurée en 6 phases pour transformer votre projet local
            en solution digitale internationale, sans compromis sur la sécurité.
          </p>
        </div>

        {/* Filtres */}
        <div className="mb-14 flex flex-wrap justify-center gap-3">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActive(cat)}
              className={`rounded-full border px-5 py-2.5 text-[13.5px] font-medium transition-colors duration-200 ${
                active === cat
                  ? "border-[#0B1F3A] bg-[#0B1F3A] text-white"
                  : "border-[#0B1F3A]/12 text-[#0B1F3A]/60 hover:border-[#0B1F3A]/30 hover:text-[#0B1F3A]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grille filtrable */}
        <motion.div
          layout
          initial="hidden"
          animate="visible"
          variants={gridVariants}
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((step) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.id}
                  layout
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="group block overflow-hidden rounded-xl border border-[#0B1F3A]/8 bg-white shadow-[0_2px_10px_rgba(11,31,58,0.04)] transition-shadow duration-300 hover:shadow-[0_20px_40px_rgba(11,31,58,0.12)]"
                >
                  {/* En-tête avec icône et numéro de phase */}
                  <div className="relative h-48 w-full overflow-hidden bg-[#0B1F3A]">
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                      <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-[#1F7A4D]/20 backdrop-blur-sm">
                        <Icon className="h-6 w-6 text-[#4CC382]" />
                      </div>
                      <span className="text-[12px] font-medium uppercase tracking-[0.15em] text-[#4CC382]">
                        Phase {step.phaseNumber}
                      </span>
                      <h3 className="mt-1 text-[18px] font-semibold text-white">
                        {step.title}
                      </h3>
                    </div>
                    <div className="absolute inset-0 bg-[#1F7A4D]/0 transition-colors duration-300 group-hover:bg-[#1F7A4D]/10" />
                  </div>

                  <div className="p-6">
                    <span className="text-[11px] font-medium uppercase tracking-[0.14em] text-[#1F7A4D]">
                      {step.category}
                    </span>
                    <p className="mt-2 mb-3 text-[13.5px] font-medium text-[#0B1F3A]">
                      {step.tagline}
                    </p>
                    <p className="mb-4 text-[13px] leading-relaxed text-[#4B5A6E]">
                      {step.description}
                    </p>

                    {/* Livrables */}
                    <div className="border-t border-[#0B1F3A]/6 pt-4">
                      <span className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.1em] text-[#0B1F3A]/40">
                        Livrables
                      </span>
                      <ul className="space-y-1.5">
                        {step.deliverables.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-2 text-[12.5px] text-[#4B5A6E]"
                          >
                            <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-[#1F7A4D]" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <p className="py-16 text-center text-[14px] text-[#4B5A6E]">
            Aucune étape dans cette catégorie.
          </p>
        )}

        {/* TEXTE ACCROCHEUR EN BAS — PAS DE CTA */}
        <div className="mt-20 border-t border-[#0B1F3A]/8 pt-12 text-center">
          <p className="mx-auto max-w-lg text-[15px] font-medium leading-relaxed text-[#0B1F3A]/70">
            Chaque projet mérite une méthode. La nôtre est éprouvée, mesurable, 
            et pensée pour durer.
          </p>
          <p className="mt-3 text-[12.5px] uppercase tracking-[0.15em] text-[#1F7A4D]">
            ITS Agency  Votre partenaire digital international.
          </p>
        </div>
      </div>
    </section>
  );
}