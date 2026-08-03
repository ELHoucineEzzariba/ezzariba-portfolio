export type Project = {
  id: string;
  title: string;
  description: { de: string; en: string };
  stack: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  gradient: string;
  accent: string;
  icon: string;
  size?: "large" | "medium" | "small";
};

export const projects: Project[] = [
  {
    id: "novachat",
    title: "NovaChat",
    description: {
      de: "Echtzeit-Kollaborationsplattform im Stil von Slack/Discord mit Channels, DMs, Mentions, Threading und Premium-UI. Skalierbare Architektur und exzellente UX.",
      en: "Real-time collaboration platform inspired by Slack/Discord with channels, DMs, mentions, threading and premium UI. Scalable architecture and excellent UX.",
    },
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Firebase",
      "Framer Motion",
    ],
    liveUrl: "https://novachat-1er.pages.dev",
    featured: true,
    gradient: "from-violet-600/40 via-indigo-500/20 to-transparent",
    accent: "#8b5cf6",
    icon: "chat",
    size: "large",
  },
  {
    id: "novaflow",
    title: "NovaFlow",
    description: {
      de: "Visueller Workflow-Builder wie n8n/Zapier. Drag & Drop Nodes, animierte Ausführungen und KI-gestützte Automatisierungen.",
      en: "Visual workflow builder like n8n/Zapier. Drag & drop nodes, animated executions and AI-powered automations.",
    },
    stack: [
      "Next.js",
      "React Flow",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
    ],
    liveUrl: "https://novaflow.ezzariba.com",
    featured: true,
    gradient: "from-cyan-500/40 via-teal-400/20 to-transparent",
    accent: "#06b6d4",
    icon: "flow",
    size: "medium",
  },
  {
    id: "novalearn",
    title: "NovaLearn",
    description: {
      de: "Intelligente Lernplattform mit Karteikarten, KI-Zusammenfassungen, Quizmodus, Lernstatistiken und persönlichem Dashboard.",
      en: "Smart learning platform with flashcards, AI summaries, quiz mode, learning stats and personal dashboard.",
    },
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Firebase",
      "OpenAI",
    ],
    liveUrl: "https://novalearn-app.pages.dev",
    featured: true,
    gradient: "from-emerald-500/40 via-green-400/20 to-transparent",
    accent: "#10b981",
    icon: "learn",
    size: "medium",
  },
  {
    id: "elpolloloco",
    title: "El Pollo Loco",
    description: {
      de: "Browser-Spiel komplett in JavaScript: Spiellogik, Animationen, Kollisionserkennung, Gegner-KI und responsives UI.",
      en: "Browser game built entirely in JavaScript: game logic, animations, collision detection, enemy AI and responsive UI.",
    },
    stack: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://elpolloloco.pages.dev",
    featured: true,
    gradient: "from-amber-500/40 via-orange-400/20 to-transparent",
    accent: "#f59e0b",
    icon: "game",
    size: "small",
  },
  {
    id: "novavoice",
    title: "NovaVoice",
    description: {
      de: "KI-Telefonie-Dashboard mit Live-Transkripten, Gesprächszusammenfassungen, Analytics und Agenten-Übersicht.",
      en: "AI telephony dashboard with live transcripts, call summaries, analytics and agent overview.",
    },
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Chart.js",
      "OpenAI",
    ],
    liveUrl: "https://novavoice-app.pages.dev",
    featured: true,
    gradient: "from-rose-500/40 via-pink-400/20 to-transparent",
    accent: "#f43f5e",
    icon: "voice",
    size: "large",
  },
  {
    id: "cinenova",
    title: "CineNova",
    description: {
      de: "Modernes Streaming-Frontend mit Filmbibliothek, Suchfunktion und detailreichen Filmseiten.",
      en: "Modern streaming frontend with movie library, search and detailed movie pages.",
    },
    stack: ["React", "TypeScript", "Tailwind CSS"],
    featured: false,
    gradient: "from-red-500/30 to-transparent",
    accent: "#ef4444",
    icon: "🎬",
  },
  {
    id: "novacrm",
    title: "NovaCRM",
    description: {
      de: "CRM-Dashboard für Kundenverwaltung, Leads und Vertriebsübersicht mit Fokus auf UI/UX.",
      en: "CRM dashboard for customer management, leads and sales overview with focus on UI/UX.",
    },
    stack: ["React", "TypeScript", "Tailwind CSS"],
    featured: false,
    gradient: "from-blue-500/30 to-transparent",
    accent: "#3b82f6",
    icon: "📊",
  },
  {
    id: "novafinance",
    title: "NovaFinance",
    description: {
      de: "Persönliches Finanz-Dashboard mit Ausgabenanalyse, Diagrammen und Budgetplanung.",
      en: "Personal finance dashboard with expense analysis, charts and budget planning.",
    },
    stack: ["React", "TypeScript", "Tailwind CSS", "Chart.js"],
    featured: false,
    gradient: "from-lime-500/30 to-transparent",
    accent: "#84cc16",
    icon: "💰",
  },
  {
    id: "novatasks",
    title: "NovaTasks",
    description: {
      de: "Minimalistische Projekt- und Aufgabenverwaltung mit Kanban-Board und modernem Interface.",
      en: "Minimalist project and task management with Kanban board and modern interface.",
    },
    stack: ["React", "TypeScript", "Tailwind CSS"],
    featured: false,
    gradient: "from-purple-500/30 to-transparent",
    accent: "#a855f7",
    icon: "✅",
  },
  {
    id: "novaweather",
    title: "NovaWeather",
    description: {
      de: "Moderne Wetter-App mit Forecast, interaktiven Animationen und responsivem Design.",
      en: "Modern weather app with forecast, interactive animations and responsive design.",
    },
    stack: ["React", "TypeScript", "Tailwind CSS", "Weather API"],
    featured: false,
    gradient: "from-sky-500/30 to-transparent",
    accent: "#0ea5e9",
    icon: "🌤️",
  },
  {
    id: "portfolio",
    title: "Portfolio Website",
    description: {
      de: "Diese Portfolio-Website — modernes Design, Animationen und recruiter-fokussierte Präsentation.",
      en: "This portfolio website — modern design, animations and recruiter-focused presentation.",
    },
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    featured: false,
    gradient: "from-fuchsia-500/30 to-transparent",
    accent: "#d946ef",
    icon: "✨",
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
export const otherProjects = projects.filter((p) => !p.featured);
