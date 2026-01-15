"use client";

import { useMemo, useState } from "react";
import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import Reveal from "./Reveal";

const ALL_FILTER = "All";

export default function ProjectsClient() {
  const tags = useMemo(() => {
    const tagSet = new Set<string>();
    projects.forEach((project) => {
      project.tags.forEach((tag) => tagSet.add(tag));
    });
    return [ALL_FILTER, ...Array.from(tagSet)];
  }, []);

  const [activeFilter, setActiveFilter] = useState(ALL_FILTER);

  const filtered = useMemo(() => {
    if (activeFilter === ALL_FILTER) return projects;
    return projects.filter((project) => project.tags.includes(activeFilter));
  }, [activeFilter]);

  return (
    <div className="space-y-10">
      <div className="flex flex-wrap gap-3">
        {tags.map((tag) => (
          <button
            key={tag}
            type="button"
            onClick={() => setActiveFilter(tag)}
            className={`rounded-full border px-4 py-2 text-xs font-medium transition ${
              activeFilter === tag
                ? "border-transparent bg-brand text-brand-foreground shadow-card"
                : "border-border text-muted hover:text-foreground"
            }`}
          >
            {tag}
          </button>
        ))}
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {filtered.map((project, index) => (
          <Reveal key={project.name} delay={index * 0.04}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </div>
  );
}
