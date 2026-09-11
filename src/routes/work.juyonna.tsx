import { createFileRoute } from "@tanstack/react-router";
import { CaseStudyLayout, CaseSection, Prose, DecisionBlock, MyRole } from "@/components/CaseStudy";
import { cn } from "@/lib/utils";

const TITLE = "Juyonna Case Study · Janet Agada, Product Manager";
const DESCRIPTION =
  "How I architected Juyonna as a modular travel ecosystem: 10+ service verticals on one shared core, a partner-aware payment engine, and a rolling, revenue-first launch strategy.";

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
  { name: "Dashboard", live: true },
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
    title: "Modular, not monolithic",
    body: "I chose to build Juyonna as independent modules on a shared core rather than one monolith. That single decision converted a potential 12-month big-bang launch into a rolling strategy where each vertical ships and earns revenue as soon as it is ready.",
  },
  {
    n: "2",
    title: "A partner-aware payment engine",
    body: "I designed the payment architecture around a Paystack gateway with percentage-based fee logic that varies per partner, real-time currency conversion for international services, and offline reconciliation for money that moves outside the gateway.",
  },
  {
    n: "3",
    title: "Real partners behind every vertical",
    body: "Each service plugs into real providers, GIG and Africanies for cargo and logistics, ANCHOR and Tangerine for insurance underwriting, coursefinder.ai for study-abroad matching, all normalised behind the core so the product experience stays consistent.",
  },
  {
    n: "4",
    title: "One core, many fronts",
    body: "Authentication, payments, notifications, and the data model live once in the core, so every new vertical inherits them instead of rebuilding them. That is what makes the rolling launch genuinely cheap to extend.",
  },
];

function JuyonnaPage() {
  return (
    <CaseStudyLayout
      title="Juyonna"
      category="Travel Platform"
      liveLabel="juyonna.com"
      liveHref="https://juyonna.com"
      meta="Role: Product Manager & Platform Architect · Employer: TM Labs (contract) · Market: Nigeria + International · Stage: Phase 1 live"
    >
      <MyRole
        lead="Product Manager and platform architect. I designed Juyonna's architecture and drove Phase 1 to live."
        items={[
          "Architected the modular platform: 10+ service verticals on one shared core infrastructure layer.",
          "Made the modular-over-monolithic call that turned a 12-month launch into a rolling, revenue-first strategy.",
          "Designed the payment architecture: Paystack, partner-specific fee logic, currency conversion, and offline reconciliation.",
          "Coordinated multi-partner API integrations across logistics, insurance underwriting, and study-abroad matching.",
          "Documented specifications in Notion and ran delivery through Figma and Trello.",
        ]}
      />

      <CaseSection heading="Overview">
        <Prose>
          Juyonna is a modular, multi-service travel ecosystem: one platform that unifies 10+
          independent travel and logistics services, from airport protocol and travel insurance to
          cargo, study-abroad support, flights, and more. I owned the architecture and product for TM
          Labs and delivered Phase 1 live at juyonna.com.
        </Prose>
      </CaseSection>

      <CaseSection heading="The problem">
        <Prose>
          Travel and logistics in the region are fragmented across dozens of separate providers and
          point solutions. Building all of it as one monolith would mean a year of work before
          anything shipped or earned. The real problem was structural: how do you launch a broad
          ecosystem without betting everything on a single, distant big-bang release?
        </Prose>
      </CaseSection>

      <CaseSection heading="The architecture I designed">
        <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
            10+ service verticals, one shared core
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
              · authentication · partner-aware payments · notifications · multi-partner APIs · one
              data model
            </span>
          </div>
          <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-2">
              <span className="size-1.5 rounded-full bg-primary" /> Live in Phase 1
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="size-1.5 rounded-full border border-muted-foreground/50" /> On the
              roadmap
            </span>
          </div>
          <p className="mt-4 text-sm leading-7 text-muted-foreground">
            Every vertical is an independent module on one shared core, so the platform ships and
            earns one service at a time instead of waiting on a 12-month big-bang launch.
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
          Phase 1 shipped live with five modules, Protocol Services, Travel Insurance, Cargo &
          Logistics, Study Abroad, and the Dashboard, all running on the shared core with real
          payment processing and live partner integrations. The remaining verticals roll out on the
          same foundation. Live at juyonna.com.
        </Prose>
      </CaseSection>

      <CaseSection heading="What this demonstrates">
        <Prose>
          Platform-level architecture thinking: designing for modularity, shared infrastructure, and
          a launch strategy that produces revenue early instead of risk late. This is the systems and
          business judgment that turns a broad idea into something that actually ships.
        </Prose>
      </CaseSection>
    </CaseStudyLayout>
  );
}
