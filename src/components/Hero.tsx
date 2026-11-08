"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowDown, ArrowRight, Code2, Download, Sparkles } from "lucide-react";
import { SITE, translations, type Language } from "@/data/site";
import { featuredProjects, projects } from "@/data/projects";

type HeroProps = {
  lang: Language;
};

export function Hero({ lang }: HeroProps) {
  const t = translations[lang].hero;
  const liveCount = projects.filter((project) => project.liveUrl).length;

  return (
    <section className="relative flex min-h-dvh items-center overflow-hidden pt-24">
      <div className="absolute inset-0 grid-bg" />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-14 px-6 py-20 lg:grid-cols-[1.15fr_.85fr]">
        <div>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="availability-label mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#f05a28] opacity-50" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[#f05a28]" />
          </span>
          {t.badge}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-[family-name:var(--font-syne)] text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
        >
          {t.title}
          <br />
          <span className="text-accent">
            {t.titleAccent}
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-8 max-w-2xl text-lg leading-relaxed text-zinc-400"
        >
          {t.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <a href="#work" className="btn-primary">
            {t.ctaPrimary}
            <ArrowRight size={18} />
          </a>
          <a href={SITE.cvUrl} download className="btn-secondary">
            <Download size={18} />
            {t.ctaSecondary}
          </a>
          <a href={SITE.githubUrl} target="_blank" rel="noopener noreferrer" className="btn-icon" aria-label="GitHub Profil öffnen"><Code2 size={19} /></a>
        </motion.div>

        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92, rotateY: 10 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="portrait-stage"
        >
          <div className="portrait-orbit portrait-orbit-one" aria-hidden="true" />
          <div className="portrait-orbit portrait-orbit-two" aria-hidden="true" />
          <div className="portrait-card">
            <Image
              src="/profile.png"
              alt="Portrait von Elhoucine Ezzariba"
              width={443}
              height={563}
              priority
              sizes="(max-width: 1024px) 70vw, 34vw"
              className="h-auto w-full object-cover"
            />
            <div className="portrait-caption">
              <span>{SITE.role}</span>
              <span>Sankt Augustin · DE</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="mt-20 grid grid-cols-3 gap-6 border-t border-black/10 pt-10 sm:max-w-lg"
        >
          {[
            { value: projects.length, label: t.stats.projects },
            { value: featuredProjects.length, label: t.stats.featured },
            { value: liveCount, label: t.stats.stack },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="font-[family-name:var(--font-syne)] text-3xl font-bold text-[#111827]">
                {stat.value}
              </div>
              <div className="mt-1 text-xs text-zinc-500">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 lg:block"
        >
          <a
            href="#about"
            className="flex flex-col items-center gap-2 text-zinc-600 transition-colors hover:text-zinc-400"
          >
            <Sparkles size={16} className="animate-float" />
            <ArrowDown size={18} className="animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
