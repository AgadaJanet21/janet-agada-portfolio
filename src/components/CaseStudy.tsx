import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight, Check } from "lucide-react";
import type { ReactNode } from "react";
import { SiteNav } from "./SiteNav";
import { SiteFooter } from "./SiteFooter";
import { Reveal } from "./Reveal";
import { Pill } from "./Section";

export function CaseStudyLayout({
  title,
  category,
  liveLabel,
  liveHref,
  meta,
  children,
}: {
  title: string;
  category: string;
  liveLabel: string;
  liveHref: string;
  meta: string;
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen">
      <SiteNav />
      <main className="pt-28 sm:pt-32">
        <div className="container-editorial">
          <Reveal>
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="size-4" /> Back to home
            </Link>
          </Reveal>

          <Reveal delay={60}>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <Pill>{category}</Pill>
              <a
                href={liveHref}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
              >
                {liveLabel} <ArrowUpRight className="size-4" />
              </a>
            </div>
            <h1 className="mt-6 text-[clamp(2.5rem,6vw,4rem)] font-semibold leading-[1.05]">
              {title}
            </h1>
            <p className="mt-6 max-w-3xl text-sm leading-7 text-muted-foreground">{meta}</p>
          </Reveal>

          <div className="mt-16 max-w-3xl space-y-16 pb-24">{children}</div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}

export function CaseSection({ heading, children }: { heading: string; children: ReactNode }) {
  return (
    <Reveal as="section">
      <h2 className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
        {heading}
      </h2>
      <div className="mt-6 space-y-6">{children}</div>
    </Reveal>
  );
}

export function Prose({ children }: { children: ReactNode }) {
  return <p className="text-base leading-8 text-foreground/85 sm:text-lg">{children}</p>;
}

export function MyRole({ lead, items }: { lead: string; items: string[] }) {
  return (
    <Reveal as="section" className="rounded-3xl border border-primary/20 bg-primary/[0.04] p-7 sm:p-10">
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">My role</p>
      <p className="mt-4 max-w-3xl text-xl font-semibold leading-8 text-foreground sm:text-[1.7rem] sm:leading-10">
        {lead}
      </p>
      <ul className="mt-8 grid gap-x-8 gap-y-3.5 sm:grid-cols-2">
        {items.map((it) => (
          <li key={it} className="flex gap-3 text-base leading-7 text-foreground/80">
            <Check className="mt-1 size-4 shrink-0 text-primary" strokeWidth={2.5} />
            <span>{it}</span>
          </li>
        ))}
      </ul>
    </Reveal>
  );
}

export function DecisionBlock({
  index,
  title,
  children,
}: {
  index?: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-border bg-card p-6 transition-shadow duration-300 hover:shadow-lift sm:p-8">
      <div className="flex items-baseline gap-3">
        {index && <span className="font-display text-sm font-semibold text-primary">{index}</span>}
        <h3 className="text-lg font-semibold sm:text-xl">{title}</h3>
      </div>
      <p className="mt-3 text-base leading-8 text-muted-foreground">{children}</p>
    </div>
  );
}
