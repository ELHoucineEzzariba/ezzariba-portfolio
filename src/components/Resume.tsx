"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Download, FileText } from "lucide-react";
import { SITE, translations, type Language } from "@/data/site";

type ResumeProps = {
  lang: Language;
};

export function Resume({ lang }: ResumeProps) {
  const t = translations[lang].resume;

  return (
    <section id="resume" className="relative overflow-hidden py-28">
      <div className="relative mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">{t.tag}</span>
          <h2 className="mt-4 max-w-3xl font-[family-name:var(--font-syne)] text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            {t.title}
          </h2>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-zinc-400">
            {t.subtitle}
          </p>
        </motion.div>

        <div className="mt-14 grid items-stretch gap-6 lg:grid-cols-[1.08fr_.92fr]">
          <motion.article
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: "-60px" }}
            transition={{ duration: 0.65 }}
            className="resume-dossier"
          >
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-black/10 pb-6">
              <div>
                <p className="font-[family-name:var(--font-syne)] text-xl font-bold text-[#111827]">
                  Elhoucine Ezzariba
                </p>
                <p className="mt-1 text-sm text-[#1d4ed8]">{t.role}</p>
              </div>
              <span className="resume-status">{t.status}</span>
            </div>

            <dl className="divide-y divide-black/10">
              {t.facts.map((fact) => (
                <div key={fact.label} className="grid gap-2 py-5 sm:grid-cols-[7rem_1fr]">
                  <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-zinc-500">
                    {fact.label}
                  </dt>
                  <dd className="text-sm font-medium leading-relaxed text-zinc-200">
                    {fact.value}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="resume-proof">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#1d4ed8]">
                {t.proofTitle}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-zinc-300">{t.proof}</p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href={SITE.cvUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">
                <FileText size={18} />
                {t.pdf}
                <ArrowUpRight size={16} />
              </a>
              <a href={SITE.cvWordUrl} download className="btn-secondary">
                <Download size={18} />
                {t.word}
              </a>
            </div>
          </motion.article>

          <motion.a
            href={SITE.cvUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t.pdf}
            initial={{ opacity: 0, x: 28, rotate: 1.5 }}
            whileInView={{ opacity: 1, x: 0, rotate: -1.25 }}
            whileHover={{ rotate: 0, y: -6 }}
            viewport={{ once: false, margin: "-60px" }}
            transition={{ duration: 0.65 }}
            className="resume-preview group"
          >
            <div className="resume-preview-bar">
              <span className="inline-flex items-center gap-2"><FileText size={15} /> CV · 2 Seiten</span>
              <ArrowUpRight size={16} />
            </div>
            <Image
              src="/El_Houcine_Ezzariba_Lebenslauf_AI_Software_Engineering_preview.png"
              alt={t.previewAlt}
              width={1000}
              height={1414}
              sizes="(max-width: 1024px) 90vw, 38vw"
              className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.015]"
            />
          </motion.a>
        </div>
      </div>
    </section>
  );
}
