export const SITE = {
  name: "Elhoucine Ezzariba",
  shortName: "Ezzariba",
  role: "Frontend-Entwickler",
  email: "el.ezzariba@gmail.com",
  location: "Köln, Deutschland",
  githubUrl: null as string | null,
  linkedinUrl: null as string | null,
  cvUrl: null as string | null,
  domain: "ezzariba.com",
  url: "https://ezzariba.com",
  baseDemoUrl: "https://ezzariba.com",
} as const;

export type Language = "de" | "en";

export const translations = {
  de: {
    nav: {
      about: "Profil",
      featured: "Highlights",
      projects: "Projekte",
      skills: "Skills",
      contact: "Kontakt",
    },
    hero: {
      badge: "Offen für Werkstudent · Teilzeit · Vollzeit",
      title: "Ich baue Web-Erlebnisse,",
      titleAccent: "die Recruiter merken.",
      subtitle:
        "Frontend-Entwickler mit Fokus auf React, Next.js und TypeScript. Ich entwickle skalierbare Interfaces, Echtzeit-Apps und KI-gestützte Dashboards — von der Idee bis zur Live-Demo.",
      ctaPrimary: "Highlights ansehen",
      ctaSecondary: "Kontakt aufnehmen",
      stats: {
        projects: "Projekte",
        featured: "Highlight-Apps",
        stack: "Tech-Stack",
      },
    },
    about: {
      tag: "01 — Profil",
      title: "Technisches Handwerk trifft Produktverständnis.",
      text: "Ich studiere Wirtschaftsinformatik an der TH Köln und verbinde moderne Frontend-Entwicklung mit betriebswirtschaftlichem Denken. Meine Projekte sind keine Tutorial-Klone — es sind vollständige Anwendungen mit durchdachtem UI, sauberer Architektur und echtem Nutzerfokus.",
      highlights: [
        { label: "Studium", value: "Wirtschaftsinformatik · TH Köln" },
        { label: "Fokus", value: "React · Next.js · TypeScript" },
        { label: "Stärke", value: "UI/UX · Echtzeit · KI-Integration" },
        { label: "Verfügbar", value: "Werkstudent · Teilzeit · Vollzeit" },
      ],
    },
    featured: {
      tag: "02 — Highlights",
      title: "Projekte, die zeigen, was ich kann.",
      subtitle:
        "Fünf vollständige Anwendungen — von Echtzeit-Kollaboration über Workflow-Automation bis hin zu KI-Dashboards.",
    },
    other: {
      tag: "03 — Weitere Projekte",
      title: "Pure Frontend-Craft.",
      subtitle:
        "Dashboards, Apps und Interfaces — gebaut mit React, TypeScript und Tailwind. Ohne Backend-Abhängigkeiten, mit Fokus auf UI und UX.",
    },
    skills: {
      tag: "04 — Skills",
      title: "Mein Werkzeugkasten.",
      subtitle: "Technologien und Methoden, die ich täglich einsetze.",
      categories: [
        {
          title: "Frontend Core",
          items: [
            "React",
            "Next.js",
            "TypeScript",
            "JavaScript",
            "HTML5",
            "CSS3",
            "Tailwind CSS",
          ],
        },
        {
          title: "UI & Animation",
          items: [
            "Framer Motion",
            "React Flow",
            "Chart.js",
            "Responsive Design",
            "Design Systems",
            "Glassmorphism",
          ],
        },
        {
          title: "Backend & Services",
          items: [
            "Firebase",
            "REST APIs",
            "OpenAI / Claude API",
            "Weather API",
            "SQL",
          ],
        },
        {
          title: "Tools & Workflow",
          items: [
            "Git & GitHub",
            "Vercel",
            "Cursor & AI Coding",
            "Figma",
            "Agile",
          ],
        },
      ],
    },
    process: {
      tag: "05 — Arbeitsweise",
      title: "So arbeite ich.",
      steps: [
        {
          title: "Verstehen",
          desc: "Anforderungen klären, User Flows skizzieren, technische Machbarkeit prüfen.",
        },
        {
          title: "Designen",
          desc: "Wireframes, UI-Konzept, Komponenten-Architektur und Design Tokens.",
        },
        {
          title: "Entwickeln",
          desc: "Komponentenbasiert, typisiert, testbar — mit modernen Best Practices.",
        },
        {
          title: "Liefern",
          desc: "Deployment, Performance-Check, responsive Testing und Iteration.",
        },
      ],
    },
    contact: {
      tag: "06 — Kontakt",
      title: "Lassen Sie uns sprechen.",
      subtitle:
        "Ich suche eine Einstiegsposition als Frontend- oder Webentwickler. Ob Werkstudent, Teilzeit oder Vollzeit — ich freue mich auf Ihre Nachricht.",
      email: "E-Mail senden",
      cv: "Lebenslauf",
      cvSoon: "Demnächst",
    },
    footer: "Gebaut mit Next.js, React & TypeScript",
    liveDemo: "Live Demo",
    frontendOnly: "Frontend",
    featuredBadge: "Highlight",
  },
  en: {
    nav: {
      about: "About",
      featured: "Highlights",
      projects: "Projects",
      skills: "Skills",
      contact: "Contact",
    },
    hero: {
      badge: "Open for Working Student · Part-Time · Full-Time",
      title: "I build web experiences",
      titleAccent: "recruiters remember.",
      subtitle:
        "Frontend developer focused on React, Next.js and TypeScript. I build scalable interfaces, real-time apps and AI-powered dashboards — from idea to live demo.",
      ctaPrimary: "View highlights",
      ctaSecondary: "Get in touch",
      stats: {
        projects: "Projects",
        featured: "Featured Apps",
        stack: "Tech Stack",
      },
    },
    about: {
      tag: "01 — Profile",
      title: "Technical craft meets product thinking.",
      text: "I study Business Informatics at TH Köln and combine modern frontend development with business perspective. My projects are not tutorial clones — they are complete applications with thoughtful UI, clean architecture and real user focus.",
      highlights: [
        { label: "Education", value: "Business Informatics · TH Köln" },
        { label: "Focus", value: "React · Next.js · TypeScript" },
        { label: "Strength", value: "UI/UX · Real-time · AI Integration" },
        { label: "Available", value: "Working Student · Part-Time · Full-Time" },
      ],
    },
    featured: {
      tag: "02 — Highlights",
      title: "Projects that show what I can do.",
      subtitle:
        "Five complete applications — from real-time collaboration to workflow automation and AI dashboards.",
    },
    other: {
      tag: "03 — More Projects",
      title: "Pure frontend craft.",
      subtitle:
        "Dashboards, apps and interfaces — built with React, TypeScript and Tailwind. No backend dependencies, focused on UI and UX.",
    },
    skills: {
      tag: "04 — Skills",
      title: "My toolkit.",
      subtitle: "Technologies and methods I use daily.",
      categories: [
        {
          title: "Frontend Core",
          items: [
            "React",
            "Next.js",
            "TypeScript",
            "JavaScript",
            "HTML5",
            "CSS3",
            "Tailwind CSS",
          ],
        },
        {
          title: "UI & Animation",
          items: [
            "Framer Motion",
            "React Flow",
            "Chart.js",
            "Responsive Design",
            "Design Systems",
            "Glassmorphism",
          ],
        },
        {
          title: "Backend & Services",
          items: [
            "Firebase",
            "REST APIs",
            "OpenAI / Claude API",
            "Weather API",
            "SQL",
          ],
        },
        {
          title: "Tools & Workflow",
          items: [
            "Git & GitHub",
            "Vercel",
            "Cursor & AI Coding",
            "Figma",
            "Agile",
          ],
        },
      ],
    },
    process: {
      tag: "05 — Process",
      title: "How I work.",
      steps: [
        {
          title: "Understand",
          desc: "Clarify requirements, sketch user flows, assess technical feasibility.",
        },
        {
          title: "Design",
          desc: "Wireframes, UI concept, component architecture and design tokens.",
        },
        {
          title: "Build",
          desc: "Component-based, typed, testable — with modern best practices.",
        },
        {
          title: "Ship",
          desc: "Deployment, performance check, responsive testing and iteration.",
        },
      ],
    },
    contact: {
      tag: "06 — Contact",
      title: "Let's talk.",
      subtitle:
        "I'm looking for an entry-level position as a frontend or web developer. Working student, part-time or full-time — I'd love to hear from you.",
      email: "Send email",
      cv: "Resume",
      cvSoon: "Coming soon",
    },
    footer: "Built with Next.js, React & TypeScript",
    liveDemo: "Live Demo",
    frontendOnly: "Frontend",
    featuredBadge: "Featured",
  },
} as const;
