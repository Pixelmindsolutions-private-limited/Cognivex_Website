import { notFound } from "next/navigation";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import BlogDetail from "../../../components/BlogDetails";
import { blogs, getBlogBySlug } from "../../../data/blogs";

// Pre-render all blog pages
export async function generateStaticParams() {
  return blogs.map((post) => ({
    slug: post.slug,
  }));
}

// Dynamic metadata
export async function generateMetadata({ params }) {
  const { slug } = await params;

  const post = getBlogBySlug(slug);

  if (!post) {
    return {
      title: "Post Not Found | Cognivix",
    };
  }

  return {
    title: `${post.title} | Cognivix Blog`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;

  const post = getBlogBySlug(slug);

  if (!post) {
    notFound();
  }

  const related = blogs
    .filter((b) => b.slug !== post.slug)
    .slice(0, 3);

  return (
    <>
      <Navbar />
      <BlogDetail post={post} related={related} />
      <Footer />
    </>
  );
}