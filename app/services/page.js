import Navbar from "../../components/Navbar";
import PageHero from "../../components/shared/PageHero";
import Services from "../../components/Services";
import Technologies from "../../components/Technologies";
import FAQ from "../../components/FAQ";
import CTA from "../../components/CTA";
import Footer from "../../components/Footer";

export const metadata = {
  title: "Services | congnivexsolutions ",
};

export default function ServicesPage() {
  return (
    <>
      <Navbar />

      <PageHero
        eyebrow="What We Do"
        title="Our Services"
        description="Web Development, Mobile Apps, AI Solutions, Digital Marketing and Cloud Services."
        image="/images/serviceImage.jpg"
      />

      <Services />
      <Technologies />
      <FAQ />
      <CTA />
      <Footer />
    </>
  );
}
