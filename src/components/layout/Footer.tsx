import Link from "next/link";
import Image from "next/image";

const NAV_LINKS = [
  { label: "Accueil", href: "/" },
  { label: "À propos", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Notre différence", href: "/notre-difference" },
  { label: "Méthodologie", href: "/notre-methodologie" },
];

const SERVICES_LINKS = [
  { label: "Développement Web", href: "/services#dev-web" },
  { label: "Applications métier", href: "/services#applications-metier" },
  { label: "Cybersécurité", href: "/services#cybersecurite" },
  { label: "Conseil à l'international", href: "/services#conseil" },
];

// SVG inline pour tous les réseaux sociaux
const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect width="4" height="12" x="2" y="9"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

const FacebookIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const SOCIAL_LINKS = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/its-agency-0b1502421",
    icon: LinkedinIcon,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61592029040538",
    icon: FacebookIcon,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/itsagency.bj",
    icon: InstagramIcon,
  },
];

function FooterLogo() {
  return (
    <Link href="/" className="flex shrink-0 items-center">
      <div className="relative h-10 w-44 sm:h-11 sm:w-48">
        <Image
          src="/images/logo/logo2.jpeg"
          alt="ITS Agency"
          fill
          className="object-contain object-left"
          priority
        />
      </div>
    </Link>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[#0B1F3A] px-6 pt-20 pb-8 lg:px-10">
      <div className="mx-auto max-w-[1280px]">
        <div className="grid grid-cols-1 gap-12 pb-16 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {/* Colonne 1 — Agence */}
          <div>
            <FooterLogo />
            <p className="mt-5 max-w-[240px] text-[13.5px] leading-relaxed text-white/50">
              Conseil &amp; Prestations en e-commerce international sécurisé,
              pour propulser les PME locales sur le web mondial.
            </p>

            {/* Réseaux sociaux */}
            <div className="mt-6 flex gap-3">
              {SOCIAL_LINKS.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/60 transition-all duration-300 hover:-rotate-6 hover:scale-110 hover:border-[#4CC382]/40 hover:bg-[#4CC382]/10 hover:text-[#4CC382]"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Colonne 2 — Navigation */}
          <div>
            <h3 className="mb-5 text-[12px] font-semibold uppercase tracking-[0.14em] text-white/40">
              Navigation
            </h3>
            <ul className="flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[13.5px] text-white/65 transition-colors duration-200 hover:text-[#4CC382]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Colonne 3 — Services */}
          <div>
            <h3 className="mb-5 text-[12px] font-semibold uppercase tracking-[0.14em] text-white/40">
              Services
            </h3>
            <ul className="flex flex-col gap-3">
              {SERVICES_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[13.5px] text-white/65 transition-colors duration-200 hover:text-[#4CC382]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Colonne 4 — Contact */}
          <div>
            <h3 className="mb-5 text-[12px] font-semibold uppercase tracking-[0.14em] text-white/40">
              Contact
            </h3>
            <ul className="flex flex-col gap-3 text-[13.5px] text-white/65">
              <li>
                <a
                  href="mailto:itsagency.bj@gmail.com"
                  className="transition-colors hover:text-[#4CC382]"
                >
                  itsagency.bj@gmail.com
                </a>
              </li>
              <li>Cotonou, Bénin</li>
              <li>Afrique de l&apos;Ouest</li>
            </ul>
          </div>
        </div>

        {/* Barre de copyright */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-[12.5px] text-white/40">
            © 2026 ITS Agency. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}