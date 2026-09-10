import { useState } from "react";
import { Reveal } from "./Reveal";

/**
 * A framed product screenshot with a caption.
 * The image is rendered directly (present in the server HTML) so it shows as
 * soon as it loads — no JS preload gate. If the file is genuinely missing the
 * onError handler hides the whole figure, so screenshots can still be added to
 * /public/shots one at a time without ever leaving a broken image on the page.
 */
export function Shot({
  src,
  alt,
  caption,
}: {
  src: string;
  alt: string;
  caption?: string;
}) {
  const [failed, setFailed] = useState(false);

  if (failed) return null;

  return (
    <Reveal className="group my-2">
      <figure>
        <a
          href={src}
          target="_blank"
          rel="noreferrer noopener"
          className="block overflow-hidden rounded-xl border border-border bg-card shadow-lift"
        >
          <img
            src={src}
            alt={alt}
            loading="lazy"
            onError={() => setFailed(true)}
            className="w-full transition-transform duration-500 ease-out group-hover:scale-[1.03]"
          />
        </a>
        {caption && (
          <figcaption className="mt-3 text-sm text-muted-foreground">{caption}</figcaption>
        )}
      </figure>
    </Reveal>
  );
}
