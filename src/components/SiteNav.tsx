import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const links = [
  { id: "work", label: "Work" },
  { id: "approach", label: "Approach" },
  { id: "contact", label: "Contact" },
];

export function SiteNav() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function SectionLink({
    id,
    label,
    className,
  }: {
    id: string;
    label: string;
    className?: string;
  }) {
    if (isHome) {
      return (
        <a href={`#${id}`} className={className}>
          {label}
        </a>
      );
    }
    return (
      <Link to="/" hash={id} className={className}>
        {label}
      </Link>
    );
  }

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border bg-background/85 backdrop-blur-md"
          : "border-b border-transparent",
      )}
    >
      <nav
        className={cn(
          "container-editorial flex items-center justify-between transition-all duration-300",
          scrolled ? "h-14" : "h-20",
        )}
      >
        <Link
          to="/"
          className="font-display text-base font-semibold tracking-tight text-foreground"
        >
          Janet Agada
        </Link>

        <div className="flex items-center gap-1 sm:gap-6">
          <div className="hidden items-center gap-6 sm:flex">
            {links.map((l) => (
              <SectionLink
                key={l.id}
                id={l.id}
                label={l.label}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              />
            ))}
          </div>
          <SectionLink
            id="contact"
            label="Work With Me"
            className="inline-flex items-center rounded-full bg-primary px-4 py-2 text-xs font-medium text-primary-foreground transition-opacity hover:opacity-90 sm:text-sm"
          />
        </div>
      </nav>
    </header>
  );
}
