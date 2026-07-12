"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

type Faq = {
  question: string;
  answer: string;
};

const FAQS: Faq[] = [
  {
    question: "Quels sont vos délais ?",
    answer:
      "Ça dépend de la complexité du projet, mais on cadre toujours un délai précis avec vous dès le premier échange, avant de démarrer.",
  },
  {
    question: "Travaillez-vous avec les PME ?",
    answer:
      "Oui, c'est même notre cœur de cible : accompagner les PME locales dans leur transition vers le commerce électronique international.",
  },
  {
    question: "Faites-vous des sites e-commerce ?",
    answer:
      "Oui, la conception et le développement de boutiques en ligne font partie de nos 4 expertises, avec la sécurité des transactions intégrée dès le départ.",
  },
  {
    question: "Proposez-vous un accompagnement ?",
    answer:
      "Oui, au-delà de la livraison technique, on reste disponibles pour ajuster et faire évoluer votre solution selon vos besoins.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-[#FBFAF6] px-6 py-20 lg:px-10">
      <div className="mx-auto max-w-[760px]">
        <div className="mb-12 text-center">
          <span className="mb-4 inline-block text-[11px] font-medium uppercase tracking-[0.2em] text-[#1F7A4D]">
            FAQ
          </span>
          <h2 className="text-3xl font-bold text-[#0B1F3A]">
            Questions fréquentes.
          </h2>
        </div>

        <div className="flex flex-col gap-3">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className="overflow-hidden rounded-xl border border-[#0B1F3A]/8 bg-white"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="text-[14.5px] font-semibold text-[#0B1F3A]">
                    {faq.question}
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="shrink-0"
                  >
                    <ChevronDown className="h-4.5 w-4.5 text-[#1F7A4D]" />
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <p className="px-6 pb-5 text-[13.5px] leading-relaxed text-[#4B5A6E]">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
