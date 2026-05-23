import { getSlideConfig } from "@/lib/slides/config";

const R2_BASE = process.env.NEXT_PUBLIC_R2_BASE_URL;
const config = getSlideConfig("vite-plus-retro");

export default function Cover() {
  return (
    <section
      data-background-image={`${R2_BASE}/burioSlide/burio16Cover.png`}
      data-background-size="contain"
    >
      <div className="text-left">
        <h3>{config.event}</h3>
        <br />
        <h1 className="leading-tight">
          Vite+ を採用して
          <br />
          良かったこと・辛かったこと
        </h1>
        <br />
        <h3>{config.author} @burio_16</h3>
      </div>
    </section>
  );
}
