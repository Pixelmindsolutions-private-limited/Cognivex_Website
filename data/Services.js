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
    slug: "app-development",
    image: "https://placehold.co/1600x900/14141c/ff6b35?text=App+Development",
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
    slug: "web-development",
    image: "https://placehold.co/1600x900/14141c/ff6b35?text=Web+Development",
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
    slug: "digital-marketing",
    image: "https://placehold.co/1600x900/14141c/ff6b35?text=Digital+Marketing",
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
    slug: "ui-ux-design",
    image: "https://placehold.co/1600x900/14141c/ff6b35?text=UI%2FUX+Design",
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
    slug: "cloud-solutions",
    image: "https://placehold.co/1600x900/14141c/ff6b35?text=Cloud+Solutions",
    icon: "cloud",
    title: "Cloud Solutions",
    tagline: "Infrastructure that scales with you.",
    shortDescription:
      "Cloud deployment, AWS, Azure, Firebase and server infrastructure.",
    overview:
      "We design cloud infrastructure that scales predictably and fails gracefully — from a single Firebase backend for an early-stage app to a full multi-region AWS architecture for enterprise workloads. Every setup includes monitoring and cost controls from day one.",
    features: [
      { title: "Cloud Architecture", description: "AWS, Azure, or Firebase infrastructure sized to your actual traffic and budget." },
      { title: "CI/CD Pipelines", description: "Automated build, test, and deploy pipelines so releases are routine, not risky." },
      { title: "Monitoring & Alerting", description: "Real-time visibility into uptime, performance, and error rates." },
      { title: "Cost Optimization", description: "Right-sized infrastructure with ongoing cost reviews, not over-provisioned defaults." },
    ],
    deliverables: ["Infrastructure-as-code setup", "CI/CD pipeline", "Monitoring dashboards", "Runbook documentation"],
    techStack: ["AWS", "Azure", "Firebase", "Docker", "GitHub Actions"],
    timeline: "3–6 weeks initial setup",
  },
  {
    slug: "ai-solutions",
    image: "https://placehold.co/1600x900/14141c/ff6b35?text=AI+Solutions",
    icon: "ai",
    title: "AI Solutions",
    tagline: "Automation that actually ships.",
    shortDescription:
      "AI chatbots, automation, machine learning and intelligent systems.",
    overview:
      "We build AI features that solve a specific business problem — a support chatbot that actually resolves tickets, a recommendation engine that lifts conversion, an internal tool that automates a manual process. We start from the workflow, not the model.",
    features: [
      { title: "AI Chatbots", description: "Conversational assistants trained on your own data and integrated into your product." },
      { title: "Process Automation", description: "Automating manual, repetitive workflows across your internal tools." },
      { title: "Custom ML Models", description: "Recommendation, classification, or forecasting models built for your specific data." },
      { title: "LLM Integration", description: "Production integration of large language models with proper guardrails and monitoring." },
    ],
    deliverables: ["Working AI feature in production", "Model evaluation report", "Monitoring & feedback loop", "Documentation & handoff"],
    techStack: ["Python", "OpenAI", "TensorFlow", "LangChain", "Node.js"],
    timeline: "4–12 weeks",
  },
];

export function getServiceBySlug(slug) {
  return services.find((s) => s.slug === slug);
}
