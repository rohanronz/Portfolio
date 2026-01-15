import type { Metadata } from "next";
import SectionHeader from "@/components/SectionHeader";
import Timeline from "@/components/Timeline";
import Reveal from "@/components/Reveal";
import { profile } from "@/data/profile";
import { skills } from "@/data/skills";
import { experience } from "@/data/experience";

export const metadata: Metadata = {
  title: "About",
  description: "Learn more about Aarav's background, skills, and career story.",
};

export default function AboutPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-6 py-20">
      <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <Reveal>
          <div className="space-y-6">
            <SectionHeader
              eyebrow="About"
              title="Designing premium fintech experiences."
              subtitle="A product-minded engineer blending UX, systems thinking, and modern frontend craft."
            />
            <p className="text-muted">{profile.bio}</p>
            <div className="rounded-2xl border border-border bg-surface p-6 shadow-card">
              <p className="text-sm text-muted">Based in</p>
              <p className="mt-2 font-display text-xl font-semibold text-foreground">
                {profile.location}
              </p>
            </div>
          </div>
        </Reveal>
        <Reveal>
          <div className="glass-panel rounded-3xl p-8 shadow-card">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted">
              Core strengths
            </p>
            <div className="mt-6 space-y-6">
              {skills.map((group) => (
                <div key={group.category}>
                  <p className="text-sm font-semibold text-foreground">
                    {group.category}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {group.items.map((skill) => (
                      <span
                        key={`${group.category}-${skill}`}
                        className="rounded-full border border-border px-3 py-1 text-xs font-medium text-muted"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
      <section className="mt-20">
        <SectionHeader
          eyebrow="Career Timeline"
          title="A track record of shipping high-impact products."
          subtitle="Progression across fintech, SaaS, and digital studio roles."
        />
        <div className="mt-10">
          <Timeline items={experience} />
        </div>
      </section>
    </main>
  );
}
