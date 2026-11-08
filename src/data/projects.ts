export type LocalizedText = { de: string; en: string };

export type Project = {
  id: string;
  title: string;
  description: LocalizedText;
  stack: string[];
  liveUrl?: string;
  githubUrl: string;
  featured: boolean;
  accent: string;
  icon: string;
  image: string;
  status: LocalizedText;
  role?: LocalizedText;
  challenge?: LocalizedText;
  solution?: LocalizedText;
  evidence?: LocalizedText[];
};

export const projects: Project[] = [
  {
    id: "novachat",
    title: "NovaChat",
    description: {
      de: "Echtzeit-Kollaborationsplattform mit Channels, Direktnachrichten, Mentions und Threads.",
      en: "Real-time collaboration platform with channels, direct messages, mentions and threads.",
    },
    stack: ["Next.js", "TypeScript", "Firebase", "Zustand"],
    liveUrl: "https://novachat-1er.pages.dev",
    githubUrl: "https://github.com/ELHoucineEzzariba/NovaChat",
    featured: false,
    accent: "#8b5cf6",
    icon: "chat",
    image: "/projects/novachat.png",
    status: { de: "Live · Full-Stack-Demo", en: "Live · Full-stack demo" },
    role: { de: "Konzept, UI/UX, Frontend und Firebase-Integration", en: "Concept, UI/UX, frontend and Firebase integration" },
    challenge: { de: "Viele Kommunikationswege mussten in einer Oberfläche verständlich und schnell erreichbar bleiben.", en: "Multiple communication paths had to remain clear and quickly accessible in one interface." },
    solution: { de: "Eine modulare Workspace-Struktur mit konsistenter Navigation, Echtzeitdaten und responsiven Interaktionen.", en: "A modular workspace structure with consistent navigation, real-time data and responsive interactions." },
    evidence: [
      { de: "Echtzeitdaten mit Firebase", en: "Real-time data with Firebase" },
      { de: "Responsive Workspace-UI", en: "Responsive workspace UI" },
      { de: "Live auf Cloudflare", en: "Live on Cloudflare" },
    ],
  },
  {
    id: "novaflow",
    title: "NovaFlow",
    description: {
      de: "Visueller Workflow-Builder mit Drag-and-drop-Nodes und animierten Ausführungen.",
      en: "Visual workflow builder with drag-and-drop nodes and animated executions.",
    },
    stack: ["Next.js", "React Flow", "TypeScript", "Gemini API"],
    liveUrl: "https://novaflow.ezzariba.com/flows/new",
    githubUrl: "https://github.com/ELHoucineEzzariba/NovaFlow",
    featured: true,
    accent: "#06b6d4",
    icon: "flow",
    image: "/projects/novaflow.png",
    status: { de: "Live · Interaktive Web-App", en: "Live · Interactive web app" },
    role: { de: "Produktkonzept, Designsystem und Frontend-Architektur", en: "Product concept, design system and frontend architecture" },
    challenge: { de: "Komplexe Automationslogik sollte ohne technische Einstiegshürde visuell bedienbar werden.", en: "Complex automation logic needed to be visually usable without a technical barrier." },
    solution: { de: "Ein Node-basiertes Interface mit klaren Zuständen, direktem Feedback und fokussierter Informationshierarchie.", en: "A node-based interface with clear states, direct feedback and focused information hierarchy." },
    evidence: [
      { de: "Node-Editor mit React Flow", en: "Node editor with React Flow" },
      { de: "Typisierte Komponenten", en: "Typed components" },
      { de: "Eigene Subdomain", en: "Custom subdomain" },
    ],
  },
  {
    id: "novalearn",
    title: "NovaLearn",
    description: {
      de: "KI-Lernplattform: PDF-Upload, automatische Themenextraktion, quellenbasierter Chat mit Zitaten und generierte Übungsfragen.",
      en: "AI learning platform: PDF upload, automatic topic extraction, source-grounded chat with citations and generated practice questions.",
    },
    stack: ["Next.js", "TypeScript", "Firebase", "Gemini API"],
    liveUrl: "https://novalearn-app.pages.dev",
    githubUrl: "https://github.com/ELHoucineEzzariba/NovaLearn",
    featured: true,
    accent: "#10b981",
    icon: "learn",
    image: "/projects/novalearn.png",
    status: { de: "Live · KI-gestützte Demo", en: "Live · AI-assisted demo" },
    role: { de: "User Flow, Dashboard-UI und Service-Integration", en: "User flow, dashboard UI and service integration" },
    challenge: { de: "Aus eigenen Skripten sollten verlässliche Lerninhalte entstehen – ohne dass die KI Antworten erfindet.", en: "Students' own lecture notes had to become reliable study material — without the AI inventing answers." },
    solution: { de: "Dokumente werden in Abschnitte zerlegt; der Chat beantwortet Fragen nur aus den relevantesten Quellen und zeigt die Fundstellen an.", en: "Documents are split into chunks; the chat answers only from the most relevant sources and shows where each answer comes from." },
    evidence: [
      { de: "Retrieval mit Quellenangaben", en: "Retrieval with source citations" },
      { de: "Gemini-API-Integration", en: "Gemini API integration" },
      { de: "Unit-Tests mit Vitest", en: "Unit tests with Vitest" },
    ],
  },
  {
    id: "dexscope",
    title: "DexScope",
    description: {
      de: "Responsiver Pokédex als Field-Research-Terminal mit Suche, Typfiltern, Detailanalysen und lokalen Favoriten.",
      en: "Responsive Pokédex field-research terminal with search, type filters, detailed analysis and local favorites.",
    },
    stack: ["React", "TypeScript", "TanStack Query", "Vite"],
    githubUrl: "https://github.com/ELHoucineEzzariba/DexScope",
    featured: false,
    accent: "#39d9e6",
    icon: "radar",
    image: "/projects/dexscope.png",
    status: { de: "React-App · API-Projekt · getestet", en: "React app · API project · tested" },
  },
  {
    id: "tactiq",
    title: "TactiQ",
    description: {
      de: "Echtzeit-Fußballanalyse mit animiertem Match-Replay, erklärbaren Coach-Insights, Passing Network und interaktivem Taktik-Board.",
      en: "Real-time football intelligence with animated match replay, explainable coach insights, passing networks and an interactive tactics board.",
    },
    stack: ["Next.js", "TypeScript", "Python · FastAPI", "WebSockets"],
    liveUrl: "https://tactiq-2y6.pages.dev",
    githubUrl: "https://github.com/ELHoucineEzzariba/TactiQ",
    featured: true,
    accent: "#31e981",
    icon: "activity",
    image: "/projects/tactiq.png",
    status: { de: "Full-Stack · Echtzeit-Demo", en: "Full-stack · Real-time demo" },
    role: { de: "Produktkonzept, Datenvisualisierung und Full-Stack-Umsetzung", en: "Product concept, data visualisation and full-stack implementation" },
    challenge: { de: "Komplexe Live-Spieldaten mussten schnell erfassbar und für taktische Entscheidungen nutzbar werden.", en: "Complex live match data needed to become quickly understandable and useful for tactical decisions." },
    solution: { de: "Ein Echtzeit-Dashboard verbindet Match-Replay, erklärbare Insights, Passing Networks und ein interaktives Taktik-Board.", en: "A real-time dashboard combines match replay, explainable insights, passing networks and an interactive tactics board." },
    evidence: [
      { de: "FastAPI und WebSockets", en: "FastAPI and WebSockets" },
      { de: "Erklärbare Coach-Insights", en: "Explainable coach insights" },
      { de: "Tests mit pytest und node:test", en: "Tests with pytest and node:test" },
    ],
  },
  { id: "novavoice", title: "NovaVoice", description: { de: "KI-Telefonie-Dashboard mit Transkripten, Zusammenfassungen und Analytics.", en: "AI telephony dashboard with transcripts, summaries and analytics." }, stack: ["Next.js", "TypeScript", "Recharts", "Gemini API"], liveUrl: "https://novavoice-app.pages.dev", githubUrl: "https://github.com/ELHoucineEzzariba/NovaVoice", featured: false, accent: "#f43f5e", icon: "voice", image: "/projects/novavoice.png", status: { de: "Live-Demo", en: "Live demo" } },
  { id: "elpolloloco", title: "El Pollo Loco", description: { de: "Browser-Spiel mit Spiellogik, Animationen, Kollisionserkennung und Gegner-KI.", en: "Browser game with game logic, animations, collision detection and enemy AI." }, stack: ["JavaScript", "HTML", "CSS"], liveUrl: "https://elpolloloco.pages.dev", githubUrl: "https://github.com/ELHoucineEzzariba/EL-Pollo-Loco", featured: false, accent: "#f59e0b", icon: "game", image: "/projects/elpolloloco.png", status: { de: "Live-Spiel", en: "Live game" } },
  { id: "cinenova", title: "CineNova", description: { de: "Streaming-Frontend mit Filmbibliothek, Suche und Detailseiten.", en: "Streaming frontend with movie library, search and detail pages." }, stack: ["Next.js", "TypeScript", "Framer Motion"], githubUrl: "https://github.com/ELHoucineEzzariba/CineNova", featured: false, accent: "#ef4444", icon: "film", image: "/projects/cinenova.png", status: { de: "Quellcode", en: "Source code" } },
  { id: "novacrm", title: "NovaCRM", description: { de: "CRM-Dashboard für Kunden, Leads und Vertriebsübersichten.", en: "CRM dashboard for customers, leads and sales overviews." }, stack: ["Next.js", "TypeScript", "Recharts"], githubUrl: "https://github.com/ELHoucineEzzariba/NovaCRM", featured: false, accent: "#3b82f6", icon: "crm", image: "/projects/novacrm.png", status: { de: "Quellcode", en: "Source code" } },
  { id: "nova-ai-builder", title: "Nova AI Builder", description: { de: "Interface-Konzept für die visuelle Erstellung KI-gestützter Anwendungen.", en: "Interface concept for visually building AI-assisted applications." }, stack: ["Next.js", "TypeScript", "Framer Motion"], githubUrl: "https://github.com/ELHoucineEzzariba/NovaAIBuilder", featured: false, accent: "#a855f7", icon: "spark", image: "/projects/nova-ai-builder.png", status: { de: "UI-Prototyp · Quellcode", en: "UI prototype · Source code" } },
  { id: "novadrive", title: "NovaDrive Motors", description: { de: "Automotive-Webinterface mit hochwertiger Produktinszenierung.", en: "Automotive web interface with premium product presentation." }, stack: ["Next.js", "TypeScript", "Recharts"], githubUrl: "https://github.com/ELHoucineEzzariba/NovaDrive", featured: false, accent: "#0ea5e9", icon: "car", image: "/projects/novadrive.png", status: { de: "UI-Prototyp · Quellcode", en: "UI prototype · Source code" } },
  { id: "speedytl", title: "SpeedyTL", description: { de: "Logistik-Website mit interaktiver 3D-Lkw-Szene.", en: "Logistics website with an interactive 3D truck scene." }, stack: ["Next.js", "TypeScript", "Three.js", "Tailwind CSS"], githubUrl: "https://github.com/ELHoucineEzzariba/SpeedyTL", featured: false, accent: "#fb923c", icon: "truck", image: "/projects/speedytl.png", status: { de: "Quellcode", en: "Source code" } },
];

export const featuredProjects = projects.filter((project) => project.featured);
export const otherProjects = projects.filter((project) => !project.featured);
