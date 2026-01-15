import type { Metadata } from "next";
import Link from "next/link";
import { Mail, MessageCircle, PhoneCall } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch for collaborations, roles, or product strategy.",
};

export default function ContactPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-6 py-20">
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
    </main>
  );
}
