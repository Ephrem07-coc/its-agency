import Hero from "@/components/home/Hero";
import About from "@/components/about/About";
import Services from "@/components/home/Services";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Stats from "@/components/home/Stats";
import PortfolioGrid from "@/components/portfolio/PortfolioGrid";
import ContactInfo from "@/components/contact/ContactInfo";
import ContactForm from "@/components/contact/ContactForm";
import FAQ from "@/components/home/FAQ";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <PortfolioGrid />
      <WhyChooseUs />
      <ContactInfo />
      <ContactForm />
      <FAQ />
    </>
  );
}