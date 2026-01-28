import SectionHeader from "@/components/SectionHeader";
import ProjectsClient from "@/components/ProjectsClient";
import Timeline from "@/components/Timeline";
import Reveal from "@/components/Reveal";
import Image from "next/image";
import { profile } from "@/data/profile";
import { skills } from "@/data/skills";
import { experience } from "@/data/experience";
import Link from "next/link";
import { Mail, MessageCircle, PhoneCall } from "lucide-react";

function highlightText(text: string) {
  const highlights = [
    "speed, quality",
    "experiences users love",
    "cross-functional teams",
    "modernization",
    "performance-critical",
    "scalable",
    "stability",
  ];

  // Create a regex pattern that matches any of the highlights (longest first)
  const sortedHighlights = highlights.sort((a, b) => b.length - a.length);
  const escapedHighlights = sortedHighlights.map((h) =>
    h.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
  );
  const pattern = new RegExp(`(${escapedHighlights.join("|")})`, "gi");

  const parts: (string | React.ReactElement)[] = [];
  let lastIndex = 0;
  let keyCounter = 0;

  const matches = [...text.matchAll(pattern)];

  matches.forEach((match) => {
    const index = match.index!;
    if (index > lastIndex) {
      parts.push(text.substring(lastIndex, index));
    }
    parts.push(
      <span key={`highlight-${keyCounter++}`} className="font-semibold text-brand">
        {match[0]}
      </span>
    );
    lastIndex = index + match[0].length;
  });

  if (lastIndex < text.length) {
    parts.push(text.substring(lastIndex));
  }

  return parts.length > 0 ? <>{parts}</> : text;
}

export default function Home() {
  return (
    <main>
      {/* Home/Hero Section */}
      <section id="home" className="relative overflow-hidden">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 py-20 md:py-20">
          <Reveal>
            <div className="mx-auto max-w-[53rem] space-y-6 text-center">
              <h1 className="font-display text-4xl font-semibold tracking-tight text-foreground md:text-6xl">
                {profile.headline}
              </h1>
              <p className="text-base text-muted md:text-lg">{profile.bio}</p>
              <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
                <a
                  href="#projects"
                  className="rounded-full bg-brand px-6 py-3 text-center text-sm font-medium text-brand-foreground shadow-card transition hover:-translate-y-0.5 hover:shadow-soft"
                >
                  View Projects
                </a>
                <a
                  href="#contact"
                  style={{ border: "2px solid rgb(37 53 69)" }}
                  className="rounded-full px-6 py-3 text-center text-sm font-medium text-foreground transition hover:-translate-y-0.5 hover:bg-white/10"
                >
                  Contact Me
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="mx-auto w-full max-w-6xl px-6 py-10">
        <div className="mb-20">
          <div className="grid gap-6 md:grid-cols-3">
            {profile.stats.map((stat, index) => (
              <Reveal key={stat.label} delay={index * 0.05}>
                <div className="glass-panel rounded-2xl p-6 shadow-card">
                  <p className="text-sm text-muted">{stat.label}</p>
                  <p className="mt-2 font-display text-2xl font-semibold text-foreground">
                    {stat.value}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
        <SectionHeader
          eyebrow="About"
          title=""
          subtitle=""
        />
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] mt-10">
          <Reveal>
            <div className="space-y-8">
              <div className="flex flex-col items-center sm:flex-row sm:items-start gap-6">
                <div className="relative flex-shrink-0">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-brand/20 to-brand/5 blur-xl" />
                  <Image
                    src="/about-photo.jpeg"
                    alt={profile.name}
                    width={160}
                    height={160}
                    className="relative rounded-full object-cover border-4 border-border shadow-soft"
                  />
                </div>
                <div className="flex-1 text-center sm:text-left">
                  <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
                    {profile.name}
                  </h2>
                  <p className="mt-2 text-base font-medium text-muted md:text-lg">
                    Full Stack Developer
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <p className="text-base leading-relaxed text-muted md:text-lg">
                  {profile.introduction}
                </p>
                <p className="text-base leading-relaxed text-muted md:text-lg">
                  {highlightText(profile.about1)}
                </p>
                <p className="text-base leading-relaxed text-muted md:text-lg">
                  {highlightText(profile.about2)}
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
      </section>

      {/* Experience Section */}
      <section id="experience" className="mx-auto w-full max-w-6xl px-6 py-20">
        <SectionHeader
          eyebrow="Experience"
          title="Building scalable systems and customer-first outcomes."
          subtitle="Highlights of product impact, team leadership, and measurable results."
        />
        <div className="mt-12">
          <Timeline items={experience} />
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="mx-auto w-full max-w-6xl px-6 py-20">
        <SectionHeader
          eyebrow="Projects"
          title="A curated set of premium product builds."
          subtitle="Explore work across fintech, AI, SaaS, and growth-focused experiences."
        />
        <div className="mt-12">
          <ProjectsClient />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="mx-auto w-full max-w-6xl px-6 py-20">
        <SectionHeader
          eyebrow="Contact"
          title="Let's build something exceptional."
          subtitle="Tell me about your product, team, or opportunity. I respond within 24-48 hours."
        />
        <div className="mt-12 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <form className="space-y-6 rounded-3xl border border-border bg-surface p-8 shadow-card">
            <div className="grid gap-6 md:grid-cols-2">
              <label className="space-y-2 text-sm font-medium text-foreground">
                Name
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition focus:border-foreground"
                />
              </label>
              <label className="space-y-2 text-sm font-medium text-foreground">
                Email
                <input
                  type="email"
                  name="email"
                  placeholder="you@email.com"
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition focus:border-foreground"
                />
              </label>
            </div>
            <label className="space-y-2 text-sm font-medium text-foreground">
              Message
              <textarea
                name="message"
                placeholder="Tell me about the project or role."
                rows={6}
                className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition focus:border-foreground"
              />
            </label>
            <button
              type="submit"
              className="w-full rounded-full bg-brand px-6 py-3 text-sm font-medium text-brand-foreground shadow-card transition hover:-translate-y-0.5 hover:shadow-soft"
            >
              Send message
            </button>
            <p className="text-xs text-muted">
              This form is for UI only. Swap with your preferred form backend.
            </p>
          </form>
          <div className="space-y-6">
            <div className="rounded-3xl border border-border bg-surface p-6 shadow-card">
              <div className="flex items-center gap-3">
                <Mail className="text-muted" size={20} />
                <div>
                  <p className="text-sm font-medium text-foreground">Email</p>
                  <p className="text-sm text-muted">{profile.email}</p>
                </div>
              </div>
            </div>
            <div className="rounded-3xl border border-border bg-surface p-6 shadow-card">
              <div className="flex items-center gap-3">
                <PhoneCall className="text-muted" size={20} />
                <div>
                  <p className="text-sm font-medium text-foreground">Availability</p>
                  <p className="text-sm text-muted">Open to select roles</p>
                </div>
              </div>
            </div>
            <div className="rounded-3xl border border-border bg-surface p-6 shadow-card">
              <div className="flex items-center gap-3">
                <MessageCircle className="text-muted" size={20} />
                <div>
                  <p className="text-sm font-medium text-foreground">
                    Social presence
                  </p>
                  <div className="mt-2 flex flex-wrap gap-3 text-sm text-muted">
                    {profile.socials.map((link) => (
                      <Link
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                        className="transition hover:text-foreground"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <Link
              href={`mailto:${profile.email}`}
              className="flex items-center justify-between rounded-3xl border border-border bg-surface px-6 py-5 text-sm font-medium text-foreground shadow-card transition hover:-translate-y-0.5 hover:shadow-soft"
            >
              Start a conversation
              <Mail size={18} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
