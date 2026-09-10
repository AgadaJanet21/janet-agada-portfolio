import { createFileRoute } from "@tanstack/react-router";
import {
  CaseStudyLayout,
  CaseSection,
  Prose,
  DecisionBlock,
} from "@/components/CaseStudy";
import { Shot } from "@/components/Shot";

const TITLE = "Glown Case Study · Janet Agada, Product Manager";
const DESCRIPTION =
  "How I grew Glown from a booking tool into the operating system for beauty businesses: reviews, segmentation, multi-channel messaging, and payroll.";

export const Route = createFileRoute("/work/glown")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
    ],
  }),
  component: GlownPage,
});

const modules = [
  {
    title: "Booking & Calendar",
    body: "Structured appointments with services, staff assignment, and booking codes. The operational core everything else hangs off.",
  },
  {
    title: "Reviews",
    body: "Post-service client reviews with per-staff star ratings, published to build the business's reputation. Review requests are sent automatically over SMS and WhatsApp after an appointment.",
  },
  {
    title: "Marketing & Segmentation",
    body: "A built-in CRM that turns a client book (388 clients for the flagship salon) into targetable segments: 'Slipping away', 'Came once, never again', 'Your best clients', 'New this month', 'Birthdays this month', and 'Repeat no-shows'. Instead of vanity lists, every segment maps to a real retention problem and a reason to reach out.",
  },
  {
    title: "Message Log",
    body: "Every SMS, WhatsApp, and email the business sends, with per-message delivery tracking across channels, so businesses can trust that review requests and campaigns actually land.",
  },
  {
    title: "Payroll",
    body: "Staff earnings built from commission on each completed booking, plus salary, allowances, and deductions, run through a generate → draft → approve workflow. Monthly payroll on the platform has ranged from ₦568K to ₦3.2M gross across live months, connecting the operational side (bookings) directly to the financial side (pay).",
  },
];

const decisions = [
  {
    n: "1",
    title: "One system, not five tools",
    body: "I designed commission logic that attributes each completed booking to the staff member who delivered it and rolls it straight into monthly payroll. Bookings, earnings, and pay live in one place, so the business doesn't reconcile spreadsheets.",
  },
  {
    n: "2",
    title: "Segmentation around real money",
    body: "The marketing module is built on the segments that actually drive revenue (lapsed clients, repeat no-shows, best clients), so it produces rebookings, not newsletters.",
  },
  {
    n: "3",
    title: "Messaging you can trust",
    body: "Multi-channel (SMS / WhatsApp / email) with delivery tracking, because a review request or campaign that silently fails is worse than not sending it.",
  },
];

function GlownPage() {
  return (
    <CaseStudyLayout
      title="Glown"
      category="Beauty-Business SaaS"
      liveLabel="glown.io"
      liveHref="https://glown.io"
      meta="Role: Product Manager (built from zero) · Market: Nigeria · Stage: Live & expanding"
    >
      <Shot
        src="/shots/glown-overview.png"
        alt="Glown business dashboard showing today's appointments, revenue, and this month's bookings and new clients."
        caption="The Glown dashboard: a salon's day and month at a glance."
      />

      <CaseSection heading="Overview">
        <Prose>
          Glown is a booking and business-management platform for beauty professionals. It began as
          a structured booking tool; I've since expanded it into the operating system a salon
          actually runs on: reviews, client marketing, multi-channel messaging, and staff payroll,
          all in one platform. Live at glown.io.
        </Prose>
      </CaseSection>

      <CaseSection heading="The problem">
        <Prose>
          Salons and independent beauty pros run on paper diaries and WhatsApp threads. Bookings
          clash, no-shows go untracked, staff pay is calculated by hand every month, and there's no
          structured way to win back the clients who quietly stop coming. Each of those is a leak in
          the business, and the fix isn't one feature, it's a connected system.
        </Prose>
      </CaseSection>

      <CaseSection heading="Modules I've shipped">
        {modules.map((m) => (
          <DecisionBlock key={m.title} title={m.title}>
            {m.body}
          </DecisionBlock>
        ))}
      </CaseSection>

      <CaseSection heading="Inside the product">
        <Shot
          src="/shots/glown-reviews.png"
          alt="Glown reviews page showing a 4.8-star average with a rating breakdown and published client reviews."
          caption="Reviews: a 4.8-star average with per-staff ratings, published to build the salon's reputation."
        />
        <Shot
          src="/shots/glown-marketing.png"
          alt="Glown marketing page showing client segments such as slipping away, best clients, and repeat no-shows."
          caption="Marketing: the client book segmented into 'Slipping away', 'Best clients', 'Repeat no-shows', and more."
        />
        <Shot
          src="/shots/glown-payroll.png"
          alt="Glown payroll page showing monthly payroll totals with gross, deductions, and net."
          caption="Payroll: monthly runs built from per-booking commission, plus salary, allowances, and deductions."
        />
        <Shot
          src="/shots/glown-analytics.png"
          alt="Glown analytics page showing revenue, net to business, top payment channel, VAT collected, and a channel breakdown."
          caption="Analytics: revenue, net, payment-channel mix, and VAT at a glance, so the business runs on numbers."
        />
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
          15+ beauty businesses live on the platform. The flagship salon manages 388 clients, runs
          monthly payroll in the millions of naira, and sends automated multi-channel client
          communications, all inside Glown. Live since February 2026.
        </Prose>
      </CaseSection>

      <CaseSection heading="What this demonstrates">
        <Prose>
          Taking a product from a single-purpose tool to a multi-module platform without losing
          coherence, and understanding a business deeply enough to connect its operations to its
          money.
        </Prose>
      </CaseSection>
    </CaseStudyLayout>
  );
}
