import { Fragment } from "react";
import { formatEvent, getSlideConfig, getSlideTitleLines } from "@/lib/slides/config";

const R2_BASE = process.env.NEXT_PUBLIC_R2_BASE_URL;
const config = getSlideConfig("vite-plus-retro-v2/en");
const titleLines = getSlideTitleLines(config);

export default function Cover() {
  return (
    <section
      data-background-image={`${R2_BASE}/burioSlide/burio16Cover.png`}
      data-background-size="contain"
    >
      <div className="text-left">
        <h3>{formatEvent(config.event)}</h3>
        <br />
        <h1 className="leading-tight">
          {titleLines.map((line, index) => (
            <Fragment key={line}>
              {index > 0 && <br />}
              {line}
            </Fragment>
          ))}
        </h1>
        <br />
        <h3>{config.author} @burio_16</h3>
      </div>
      <p className="absolute bottom-8 left-1/2 m-0 w-full max-w-4xl -translate-x-1/2 text-center text-2xl leading-snug text-white/90">
        This English version was translated with generative AI and may contain errors.
      </p>
    </section>
  );
}
