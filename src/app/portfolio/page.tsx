import PageHeader from "@/components/common/PageHeader";
import ContactInfo from "@/components/contact/ContactInfo";
import ContactForm from "@/components/contact/ContactForm";
import FAQ from "@/components/home/FAQ";


export default function ContactPage() {
  return (
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
  );
}
