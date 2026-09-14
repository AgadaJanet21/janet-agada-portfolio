import { useState } from "react";

type Company = {
  name: string;
  /** File in /public/logos, e.g. "glown.svg" or "amanacruise.png". */
  logo: string;
  url?: string;
};

// Drop the matching files into /public/logos. Until a file exists, that
// company shows a clean text wordmark instead of a broken image.
const companies: Company[] = [
  { name: "Glown", logo: "glown.svg", url: "https://glown.io" },
  { name: "Red Bracket", logo: "red-bracket.png" },
  { name: "AmanaCruise", logo: "amanacruise.png" },
  { name: "Traders College", logo: "traders-college.png" },
  { name: "TM Labs", logo: "tm-labs.svg" },
  { name: "Celebration Church International", logo: "cci.png" },
];

function CompanyLogo({ company }: { company: Company }) {
  // Fall back to a text wordmark if the logo file isn't present yet, so the
  // live site never shows a broken image.
  const [failed, setFailed] = useState(false);

  const inner = failed ? (
    <span className="text-center font-display text-sm font-semibold tracking-tight text-muted-foreground">
      {company.name}
    </span>
  ) : (
    <img
      src={`/logos/${company.logo}`}
      alt={`${company.name} logo`}
      loading="lazy"
      onError={() => setFailed(true)}
      className="max-h-10 w-auto max-w-[85%] object-contain"
    />
  );

  // White tiles normalize logos that have different shapes, colors, and
  // background fills, so a mixed set still reads as one clean row.
  const tile =
    "flex h-24 items-center justify-center rounded-2xl border border-border bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lift";

  return company.url ? (
    <a
      href={company.url}
      target="_blank"
      rel="noreferrer noopener"
      className={tile}
      aria-label={company.name}
    >
      {inner}
    </a>
  ) : (
    <div className={tile} aria-label={company.name}>
      {inner}
    </div>
  );
}

export function CompanyLogos() {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
      {companies.map((company) => (
        <CompanyLogo key={company.name} company={company} />
      ))}
    </div>
  );
}
