"use client";

import { motion, Variants } from "framer-motion";
import { ShieldCheck, Rocket, Layers } from "lucide-react";
import PageHeader from "@/components/common/PageHeader";

const VALUES = [
  {
    icon: ShieldCheck,
    title: "Intégrité & Sécurité",
    description: "Protection absolue des transactions, des infrastructures et des données clients.",
  },
  {
    icon: Rocket,
    title: "Innovation & Audace",
    description: "Propulser les produits locaux sur des marchés compétitifs grâce à des stratégies modernes.",
  },
  {
    icon: Layers,
    title: "Excellence pluridisciplinaire",
    description: "Fusionner nos 4 expertises pour offrir une valeur qu'un cabinet classique ne peut proposer seul.",
  },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="À propos de nous"
        title="Le cabinet qui conseille et qui construit."
        description="ITS Agency est née d'un constat simple : les PME locales ont besoin d'un seul interlocuteur pour penser leur stratégie export et la mettre en ligne, en toute sécurité."
      />

      {/* Mission / Vision */}
      <section className="bg-[#FBFAF6] px-6 py-24 lg:px-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
          className="mx-auto grid max-w-[1080px] grid-cols-1 gap-8 lg:grid-cols-2"
        >
          <motion.div
            variants={fadeUp}
            className="rounded-xl border border-[#0B1F3A]/8 bg-white p-9 shadow-[0_2px_10px_rgba(11,31,58,0.04)]"
          >
            <span className="mb-4 block text-[11px] font-medium uppercase tracking-[0.2em] text-[#1F7A4D]">
              🎯 Mission
            </span>
            <blockquote className="text-[18px] font-medium leading-relaxed text-[#0B1F3A]">
              « Accompagner les PME locales dans leur transition vers le
              commerce électronique international en leur fournissant des
              solutions digitales clés en main, hautement sécurisées et
              adaptées aux exigences des marchés mondiaux. »
            </blockquote>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="rounded-xl border border-[#0B1F3A]/8 bg-white p-9 shadow-[0_2px_10px_rgba(11,31,58,0.04)]"
          >
            <span className="mb-4 block text-[11px] font-medium uppercase tracking-[0.2em] text-[#1F7A4D]">
              🔮 Vision
            </span>
            <blockquote className="text-[18px] font-medium leading-relaxed text-[#0B1F3A]">
              « Devenir le cabinet de référence en Afrique de l&apos;Ouest
              pour la numérisation sécurisée et l&apos;expansion
              internationale des entreprises locales, en faisant du
              &quot;Made in Bénin&quot; une force compétitive sur le web
              mondial. »
            </blockquote>
          </motion.div>
        </motion.div>
      </section>

      {/* Valeurs */}
      <section className="bg-[#0B1F3A] px-6 py-24 lg:px-10">
        <div className="mx-auto max-w-[1080px]">
          <div className="mx-auto mb-14 max-w-xl text-center">
            <span className="mb-4 inline-block text-[11px] font-medium uppercase tracking-[0.2em] text-[#4CC382]">
              Nos valeurs
            </span>
            <h2 className="text-3xl font-bold text-white">
              Nos principes de conduite.
            </h2>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
            className="grid grid-cols-1 gap-6 sm:grid-cols-3"
          >
            {VALUES.map((value) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  variants={fadeUp}
                  className="rounded-xl border border-white/10 bg-white/[0.03] p-7"
                >
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-lg bg-[#1F7A4D]">
                    <Icon className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="mb-2 text-[16px] font-semibold text-white">
                    {value.title}
                  </h3>
                  <p className="text-[13.5px] leading-relaxed text-white/55">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>
    </>
  );
}