"use client";

import { motion, Variants } from "framer-motion";
import { Code2, Briefcase, ShieldCheck, Globe2, Check } from "lucide-react";
import PageHeader from "@/components/common/PageHeader";

const DETAILED_SERVICES = [
  {
    id: "dev-web",
    icon: Code2,
    title: "Développement Web Haute Performance",
    description: "Nous concevons des plateformes web robustes, scalables et centrées sur l'utilisateur. Du site vitrine au portail applicatif, chaque ligne de code est pensée pour la vitesse et le référencement mondial.",
    features: ["Architecture Next.js & React moderne", "Optimisation SEO internationale multi-langues", "Interface administration sur-mesure", "Temps de chargement inférieur à 1 seconde"],
  },
  {
    id: "applications-metier",
    icon: Briefcase,
    title: "Applications Métier & Automatisation",
    description: "Digitalisez vos processus internes sans bouleverser vos équipes. Nous développons des outils sur-mesure qui s'intègrent à votre quotidien pour éliminer les tâches répétitives et centraliser vos données.",
    features: ["CRM et ERP sur-mesure adaptés à vos règles", "Tableaux de bord et reporting en temps réel", "Automatisation de workflows complexes", "Synchronisation avec vos outils existants"],
  },
  {
    id: "cybersecurite",
    icon: ShieldCheck,
    title: "Cybersécurité & Audit d'Infrastructure",
    description: "La sécurité n'est pas une option qu'on ajoute à la fin. Nous protégeons vos actifs numériques les plus précieux contre les menaces modernes en appliquant des audits et des architectures réseau stricts.",
    features: ["Audits de vulnérabilité et tests d'intrusion", "Chiffrement de bout en bout des données sensibles", "Mise en conformité aux standards internationaux", "Configuration de pare-feu et surveillance continue"],
  },
  {
    id: "conseil-international",
    icon: Globe2,
    title: "Conseil & Stratégie d'Expansion",
    description: "Se lancer à l'international nécessite une préparation technique, juridique et logistique fine. Nous cadrons votre expansion export avant d'écrire la première ligne de code pour garantir la viabilité de votre projet.",
    features: ["Analyse de conformité réglementaire transfrontalière", "Étude de faisabilité technique et monétaire", "Stratégie de positionnement sur les marchés cibles", "Accompagnement au déploiement multizone"],
  },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Nos expertises"
        title="Des solutions d'ingénierie taillées pour la croissance."
        description="Nous fusionnons le conseil stratégique, l'implémentation logicielle d'élite et la sécurité informatique pour armer votre entreprise sur le marché mondial."
      />

      <section className="bg-[#FBFAF6] px-6 py-24 lg:px-10">
        <div className="mx-auto max-w-[1080px] flex flex-col gap-24 lg:gap-32">
          {DETAILED_SERVICES.map((service, index) => {
            const Icon = service.icon;
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={service.id}
                id={service.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeUp}
                className={`scroll-mt-24 flex flex-col gap-10 lg:flex-row lg:items-center ${
                  isEven ? "" : "lg:flex-row-reverse"
                }`}
              >
                {/* Bloc d'illustration / Icône géante */}
                <div className="flex-1 flex justify-center">
                  <div className="relative flex h-64 w-full max-w-[420px] items-center justify-center rounded-2xl border border-[#0B1F3A]/8 bg-white shadow-[0_4px_20px_rgba(11,31,58,0.02)] lg:h-80">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#1F7A4D]/5 to-transparent rounded-2xl" />
                    <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-[#0B1F3A] text-white lg:h-20 lg:w-20">
                      <Icon className="h-8 w-8 text-[#4CC382] lg:h-10 lg:w-10" />
                    </div>
                  </div>
                </div>

                {/* Contenu textuel */}
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-[#0B1F3A] lg:text-3xl tracking-tight">
                    {service.title}
                  </h2>
                  <p className="mt-4 text-[15px] leading-relaxed text-[#4B5A6E]">
                    {service.description}
                  </p>

                  <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5">
                        <div className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#1F7A4D]/10 text-[#1F7A4D]">
                          <Check className="h-3 w-3 stroke-[3]" />
                        </div>
                        <span className="text-[13.5px] font-medium text-[#0B1F3A]/80">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>
    </>
  );
}