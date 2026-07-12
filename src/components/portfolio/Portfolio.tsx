"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

type Project = {
  image: string;
  title: string;
  category: string;
  href: string;
};

const PROJECTS: Project[] = [
  {
    image: "/images/portfolio-1.jpg",
    title: "Boutique Ananas Export",
    category: "E-commerce international",
    href: "/portfolio/ananas-export",
  },
  {
    image: "/images/portfolio-2.jpg",
    title: "Plateforme Coopérative Textile",
    category: "Application métier",
    href: "/portfolio/cooperative-textile",
  },
  {
    image: "/images/portfolio-3.jpg",
    title: "Infrastructure Sécurisée PME",
    category: "Cybersécurité",
    href: "/portfolio/infrastructure-securisee",
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

// On crée un composant Link animé avec Framer Motion pour garder les types cohérents
const MotionLink = motion(Link);

export default function Portfolio() {
  return (
    <section id="realisations" className="bg-[#FBFAF6] px-6 py-28 lg:px-10">
      <div className="mx-auto max-w-[1280px]">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <span className="mb-4 inline-block text-[11px] font-medium uppercase tracking-[0.2em] text-[#1F7A4D]">
            Nos réalisations
          </span>
          <h2 className="text-3xl font-bold text-[#0B1F3A] lg:text-4xl">
            Des projets concrets, des résultats mesurables.
          </h2>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="grid grid-cols-1 gap-8 md:grid-cols-3"
        >
          {PROJECTS.map((project) => (
            <MotionLink
              key={project.title}
              href={project.href}
              variants={cardVariants}
              className="group block overflow-hidden rounded-xl border border-[#0B1F3A]/8 bg-white shadow-[0_2px_10px_rgba(11,31,58,0.04)] transition-shadow duration-300 hover:shadow-[0_20px_40px_rgba(11,31,58,0.12)]"
            >
              <div className="relative h-56 w-full overflow-hidden bg-[#0B1F3A]">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>

              <div className="p-6">
                <span className="text-[11px] font-medium uppercase tracking-[0.14em] text-[#1F7A4D]">
                  {project.category}
                </span>
                <h3 className="mt-2 mb-4 text-[17px] font-semibold text-[#0B1F3A]">
                  {project.title}
                </h3>
                <span className="inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-[#0B1F3A] transition-colors duration-200 group-hover:text-[#1F7A4D]">
                  Voir le projet
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </MotionLink>
          ))}
        </motion.div>
      </div>
    </section>
  );
}