type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
};

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "left",
}: SectionHeaderProps) {
  return (
    <div className={align === "center" ? "text-center" : "text-left"}>
      {eyebrow && (
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted">
          {eyebrow}
        </p>
      )}
      <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base text-muted md:text-lg">{subtitle}</p>
      )}
    </div>
  );
}
