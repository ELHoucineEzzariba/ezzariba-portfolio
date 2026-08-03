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
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <span className="section-tag">{t.tag}</span>
          <h2 className="mt-4 font-[family-name:var(--font-syne)] text-3xl font-bold tracking-tight sm:text-4xl">
            {t.title}
          </h2>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {t.steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative text-center"
            >
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-cyan-500/30 bg-cyan-500/10 font-[family-name:var(--font-syne)] text-lg font-bold text-cyan-300">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="font-[family-name:var(--font-syne)] font-semibold">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                {step.desc}
              </p>
              {i < t.steps.length - 1 && (
                <div className="absolute top-6 left-[calc(50%+28px)] hidden h-px w-[calc(100%-56px)] bg-gradient-to-r from-cyan-500/30 to-transparent lg:block" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
