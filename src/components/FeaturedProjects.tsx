"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Check, Code2, ExternalLink } from "lucide-react";
import { featuredProjects, otherProjects, type Project } from "@/data/projects";
import { SITE, translations, type Language } from "@/data/site";
import { cn } from "@/lib/utils";

type FeaturedProjectsProps = { lang: Language };
type Filter = "all" | "ai" | "data" | "software" | "frontend";

const categoryProjects: Record<Exclude<Filter, "all">, string[]> = {
  ai: ["novavoice", "nova-ai-builder", "novachat"],
  data: ["marketflow", "novacrm", "dexscope"],
  software: ["dexscope", "elpolloloco", "novacrm", "speedytl"],
  frontend: ["cinenova", "novadrive", "autohaus-luxury", "speedytl"],
};

function belongsTo(project: Project, filter: Filter) {
  return filter === "all" || categoryProjects[filter].includes(project.id);
}

export function FeaturedProjects({ lang }: FeaturedProjectsProps) {
  const t = translations[lang];
  const [activeId, setActiveId] = useState(featuredProjects[0]?.id ?? "");
  const [filter, setFilter] = useState<Filter>("all");
  const activeProject = featuredProjects.find((project) => project.id === activeId) ?? featuredProjects[0];
  const filteredProjects = useMemo(
    () => otherProjects.filter((project) => belongsTo(project, filter)),
    [filter],
  );

  const copy = lang === "de"
    ? {
        sequence: "Daten verstehen · KI integrieren · Prozesse automatisieren",
        caseStudies: "Fallstudien",
        selected: "Ausgewähltes Projekt",
        challenge: "Ausgangslage",
        solution: "Umsetzung",
        contribution: "Mein Beitrag",
        archive: "Projektverzeichnis",
        archiveText: "Weitere Arbeiten – kompakt nach Schwerpunkt sortiert.",
        allGithub: "Alle Repositories",
        filters: { all: "Alle", ai: "AI", data: "Data", software: "Software", frontend: "Frontend" },
      }
    : {
        sequence: "Understand data · Integrate AI · Automate processes",
        caseStudies: "Case studies",
        selected: "Selected project",
        challenge: "Context",
        solution: "Implementation",
        contribution: "My contribution",
        archive: "Project index",
        archiveText: "More work, compactly organised by focus.",
        allGithub: "All repositories",
        filters: { all: "All", ai: "AI", data: "Data", software: "Software", frontend: "Frontend" },
      };

  if (!activeProject) return null;

  return (
    <section id="work" className="relative py-28">
      <div className="relative mx-auto max-w-6xl px-6">
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="grid gap-8 border-b border-black/10 pb-12 lg:grid-cols-[1fr_auto] lg:items-end"
        >
          <div>
            <span className="section-tag">{t.featured.tag}</span>
            <h2 className="mt-4 max-w-3xl font-[family-name:var(--font-syne)] text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              {t.featured.title}
            </h2>
            <p className="mt-5 max-w-2xl leading-relaxed text-zinc-400">{t.featured.subtitle}</p>
          </div>
          <p className="max-w-xs text-sm font-medium leading-relaxed text-[#1d4ed8] lg:text-right">{copy.sequence}</p>
        </motion.header>

        <div className="mt-10 grid gap-8 lg:grid-cols-[17rem_1fr]">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-zinc-500">{copy.caseStudies}</p>
            <div className="border-y border-black/10">
              {featuredProjects.map((project, index) => {
                const selected = project.id === activeProject.id;
                return (
                  <button
                    key={project.id}
                    type="button"
                    onClick={() => setActiveId(project.id)}
                    aria-pressed={selected}
                    className={cn("work-selector", selected && "work-selector-active")}
                  >
                    <span className="font-mono text-[11px] text-zinc-600">0{index + 1}</span>
                    <span>
                      <strong className="block text-sm font-semibold text-[#111827]">{project.title}</strong>
                      <span className="mt-1 block text-xs text-zinc-500">{project.stack.slice(0, 2).join(" · ")}</span>
                    </span>
                    <ArrowUpRight size={15} aria-hidden="true" />
                  </button>
                );
              })}
            </div>
          </div>

          <div className="min-w-0">
            <AnimatePresence mode="wait">
              <motion.article
                key={activeProject.id}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.28 }}
                className="work-focus"
              >
                <div className="relative aspect-[16/9] overflow-hidden border-b border-black/10 bg-[#111827]">
                  <Image
                    src={activeProject.image}
                    alt={`${activeProject.title} ${copy.selected}`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 70vw"
                    className="object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#08080d] via-transparent to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6 sm:p-8">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.16em]" style={{ color: activeProject.accent }}>{activeProject.status[lang]}</p>
                      <h3 className="mt-2 font-[family-name:var(--font-syne)] text-3xl font-bold text-white sm:text-4xl">{activeProject.title}</h3>
                    </div>
                    <span className="hidden border border-white/20 bg-black/60 px-3 py-1.5 text-xs text-white backdrop-blur sm:block">{copy.selected}</span>
                  </div>
                </div>

                <div className="p-6 sm:p-8">
                  <p className="max-w-3xl text-lg leading-relaxed text-zinc-300">{activeProject.description[lang]}</p>
                  <div className="mt-8 grid gap-6 border-y border-black/10 py-7 md:grid-cols-3">
                    <div><p className="case-label">{copy.challenge}</p><p className="mt-2 text-sm leading-relaxed text-zinc-400">{activeProject.challenge?.[lang]}</p></div>
                    <div><p className="case-label">{copy.solution}</p><p className="mt-2 text-sm leading-relaxed text-zinc-400">{activeProject.solution?.[lang]}</p></div>
                    <div><p className="case-label">{copy.contribution}</p><p className="mt-2 text-sm leading-relaxed text-zinc-200">{activeProject.role?.[lang]}</p></div>
                  </div>
                  <div className="mt-7 flex flex-wrap items-center justify-between gap-6">
                    <ul className="flex flex-wrap gap-x-5 gap-y-2" aria-label={lang === "de" ? "Technische Belege" : "Technical evidence"}>
                      {activeProject.evidence?.map((item) => (
                        <li key={item.de} className="flex items-center gap-2 text-xs text-zinc-400"><Check size={14} style={{ color: activeProject.accent }} aria-hidden="true" />{item[lang]}</li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-3">
                      {activeProject.liveUrl && <a href={activeProject.liveUrl} target="_blank" rel="noopener noreferrer" className="btn-primary"><ExternalLink size={17} />{t.liveDemo}</a>}
                      <a href={activeProject.githubUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary"><Code2 size={17} />{t.sourceCode}</a>
                    </div>
                  </div>
                </div>
              </motion.article>
            </AnimatePresence>
          </div>
        </div>

        <div id="projects" className="mt-24 scroll-mt-24 border-t border-black/10 pt-10">
          <div className="flex flex-col justify-between gap-7 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-zinc-500">{copy.archive}</p>
              <p className="mt-2 text-sm text-zinc-400">{copy.archiveText}</p>
            </div>
            <div className="flex flex-wrap gap-2" role="group" aria-label={lang === "de" ? "Projekte filtern" : "Filter projects"}>
              {(Object.keys(copy.filters) as Filter[]).map((key) => (
                <button key={key} type="button" onClick={() => setFilter(key)} aria-pressed={filter === key} className={cn("work-filter", filter === key && "work-filter-active")}>{copy.filters[key]}</button>
              ))}
            </div>
          </div>

          <motion.div layout className="mt-8 border-t border-black/10">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.article
                  layout
                  key={project.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  className="project-index-row group"
                >
                  <div className="relative hidden aspect-[16/10] w-32 shrink-0 overflow-hidden bg-[#111827] sm:block">
                    <Image src={project.image} alt="" fill sizes="128px" className="object-cover object-top transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                      <h3 className="font-[family-name:var(--font-syne)] text-lg font-semibold text-[#111827]">{project.title}</h3>
                      <span className="text-[10px] uppercase tracking-[0.12em] text-zinc-600">{project.status[lang]}</span>
                    </div>
                    <p className="mt-2 max-w-2xl text-sm leading-relaxed text-zinc-400">{project.description[lang]}</p>
                  </div>
                  <div className="hidden max-w-52 flex-wrap justify-end gap-1.5 lg:flex">{project.stack.slice(0, 3).map((tech) => <span key={tech} className="stack-badge">{tech}</span>)}</div>
                  <div className="flex shrink-0 items-center gap-2">
                    {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="project-index-link" aria-label={`${project.title} ${t.liveDemo}`}><ExternalLink size={16} /></a>}
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="project-index-link" aria-label={`${project.title} GitHub`}><Code2 size={16} /></a>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>

          <div className="mt-8 flex justify-end">
            <a href={SITE.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-[#1d4ed8] transition-colors hover:text-[#172554]">{copy.allGithub}<ArrowUpRight size={16} /></a>
          </div>
        </div>
      </div>
    </section>
  );
}
