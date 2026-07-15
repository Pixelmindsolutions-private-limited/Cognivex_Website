import { notFound } from "next/navigation";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import ServiceDetail from "../../../components/ServiceDetails";
import { services, getServiceBySlug } from "../../../data/Services";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import ChatBotIcon from "@/components/ChatBotIcon";
import ContactModal from "@/components/ContactModal";

// Pre-render every service at build time
export async function generateStaticParams() {
    return services.map((service) => ({
        slug: service.slug,
    }));
}

// Dynamic metadata
export async function generateMetadata({ params }) {
    const { slug } = await params;

    const service = getServiceBySlug(slug);

    if (!service) {
        return {
            title: "Service Not Found |Cognivex",
        };
    }

    return {
        title: `${service.title} | Cognivex`,
        description: service.shortDescription,
    };
}

export default async function ServicePage({ params }) {
    const { slug } = await params;

    const service = getServiceBySlug(slug);

    if (!service) {
        notFound();
    }

    const related = services
        .filter((s) => s.slug !== service.slug)
        .slice(0, 3);

    return (
        <>
            <WhatsAppIcon />
            <ChatBotIcon />
            <ContactModal />
            <Navbar />
            <ServiceDetail service={service} related={related} />
            <Footer />
        </>
    );
}