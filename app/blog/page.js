import Image from "next/image";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import PageHero from "../../components/shared/PageHero";
import Footer from "../../components/Footer";
import Container from "../../components/shared/Container";
import { blogs } from "../../data/blogs";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import ChatBotIcon from "@/components/ChatBotIcon";
import ContactModal from "@/components/ContactModal";

export const metadata = {
  title: "Blog | Cognivex",
};

export default function BlogPage() {
  return (
    <>
      <WhatsAppIcon />
      <ChatBotIcon />
      <ContactModal />
      <Navbar />

      <PageHero
        eyebrow="Cognivex Blog"
        title="Our Blog"
        description="Insights, technology trends and software guides."
        image="/images/blogImage.jpg"
      />

      <section className="py-24 sm:py-32 bg-surface">
        <Container>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogs.map((blog) => (
              <Link
                key={blog.slug}
                href={`/blog/${blog.slug}`}
                className="rounded-brand overflow-hidden bg-elevated border border-border hover:border-primary/40 transition-colors duration-300 group block"
              >
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                <div className="p-8">
                  <span className="text-secondary font-mono text-xs tracking-wider uppercase">
                    {blog.category}
                  </span>

                  <h2 className="text-2xl font-display font-semibold mt-4 text-ink">{blog.title}</h2>

                  <p className="text-ink-muted mt-4 font-body text-sm">{blog.date}</p>

                  <span className="mt-8 inline-block text-primary font-semibold font-body group-hover:text-secondary transition-colors">
                    Read More →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <Footer />
    </>
  );
}