import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

export function Section({
  id,
  eyebrow,
  title,
  children,
  className,
}: {
  id?: string;
  eyebrow?: string;
  title?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={cn("py-16 sm:py-24", className)}>
      <div className="container-editorial">
        {(eyebrow || title) && (
          <Reveal className="mb-10 sm:mb-14">
            {eyebrow && (
              <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className="text-3xl font-semibold sm:text-4xl md:text-5xl">{title}</h2>
            )}
          </Reveal>
        )}
        {children}
      </div>
    </section>
  );
}

export function Pill({
  children,
  tone = "sand",
}: {
  children: ReactNode;
  tone?: "sand" | "muted" | "accent";
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium",
        tone === "sand" && "bg-sand/12 text-sand",
        tone === "muted" && "border border-border bg-background text-muted-foreground",
        tone === "accent" && "bg-primary/10 text-primary",
      )}
    >
      {children}
    </span>
  );
}
