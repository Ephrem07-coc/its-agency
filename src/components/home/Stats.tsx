"use client";

import { motion, Variants } from "framer-motion";
import CountUp from "react-countup";

type Stat = {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
  isText?: boolean;
  displayText?: string;
};

const STATS: Stat[] = [
  { value: 4, label: "Expertises combinées" },
  { value: 100, suffix: "%", label: "Projets sur-mesure" },
  { value: 2026, label: "Année de création" },
  {
    value: 0,
    isText: true,
    displayText: "Continu",
    label: "Accompagnement, selon vos besoins",
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function Stats() {
  return (
    <section className="relative overflow-hidden bg-[#0B1F3A] px-6 py-20 lg:px-10">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(76,195,130,0.12), transparent 70%)",
        }}
      />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
        className="relative mx-auto grid max-w-[1180px] grid-cols-2 gap-10 lg:grid-cols-4 lg:gap-6"
      >
        {STATS.map((stat) => (
          <motion.div
            key={stat.label}
            variants={itemVariants}
            className="flex flex-col items-center text-center lg:items-start lg:text-left"
          >
            <div className="text-4xl font-bold text-white tracking-tight lg:text-5xl">
              {stat.isText ? (
                <span className="text-[#4CC382] font-semibold">{stat.displayText}</span>
              ) : (
                <>
                  {stat.prefix && <span className="mr-1">{stat.prefix}</span>}
                  <CountUp
                    end={stat.value}
                    duration={2}
                    separator=""
                    enableScrollSpy
                    scrollSpyOnce
                  />
                  {stat.suffix && (
                    <span className="text-[#4CC382] font-semibold">{stat.suffix}</span>
                  )}
                </>
              )}
            </div>
            <p className="mt-2 text-[13.5px] font-medium text-white/55">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}