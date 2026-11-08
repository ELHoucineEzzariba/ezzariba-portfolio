"use client";

import { motion } from "framer-motion";
import { translations, type Language } from "@/data/site";

type SkillsProps = {
  lang: Language;
};

export function Skills({ lang }: SkillsProps) {
  const t = translations[lang].skills;

  return (
    <section id="skills" className="relative py-28">
      <div className="relative mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <span className="section-tag">{t.tag}</span>
          <h2 className="mt-4 font-[family-name:var(--font-syne)] text-3xl font-bold tracking-tight sm:text-4xl">
            {t.title}
          </h2>
          <p className="mt-4 max-w-xl text-zinc-400">{t.subtitle}</p>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2">
          {t.categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="skill-group"
            >
              <h3 className="font-[family-name:var(--font-syne)] text-lg font-semibold">
                {cat.title}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <span
                    key={item}
                    className="skill-item"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
