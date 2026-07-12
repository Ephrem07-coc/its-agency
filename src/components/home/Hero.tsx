"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1] as const;

const titleContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.45 },
  },
};

const wordVariant: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: EASE },
  },
};

const LINE_1 = ["Propulser", "l'économie", "locale"];
const LINE_2 = ["sur", "l'échiquier"];
const HIGHLIGHT = "international.";

export default function Hero() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#0B1F3A] font-sans">
      <section className="relative flex min-h-screen items-center justify-center pt-24">
        {/* Image de fond avec zoom lent en continu (effet Ken Burns) */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <motion.div
            animate={{ scale: [1, 1.08, 1] }}
            transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image
              src="/images/hero/hero-bg.jpg"
              alt="ITS Global Infrastructure"
              fill
              priority
              className="object-cover object-center opacity-50"
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B1F3A] via-[#0B1F3A]/85 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A] via-transparent to-[#0B1F3A]/40" />
        </div>

        {/* Contenu principal — tout centré */}
        <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center px-6 py-12 text-center lg:px-8">
          {/* Logo — entrée + flottement continu */}
          <motion.div
            initial={{ opacity: 0, y: -12, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5, ease: EASE }}
            className="mb-6 flex h-24 w-24 items-center justify-center rounded-2xl bg-white p-3 shadow-[0_16px_40px_rgba(0,0,0,0.3)] sm:h-28 sm:w-28"
          >
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative h-full w-full"
            >
              <Image
                src="/images/logo/logo1.jpeg"
                alt="ITS Agency"
                fill
                className="rounded-xl object-contain"
                priority
              />
            </motion.div>
          </motion.div>

          {/* Badge texte — apparaît avant le titre */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: EASE }}
            className="mb-6 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-sm"
          >
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#4CC382]">
              Sécurité &amp; Transformation Numérique
            </span>
          </motion.div>

          {/* Titre principal — mot par mot */}
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={titleContainer}
            className="text-4xl font-black leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl"
          >
            {LINE_1.map((word) => (
              <motion.span
                key={word}
                variants={wordVariant}
                className="mr-3 inline-block"
              >
                {word}
              </motion.span>
            ))}
            <br className="hidden lg:inline" />
            {LINE_2.map((word) => (
              <motion.span
                key={word}
                variants={wordVariant}
                className="mr-3 inline-block"
              >
                {word}
              </motion.span>
            ))}
            <motion.span
              variants={wordVariant}
              className="inline-block bg-gradient-to-r from-white via-white to-[#4CC382] bg-clip-text text-transparent"
            >
              {HIGHLIGHT}
            </motion.span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0, ease: EASE }}
            className="mx-auto mt-8 max-w-2xl text-base font-light leading-relaxed text-white/70 sm:text-lg lg:text-xl"
          >
            ITS Agency accompagne les entreprises et institutions dans leur
            expansion globale à travers des architectures numériques
            sécurisées, du conseil stratégique et la maîtrise des flux du
            commerce international.
          </motion.p>

          {/* Puces d'expertises */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1, ease: EASE }}
            className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs font-semibold uppercase tracking-wider text-[#4CC382]"
          >
            <span>Conseil Stratégique</span>
            <span className="text-white/20">•</span>
            <span>Développement Web Premium</span>
            <span className="text-white/20">•</span>
            <span>Audit Cybersécurité</span>
            <span className="text-white/20">•</span>
            <span>Commerce International</span>
          </motion.div>

          {/* CTA principaux — arrivent en dernier */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2, ease: EASE }}
            className="mt-12 flex flex-wrap justify-center gap-4"
          >
            <Link
              href="/contact"
              className="rounded-lg bg-[#4CC382] px-8 py-4 text-sm font-bold text-[#0B1F3A] shadow-lg shadow-[#4CC382]/20 transition-all hover:scale-[1.01] hover:bg-[#3db072] hover:shadow-[#4CC382]/30 active:scale-[0.99]"
            >
              Mandater l&apos;agence
            </Link>
            <Link
              href="/services"
              className="rounded-lg border-2 border-white/20 bg-transparent px-8 py-4 text-sm font-bold text-white transition-all hover:border-white/40 hover:bg-white/5 active:scale-[0.99]"
            >
              Consulter nos expertises
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
