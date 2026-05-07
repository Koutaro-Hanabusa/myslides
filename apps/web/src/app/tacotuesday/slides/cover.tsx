import { formatEvent, getSlideConfig } from "@/lib/slides/config";

const R2_BASE = process.env.NEXT_PUBLIC_R2_BASE_URL;
const config = getSlideConfig("tacotuesday");

export default function Cover() {
  return (
    <section
      data-background-image={`${R2_BASE}/burioSlide/burio16Cover.png`}
      data-background-size="contain"
    >
      <div className="text-left">
        <h3 className="!text-white">{formatEvent(config.event)}</h3>
        <h1 className="!text-white leading-tight">{config.title}</h1>
        <br />
        <h3 className="!text-white">{config.author} @burio_16</h3>
      </div>
    </section>
  );
}
