// Generates public/Janet-Agada-Resume.pdf from the HTML below.
// Run:  node scripts/generate-resume.mjs   (or `npm run resume`)
// Edit the content here, re-run, and commit the regenerated PDF.
import { chromium } from "playwright";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT = join(__dirname, "..", "public", "Janet-Agada-Resume.pdf");

const html = `<!doctype html><html><head><meta charset="utf-8"><style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body { font-family: "Segoe UI", -apple-system, Roboto, Helvetica, Arial, sans-serif;
         color: #1a1a1a; font-size: 9.9pt; line-height: 1.38; -webkit-print-color-adjust: exact; }
  .name { font-family: Georgia, "Times New Roman", serif; font-size: 25pt; font-weight: 700; letter-spacing: -0.5px; }
  .role { color: #4F46E5; font-weight: 600; font-size: 10.5pt; margin-top: 2px; }
  .contact { color: #666; font-size: 8.7pt; margin-top: 7px; }
  .contact a { color: #4F46E5; text-decoration: none; }
  h2 { font-size: 8.2pt; text-transform: uppercase; letter-spacing: 1.5px; color: #4F46E5;
       margin: 12px 0 6px; padding-bottom: 3px; border-bottom: 1px solid #e6e6e6; }
  .summary { color: #333; }
  .entry { margin-top: 8px; }
  .entry .top { display: flex; justify-content: space-between; align-items: baseline; gap: 12px; }
  .entry .title { font-weight: 700; font-size: 10.4pt; }
  .entry .title span { color: #4F46E5; font-weight: 600; font-size: 9.5pt; }
  .entry .meta { color: #666; font-size: 8.3pt; font-style: italic; white-space: nowrap; }
  .entry .sub { color: #555; font-size: 9pt; margin-top: 1px; }
  ul { margin: 4px 0 0 15px; }
  li { margin-bottom: 2px; color: #333; }
  .comp p { margin-bottom: 3px; }
  b { color: #1a1a1a; }
</style></head><body>
  <div class="name">Janet Agada</div>
  <div class="role">Product Manager &middot; 0&rarr;1 Products</div>
  <div class="contact">Abuja, Nigeria &nbsp;&middot;&nbsp; <a href="mailto:agadaejanet@gmail.com">agadaejanet@gmail.com</a> &nbsp;&middot;&nbsp; <a href="https://www.linkedin.com/in/janet-agada-6a7372200">linkedin.com/in/janet-agada-6a7372200</a> &nbsp;&middot;&nbsp; <a href="https://janet-agada-portfolio.vercel.app">janet-agada-portfolio.vercel.app</a></div>

  <h2>Summary</h2>
  <p class="summary">Product Manager specialising in 0&rarr;1 product development, taking digital products from an undefined problem to a live, scaling platform. Across 6 shipped products spanning Beauty Tech, Travel, AI, EdTech, and event marketplaces, I own the full lifecycle: problem definition, system architecture, documentation, engineering coordination, and launch. I design products as complete systems, write specifications developers build from without ambiguity, and stay accountable until users get real value. Available for remote and hybrid roles globally.</p>

  <h2>Experience</h2>

  <div class="entry">
    <div class="top"><div class="title">Brisev <span>&middot; Product Manager, 0&rarr;1</span></div><div class="meta">Contract &middot; Remote &middot; Sept 2024 &ndash; Present</div></div>
    <div class="sub"><b>Glown</b> (glown.io): a booking and business-management platform for beauty professionals, built from zero.</div>
    <ul>
      <li>Led the full 0&rarr;1 lifecycle; 15+ beauty businesses live, flagship salon manages 388 clients and runs monthly payroll up to &#8358;3.2M.</li>
      <li>Chose service-first booking over the industry-default provider-first model, cutting discovery friction and lifting visibility for niche providers, a decision that shaped the entire platform.</li>
      <li>Expanded a booking tool into an operating system (reviews, client segmentation, multi-channel messaging, commission-based payroll); wrote all PRDs and edge-case docs, so engineering needed minimal clarification.</li>
    </ul>
  </div>

  <div class="entry">
    <div class="top"><div class="title">Active Tech <span>&middot; Project Manager, Digital Products</span></div><div class="meta">Full-time &middot; Remote &middot; Dec 2025 &ndash; Present</div></div>
    <ul>
      <li><b>AmanaCruise</b> (amanacruise.com): ran user research and simplified complex cruise-booking flows for first-time travellers; managed the full cycle through QA and launch readiness.</li>
      <li><b>Traders College</b> (traderscollege.co): turned learner research into requirements and course structure; coordinated MVP and structured beta (MVP complete, launch-ready).</li>
    </ul>
  </div>

  <div class="entry">
    <div class="top"><div class="title">TM Labs <span>&middot; Product Manager</span></div><div class="meta">Contract &middot; Hybrid, Abuja &middot; Jun 2025 &ndash; Apr 2026</div></div>
    <ul>
      <li><b>Confette</b> (confette.co): Nigeria's three-sided event marketplace (organiser, vendor, admin). Modelled the full bidding lifecycle as a state machine (Draft &rarr; Open &rarr; Bidding &rarr; Vendors Booked &rarr; Completed, plus Disputed), and designed vendor trust &amp; safety, verification, suspension cascades, and counter-bid budget guards that prevent silent over-commitment.</li>
      <li><b>Juyonna</b> (juyonna.com): a modular multi-service travel and logistics platform, Phase 1 live with 4 core modules. Designed 10+ services as separate modules on one shared core so each ships on its own; built the payment setup (Paystack, partner-specific fees, currency conversion, offline reconciliation).</li>
    </ul>
  </div>

  <div class="entry">
    <div class="top"><div class="title">Red Bracket <span>&middot; Product Manager, Development &amp; Delivery</span></div><div class="meta">Contract &middot; Remote (US) &middot; Jul 2025 &ndash; Sept 2025</div></div>
    <div class="sub"><b>Optima AI</b>: an AI-powered document processing and analysis platform for enterprise clients.</div>
    <ul>
      <li>Coordinated engineering across time zones to ship on time and on spec, keeping scope aligned to client requirements throughout.</li>
      <li>Client feedback (Head of Engineering): &ldquo;Her documentation was so precise that our engineering team rarely needed clarification.&rdquo;</li>
    </ul>
  </div>

  <h2>Core Competencies</h2>
  <div class="comp">
    <p><b>Product &amp; delivery:</b> 0&rarr;1 development &middot; problem definition &middot; roadmap &amp; go-to-market &middot; modular / system architecture &middot; API integration strategy &middot; data modelling &middot; PRDs, specifications &amp; edge-case documentation &middot; engineering coordination &middot; sprint management &middot; QA &amp; launch readiness &middot; user research.</p>
    <p><b>Technical:</b> builds and ships frontends in React &amp; Tailwind CSS (with Paystack payments) using AI-native tooling (Claude, Cursor, Lovable, Magicpatterns), so specs stay grounded in what is buildable.</p>
    <p><b>Tools:</b> Notion &middot; Google Docs &middot; Jira &middot; Trello &middot; Asana &middot; Figma &middot; Lovable &middot; Cursor &middot; Playwright &middot; ChatGPT &middot; Claude &middot; Magicpatterns &middot; Slack &middot; Discord &middot; Paystack.</p>
  </div>

  <h2>Education</h2>
  <p><b>Master of Public Health</b>, Bingham University, Nigeria</p>
  <p><b>Bachelor of Science</b>, Kaduna State University, Nigeria</p>
</body></html>`;

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage();
await page.setContent(html, { waitUntil: "load" });
await page.pdf({
  path: OUT,
  format: "A4",
  printBackground: true,
  margin: { top: "12mm", bottom: "12mm", left: "13mm", right: "13mm" },
});
const h = await page.evaluate(() => document.body.scrollHeight);
await browser.close();
console.log("wrote", OUT, "| content height ~", h, "px (one page if < ~1000)");
