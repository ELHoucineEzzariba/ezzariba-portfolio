export const SITE = {
  name: "Elhoucine Ezzariba",
  shortName: "Ezzariba",
  role: "Frontend-Entwickler",
  email: "el.ezzariba@gmail.com",
  location: "Sankt Augustin · Köln/Bonn",
  githubUrl: "https://github.com/ELHoucineEzzariba",
  linkedinUrl: "https://linkedin.com/in/el-houcine-ezzariba-97593a252",
  cvUrl: "/El_Houcine_Ezzariba_Lebenslauf.docx",
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
      title: "Frontend, das man nicht nur sieht —",
      titleAccent: "sondern prüfen kann.",
      subtitle:
        "Wirtschaftsinformatik-Student und Frontend-Entwickler. Ich entwickle produktnahe Web-Apps mit React, Next.js und TypeScript — inklusive Live-Demo, Quellcode und Deployment.",
      ctaPrimary: "3 Fallstudien ansehen",
      ctaSecondary: "Lebenslauf laden",
      stats: {
        projects: "Projekte",
        featured: "Fallstudien",
        stack: "Live-Demos",
      },
    },
    about: {
      tag: "01 — Profil",
      title: "Technisches Handwerk trifft Produktverständnis.",
      text: "Ich studiere Wirtschaftsinformatik an der TH Köln und verbinde Frontend-Entwicklung mit Produktdenken. Meine Arbeit reicht von der Anforderungsanalyse und UI-Konzeption bis zur typisierten Implementierung, API-Anbindung und Veröffentlichung auf Cloudflare.",
      highlights: [
        { label: "Studium", value: "Wirtschaftsinformatik · TH Köln" },
        { label: "Fokus", value: "React · Next.js · TypeScript" },
        { label: "Stärke", value: "UI/UX · Echtzeit · KI-Integration" },
        { label: "Verfügbar", value: "Werkstudent · Teilzeit · Vollzeit" },
      ],
    },
    featured: {
      tag: "02 — Highlights",
      title: "Drei Projekte. Drei überprüfbare Fallstudien.",
      subtitle:
        "Jede Fallstudie zeigt Aufgabe, meinen Beitrag, die technische Lösung und direkt erreichbare Belege.",
    },
    other: {
      tag: "03 — Weitere Projekte",
      title: "Weitere öffentliche Projekte.",
      subtitle:
        "Live-Anwendungen und klar gekennzeichnete UI-Prototypen. Alle Repositories sind öffentlich einsehbar.",
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
            "Cloudflare Pages & Workers",
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
      cvSoon: "",
    },
    footer: "Gebaut mit Next.js, React & TypeScript",
    liveDemo: "Live-Demo",
    sourceCode: "Quellcode",
    caseRole: "Mein Beitrag",
    caseChallenge: "Aufgabe",
    caseSolution: "Lösung",
    frontendOnly: "Projekt",
    featuredBadge: "Fallstudie",
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
      title: "Frontend you can not only see —",
      titleAccent: "but verify.",
      subtitle:
        "Business Informatics student and frontend developer. I build product-oriented web apps with React, Next.js and TypeScript — including live demo, source code and deployment.",
      ctaPrimary: "View 3 case studies",
      ctaSecondary: "Download resume",
      stats: {
        projects: "Projects",
        featured: "Case Studies",
        stack: "Live Demos",
      },
    },
    about: {
      tag: "01 — Profile",
      title: "Technical craft meets product thinking.",
      text: "I study Business Informatics at TH Köln and combine frontend development with product thinking. My work spans requirements analysis and UI concepts through typed implementation, API integration and Cloudflare deployment.",
      highlights: [
        { label: "Education", value: "Business Informatics · TH Köln" },
        { label: "Focus", value: "React · Next.js · TypeScript" },
        { label: "Strength", value: "UI/UX · Real-time · AI Integration" },
        { label: "Available", value: "Working Student · Part-Time · Full-Time" },
      ],
    },
    featured: {
      tag: "02 — Highlights",
      title: "Three projects. Three verifiable case studies.",
      subtitle:
        "Each case study shows the task, my contribution, the technical solution and directly accessible evidence.",
    },
    other: {
      tag: "03 — More Projects",
      title: "More public projects.",
      subtitle:
        "Live applications and clearly labelled UI prototypes. Every repository is publicly accessible.",
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
            "Cloudflare Pages & Workers",
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
      cvSoon: "",
    },
    footer: "Built with Next.js, React & TypeScript",
    liveDemo: "Live demo",
    sourceCode: "Source code",
    caseRole: "My contribution",
    caseChallenge: "Challenge",
    caseSolution: "Solution",
    frontendOnly: "Project",
    featuredBadge: "Case study",
  },
} as const;
