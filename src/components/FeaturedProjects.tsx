"use client";

import { motion } from "framer-motion";
import { ExternalLink, Gamepad2, GraduationCap, MessageSquare, PhoneCall, Star, Workflow } from "lucide-react";
import { featuredProjects } from "@/data/projects";
import { translations, type Language } from "@/data/site";
import { cn } from "@/lib/utils";

type FeaturedProjectsProps = {
  lang: Language;
};

const sizeClasses: Record<string, string> = {
  large: "md:col-span-2 md:row-span-2",
  medium: "md:col-span-1",
  small: "md:col-span-1",
};

export function FeaturedProjects({ lang }: FeaturedProjectsProps) {
  const t = translations[lang];
  const section = t.featured;
  const icons = { chat: MessageSquare, flow: Workflow, learn: GraduationCap, game: Gamepad2, voice: PhoneCall };

  return (
    <section id="featured" className="relative py-28">
      <div className="glow-orb top-0 right-0 h-[300px] w-[300px] bg-violet-500/10" />

      <div className="relative mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <span className="section-tag">{section.tag}</span>
          <h2 className="mt-4 max-w-2xl font-[family-name:var(--font-syne)] text-3xl font-bold tracking-tight sm:text-4xl">
            {section.title}
          </h2>
          <p className="mt-4 max-w-2xl text-zinc-400">{section.subtitle}</p>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project, i) => {
            const ProjectIcon = icons[project.icon as keyof typeof icons] ?? Workflow;
            return (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={cn(
                "project-card group relative flex flex-col overflow-hidden rounded-2xl border border-white/8 bg-white/[0.02] transition-all duration-300 hover:border-white/15 hover:bg-white/[0.04]",
                sizeClasses[project.size ?? "medium"]
              )}
            >
              <div
                className={cn(
                  "relative flex min-h-[180px] flex-1 flex-col justify-between bg-gradient-to-br p-6",
                  project.gradient,
                  project.size === "large" && "min-h-[240px]"
                )}
              >
                <div className="flex items-start justify-between">
                  <span className="project-icon" style={{ color: project.accent }}><ProjectIcon size={28} /></span>
                  <span className="inline-flex items-center gap-1 rounded-full border border-white/15 bg-black/30 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-amber-300 backdrop-blur-sm">
                    <Star size={10} fill="currentColor" />
                    {t.featuredBadge}
                  </span>
                </div>

                <div
                  className="absolute -bottom-8 -right-8 h-32 w-32 rounded-full opacity-30 blur-2xl"
                  style={{ background: project.accent }}
                />
                <div className="project-visual" aria-hidden="true">
                  <span /><span /><span />
                  <div className="project-visual-line" />
                  <div className="project-visual-line short" />
                </div>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-[family-name:var(--font-syne)] text-xl font-bold">
                  {project.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-400">
                  {project.description[lang]}
                </p>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.stack.map((tech) => (
                    <span key={tech} className="stack-badge">
                      {tech}
                    </span>
                  ))}
                </div>

                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-2 text-sm font-medium transition-colors"
                    style={{ color: project.accent }}
                  >
                    {t.liveDemo}
                    <ExternalLink size={14} />
                  </a>
                )}
              </div>
            </motion.article>
          )})}
        </div>
      </div>
    </section>
  );
}
