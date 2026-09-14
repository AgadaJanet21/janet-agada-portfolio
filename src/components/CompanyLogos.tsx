import { useState } from "react";

type Company = {
  name: string;
  /** File in /public/logos, e.g. "glown.svg" or "glown.png". */
  logo: string;
  url?: string;
};

// Drop the matching files into /public/logos to replace the text fallbacks.
const companies: Company[] = [
  { name: "Glown", logo: "glown.svg", url: "https://glown.io" },
  { name: "Confette", logo: "confette.svg", url: "https://confette.co" },
  { name: "Optima AI", logo: "optima-ai.svg" },
  { name: "AmanaCruise", logo: "amanacruise.svg" },
  { name: "Traders College", logo: "traders-college.svg" },
  { name: "TM Labs", logo: "tm-labs.svg" },
];

function CompanyLogo({ company }: { company: Company }) {
  // If the logo file isn't present yet, fall back to a clean text wordmark
  // so the live site never shows a broken image.
  const [failed, setFailed] = useState(false);

  const inner = failed ? (
    <span className="font-display text-lg font-semibold tracking-tight text-muted-foreground transition-colors group-hover:text-foreground">
      {company.name}
    </span>
  ) : (
    <img
      src={`/logos/${company.logo}`}
      alt={`${company.name} logo`}
      loading="lazy"
      onError={() => setFailed(true)}
      className="h-9 w-auto object-contain opacity-70 grayscale transition duration-300 group-hover:opacity-100 group-hover:grayscale-0"
    />
  );

  const className = "group flex h-12 items-center justify-center";

  return company.url ? (
    <a
      href={company.url}
      target="_blank"
      rel="noreferrer noopener"
      className={className}
      aria-label={company.name}
    >
      {inner}
    </a>
  ) : (
    <div className={className} aria-label={company.name}>
      {inner}
    </div>
  );
}

export function CompanyLogos() {
  return (
    <div className="grid grid-cols-2 items-center gap-x-8 gap-y-10 sm:grid-cols-3 md:grid-cols-6">
      {companies.map((company) => (
        <CompanyLogo key={company.name} company={company} />
      ))}
    </div>
  );
}
