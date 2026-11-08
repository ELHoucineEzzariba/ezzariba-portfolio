export const SITE = {
  name: "Elhoucine Ezzariba",
  shortName: "Ezzariba",
  role: "Software & AI · Wirtschaftsinformatik",
  email: "el.ezzariba@gmail.com",
  location: "Sankt Augustin · Köln/Bonn",
  githubUrl: "https://github.com/ELHoucineEzzariba",
  linkedinUrl: "https://linkedin.com/in/el-houcine-ezzariba-97593a252",
  cvUrl: "/El_Houcine_Ezzariba_Lebenslauf_Software_AI.pdf",
  cvWordUrl: "/El_Houcine_Ezzariba_Lebenslauf_Software_AI.docx",
  domain: "ezzariba.com",
  url: "https://ezzariba.com",
  baseDemoUrl: "https://ezzariba.com",
} as const;

export type Language = "de" | "en";

export const translations = {
  de: {
    nav: {
      about: "Profil",
      featured: "Arbeiten",
      skills: "Skills",
      resume: "Lebenslauf",
      contact: "Kontakt",
    },
    hero: {
      badge: "Offen für Werkstudent · Teilzeit · Vollzeit",
      title: "AI, die nicht im Prompt endet —",
      titleAccent: "sondern zum Produkt wird.",
      subtitle:
        "Wirtschaftsinformatik-Student an der TH Köln mit Fokus auf Softwareentwicklung und KI-Integration. Ich baue Web-Anwendungen mit generativer KI, modernen Frontends und Datenanalyse — vom Prototyp bis zum Deployment.",
      ctaPrimary: "Ausgewählte Arbeiten",
      ctaSecondary: "Lebenslauf laden",
      stats: {
        projects: "Projekte",
        featured: "Fallstudien",
        stack: "Live-Demos",
      },
    },
    about: {
      tag: "01 — Profil",
      title: "AI trifft Software Engineering und Produktverständnis.",
      text: "Ich studiere Wirtschaftsinformatik an der TH Köln und entwickle AI-gestützte Anwendungen an der Schnittstelle von Frontend, Daten und Geschäftsprozessen. Meine Arbeit reicht von der Anforderungsanalyse und UI-Konzeption über LLM- und API-Integration bis zur typisierten Implementierung und Veröffentlichung.",
      highlights: [
        { label: "Studium", value: "Wirtschaftsinformatik · TH Köln" },
        { label: "Fokus", value: "TypeScript · React · Python · KI-APIs" },
        { label: "Stärke", value: "Frontend · Daten · KI-Integration" },
        { label: "Verfügbar", value: "Werkstudent · Teilzeit · Vollzeit" },
      ],
    },
    featured: {
      tag: "02 — Ausgewählte Arbeiten",
      title: "Drei Projekte, die meinen Ansatz belegen.",
      subtitle:
        "Keine lose Projektsammlung: Diese Fallstudien zeigen, wie ich Daten, AI und Software Engineering zu nutzbaren Produkten verbinde.",
    },
    other: {
      tag: "03 — Weitere Projekte",
      title: "Weitere öffentliche Projekte.",
      subtitle:
        "Live-Anwendungen und klar gekennzeichnete UI-Prototypen. Alle Repositories sind öffentlich einsehbar.",
    },
    skills: {
      tag: "03 — Skills",
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
            "Recharts",
            "Responsive Design",
            "Design Systems",
            "Three.js",
          ],
        },
        {
          title: "Backend & Services",
          items: [
            "Python",
            "FastAPI",
            "WebSockets",
            "Firebase",
            "REST APIs",
            "Google Gemini API",
            "SQL",
          ],
        },
        {
          title: "Tools & Workflow",
          items: [
            "Git & GitHub",
            "Cloudflare Pages & Workers",
            "Testing (Vitest, pytest)",
            "Figma",
            "Agile",
          ],
        },
      ],
    },
    process: {
      tag: "04 — Arbeitsweise",
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
    resume: {
      tag: "05 — Lebenslauf",
      title: "Mehr als eine Liste von Stationen.",
      subtitle:
        "Mein Profil verbindet KI-Integration, moderne Softwareentwicklung und Datenanalyse mit Wirtschaftsinformatik und praktischer Prozesserfahrung.",
      status: "Aktueller Stand · August 2026",
      role: "Software & AI · Frontend · Datenanalyse",
      facts: [
        { label: "Suche", value: "Werkstudent · Software & AI · Köln/Bonn" },
        { label: "Studium", value: "B.Sc. Wirtschaftsinformatik · TH Köln" },
        { label: "Praxis", value: "AI-Assistenten · Web-Apps · Dashboards" },
      ],
      proofTitle: "Mein roter Faden",
      proof:
        "Ich übersetze AI-Funktionen und Daten in Anwendungen, die Menschen tatsächlich nutzen können. Frontend, Softwarelogik und Analyse sind für mich keine getrennten Bereiche, sondern Teile eines vollständigen digitalen Produkts.",
      pdf: "PDF ansehen",
      word: "Word herunterladen",
      previewAlt: "Vorschau des Lebenslaufs von Elhoucine Ezzariba",
    },
    contact: {
      tag: "06 — Kontakt",
      title: "Lassen Sie uns sprechen.",
      subtitle:
        "Ich suche eine Position im AI-Umfeld — von Software Engineering und Frontend bis Datenanalyse und Automatisierung. Ob Werkstudent, Teilzeit oder Vollzeit: Ich freue mich auf Ihre Nachricht.",
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
      featured: "Work",
      skills: "Skills",
      resume: "Resume",
      contact: "Contact",
    },
    hero: {
      badge: "Open for Working Student · Part-Time · Full-Time",
      title: "AI that does not end with a prompt —",
      titleAccent: "but becomes a product.",
      subtitle:
        "Business Informatics student at TH Köln focused on software development and AI integration. I build web applications with generative AI, modern frontends and data analytics — from prototype to deployment.",
      ctaPrimary: "Selected work",
      ctaSecondary: "Download resume",
      stats: {
        projects: "Projects",
        featured: "Case Studies",
        stack: "Live Demos",
      },
    },
    about: {
      tag: "01 — Profile",
      title: "AI meets software engineering and product thinking.",
      text: "I study Business Informatics at TH Köln and build AI-enabled applications at the intersection of frontend, data and business processes. My work spans requirements analysis and UI concepts through LLM and API integration, typed implementation and deployment.",
      highlights: [
        { label: "Education", value: "Business Informatics · TH Köln" },
        { label: "Focus", value: "TypeScript · React · Python · AI APIs" },
        { label: "Strength", value: "Frontend · Data · AI Integration" },
        { label: "Available", value: "Working Student · Part-Time · Full-Time" },
      ],
    },
    featured: {
      tag: "02 — Selected work",
      title: "Three projects that prove my approach.",
      subtitle:
        "Not a loose project collection: these case studies show how I connect data, AI and software engineering into usable products.",
    },
    other: {
      tag: "03 — More Projects",
      title: "More public projects.",
      subtitle:
        "Live applications and clearly labelled UI prototypes. Every repository is publicly accessible.",
    },
    skills: {
      tag: "03 — Skills",
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
            "Recharts",
            "Responsive Design",
            "Design Systems",
            "Three.js",
          ],
        },
        {
          title: "Backend & Services",
          items: [
            "Python",
            "FastAPI",
            "WebSockets",
            "Firebase",
            "REST APIs",
            "Google Gemini API",
            "SQL",
          ],
        },
        {
          title: "Tools & Workflow",
          items: [
            "Git & GitHub",
            "Cloudflare Pages & Workers",
            "Testing (Vitest, pytest)",
            "Figma",
            "Agile",
          ],
        },
      ],
    },
    process: {
      tag: "04 — Process",
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
    resume: {
      tag: "05 — Resume",
      title: "More than a list of positions.",
      subtitle:
        "My profile combines AI integration, modern software development and data analytics with Business Informatics and hands-on process experience.",
      status: "Current version · August 2026",
      role: "Software & AI · Frontend · Data Analytics",
      facts: [
        { label: "Looking for", value: "Working student · Software & AI · Cologne/Bonn" },
        { label: "Studies", value: "B.Sc. Business Informatics · TH Köln" },
        { label: "Practice", value: "AI assistants · Web apps · Dashboards" },
      ],
      proofTitle: "The common thread",
      proof:
        "I translate AI capabilities and data into applications people can actually use. Frontend, software logic and analytics are not separate disciplines to me, but parts of a complete digital product.",
      pdf: "View PDF",
      word: "Download Word",
      previewAlt: "Preview of Elhoucine Ezzariba's resume",
    },
    contact: {
      tag: "06 — Contact",
      title: "Let's talk.",
      subtitle:
        "I am looking for a role in AI — spanning software engineering, frontend, data analytics and automation. Working student, part-time or full-time: I would love to hear from you.",
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
