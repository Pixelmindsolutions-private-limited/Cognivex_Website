import Navbar from "../../components/Navbar";
import PageHero from "../../components/shared/PageHero";
import Contact from "../../components/Contact";
import FAQ from "../../components/FAQ";
import Footer from "../../components/Footer";

export const metadata = {
  title: "Contact | congnivexsolutions ",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <PageHero
        eyebrow="Get In Touch"
        title="Contact Us"
        description="We'd love to hear about your next project."
        image="/images/contactImage.jpg"
      />

      <Contact />
      <FAQ />
      <Footer />
    </>
  );
}
