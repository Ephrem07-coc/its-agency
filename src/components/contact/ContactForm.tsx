"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2, Loader2 } from "lucide-react";

const SERVICES = [
  "Développement Web",
  "Cybersécurité",
  "Conseil",
  "Transformation Digitale",
  "Autre",
];

const inputClass =
  "w-full rounded-lg border border-[#0B1F3A]/12 bg-white px-4 py-3 text-[14px] text-[#0B1F3A] outline-none transition-colors duration-200 placeholder:text-[#0B1F3A]/35 focus:border-[#1F7A4D]";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    setError(false);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("nom") as string,
      email: formData.get("email") as string,
      subject: formData.get("sujet") as string || "Contact ITS Agency",
      message: `
Nom: ${formData.get("nom")}
Entreprise: ${formData.get("entreprise") || "Non renseignée"}
Email: ${formData.get("email")}
Téléphone: ${formData.get("telephone") || "Non renseigné"}
Service: ${formData.get("service") || "Non renseigné"}

Message:
${formData.get("message")}
      `.trim(),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (result.success) {
        setSubmitted(true);
      } else {
        setError(true);
      }
    } catch (err) {
      console.error(err);
      setError(true);
    } finally {
      setSending(false);
    }
  }

  return (
    <section id="formulaire" className="bg-[#FBFAF6] px-6 py-20 lg:px-10">
      <div className="mx-auto max-w-[760px]">
        <div className="mb-10 text-center">
          <span className="mb-4 inline-block text-[11px] font-medium uppercase tracking-[0.2em] text-[#1F7A4D]">
            Écrivez-nous
          </span>
          <h2 className="text-3xl font-bold text-[#0B1F3A]">
            Parlons de votre projet.
          </h2>
        </div>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center gap-4 rounded-xl border border-[#1F7A4D]/20 bg-[#1F7A4D]/5 px-8 py-14 text-center"
          >
            <CheckCircle2 className="h-10 w-10 text-[#1F7A4D]" />
            <h3 className="text-[18px] font-semibold text-[#0B1F3A]">
              Message envoyé !
            </h3>
            <p className="max-w-sm text-[14px] text-[#4B5A6E]">
              Merci pour votre message. Notre équipe revient vers vous dans
              les meilleurs délais.
            </p>
          </motion.div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-[#0B1F3A]/8 bg-white p-8 shadow-[0_2px_10px_rgba(11,31,58,0.04)] lg:p-10"
          >
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="nom"
                  className="mb-2 block text-[12.5px] font-medium text-[#0B1F3A]/70"
                >
                  Nom
                </label>
                <input
                  id="nom"
                  name="nom"
                  type="text"
                  required
                  placeholder="Votre nom complet"
                  className={inputClass}
                />
              </div>

              <div>
                <label
                  htmlFor="entreprise"
                  className="mb-2 block text-[12.5px] font-medium text-[#0B1F3A]/70"
                >
                  Entreprise
                </label>
                <input
                  id="entreprise"
                  name="entreprise"
                  type="text"
                  placeholder="Nom de votre entreprise"
                  className={inputClass}
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-[12.5px] font-medium text-[#0B1F3A]/70"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="vous@entreprise.bj"
                  className={inputClass}
                />
              </div>

              <div>
                <label
                  htmlFor="telephone"
                  className="mb-2 block text-[12.5px] font-medium text-[#0B1F3A]/70"
                >
                  Téléphone
                </label>
                <input
                  id="telephone"
                  name="telephone"
                  type="tel"
                  placeholder="+229 XX XX XX XX"
                  className={inputClass}
                />
              </div>

              <div>
                <label
                  htmlFor="sujet"
                  className="mb-2 block text-[12.5px] font-medium text-[#0B1F3A]/70"
                >
                  Sujet
                </label>
                <input
                  id="sujet"
                  name="sujet"
                  type="text"
                  placeholder="Objet de votre message"
                  className={inputClass}
                />
              </div>

              <div>
                <label
                  htmlFor="service"
                  className="mb-2 block text-[12.5px] font-medium text-[#0B1F3A]/70"
                >
                  Service souhaité
                </label>
                <select
                  id="service"
                  name="service"
                  defaultValue=""
                  required
                  className={`${inputClass} appearance-none`}
                >
                  <option value="" disabled>
                    Sélectionnez un service
                  </option>
                  {SERVICES.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="mb-2 block text-[12.5px] font-medium text-[#0B1F3A]/70"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Décrivez votre projet ou votre besoin..."
                  className={`${inputClass} resize-none`}
                />
              </div>
            </div>

            {error && (
              <p className="mt-4 text-[14px] text-red-600">
                Erreur lors de l'envoi. Veuillez réessayer.
              </p>
            )}

            <button
              type="submit"
              disabled={sending}
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#1F7A4D] px-8 py-3.5 text-[14px] font-semibold text-white transition-colors duration-300 hover:bg-[#175c3b] disabled:opacity-60"
            >
              {sending ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Envoi en cours...
                </>
              ) : (
                <>
                  Envoyer
                  <Send className="h-4 w-4" />
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}