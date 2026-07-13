/**
 * data/services.js
 * ---------------------------------------------------------------------------
 * Single source of truth for every service: the homepage Services grid and
 * the /services/[slug] detail pages both read from this file instead of
 * keeping their own copy — add a service here once and it appears in both
 * places automatically, with a working detail page for free.
 *
 * `icon` is a string key, not JSX, so this file stays a plain server-safe
 * module — see components/ServiceIcon.jsx for the key → icon component map.
 *
 * `image` is a hero background photo for the detail page — swap the
 * placehold.co URLs below for real photos whenever you have them (they use
 * the same hostname already allowlisted in next.config for Portfolio/Blog).
 * ---------------------------------------------------------------------------
 */
export const services = [
  {
    slug: "web-development",
    image: '/images/Web.png',
    icon: "laptop",
    title: "Web Development",
    tagline: "Fast, scalable, built to grow.",
    shortDescription:
      "Modern websites using React, Next.js, Node.js and scalable backend solutions.",
    overview:
      "From marketing sites to full-scale web applications, we build on React and Next.js for speed and SEO out of the box, backed by Node.js services that scale with your traffic. Every project is built with clean component architecture so your team — or ours — can keep extending it long after launch.",
    features: [
      { title: "Next.js & React", description: "Server-rendered, SEO-friendly, and fast by default on every page." },
      { title: "Scalable Backend", description: "Node.js APIs and database architecture designed to handle growth without a rewrite." },
      { title: "Admin Dashboards", description: "Custom internal tools for managing content, users, and operations." },
      { title: "Performance Optimization", description: "Core Web Vitals, image optimization, and caching tuned for real-world speed." },
    ],
    deliverables: ["Production-ready codebase", "Admin dashboard (if applicable)", "Deployment & hosting setup", "Performance audit report"],
    techStack: ["Next.js", "React", "Node.js", "MongoDB", "Tailwind CSS"],
    timeline: "4–10 weeks",
  },
  {
    slug: "app-development",
    image: "/images/App.png",
    icon: "mobile",
    title: "App Development",
    tagline: "Native speed, cross-platform reach.",
    shortDescription:
      "Build high-performance Android, iOS and Flutter applications for your business.",
    overview:
      "We design and build mobile applications that feel native on every device, using Flutter for a single codebase across Android and iOS, or fully native Kotlin/Swift when a project demands platform-specific performance. Every app ships with analytics, crash reporting, and CI/CD pipelines already wired in — so you can measure usage and ship updates from day one.",
    features: [
      { title: "Cross-Platform & Native", description: "Flutter for shared codebases, or native Kotlin/Swift when performance or platform APIs demand it." },
      { title: "Offline-First Architecture", description: "Local caching and sync strategies so your app stays usable without a connection." },
      { title: "Push Notifications & Deep Linking", description: "Full notification infrastructure and deep-link routing configured out of the box." },
      { title: "App Store & Play Store Launch", description: "We handle listing assets, review compliance, and submission end-to-end." },
    ],
    deliverables: ["Source code & documentation", "CI/CD pipeline", "App Store & Play Store listings", "Analytics dashboard"],
    techStack: ["Flutter", "Kotlin", "Swift", "Firebase", "Node.js"],
    timeline: "6–14 weeks",
  },
  {
    slug: "digital-marketing",
    image: "/images/Digital.png",
    icon: "marketing",
    title: "Digital Marketing",
    tagline: "Grow your reach, measurably.",
    shortDescription:
      "SEO, Google Ads, Social Media Marketing and branding strategies.",
    overview:
      "We build marketing programs around measurable outcomes — organic search visibility, paid acquisition efficiency, and brand consistency across channels. Every campaign ships with a reporting dashboard so you always know what's working and what isn't.",
    features: [
      { title: "Search Engine Optimization", description: "Technical, on-page, and content SEO to grow organic traffic sustainably." },
      { title: "Paid Advertising", description: "Google Ads and social campaigns managed for cost-efficient acquisition." },
      { title: "Social Media Strategy", description: "Content calendars and channel strategy tailored to your audience." },
      { title: "Brand Identity", description: "Consistent visual and messaging guidelines across every touchpoint." },
    ],
    deliverables: ["SEO audit & roadmap", "Campaign dashboards", "Monthly performance reports", "Brand style guide"],
    techStack: ["Google Ads", "Meta Ads", "Google Analytics", "SEMrush", "HubSpot"],
    timeline: "Ongoing, monthly retainer",
  },
  {
    slug: "web-app-maintenance",
    image: "/images/WebMain.png",
    icon: "maintenance",
    title: "Web/App Maintenance",
    tagline: "Keep your digital assets running smoothly.",
    shortDescription:
      "Ongoing maintenance, updates, security patches and performance monitoring for your web and mobile applications.",
    overview:
      "We provide comprehensive maintenance services to keep your web and mobile applications secure, up-to-date, and performing optimally. From security patches and dependency updates to performance monitoring and bug fixes, we ensure your digital products remain reliable and efficient over time.",
    features: [
      { title: "Security Updates", description: "Regular security patches and vulnerability assessments to keep your applications safe." },
      { title: "Performance Monitoring", description: "24/7 monitoring of application performance, uptime, and user experience metrics." },
      { title: "Bug Fixes & Optimizations", description: "Prompt resolution of issues and ongoing performance optimizations." },
      { title: "Dependency Management", description: "Keeping all libraries, frameworks, and dependencies current and secure." },
    ],
    deliverables: ["Monthly maintenance reports", "Security audit logs", "Performance dashboards", "Update & patch documentation"],
    techStack: ["AWS", "CloudWatch", "Sentry", "New Relic", "GitHub"],
    timeline: "Ongoing, monthly retainer",
  },
  {
    slug: "software-development",
    image: "/images/Software.png",
    icon: "software",
    title: "Software Development",
    tagline: "Custom software tailored to your needs.",
    shortDescription:
      "Custom software solutions, enterprise applications, and internal tools for your business.",
    overview:
      "We build custom software solutions that solve complex business problems. Whether it's enterprise resource planning, internal workflow tools, or specialized business applications, we create robust, scalable software that integrates seamlessly with your existing systems and grows with your business.",
    features: [
      { title: "Custom Enterprise Solutions", description: "Tailored software designed specifically for your business processes and requirements." },
      { title: "Internal Tools & Dashboards", description: "Custom administrative interfaces and operational tools for your team." },
      { title: "Legacy System Modernization", description: "Upgrading and modernizing existing software systems to current standards." },
      { title: "API Development & Integration", description: "Building and integrating APIs for seamless system communication." },
    ],
    deliverables: ["Custom software application", "Source code & documentation", "API documentation", "Deployment guide"],
    techStack: ["Python", "Java", "Node.js", "React", "PostgreSQL"],
    timeline: "8–20 weeks",
  },
  {
    slug: "ui-ux-design",
    image: "/images/UIUX.png",
    icon: "design",
    title: "UI / UX Design",
    tagline: "Interfaces people enjoy using.",
    shortDescription:
      "Beautiful and user-friendly interfaces designed to maximize conversions.",
    overview:
      "Good design is a conversion strategy, not a coat of paint. We research how your users actually behave, then design flows and interfaces that reduce friction at every step — from first landing to final checkout or signup.",
    features: [
      { title: "User Research", description: "Interviews, analytics review, and competitive audits before a single screen is drawn." },
      { title: "Wireframing & Prototyping", description: "Clickable prototypes you can test before development begins." },
      { title: "Design Systems", description: "Reusable component libraries that keep your product consistent as it grows." },
      { title: "Conversion-Focused UI", description: "Layouts and flows designed around your actual funnel, not generic best practice." },
    ],
    deliverables: ["Figma design files", "Interactive prototype", "Design system / component library", "Handoff documentation for developers"],
    techStack: ["Figma", "Framer", "Adobe Illustrator", "Maze"],
    timeline: "3–8 weeks",
  },
  {
    slug: "ecommerce-development",
    image: "/images/Eweb.png",
    icon: "ecommerce",
    title: "E-Commerce Development",
    tagline: "Online stores that convert.",
    shortDescription:
      "Custom e-commerce solutions, online stores, and payment integrations.",
    overview:
      "We build e-commerce solutions that deliver seamless shopping experiences. From custom online stores to complex marketplace platforms, we integrate secure payment gateways, inventory management, and customer analytics to help you sell more effectively online.",
    features: [
      { title: "Custom Online Stores", description: "Tailored e-commerce websites designed for your specific products and audience." },
      { title: "Payment Gateway Integration", description: "Secure integration with multiple payment processors and fraud prevention." },
      { title: "Inventory Management", description: "Real-time inventory tracking and automated stock management systems." },
      { title: "Analytics & Conversion Optimization", description: "Comprehensive analytics and tools to optimize your conversion funnel." },
    ],
    deliverables: ["E-commerce platform", "Payment gateway setup", "Inventory management system", "Analytics dashboard"],
    techStack: ["Shopify", "WooCommerce", "Stripe", "PayPal", "Next.js"],
    timeline: "6–16 weeks",
  },
];

export function getServiceBySlug(slug) {
  return services.find((s) => s.slug === slug);
}