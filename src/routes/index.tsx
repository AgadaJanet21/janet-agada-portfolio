import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Mail } from "lucide-react";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { Reveal } from "@/components/Reveal";
import { CountUp } from "@/components/CountUp";
import { Section, Pill } from "@/components/Section";

const TITLE = "Janet Agada · Product Manager · 0→1 Products";
const DESCRIPTION =
  "Product Manager specializing in 0→1 product development, including AI-powered products. I turn complex ideas into structured digital platforms.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
    ],
  }),
  component: Index,
});

const stats = [
  { value: "6", label: "Products shipped" },
  { value: "6", label: "Industries covered" },
  { value: "25+", label: "Modules architected" },
  { value: "4", label: "Live in market" },
];

const featured = [
  {
    name: "Glown",
    category: "Vertical SaaS",
    to: "/work/glown" as const,
    line: "The operating system for a beauty business: booking, reviews, client marketing, multi-channel messaging, and staff payroll, unified in one platform.",
    chips: ["15+ businesses live", "Booking → Payroll", "Live at glown.io"],
    stats: [
      { v: "5", l: "Modules" },
      { v: "388", l: "Clients managed" },
      { v: "₦3.2M", l: "Monthly payroll" },
    ],
  },
  {
    name: "Confette",
    category: "Marketplace",
    to: "/work/confette" as const,
    line: "Nigeria's event-planning marketplace: a three-sided platform where organisers post a budget, split it across service categories, and receive competitive bids from verified vendors.",
    chips: ["Organiser · Vendor · Admin portals", "Full bidding lifecycle", "Live at confette.co"],
    stats: [
      { v: "3", l: "Portals" },
      { v: "6", l: "Lifecycle states" },
      { v: "Live", l: "In market" },
    ],
  },
];

const moreWork = [
  {
    name: "Optima AI",
    tag: "Enterprise AI",
    line: "Coordinated engineering teams across time zones to ship an AI-powered document processing and analysis app for enterprise clients.",
  },
  {
    name: "AmanaCruise",
    tag: "Hospitality",
    line: "Cruise & travel booking platform, live since Feb 2026 with 400+ registered users and ₦800,000+ in first-quarter revenue.",
  },
  {
    name: "Traders College",
    tag: "EdTech",
    line: "A trading-education LMS; 30+ registered learners and $1,000+ in early revenue generated post-beta.",
  },
];

const approach = [
  {
    n: "01",
    title: "Understand the Problem",
    body: "Before anything is built, I need to understand what's actually broken. I research users, map the current state, and define the problem with enough specificity that the solution becomes obvious. No feature work starts until the problem is undeniable.",
  },
  {
    n: "02",
    title: "Architect the Product System",
    body: "I design the product as a complete system, not a list of features. Every component, workflow, module, and integration gets mapped before development begins. This is what prevents the chaos that kills most early-stage products.",
  },
  {
    n: "03",
    title: "Write Requirements That Build Right",
    body: "I write product requirement documentation engineers can actually work from: clear user flows, feature specifications, logic rules, edge cases, and acceptance criteria. Good documentation is the difference between a team that ships and one that rebuilds.",
  },
  {
    n: "04",
    title: "Coordinate Development",
    body: "I stay in the room throughout development. I clarify requirements, track progress, remove blockers, and make real-time decisions to keep velocity high without sacrificing quality. The PM's job doesn't end when the spec is written.",
  },
  {
    n: "05",
    title: "Launch and Iterate",
    body: "I manage the full launch: QA, go-live readiness, and the first iteration cycle. A product isn't done at launch. It's done when users are getting value from it and the data confirms it.",
  },
];

const tools = [
  "Notion",
  "Google Docs",
  "Jira",
  "Trello",
  "Asana",
  "Figma",
  "Lovable",
  "Cursor",
  "Playwright",
  "ChatGPT",
  "Claude",
  "Magicpatterns",
  "Slack",
  "Discord",
  "Paystack",
];

const testimonials = [
  {
    quote:
      "Janet didn't just manage the project. She owned the product. Her documentation was so precise that our engineering team rarely needed clarification. That kind of clarity is rare.",
    name: "Babs Craig",
    role: "Head of Engineering, Optima AI",
  },
  {
    quote:
      "Janet took Glown from an idea to a live platform. She structured everything (the booking logic, the service flows, the entire system) and coordinated the team to ship it. That level of ownership is hard to find.",
    name: "Bright Ikhide",
    role: "Co-Founder, Glown",
  },
];

const benefits = [
  {
    n: "I",
    title: "A PM who writes documentation your engineers will love",
    body: "No more 'the developer misunderstood the requirement.' I write specifications detailed enough that ambiguity is eliminated before development starts. Engineering time goes toward building, not clarifying.",
  },
  {
    n: "II",
    title: "A PM who's built in complex, resource-constrained markets",
    body: "Building in Nigeria means solving real constraints: unreliable infrastructure, multi-currency operations, fragmented service ecosystems, and users who need products that actually work. That product thinking translates directly to any market.",
  },
  {
    n: "III",
    title: "A PM accountable to outcomes, not just output",
    body: "I don't measure success by features shipped. I measure it by whether users are getting value, whether the platform is scaling, and whether the business is growing. I stay engaged until those things are true.",
  },
  {
    n: "IV",
    title: "A PM fluent in building with AI",
    body: "I write clear PRDs for AI and LLM-powered features, and I use AI tools daily to prototype, pressure-test ideas, and ship faster. For me AI isn't a buzzword, it's how I shorten the distance between an idea and a working product.",
  },
];

function Index() {
  return (
    <div className="min-h-screen">
      <SiteNav />
      <main className="pt-20">
        {/* HERO */}
        <section className="py-16 sm:py-28">
          <div className="container-editorial">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs text-muted-foreground">
                <span className="size-1.5 rounded-full bg-primary motion-safe:animate-pulse" />
                Product Manager · 0→1 Products
              </span>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="mt-8 max-w-4xl text-[clamp(2.75rem,7vw,4.5rem)] font-semibold leading-[1.05]">
                I turn complex ideas into{" "}
                <span className="text-primary">structured digital platforms.</span>
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-8 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
                0→1 Product Manager. I've shipped 6 products across 6 industries, including a live
                event marketplace, a beauty-business operating system that runs real payroll, and AI
                tooling, turning ambiguous ideas into platforms that ship and scale.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <div className="mt-10 flex flex-wrap items-center gap-3">
                <a
                  href="#work"
                  className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90"
                >
                  View My Work <ArrowRight className="size-4" />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-accent"
                >
                  Work With Me
                </a>
              </div>
            </Reveal>
            <Reveal delay={320}>
              <p className="mt-6 text-sm text-muted-foreground">
                Open to remote Product Manager roles · Available globally
              </p>
            </Reveal>
          </div>
        </section>

        {/* STATS */}
        <section className="border-y border-border py-12">
          <div className="container-editorial grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 70}>
                <p className="font-display text-4xl font-semibold sm:text-5xl">
                  <CountUp value={s.value} />
                </p>
                <p className="mt-2 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  {s.label}
                </p>
              </Reveal>
            ))}
          </div>
        </section>

        {/* SELECTED WORK */}
        <Section id="work" eyebrow="Case studies" title="Selected Work">
          <div className="space-y-6">
            {featured.map((c, i) => (
              <Reveal key={c.name} delay={i * 90}>
                <Link
                  to={c.to}
                  className="group block rounded-2xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-foreground/20 hover:shadow-lift sm:p-10"
                >
                  <div className="grid gap-8 md:grid-cols-[1fr_15rem] md:gap-12">
                    <div>
                      <div className="flex items-center justify-between gap-4">
                        <Pill>{c.category}</Pill>
                        <ArrowUpRight className="size-6 shrink-0 text-muted-foreground transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-primary md:hidden" />
                      </div>
                      <h3 className="mt-5 text-3xl font-semibold sm:text-4xl">{c.name}</h3>
                      <p className="mt-5 max-w-2xl text-base leading-8 text-muted-foreground">
                        {c.line}
                      </p>
                      <div className="mt-7 flex flex-wrap gap-2">
                        {c.chips.map((chip) => (
                          <Pill key={chip} tone="muted">
                            {chip}
                          </Pill>
                        ))}
                      </div>
                    </div>
                    <div className="flex flex-col gap-6 border-t border-border pt-6 md:items-end md:border-l md:border-t-0 md:pl-10 md:pt-0">
                      <ArrowUpRight className="hidden size-6 text-muted-foreground transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-primary md:block" />
                      <div className="grid grid-cols-3 gap-6 md:mt-auto md:flex md:flex-col md:gap-5 md:text-right">
                        {c.stats.map((s) => (
                          <div key={s.l}>
                            <p className="font-display text-2xl font-semibold sm:text-3xl">
                              <CountUp value={s.v} />
                            </p>
                            <p className="mt-1 text-xs uppercase tracking-[0.14em] text-muted-foreground">
                              {s.l}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}

            <Reveal delay={180}>
              <Link
                to="/work/juyonna"
                className="group block rounded-2xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-foreground/20 hover:shadow-lift sm:p-10"
              >
                <div className="grid gap-8 md:grid-cols-[1fr_15rem] md:gap-12">
                  <div>
                    <div className="flex items-center justify-between gap-4">
                      <Pill>Travel Platform</Pill>
                      <ArrowUpRight className="size-6 shrink-0 text-muted-foreground transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-primary md:hidden" />
                    </div>
                    <h3 className="mt-5 text-3xl font-semibold sm:text-4xl">Juyonna</h3>
                    <p className="mt-5 max-w-2xl text-base leading-8 text-muted-foreground">
                      A modular, multi-service travel ecosystem with 10+ service verticals unified
                      into one scalable platform.
                    </p>
                    <p className="mt-7 text-sm text-muted-foreground">
                      Industry: Travel &amp; Logistics · Market: Nigeria + International · Stage:
                      Phase 1 live.
                    </p>
                  </div>
                  <div className="flex flex-col gap-6 border-t border-border pt-6 md:items-end md:border-l md:border-t-0 md:pl-10 md:pt-0">
                    <ArrowUpRight className="hidden size-6 text-muted-foreground transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-primary md:block" />
                    <div className="grid grid-cols-2 gap-6 md:mt-auto md:flex md:flex-col md:gap-5 md:text-right">
                      <div>
                        <p className="font-display text-2xl font-semibold sm:text-3xl">
                          <CountUp value="10+" />
                        </p>
                        <p className="mt-1 text-xs uppercase tracking-[0.14em] text-muted-foreground">
                          Service verticals
                        </p>
                      </div>
                      <div>
                        <p className="font-display text-2xl font-semibold sm:text-3xl">
                          <CountUp value="4" />
                        </p>
                        <p className="mt-1 text-xs uppercase tracking-[0.14em] text-muted-foreground">
                          Modules live
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </Reveal>
          </div>
        </Section>

        {/* MORE WORK */}
        <Section title="More Work">
          <div className="grid gap-6 md:grid-cols-3">
            {moreWork.map((m, i) => (
              <Reveal key={m.name} delay={i * 70}>
                <article className="h-full rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
                  <Pill tone="muted">{m.tag}</Pill>
                  <h3 className="mt-4 text-xl font-semibold">{m.name}</h3>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">{m.line}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </Section>

        {/* APPROACH */}
        <Section id="approach" eyebrow="Process" title="How I work">
          <div className="divide-y divide-border border-t border-border">
            {approach.map((a, i) => (
              <Reveal key={a.n} delay={i * 60}>
                <div className="grid gap-4 py-8 md:grid-cols-[6rem_1fr] md:gap-10">
                  <p className="font-display text-sm font-semibold text-primary">{a.n}</p>
                  <div>
                    <h3 className="text-xl font-semibold sm:text-2xl">{a.title}</h3>
                    <p className="mt-3 max-w-3xl text-base leading-8 text-muted-foreground">
                      {a.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Section>

        {/* HOW I BUILD */}
        <Section id="build" eyebrow="Hands-on" title="How I build">
          <Reveal>
            <p className="text-base leading-8 text-muted-foreground sm:text-lg">
              I don't just spec products, I build them. I design the system, write the PRDs, then
              prototype and ship the actual frontend, so I hand engineers a working reference instead
              of a wireframe and stay fluent in what's really feasible. I built Confette's frontend
              this way.
            </p>
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <Reveal>
              <article className="h-full rounded-2xl border border-border bg-card p-6">
                <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  Frontend I build in
                </p>
                <p className="mt-3 text-base font-medium">React · Tailwind CSS · Paystack</p>
              </article>
            </Reveal>
            <Reveal delay={80}>
              <article className="h-full rounded-2xl border border-border bg-card p-6">
                <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  Built with AI-native tooling
                </p>
                <p className="mt-3 text-base font-medium">
                  Claude · Cursor · Lovable · Magicpatterns
                </p>
              </article>
            </Reveal>
          </div>
        </Section>

        {/* TOOLS */}
        <Section title="Tools I work with">
          <div className="flex flex-wrap gap-3">
            {tools.map((t, i) => (
              <Reveal key={t} delay={i * 35}>
                <span className="inline-block cursor-default rounded-full border border-border bg-card px-4 py-2 text-sm text-foreground transition-all duration-200 hover:-translate-y-0.5 hover:border-foreground/30 hover:text-primary hover:shadow-lift">
                  {t}
                </span>
              </Reveal>
            ))}
          </div>
        </Section>

        {/* TESTIMONIALS */}
        <Section title="What people say">
          <div className="grid gap-6 md:grid-cols-2">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 80}>
                <figure className="h-full rounded-2xl border border-border bg-card p-8">
                  <blockquote className="font-display text-lg leading-9 sm:text-xl">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <figcaption className="mt-6 text-sm text-muted-foreground">
                    <span className="font-medium text-foreground">{t.name}</span> · {t.role}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </Section>

        {/* WORKING TOGETHER */}
        <Section title="What you get when we work together">
          <Reveal>
            <p className="max-w-3xl text-base leading-8 text-muted-foreground sm:text-lg">
              My experience spans fast-moving startups across Nigeria and international teams. I've
              architected multi-module platforms, launched 0→1 products, and shipped AI-powered
              tools. I bring structure to ambiguity, and I know how to coordinate engineering teams
              to execute without losing speed.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {benefits.map((b, i) => (
              <Reveal key={b.n} delay={i * 80}>
                <article className="h-full rounded-2xl border border-border bg-card p-7">
                  <p className="font-display text-sm font-semibold text-sand">{b.n}</p>
                  <h3 className="mt-4 text-lg font-semibold leading-7">{b.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">{b.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </Section>

        {/* CONTACT */}
        <Section id="contact" className="border-t border-border">
          <Reveal>
            <h2 className="max-w-3xl text-3xl font-semibold sm:text-4xl md:text-5xl">
              Ready to build something great?
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
              Open to full-time remote Product Manager roles and 0→1 product partnerships with
              ambitious teams globally.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href="mailto:agadaejanet@gmail.com"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
              >
                <Mail className="size-4" /> agadaejanet@gmail.com
              </a>
              <a
                href="https://www.linkedin.com/in/janet-agada-6a7372200"
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium transition-colors hover:bg-accent"
              >
                LinkedIn <ArrowUpRight className="size-4" />
              </a>
              <a
                href="/Janet-Agada-Resume.pdf"
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium transition-colors hover:bg-accent"
              >
                Download Résumé
              </a>
            </div>
          </Reveal>
        </Section>
      </main>
      <SiteFooter />
    </div>
  );
}
