import ProjectCard from "@/components/ProjectCard";
import Reveal from "@/components/Reveal";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";

export default function Home() {
  return (
    <main>
      <section className="relative overflow-hidden">
        <div className="gradient-orb noise absolute inset-0 opacity-80" />
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 py-20 md:py-28">
          <Reveal>
            <div className="max-w-2xl space-y-6">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted">
                {profile.name}
              </p>
              <h1 className="font-display text-4xl font-semibold tracking-tight text-foreground md:text-6xl">
                {profile.headline}
              </h1>
              <p className="text-base text-muted md:text-lg">{profile.bio}</p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  href="/projects"
                  className="rounded-full bg-brand px-6 py-3 text-center text-sm font-medium text-brand-foreground shadow-card transition hover:-translate-y-0.5 hover:shadow-soft"
                >
                  View Projects
                </a>
                <a
                  href="/contact"
                  className="rounded-full border border-border px-6 py-3 text-center text-sm font-medium text-foreground transition hover:-translate-y-0.5 hover:bg-surface"
                >
                  Contact Me
                </a>
              </div>
            </div>
          </Reveal>
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
      </section>
      <section className="mx-auto w-full max-w-6xl px-6 py-20">
        <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted">
              Featured work
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-foreground md:text-4xl">
              Premium experiences that move metrics.
            </h2>
            <p className="mt-4 text-muted">
              A selection of recent engagements across fintech, SaaS, and AI.
            </p>
          </div>
          <a
            href="/projects"
            className="text-sm font-medium text-foreground underline-offset-4 transition hover:underline"
          >
            Explore all projects
          </a>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {projects.slice(0, 3).map((project, index) => (
            <Reveal key={project.name} delay={index * 0.05}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </section>
      <section className="mx-auto w-full max-w-6xl px-6 pb-24">
        <div className="rounded-3xl border border-border bg-surface p-10 shadow-card md:p-14">
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div className="max-w-xl">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted">
                Let&apos;s collaborate
              </p>
              <h2 className="mt-3 font-display text-3xl font-semibold text-foreground">
                Ready to ship your next standout product?
              </h2>
              <p className="mt-4 text-muted">
                I partner with teams to craft premium, performant interfaces
                that delight customers and drive growth.
              </p>
            </div>
            <a
              href="/contact"
              className="rounded-full bg-brand px-6 py-3 text-center text-sm font-medium text-brand-foreground shadow-card transition hover:-translate-y-0.5 hover:shadow-soft"
            >
              Book a call
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
