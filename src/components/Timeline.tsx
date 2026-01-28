import Reveal from "./Reveal";
import type { ExperienceItem } from "@/data/types";

type TimelineProps = {
  items: ExperienceItem[];
};

export default function Timeline({ items }: TimelineProps) {
  return (
    <div className="relative space-y-8 border-l border-border pl-6">
      {items.map((item, index) => (
        <Reveal key={`${item.company}-${item.role}`} delay={index * 0.05}>
          <div className="relative">
            <span className="absolute -left-[33px] top-2 h-3 w-3 rounded-full bg-brand" />
            <div className="rounded-2xl border border-border bg-surface p-5 shadow-card">
              <p className="text-sm font-medium text-muted">{item.duration}</p>
              <h3 className="mt-2 font-display text-lg font-semibold text-foreground">
                {item.role}
              </h3>
              <p className="text-sm text-muted">{item.company}</p>
              <ul className="mt-4 space-y-2 text-base text-muted">
                {item.highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-3 items-start">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-muted flex-shrink-0" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
