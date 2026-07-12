"use client";

import { motion, Variants } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type InfoCard = {
  icon: LucideIcon;
  label: string;
  lines: string[];
  href?: string; // ← AJOUT : lien optionnel
};

const INFO: InfoCard[] = [
  {
    icon: Phone,
    label: "Téléphone",
    lines: ["+229 01 56 02 69 67"],
    href: "tel:+2290156026967", // ← AJOUT
  },
  {
    icon: Mail,
    label: "Email",
    lines: ["itsagency.bj@gmail.com"],
    href: "mailto:itsagency.bj@gmail.com", // ← AJOUT
  },
  {
    icon: MapPin,
    label: "Adresse",
    lines: ["Cotonou, Bénin"],
    // Pas de href = pas cliquable
  },
  {
    icon: Clock,
    label: "Horaires",
    lines: ["Lundi - Vendredi", "08h00 - 18h00"],
    // Pas de href = pas cliquable
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function ContactInfo() {
  return (
    <section className="bg-[#FBFAF6] px-6 pb-4 pt-20 lg:px-10">
      <div className="mx-auto max-w-[1180px]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {INFO.map((item) => {
            const Icon = item.icon;
            const content = (
              <>
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-lg bg-[#0B1F3A]">
                  <Icon className="h-5 w-5 text-[#4CC382]" />
                </div>
                <h3 className="mb-2 text-[13px] font-semibold uppercase tracking-[0.08em] text-[#1F7A4D]">
                  {item.label}
                </h3>
                {item.lines.map((line) => (
                  <p key={line} className="text-[14.5px] font-medium text-[#0B1F3A]/80">
                    {line}
                  </p>
                ))}
              </>
            );

            return (
              <motion.div
                key={item.label}
                variants={cardVariants}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className={`rounded-xl border border-[#0B1F3A]/8 bg-white p-7 shadow-[0_2px_10px_rgba(11,31,58,0.04)] transition-shadow duration-300 hover:shadow-[0_16px_32px_rgba(11,31,58,0.1)] ${
                  item.href ? "cursor-pointer" : ""
                }`}
              >
                {item.href ? (
                  <a
                    href={item.href}
                    className="block transition-colors hover:text-[#1F7A4D]"
                  >
                    {content}
                  </a>
                ) : (
                  content
                )}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}