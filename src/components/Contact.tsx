"use client";

import { motion } from "framer-motion";
import { BriefcaseBusiness, Code2, Download, Mail } from "lucide-react";
import { SITE, translations, type Language } from "@/data/site";

type ContactProps = {
  lang: Language;
};

export function Contact({ lang }: ContactProps) {
  const t = translations[lang].contact;

  return (
    <section id="contact" className="relative py-28">
      <div className="glow-orb bottom-0 left-1/2 h-[400px] w-[600px] -translate-x-1/2 bg-gradient-to-r from-cyan-500/15 to-violet-500/15" />

      <div className="relative mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="card-glass mx-auto max-w-3xl overflow-hidden p-10 text-center sm:p-14"
        >
          <span className="section-tag">{t.tag}</span>
          <h2 className="mt-4 font-[family-name:var(--font-syne)] text-3xl font-bold tracking-tight sm:text-4xl">
            {t.title}
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-zinc-400">{t.subtitle}</p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a href={`mailto:${SITE.email}`} className="btn-primary">
              <Mail size={18} />
              {t.email}
            </a>
            <a href={SITE.cvUrl} download className="btn-secondary"><Download size={18} />{t.cv}</a>
          </div>

          {(SITE.githubUrl || SITE.linkedinUrl) && (
            <div className="mt-8 flex items-center justify-center gap-4">
              {SITE.githubUrl && (
                <a
                  href={SITE.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <Code2 size={17} /> GitHub
                </a>
              )}
              {SITE.linkedinUrl && (
                <a
                  href={SITE.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <BriefcaseBusiness size={17} /> LinkedIn
                </a>
              )}
            </div>
          )}

          <p className="mt-8 text-sm text-zinc-500">{SITE.email}</p>
        </motion.div>
      </div>
    </section>
  );
}
