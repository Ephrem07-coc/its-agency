"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { ArrowRight, ChevronDown, Shield, Globe, Code2, LineChart } from "lucide-react";

type Differentiator = {
  id: string;
  icon: typeof Shield;
  number: string;
  title: string;
  headline: string;
  explanation: string;
  contrast: string;
};

const DIFFERENTIATORS: Differentiator[] = [
  {
    id: "hybride",
    icon: LineChart,
    number: "01",
    title: "Le seul cabinet hybride de la région",
    headline: "On ne conseille pas pour sous-traiter ailleurs.",
    explanation:
      "Conseil stratégique et exécution technique sous le même toit. Pas de rupture entre l'étude de marché et le développement. Un seul interlocuteur, une seule responsabilité.",
    contrast:
      "Nous ne sommes pas une simple agence web, ni un pur cabinet d'audit. Notre hybridation unique réside dans la fusion de l'ingénierie lourde et des leviers de croissance commerciale . Là où les autres s'arrêtent au code ou à la publicité, nous connectons l'infrastructure technique à l'expansion business globale.",
  },
  {
    id: "securite",
    icon: Shield,
    number: "02",
    title: "La sécurité n'est pas une option",
    headline: "Sécurité intégrée dès la phase 1, pas en fin de projet.",
    explanation:
      "Chaque ligne de code est pensée avec le durcissement. Conformité RGPD, chiffrement des transactions, audit continu. Votre plateforme est prête pour l'international dès le jour 1.",
    contrast:
      "La cybersécurité est la colonne vertébrale de toutes nos interventions. Qu'il s'agisse d'un logiciel, d'un réseau ou d'une campagne de communication, la protection des données et la résilience face aux menaces sont implémentées dès la première ligne de conception.",
  },
  {
    id: "local",
    icon: Globe,
    number: "03",
    title: "Nés au Bénin, conçus pour l'export",
    headline: "On connaît le terrain local ET les exigences mondiales.",
    explanation:
      "Nous comprenons les contraintes logistiques, fiscales et culturelles des PME béninoises. Et nous savons exactement comment les présenter sur les marchés cibles (UE, USA, Afrique de l'Ouest).",
    contrast:
      "Fiers de nos racines et basés au Bénin, nous maîtrisons parfaitement les réalités, les opportunités et l'écosystème numérique africain. Cependant, nos standards techniques et nos stratégies business sont calibrés pour permettre à nos clients de s'exporter et de rivaliser à l'échelle internationale.",
  },
  {
    id: "performance",
    icon: Code2,
    number: "04",
    title: "Performance internationale dès la conception",
    headline: "Votre site ne ralentit pas à 3000 km de Cotonou.",
    explanation:
      "Architecture CDN, optimisation Core Web Vitals, SEO multilingue, multi-devises natif. Votre boutique charge aussi vite à Paris qu'à Cotonou.",
    contrast:
      "Nous n'attendons pas qu'un outil grandisse pour l'optimiser. Dès la phase de cadrage, l'architecture technique, l'image de marque et les processus business sont structurés pour soutenir une charge et une visibilité d'envergure internationale.",
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
};

const cardFade: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
};

interface WhyChooseUsProps {
  isStandalone?: boolean;
}

export default function WhyChooseUs({ isStandalone = false }: WhyChooseUsProps) {
  const [activeTab, setActiveTab] = useState<string>(DIFFERENTIATORS[0].id);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (id: string) => {
    setActiveTab(id);
    const container = scrollRef.current;
    if (!container) return;
    const target = container.querySelector<HTMLElement>(`#${id}`);
    if (!target) return;

    const containerRect = container.getBoundingClientRect();
    const targetRect = target.getBoundingClientRect();
    const offset =
      targetRect.top - containerRect.top + container.scrollTop - 16;

    container.scrollTo({ top: offset, behavior: "smooth" });
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = "/contact";
    }
  };

  // Scroll-spy : met à jour l'onglet actif automatiquement selon
  // la section visible dans le panneau, sans attendre un clic.
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const sections = DIFFERENTIATORS.map((d) =>
      container.querySelector<HTMLElement>(`#${d.id}`)
    ).filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const mostVisible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (mostVisible) {
          setActiveTab(mostVisible.target.id);
        }
      },
      {
        root: container,
        rootMargin: "-15% 0px -55% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1],
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id={isStandalone ? undefined : "notre-difference"}
      className="bg-[#FBFAF6] px-6 py-20 lg:px-10"
    >
      <div className="mx-auto max-w-[1180px]">
        {/* Header — CENTRÉ */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <span className="mb-4 inline-block text-[11px] font-medium uppercase tracking-[0.2em] text-[#1F7A4D]">
            Notre différence
          </span>
          <h2 className="mb-4 text-3xl font-bold leading-tight text-[#0B1F3A] lg:text-[40px]">
            Pourquoi ITS Agency ?
          </h2>
          <p className="text-[15.5px] leading-relaxed text-[#4B5A6E]">
            Ce n'est pas ce que nous faisons qui nous distingue. C'est{" "}
            <span className="font-semibold text-[#0B1F3A]">comment</span> nous
            le faisons et surtout,{" "}
            <span className="font-semibold text-[#0B1F3A]">pourquoi</span> nous
            le faisons différemment.
          </p>
        </div>

        {/* Layout : Tabs verticaux (ancres) à gauche + panneau à défilement interne à droite */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          {/* Tabs — agissent comme des ancres vers le panneau de droite */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="flex flex-col gap-2 lg:col-span-4 lg:self-start lg:sticky lg:top-28"
          >
            {DIFFERENTIATORS.map((diff) => {
              const Icon = diff.icon;
              const isActive = diff.id === activeTab;

              return (
                <motion.button
                  key={diff.id}
                  variants={itemVariants}
                  onClick={() => scrollToSection(diff.id)}
                  className={`group flex items-start gap-4 rounded-xl border p-5 text-left transition-all duration-300 ${
                    isActive
                      ? "border-[#1F7A4D] bg-[#1F7A4D] text-white shadow-lg"
                      : "border-[#0B1F3A]/8 bg-white text-[#0B1F3A] hover:border-[#1F7A4D]/30"
                  }`}
                >
                  <span
                    className={`text-[11px] font-bold tracking-wider ${
                      isActive ? "text-[#4CC382]" : "text-[#1F7A4D]"
                    }`}
                  >
                    {diff.number}
                  </span>
                  <div>
                    <span className="block text-[14px] font-semibold">
                      {diff.title}
                    </span>
                    {isActive && (
                      <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="mt-1 block text-[12.5px] leading-relaxed text-white/75"
                      >
                        {diff.headline}
                      </motion.span>
                    )}
                  </div>
                </motion.button>
              );
            })}

            <span className="mt-1 hidden items-center gap-1.5 text-[12px] text-[#4B5A6E] lg:flex">
              <ChevronDown className="h-3.5 w-3.5" />
              Cliquez pour aller directement à une section
            </span>
          </motion.div>

          {/* Panneau à défilement interne — toutes les sections empilées */}
          <div className="relative lg:col-span-8">
            <div
              ref={scrollRef}
              className="scroll-smooth h-[520px] overflow-y-auto pr-2 sm:h-[560px] lg:h-[640px]"
            >
              <div className="flex flex-col gap-8 pb-6">
                {DIFFERENTIATORS.map((diff) => (
                  <motion.div
                    key={diff.id}
                    id={diff.id}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={cardFade}
                    className="scroll-mt-4 rounded-2xl border border-[#0B1F3A]/8 bg-white p-8 shadow-[0_2px_20px_rgba(11,31,58,0.06)] lg:p-10"
                  >
                    {/* Image zone */}
                    <div className="relative mb-8 aspect-[16/9] w-full overflow-hidden rounded-xl bg-[#0B1F3A]">
                      <Image
                        src={`/images/services/${diff.id}.jpg`}
                        alt={diff.title}
                        fill
                        className="object-cover opacity-90"
                        sizes="(max-width: 1024px) 100vw, 66vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A]/60 to-transparent" />
                      <div className="absolute bottom-6 left-6">
                        <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-[12px] font-medium text-white backdrop-blur-sm">
                          <diff.icon className="h-3.5 w-3.5" />
                          {diff.title}
                        </span>
                      </div>
                    </div>

                    {/* Texte */}
                    <h3 className="mb-3 text-[22px] font-bold text-[#0B1F3A]">
                      {diff.headline}
                    </h3>
                    <p className="mb-6 text-[14.5px] leading-relaxed text-[#4B5A6E]">
                      {diff.explanation}
                    </p>

                    {/* Contrast box */}
                    <div className="rounded-xl border-l-4 border-[#1F7A4D] bg-[#1F7A4D]/5 p-5">
                      <p className="text-[13px] leading-relaxed text-[#0B1F3A]/80">
                        <span className="font-semibold text-[#1F7A4D]">
                          Ce qui nous différencie :{" "}
                        </span>
                        {diff.contrast}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Voile en bas + indice de scroll, signal qu'il y a plus de contenu */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 flex h-16 items-end justify-center bg-gradient-to-t from-[#FBFAF6] to-transparent pb-1">
              <span className="flex items-center gap-1.5 text-[11px] font-medium text-[#0B1F3A]/50">
                <ChevronDown className="h-3.5 w-3.5 animate-bounce" />
                Faites défiler pour tout voir
              </span>
            </div>
          </div>
        </div>

        {/* CTA — adapté selon le contexte */}
        <div className="mt-16 text-center">
          <p className="mb-4 text-[14px] text-[#4B5A6E]">
            Convaincu ? Parlons de votre projet.
          </p>
          {isStandalone ? (
            <Link
            href="/contact?solo=true"
              className="inline-flex items-center gap-2 rounded-full bg-[#0B1F3A] px-8 py-3 text-[14px] font-semibold text-white transition-colors hover:bg-[#1F7A4D]"
            >
              Démarrer une conversation
              <ArrowRight className="h-4 w-4" />
            </Link>
          ) : (
            <button
              onClick={scrollToContact}
              className="inline-flex items-center gap-2 rounded-full bg-[#0B1F3A] px-8 py-3 text-[14px] font-semibold text-white transition-colors hover:bg-[#1F7A4D]"
            >
              Démarrer une conversation
              <ArrowRight className="h-4 w-4" />
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
