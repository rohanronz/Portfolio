import type { Metadata } from "next";
import SectionHeader from "@/components/SectionHeader";
import ProjectsClient from "@/components/ProjectsClient";

export const metadata: Metadata = {
  title: "Projects",
  description: "Selected product, SaaS, and fintech work with modern tech.",
};

export default function ProjectsPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-6 py-20">
      <SectionHeader
        eyebrow="Projects"
        title="A curated set of premium product builds."
        subtitle="Explore work across fintech, AI, SaaS, and growth-focused experiences."
      />
      <div className="mt-12">
        <ProjectsClient />
      </div>
    </main>
  );
}
