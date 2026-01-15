"use client";

import Link from "next/link";
import { ExternalLink, Github } from "lucide-react";
import type { Project } from "@/data/types";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group flex h-full flex-col rounded-2xl border border-border bg-surface p-6 shadow-card transition hover:-translate-y-1 hover:shadow-soft">
      <div className="flex items-center justify-between">
        <h3 className="font-display text-xl font-semibold text-foreground">
          {project.name}
        </h3>
        <div className="flex items-center gap-3 text-muted">
          <Link
            href={project.github}
            target="_blank"
            rel="noreferrer"
            aria-label={`${project.name} GitHub`}
            className="transition hover:text-foreground"
          >
            <Github size={18} />
          </Link>
          <Link
            href={project.live}
            target="_blank"
            rel="noreferrer"
            aria-label={`${project.name} Live demo`}
            className="transition hover:text-foreground"
          >
            <ExternalLink size={18} />
          </Link>
        </div>
      </div>
      <p className="mt-3 text-sm text-muted">{project.description}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={`${project.name}-${tag}`}
            className="rounded-full border border-border px-3 py-1 text-xs font-medium text-muted"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
