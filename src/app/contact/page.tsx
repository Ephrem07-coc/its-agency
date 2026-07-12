import PageHeader from "@/components/common/PageHeader";
import ContactInfo from "@/components/contact/ContactInfo";
import ContactForm from "@/components/contact/ContactForm";
import FAQ from "@/components/home/FAQ";

interface ContactPageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function ContactPage({ searchParams }: ContactPageProps) {
  const resolvedParams = await searchParams;
  const isSolo = resolvedParams.solo === "true";

  return (
    <main className="min-h-screen pt-24 bg-[#FBFAF6]">
      {/* Si isSolo est vrai, on masque tout le reste et on met uniquement le formulaire */}
      {isSolo ? (
        <ContactForm />
      ) : (
        <>
          <PageHeader
            eyebrow="Contact"
            title="Contactez-nous."
            description="Une question, un projet à cadrer ? Notre équipe vous répond rapidement."
          />
          <ContactInfo />
          <ContactForm />
          <FAQ />
        </>
      )}
    </main>
  );
}