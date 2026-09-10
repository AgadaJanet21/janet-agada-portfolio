import { createFileRoute } from "@tanstack/react-router";
import {
  CaseStudyLayout,
  CaseSection,
  Prose,
  DecisionBlock,
} from "@/components/CaseStudy";
import { Shot } from "@/components/Shot";

const TITLE = "Confette Case Study · Janet Agada, Product Manager";
const DESCRIPTION =
  "How I architected Confette, Nigeria's three-sided event-planning marketplace: budget-first planning, a bidding lifecycle state machine, and vendor trust cascades.";

export const Route = createFileRoute("/work/confette")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
    ],
  }),
  component: ConfettePage,
});

const decisions = [
  {
    n: "1",
    title: "Budget-first planning",
    body: "Organisers allocate a total budget across categories using 'Smart Split' (a recommended weighting per event type) or 'Even Split', then vendors bid against a known, per-category budget. This anchors the entire marketplace on price transparency instead of back-and-forth haggling.",
  },
  {
    n: "2",
    title: "A bidding lifecycle state machine",
    body: "Events move through Draft → Open → Bidding → Vendors Booked → Completed, with a Disputed state for admin review. Every transition fires rules and notifications. I specified each state, its guards, and its edge cases so the engineering team could build it without ambiguity.",
  },
  {
    n: "3",
    title: "Counter-bids with a budget guard",
    body: "Vendors can bid above a category's budget only by explicitly marking a counter-bid with a written reason. The server blocks any acceptance that would push committed spend over the event's total budget, and tells the organiser exactly which category to raise first. This prevents the classic marketplace failure of silent over-commitment.",
  },
  {
    n: "4",
    title: "Trust & safety via vendor verification",
    body: "Admins verify, reject, suspend, and reinstate vendors. Suspension cascades correctly: the vendor's active bids move to on-hold, any booked categories reopen, and affected organisers are notified. Reinstatement then restores bids only where the slot is still open, and rejects the rest. Designing these cascades, so no organiser is ever left with a silently-removed vendor, was the hardest part of the product.",
  },
  {
    n: "5",
    title: "Timing rules that protect both sides",
    body: "Bidding closes automatically when the event starts. A 48-hour vendor lock stops last-minute drops before an event. A vendor's contact details are revealed only after their bid is accepted.",
  },
  {
    n: "6",
    title: "Seeding a cold marketplace",
    body: "Organisers can invite specific verified vendors to bid, and share a public event link with anyone, even people without an account, to pull in bids and grow liquidity.",
  },
];

function ConfettePage() {
  return (
    <CaseStudyLayout
      title="Confette"
      category="Event-Planning Marketplace"
      liveLabel="confette.co"
      liveHref="https://confette.co"
      meta="Role: Product Manager & Product Architect · Market: Nigeria · Roles served: Organiser, Vendor, Admin · Stage: Live"
    >
      <Shot
        src="/shots/confette-admin.png"
        alt="Confette admin dashboard showing total events, live events, total bids, and vendors, with a recent events list."
        caption="The admin portal: platform oversight across events, bids, and vendors."
      />

      <CaseSection heading="Overview">
        <Prose>
          Confette is Nigeria's event-planning marketplace. It connects the people throwing events
          with the people who make them happen: organisers post an event and a budget, split that
          budget across service categories, and receive competitive bids from verified vendors. I
          owned the product end to end: problem definition, system architecture, requirement
          documentation, engineering coordination, and launch.
        </Prose>
      </CaseSection>

      <CaseSection heading="The problem">
        <Prose>
          Planning an event in Nigeria means chasing vendors across WhatsApp and Instagram with no
          price transparency, no trust signals, and no structure. Vendors, in turn, have no reliable
          channel to discover events they're qualified to bid on. The two hardest things to build in
          this market are money-handling and trust, so those are exactly what the product had to
          solve.
        </Prose>
      </CaseSection>

      <CaseSection heading="What I designed">
        {decisions.map((d) => (
          <DecisionBlock key={d.n} index={d.n} title={d.title}>
            {d.body}
          </DecisionBlock>
        ))}
      </CaseSection>

      <CaseSection heading="Inside the product">
        <Shot
          src="/shots/confette-budget.png"
          alt="Confette budget breakdown showing an organiser's total budget split across service categories with allocation bars."
          caption="Budget-first planning: a total budget split across categories with a live allocation bar."
        />
        <Shot
          src="/shots/confette-events.png"
          alt="Confette all-events list showing events with budgets and statuses such as draft, open, and bidding."
          caption="Every event and its status across the bidding lifecycle: Draft, Open, Bidding, and more."
        />
      </CaseSection>

      <CaseSection heading="Outcome">
        <Prose>
          Shipped a complete, production marketplace with three distinct portals (organiser, vendor,
          admin), multi-channel notifications (in-app + email), account auth with email verification
          and password reset, budget tracking against real committed spend, and a public
          event-sharing flow. Live at confette.co.
        </Prose>
      </CaseSection>

      <CaseSection heading="What this demonstrates">
        <Prose>
          End-to-end ownership of a complex, stateful, multi-role product. The systems thinking here,
          modelling every state, guard, and cascade before a line of code, is what separates a PM
          who ships from one who just writes tickets.
        </Prose>
      </CaseSection>
    </CaseStudyLayout>
  );
}
