import Link from "next/link";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { profile } from "@/data/profile";

const iconMap = {
  GitHub: Github,
  LinkedIn: Linkedin,
  "X / Twitter": Twitter,
};

const socialLinks = [
  ...profile.socials.map((social) => ({
    href: social.href,
    label: social.label,
    icon: iconMap[social.label as keyof typeof iconMap] ?? Mail,
  })),
  { href: `mailto:${profile.email}`, label: "Email", icon: Mail },
];

export default function Footer() {
  return (
    <footer className="border-t border-border/60 bg-background">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 py-10 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-display text-lg font-semibold text-foreground">
            {profile.name}
          </p>
          <p className="text-sm text-muted">
            Building premium, human-centered digital products.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-4 text-sm text-muted">
          {socialLinks.map((link) => {
            const Icon = link.icon;
            return (
              <Link
                key={link.label}
                href={link.href}
                className="inline-flex items-center gap-2 transition hover:text-foreground"
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noreferrer" : undefined}
              >
                <Icon size={16} />
                {link.label}
              </Link>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
