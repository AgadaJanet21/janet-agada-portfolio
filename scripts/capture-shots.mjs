// Capture crisp product screenshots with Playwright.
//
//   npm run shots:login   -> opens a browser; you log in to Glown + Confette once
//   npm run shots         -> auto-captures every shot in the list below (2x sharp)
//   npm run shots:snap    -> navigate anywhere, type a filename to snap that view
//                            (use this for the pop-up modal shots)
//
// Screenshots are written straight into public/shots with the names the site
// already expects, so they show up on the case-study pages immediately.

import { chromium } from "playwright";
import { createInterface } from "node:readline/promises";
import { stdin, stdout } from "node:process";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { existsSync, mkdirSync } from "node:fs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT = join(__dirname, "..", "public", "shots");
const STATE = join(__dirname, ".auth.json"); // saved login — gitignored, keep private
const args = new Set(process.argv.slice(2));

// EDIT these URLs to match your live pages. Each is captured at 2x resolution.
// `fullPage: true` grabs the whole scrollable page instead of just the window.
const shots = [
  { file: "glown-overview.png", url: "https://app.glown.io/overview", settle: 6000 },
  { file: "glown-reviews.png", url: "https://app.glown.io/reviews" },
  { file: "glown-marketing.png", url: "https://app.glown.io/marketing" },
  { file: "glown-messages.png", url: "https://app.glown.io/messages" },
  { file: "glown-payroll.png", url: "https://app.glown.io/payments?tab=staff_earnings" },

  // CONFETTE: the admin dashboard + all-events list only render if you are logged
  // in as the ADMIN account (events@confette.co) — NOT the organiser account.
  // Logged in as an organiser, these redirect to the empty organiser home.
  { file: "confette-admin.png", url: "https://confette.co/admin/dashboard" },
  { file: "confette-events.png", url: "https://confette.co/admin/plans" },

  // Best captured with `npm run shots:snap` — navigate to the exact view (a
  // specific event's budget, or a pop-up modal) in the browser, then type the name:
  //   confette-budget.png          (an event's budget breakdown, with the bars)
  //   glown-payroll-detail.png     (the per-staff salary pop-up)
  //   glown-commission.png         (a staff member's commission line-items)
];

const rl = createInterface({ input: stdin, output: stdout });
mkdirSync(OUT, { recursive: true });

const needLogin = args.has("--login") || !existsSync(STATE);

const browser = await chromium.launch({ headless: false });
const context = await browser.newContext({
  viewport: { width: 1440, height: 900 },
  deviceScaleFactor: 2, // crisp 2x (retina) output
  storageState: needLogin ? undefined : STATE,
});
const page = await context.newPage();

if (needLogin) {
  await page.goto("https://app.glown.io/");
  await rl.question(
    "\n>>> Log in to BOTH Glown and Confette in the browser window.\n" +
      ">>> (open confette.co in the same window and log in there too)\n" +
      ">>> Then come back here and press ENTER to save your login...\n",
  );
  await context.storageState({ path: STATE });
  console.log("Login saved to scripts/.auth.json (gitignored — do not share it).");
}

if (args.has("--snap")) {
  console.log(
    "\nSNAP MODE — navigate anywhere in the browser, then type a filename to save the current view.",
  );
  console.log("Example:  glown-payroll-detail.png     (blank line = quit)\n");
  for (;;) {
    const name = (await rl.question("filename> ")).trim();
    if (!name) break;
    await page.screenshot({ path: join(OUT, name) });
    console.log("  saved", name);
  }
} else {
  for (const s of shots) {
    try {
      // networkidle waits for the page's data to finish loading (avoids capturing
      // grey skeleton placeholders); fall back for apps that never go fully idle.
      await page
        .goto(s.url, { waitUntil: "networkidle", timeout: 30000 })
        .catch(() => page.goto(s.url, { waitUntil: "domcontentloaded" }));
      await page.waitForTimeout(s.settle ?? 4000); // let fonts + animations settle
      await page.screenshot({ path: join(OUT, s.file), fullPage: !!s.fullPage });
      console.log("captured", s.file);
    } catch (e) {
      console.log("SKIPPED", s.file, "-", e.message);
    }
  }
}

await browser.close();
rl.close();
