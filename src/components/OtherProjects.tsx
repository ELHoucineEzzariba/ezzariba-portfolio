"use client";

import { motion } from "framer-motion";
import { ExternalLink, Layers } from "lucide-react";
import { otherProjects } from "@/data/projects";
import { translations, type Language } from "@/data/site";

type OtherProjectsProps = {
  lang: Language;
};

export function OtherProjects({ lang }: OtherProjectsProps) {
  const t = translations[lang];
  const section = t.other;

  return (
    <section id="projects" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
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

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {otherProjects.map((project, i) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className="group card-glass flex flex-col p-5 transition-all hover:border-white/15 hover:bg-white/[0.05]"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div
                    className="flex h-10 w-10 items-center justify-center rounded-xl text-lg"
                    style={{
                      background: `${project.accent}18`,
                      border: `1px solid ${project.accent}30`,
                    }}
                  >
                    {project.icon}
                  </div>
                  <div>
                    <h3 className="font-[family-name:var(--font-syne)] font-semibold">
                      {project.title}
                    </h3>
                    <span className="inline-flex items-center gap-1 text-[10px] font-medium uppercase tracking-wider text-zinc-500">
                      <Layers size={10} />
                      {t.frontendOnly}
                    </span>
                  </div>
                </div>
              </div>

              <p className="mt-4 flex-1 text-sm leading-relaxed text-zinc-400">
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
                  className="mt-4 inline-flex items-center gap-1.5 text-xs font-medium text-zinc-400 transition-colors hover:text-white"
                >
                  {t.liveDemo}
                  <ExternalLink size={12} />
                </a>
              )}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
