import { createFileRoute } from "@tanstack/react-router";
import { CaseStudyLayout, CaseSection, Prose, DecisionBlock, MyRole } from "@/components/CaseStudy";
import { cn } from "@/lib/utils";

const TITLE = "Juyonna Case Study · Janet Agada, Product Manager";
const DESCRIPTION =
  "How I structured Juyonna as a modular travel and logistics platform: separate service modules on one shared core, a partner-aware payment setup, and a launch that ships in pieces.";

export const Route = createFileRoute("/work/juyonna")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
    ],
  }),
  component: JuyonnaPage,
});

const modules = [
  { name: "Protocol Services", live: true },
  { name: "Travel Insurance", live: true },
  { name: "Cargo & Logistics", live: true },
  { name: "Study Abroad", live: true },
  { name: "Flights", live: false },
  { name: "Hotels", live: false },
  { name: "Visa Assistance", live: false },
  { name: "Tours", live: false },
  { name: "Aircraft Charter", live: false },
  { name: "Travel Shop", live: false },
];

const decisions = [
  {
    n: "1",
    title: "Modular instead of one big build",
    body: "I built Juyonna as separate modules on a shared core rather than one monolith, so a service could launch as soon as it was ready instead of waiting for everything to be finished at once.",
  },
  {
    n: "2",
    title: "Payments that handle real complications",
    body: "I designed the payment setup around Paystack with fees that vary by partner, currency conversion for international services, and a way to reconcile payments made offline, outside the gateway.",
  },
  {
    n: "3",
    title: "Real partners behind each service",
    body: "Each module connects to actual providers, for logistics, insurance underwriting, and study-abroad matching, handled behind the shared core so the experience stays consistent across services.",
  },
];

function JuyonnaPage() {
  return (
    <CaseStudyLayout
      title="Juyonna"
      category="Travel Platform"
      liveLabel="juyonna.com"
      liveHref="https://juyonna.com"
      meta="Role: Product Manager & Platform Architect · Employer: TM Labs (contract) · Market: Nigeria + International · Stage: Live, 4 core modules shipped"
    >
      <MyRole
        lead="Product Manager and platform architect. I designed the architecture and shipped Phase 1."
        items={[
          "Designed the platform as separate modules on one shared core, so services can launch one at a time.",
          "Shipped Phase 1: four core modules live, Protocol, Travel Insurance, Cargo & Logistics, and Study Abroad.",
          "Designed the payment setup: Paystack, partner-specific fees, currency conversion, and offline reconciliation.",
          "Coordinated the API integrations with real partners for logistics, insurance, and study-abroad matching.",
          "Wrote the specs in Notion and ran delivery in Figma and Trello.",
        ]}
      />

      <CaseSection heading="Overview">
        <Prose>
          Juyonna is a travel and logistics platform that brings multiple services together in one
          app. It's built as separate modules on a shared foundation, so each service can go live on
          its own. I designed the architecture and shipped Phase 1: four core modules, live at
          juyonna.com.
        </Prose>
      </CaseSection>

      <CaseSection heading="The problem">
        <Prose>
          Travel and logistics here are spread across a lot of separate providers. Building every
          service at once would take a year before anything was usable. The question I had to answer
          was how to launch a broad platform in pieces, without waiting on one huge release.
        </Prose>
      </CaseSection>

      <CaseSection heading="The architecture">
        <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
            Service modules, one shared core
          </p>
          <div className="mt-5 grid grid-cols-2 gap-2.5 sm:grid-cols-3">
            {modules.map((m) => (
              <span
                key={m.name}
                className={cn(
                  "flex items-center justify-between gap-2 rounded-xl border px-3 py-2.5 text-sm font-medium",
                  m.live
                    ? "border-primary/30 bg-primary/5 text-foreground"
                    : "border-border bg-background text-muted-foreground",
                )}
              >
                {m.name}
                {m.live && <span className="size-1.5 shrink-0 rounded-full bg-primary" />}
              </span>
            ))}
          </div>
          <div className="mt-3 rounded-xl border border-border bg-background px-4 py-3 text-sm">
            <span className="font-medium text-foreground">Shared core</span>
            <span className="text-muted-foreground">
              {" "}
              · authentication · payments · notifications · partner APIs · one data model · the app
              shell (dashboard, profile, settings)
            </span>
          </div>
          <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-2">
              <span className="size-1.5 rounded-full bg-primary" /> Live now
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="size-1.5 rounded-full border border-muted-foreground/50" /> Planned
            </span>
          </div>
          <p className="mt-4 text-sm leading-7 text-muted-foreground">
            Each service is its own module on one shared core, so a new one ships without rebuilding
            the basics. Four are live so far; the rest slot onto the same core.
          </p>
        </div>
      </CaseSection>

      <CaseSection heading="Key decisions">
        {decisions.map((d) => (
          <DecisionBlock key={d.n} index={d.n} title={d.title}>
            {d.body}
          </DecisionBlock>
        ))}
      </CaseSection>

      <CaseSection heading="Outcome">
        <Prose>
          Phase 1 is live with four core modules, Protocol Services, Travel Insurance, Cargo &
          Logistics, and Study Abroad, running on the shared core with real payments and live partner
          integrations. The remaining services roll out on the same foundation. Live at juyonna.com.
        </Prose>
      </CaseSection>

      <CaseSection heading="What this demonstrates">
        <Prose>
          Designing a platform to grow in pieces: shared infrastructure, modules that ship on their
          own, and the payment and partner plumbing to back them. It's how you launch something broad
          without betting everything on one release.
        </Prose>
      </CaseSection>
    </CaseStudyLayout>
  );
}
