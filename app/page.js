import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Clients from "../components/Clients";
import Services from "../components/Services";
import About from "../components/About";
import WhyChooseUs from "../components/WhyChooseUs";
import Process from "../components/Process";
import Technologies from "../components/Technologies";
import Portfolio from "../components/Portfolio";
import Stats from "../components/Stats";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import Contact from "../components/Contact";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import ContactModal from "@/components/ContactModal";

export default function Home() {
  return (
    <>
      <ContactModal />
      <Navbar />
      <Hero />
      <Clients />
      <Services />
      <About />
      <WhyChooseUs />
      <Process />
      <Technologies />
      <Portfolio />
      <Stats />
      <Testimonials />
      <FAQ />
      <Contact />
      <CTA />
      <Footer />
    </>
  );
}