"use client";

import { motion } from "framer-motion";
import { translations, type Language } from "@/data/site";

type ProcessProps = {
  lang: Language;
};

export function Process({ lang }: ProcessProps) {
  const t = translations[lang].process;

  return (
    <section className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
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
        </motion.div>

        <div className="process-list">
          {t.steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-30px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="process-step"
            >
              <div className="process-number">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="font-[family-name:var(--font-syne)] font-semibold">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
