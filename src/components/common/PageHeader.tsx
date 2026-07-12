"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

type PageHeaderProps = {
  eyebrow: string;
  title: string;
  description: string;
  children?: ReactNode;
};

export default function PageHeader({ eyebrow, title, description, children }: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden bg-[#0B1F3A] px-6 pt-36 pb-20 lg:px-10 lg:pt-44 lg:pb-28">
      {/* Halo lumineux hérité du style Hero */}
      <div
        className="pointer-events-none absolute inset-0 opacity-50"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(76,195,130,0.15), transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-[1080px] text-center">
        <motion.span
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-4 inline-block text-[11px] font-medium uppercase tracking-[0.2em] text-[#4CC382]"
        >
          {eyebrow}
        </motion.span>
        
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="mx-auto max-w-3xl text-3xl font-bold text-white tracking-tight lg:text-5xl lg:leading-[1.15]"
        >
          {title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mx-auto mt-6 max-w-2xl text-[15.5px] leading-relaxed text-white/70 lg:text-[16.5px]"
        >
          {description}
        </motion.p>

        {children && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="mt-8"
          >
            {children}
          </motion.div>
        )}
      </div>
    </section>
  );
}