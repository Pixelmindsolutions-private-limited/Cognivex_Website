import Image from "next/image";
import Navbar from "../../components/Navbar";
import PageHero from "../../components/shared/PageHero";
import Footer from "../../components/Footer";
import Container from "../../components/shared/Container";

const blogs = [
  { title: "Top Web Development Trends in 2026", date: "July 2026", category: "Web Development" },
  { title: "Flutter vs React Native", date: "June 2026", category: "Mobile Development" },
  { title: "AI is Transforming Business", date: "May 2026", category: "Artificial Intelligence" },
  { title: "SEO Strategies That Actually Work", date: "April 2026", category: "Digital Marketing" },
  { title: "Why Next.js is the Future", date: "March 2026", category: "Next.js" },
  { title: "Cloud Computing for Startups", date: "February 2026", category: "Cloud" },
];

export const metadata = {
  title: "Blog | Cognivix",
};

export default function BlogPage() {
  return (
    <>
      <Navbar />

      <PageHero
        eyebrow="CognivexsolutionsBlog"
        title="Our Blog"
        description="Insights, technology trends and software guides."
        image="/images/blogImage.jpg"
      />

      <section className="py-24 sm:py-32 bg-surface">
        <Container>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogs.map((blog) => (
              <div
                key={blog.title}
                className="rounded-brand overflow-hidden bg-elevated border border-border hover:border-primary/40 transition-colors duration-300 group"
              >
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src="/images/blogImage.jpg"
                    alt={blog.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                <div className="p-8">
                  <span className="text-secondary font-mono text-xs tracking-wider uppercase">{blog.category}</span>

                  <h2 className="text-2xl font-display font-semibold mt-4 text-ink">{blog.title}</h2>

                  <p className="text-ink-muted mt-4 font-body text-sm">{blog.date}</p>

                  <button className="mt-8 text-primary font-semibold font-body group-hover:text-secondary transition-colors">
                    Read More →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <Footer />
    </>
  );
}
