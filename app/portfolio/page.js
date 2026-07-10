import Navbar from "../../components/Navbar";
import PageHero from "../../components/shared/PageHero";
import Portfolio from "../../components/Portfolio";
import Testimonials from "../../components/Testimonials";
import CTA from "../../components/CTA";
import Footer from "../../components/Footer";

export const metadata = {
  title: "Portfolio | congnivexsolutions ",
};

export default function PortfolioPage() {
  return (
    <>
      <Navbar />

      <PageHero
        eyebrow="Our Work"
        title="Our Portfolio"
        description="Explore some of our latest software, website and mobile app projects."
        image="/images/PortfolioImage.jpg"
      />

      <Portfolio />
      <Testimonials />
      <CTA />
      <Footer />
    </>
  );
}
