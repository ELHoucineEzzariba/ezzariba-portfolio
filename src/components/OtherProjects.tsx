"use client";

import { motion } from "framer-motion";
import { Bot, Car, ChartNoAxesCombined, Code2, ExternalLink, Film, Gamepad2, Layers3, MessageSquareMore, PhoneCall, Radar, Truck } from "lucide-react";
import { otherProjects } from "@/data/projects";
import { SITE, translations, type Language } from "@/data/site";
import { ScrollProjectImage } from "@/components/ScrollProjectImage";

type OtherProjectsProps = { lang: Language };
const icons = { voice: PhoneCall, game: Gamepad2, film: Film, crm: MessageSquareMore, spark: Bot, car: Car, truck: Truck, chart: ChartNoAxesCombined, radar: Radar };

export function OtherProjects({ lang }: OtherProjectsProps) {
  const t = translations[lang];
  return (
    <section id="projects" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} transition={{ duration: 0.4 }} className="mb-14">
          <span className="section-tag">{t.other.tag}</span>
          <h2 className="mt-4 max-w-2xl font-[family-name:var(--font-syne)] text-3xl font-bold tracking-tight sm:text-4xl">{t.other.title}</h2>
          <p className="mt-4 max-w-2xl text-zinc-400">{t.other.subtitle}</p>
        </motion.div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {otherProjects.map((project, index) => {
            const Icon = icons[project.icon as keyof typeof icons] ?? Layers3;
            return <motion.article key={project.id} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} transition={{ duration: 0.35, delay: (index % 3) * 0.05 }} className="card-glass group flex flex-col overflow-hidden transition-colors hover:border-white/15 hover:bg-white/[0.05]">
              <ScrollProjectImage src={project.image} alt={`${project.title} Projektansicht`} compact />
              <div className="flex flex-1 flex-col p-5">
              <div className="flex items-start justify-between gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl" style={{ color: project.accent, background: `${project.accent}16`, border: `1px solid ${project.accent}30` }}><Icon size={21} aria-hidden="true" /></span>
                <span className="rounded-full border border-white/8 px-2.5 py-1 text-[10px] uppercase tracking-wider text-zinc-500">{project.status[lang]}</span>
              </div>
              <h3 className="mt-5 font-[family-name:var(--font-syne)] text-lg font-semibold">{project.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-400">{project.description[lang]}</p>
              <div className="mt-4 flex flex-wrap gap-1.5">{project.stack.map((tech) => <span key={tech} className="stack-badge">{tech}</span>)}</div>
              <div className="mt-5 flex gap-4 text-xs font-semibold">
                {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-cyan-300 hover:text-cyan-200"><ExternalLink size={13} aria-hidden="true" />{t.liveDemo}</a>}
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-zinc-400 hover:text-white"><Code2 size={13} aria-hidden="true" />GitHub</a>
              </div>
              </div>
            </motion.article>;
          })}
        </div>
        <div className="mt-10 text-center"><a href={SITE.githubUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary"><Code2 size={18} aria-hidden="true" />{lang === "de" ? "Alle Repositories auf GitHub" : "All repositories on GitHub"}</a></div>
      </div>
    </section>
  );
}
