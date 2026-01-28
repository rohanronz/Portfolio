"use client";

import Link from "next/link";
import Image from "next/image";
import { ExternalLink, Github, ImageIcon } from "lucide-react";
import type { Project } from "@/data/types";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  const hasImage = Boolean(project.image);

  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-surface shadow-card transition hover:-translate-y-0.5 hover:shadow-soft">
      <Link
        href={project.live}
        target="_blank"
        rel="noreferrer"
        className="flex flex-1 flex-col"
      >
        <div className="relative aspect-[2/1] w-full overflow-hidden rounded-t-2xl bg-muted">
          {hasImage ? (
            <Image
              src={project.image!}
              alt={project.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center text-muted">
              <ImageIcon size={32} strokeWidth={1.5} />
            </div>
          )}
        </div>
        <div className="flex flex-col p-4">
          <h3 className="font-display text-xl font-semibold text-foreground">
            {project.name}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            {project.description}
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
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
      </Link>
      <div className="flex items-center gap-3 px-4 pb-4 text-muted">
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
  );
}
