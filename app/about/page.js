import Navbar from "../../components/Navbar";
import PageHero from "../../components/shared/PageHero";
import About from "../../components/About";
import WhyChooseUs from "../../components/WhyChooseUs";
import Process from "../../components/Process";
import Technologies from "../../components/Technologies";
import Stats from "../../components/Stats";
import CTA from "../../components/CTA";
import Footer from "../../components/Footer";

export const metadata = {
  title: "About | congnivexsolutions ",
  description: "Learn more about Cognivexsolutionsand our mission.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <PageHero
        eyebrow="About congnivexsolutions "
        title="About congnivexsolutions "
        description="Delivering innovative software solutions for businesses worldwide."
        image="/images/aboutImage.jpg"
      />

      <About />
      <WhyChooseUs />
      <Process />
      <Technologies />
      <Stats />
      <CTA />
      <Footer />
    </>
  );
}
