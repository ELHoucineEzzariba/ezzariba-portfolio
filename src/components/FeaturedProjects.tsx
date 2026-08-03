"use client";

import { motion } from "framer-motion";
import { Check, Code2, ExternalLink, GraduationCap, MessageSquare, Workflow } from "lucide-react";
import { featuredProjects } from "@/data/projects";
import { translations, type Language } from "@/data/site";
import { ScrollProjectImage } from "@/components/ScrollProjectImage";

type FeaturedProjectsProps = { lang: Language };

const icons = { chat: MessageSquare, flow: Workflow, learn: GraduationCap };

export function FeaturedProjects({ lang }: FeaturedProjectsProps) {
  const t = translations[lang];

  return (
    <section id="featured" className="relative py-28">
      <div className="glow-orb top-0 right-0 h-[300px] w-[300px] bg-violet-500/10" />
      <div className="relative mx-auto max-w-6xl px-6">
        <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.4 }} className="mb-14">
          <span className="section-tag">{t.featured.tag}</span>
          <h2 className="mt-4 max-w-3xl font-[family-name:var(--font-syne)] text-3xl font-bold tracking-tight sm:text-4xl">{t.featured.title}</h2>
          <p className="mt-4 max-w-2xl text-zinc-400">{t.featured.subtitle}</p>
        </motion.div>

        <div className="space-y-6">
          {featuredProjects.map((project, index) => {
            const Icon = icons[project.icon as keyof typeof icons] ?? Workflow;
            return (
              <motion.article key={project.id} initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-40px" }} transition={{ duration: 0.45, delay: index * 0.06 }} className="case-study overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025]">
                <div className="grid lg:grid-cols-[.78fr_1.22fr]">
                  <div className="relative min-h-[360px] overflow-hidden border-b border-white/10 lg:border-r lg:border-b-0">
                    <ScrollProjectImage src={project.image} alt={`${project.title} Benutzeroberfläche`} />
                    <div className="absolute inset-0 z-10 flex flex-col justify-between p-7 sm:p-9">
                      <div className="flex items-start justify-between gap-4">
                        <span className="project-icon" style={{ color: project.accent }}><Icon size={30} aria-hidden="true" /></span>
                        <span className="rounded-full border border-white/15 bg-black/55 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-zinc-200 backdrop-blur-md">{t.featuredBadge} 0{index + 1}</span>
                      </div>
                      <div>
                      <p className="text-xs font-semibold uppercase tracking-[.14em]" style={{ color: project.accent }}>{project.status[lang]}</p>
                      <h3 className="mt-3 font-[family-name:var(--font-syne)] text-3xl font-bold sm:text-4xl">{project.title}</h3>
                      <p className="mt-4 max-w-md leading-relaxed text-zinc-200">{project.description[lang]}</p>
                      </div>
                    </div>
                  </div>

                  <div className="p-7 sm:p-9">
                    <div className="grid gap-6 sm:grid-cols-2">
                      <div><p className="case-label">{t.caseChallenge}</p><p className="mt-2 text-sm leading-relaxed text-zinc-300">{project.challenge?.[lang]}</p></div>
                      <div><p className="case-label">{t.caseSolution}</p><p className="mt-2 text-sm leading-relaxed text-zinc-300">{project.solution?.[lang]}</p></div>
                    </div>
                    <div className="mt-6 border-t border-white/8 pt-6">
                      <p className="case-label">{t.caseRole}</p>
                      <p className="mt-2 text-sm text-white">{project.role?.[lang]}</p>
                    </div>
                    <ul className="mt-6 grid gap-2 sm:grid-cols-3" aria-label={lang === "de" ? "Technische Belege" : "Technical evidence"}>
                      {project.evidence?.map((item) => <li key={item.de} className="flex items-center gap-2 text-xs text-zinc-400"><Check size={14} style={{ color: project.accent }} aria-hidden="true" />{item[lang]}</li>)}
                    </ul>
                    <div className="mt-7 flex flex-wrap gap-2">{project.stack.map((tech) => <span key={tech} className="stack-badge">{tech}</span>)}</div>
                    <div className="mt-7 flex flex-wrap gap-3">
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn-primary"><ExternalLink size={17} aria-hidden="true" />{t.liveDemo}</a>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary"><Code2 size={17} aria-hidden="true" />{t.sourceCode}</a>
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
