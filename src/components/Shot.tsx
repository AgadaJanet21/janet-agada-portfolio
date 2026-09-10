import { useEffect, useState } from "react";
import { Reveal } from "./Reveal";

/**
 * A framed product screenshot with a caption.
 * The image is preloaded; if the file is missing the component renders
 * nothing, so screenshots can be added to /public/shots one at a time
 * without ever showing a broken image.
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
  const [ok, setOk] = useState(false);

  useEffect(() => {
    let active = true;
    const img = new Image();
    img.onload = () => {
      if (active) setOk(true);
    };
    img.onerror = () => {
      if (active) setOk(false);
    };
    img.src = src;
    return () => {
      active = false;
    };
  }, [src]);

  if (!ok) return null;

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
