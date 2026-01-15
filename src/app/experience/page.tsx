import type { Metadata } from "next";
import SectionHeader from "@/components/SectionHeader";
import Reveal from "@/components/Reveal";
import { experience } from "@/data/experience";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Roles, impact, and leadership across fintech, SaaS, and digital product teams.",
};

export default function ExperiencePage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-6 py-20">
      <SectionHeader
        eyebrow="Experience"
        title="Building scalable systems and customer-first outcomes."
        subtitle="Highlights of product impact, team leadership, and measurable results."
      />
      <div className="mt-12 grid gap-6">
        {experience.map((role, index) => (
          <Reveal key={role.company} delay={index * 0.05}>
            <div className="rounded-3xl border border-border bg-surface p-8 shadow-card">
              <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="font-display text-2xl font-semibold text-foreground">
                    {role.role}
                  </h3>
                  <p className="text-sm text-muted">{role.company}</p>
                </div>
                <p className="text-sm font-medium text-muted">{role.duration}</p>
              </div>
              <ul className="mt-6 space-y-3 text-sm text-muted">
                {role.highlights.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-muted" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </main>
  );
}
