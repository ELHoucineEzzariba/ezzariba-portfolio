"use client";

import { motion } from "framer-motion";
import { MapPin, GraduationCap, Code2, Briefcase } from "lucide-react";
import { translations, SITE, type Language } from "@/data/site";

type AboutProps = {
  lang: Language;
};

const icons = [GraduationCap, Code2, Briefcase, MapPin];

export function About({ lang }: AboutProps) {
  const t = translations[lang].about;

  return (
    <section id="about" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">{t.tag}</span>
          <h2 className="mt-4 max-w-2xl font-[family-name:var(--font-syne)] text-3xl font-bold tracking-tight sm:text-4xl">
            {t.title}
          </h2>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-zinc-400">
            {t.text}
          </p>
        </motion.div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {t.highlights.map((item, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="card-glass group p-6 transition-colors hover:border-white/15"
              >
                <div className="mb-4 inline-flex rounded-xl border border-white/10 bg-white/5 p-2.5 text-cyan-400 transition-colors group-hover:border-cyan-500/30 group-hover:bg-cyan-500/10">
                  <Icon size={20} />
                </div>
                <div className="text-xs font-medium uppercase tracking-wider text-zinc-500">
                  {item.label}
                </div>
                <div className="mt-1.5 text-sm font-medium text-zinc-200">
                  {item.value}
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10 flex items-center gap-2 text-sm text-zinc-500"
        >
          <MapPin size={16} className="text-zinc-600" />
          {SITE.location}
        </motion.div>
      </div>
    </section>
  );
}
