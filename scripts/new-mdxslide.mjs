import { existsSync } from "node:fs";
import { mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { createInterface } from "node:readline/promises";
import { execFileSync } from "node:child_process";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const VALID_SLUG = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

function insertOnce(source, marker, insertion, label, inside = false) {
  if (source.split(marker).length !== 2)
    throw new Error(`${label}: 登録位置が見つからないか重複しています`);
  return source.replace(marker, inside ? marker + insertion : insertion + marker);
}

function formatSource(path, source) {
  return execFileSync("vp", ["fmt", "--stdin-filepath", path], {
    cwd: ROOT,
    input: source,
    encoding: "utf8",
  });
}

function slideFiles(slug, kind) {
  const personal = kind === "personal";
  const background = personal
    ? "burioSlide/burio16Cover.png"
    : "外部登壇資料テンプレ/千_外部登壇スライド_表紙.png";
  const mdx = personal
    ? `import { PersonalSelfIntroductionSlide, PersonalHeadingSlide, PersonalContentSlide } from "@/components/slides";

<PersonalSelfIntroductionSlide>

- 名前・所属
- 自己紹介の項目

</PersonalSelfIntroductionSlide>

<PersonalHeadingSlide>見出し</PersonalHeadingSlide>

<PersonalContentSlide title="本文タイトル">

- 項目1
- 項目2
- 項目3

</PersonalContentSlide>
`
    : `import { SelfIntroductionSlide, CorporatePhilosophySlide, BusinessContentSlide, HeadingSlide, ContentSlide, BackCoverSlide } from "@/components/slides";

<CorporatePhilosophySlide />

<BusinessContentSlide />

<SelfIntroductionSlide>

- 名前・所属
- 自己紹介の項目

</SelfIntroductionSlide>

<HeadingSlide>見出し</HeadingSlide>

<ContentSlide title="本文タイトル">

- 項目1
- 項目2
- 項目3

</ContentSlide>

<BackCoverSlide />
`;
  return {
    "page.tsx": `import RevealPresentation from "@/components/reveal-presentation";
import Cover from "./slides/cover";
import SlidesContent from "./slides.mdx";

export default function PresentationPage() {
  return (
    <div className="h-full w-full">
      <RevealPresentation transition="slide">
        <Cover />
        <SlidesContent />
      </RevealPresentation>
    </div>
  );
}
`,
    "layout.tsx": `import type { Viewport } from "next";
import { createSlideMetadata } from "@/lib/slides/config";

export const metadata = createSlideMetadata("${slug}");

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <div className="fixed inset-0 h-dvh w-full overflow-hidden">{children}</div>;
}
`,
    "slides/cover.tsx": `import { Fragment } from "react";
import { formatEvent, getSlideConfig, getSlideTitleLines } from "@/lib/slides/config";

const R2_BASE = process.env.NEXT_PUBLIC_R2_BASE_URL;
const config = getSlideConfig("${slug}");
const titleLines = getSlideTitleLines(config);

export default function Cover() {
  return (
    <section
      data-background-image={\`\${R2_BASE}/${background}\`}
      data-background-size="contain"
    >
      <div className="text-left">
        <h3>{formatEvent(config.event)}</h3>
        <br />
        <h1 className="leading-tight">
          {titleLines.map((line, i) => (
            <Fragment key={i}>
              {i > 0 && <br />}
              {line}
            </Fragment>
          ))}
        </h1>
        <br />
        <h3>{config.author} @burio_16</h3>
      </div>
    </section>
  );
}
`,
    "slides.mdx": mdx,
  };
}

export async function createSlide(root, slug, kind) {
  if (!VALID_SLUG.test(slug))
    throw new Error("slug は小文字英数字と単一のハイフンによる kebab-case にしてください");
  if (!["personal", "corporate"].includes(kind))
    throw new Error("template は personal または corporate を指定してください");
  const app = join(root, "apps/web/src/app");
  const target = join(app, slug);
  const assets = join(root, "apps/web/public/slides", slug);
  if (existsSync(target) || existsSync(assets))
    throw new Error(`'${slug}' の資料または assets は既に存在します`);
  const paths = {
    config: join(root, "apps/web/src/lib/slides/config.ts"),
    home: join(app, "page.tsx"),
    embed: join(app, "embed/[slug]/slide-viewer.tsx"),
    ogp: join(root, "apps/web/scripts/generate-ogp.tsx"),
  };
  const original = Object.fromEntries(
    await Promise.all(
      Object.entries(paths).map(async ([key, path]) => [key, await readFile(path, "utf8")]),
    ),
  );
  if (
    Object.values(original).some(
      (source) => source.includes(`"${slug}"`) || source.includes(`/${slug}/`),
    )
  ) {
    throw new Error(`'${slug}' は既に登録されています`);
  }
  const alias = `Slide_${slug.replaceAll("-", "_")}`;
  const coverName = `${alias}_Cover`;
  const contentName = `${alias}_Content`;
  const updated = {
    config: insertOnce(
      original.config,
      "export const SLIDES_CONFIG: Record<string, SlideConfig> = {\n",
      `  "${slug}": {\n    slug: "${slug}",\n    title: "${slug}",\n    description: "${slug} の発表資料",\n    author: "ぶりお",\n    authorUrl: "https://twitter.com/burio_16",\n    date: "YYYY/MM/DD",\n    event: "イベント名",\n  },\n`,
      "config",
      true,
    ),
    home: insertOnce(
      original.home,
      "import { SlideCard } from",
      `import ${coverName} from "./${slug}/slides/cover";\n`,
      "home imports",
    ),
    embed: insertOnce(
      original.embed,
      "// better-t-stack slides\n",
      `const ${coverName} = dynamic(() => import("@/app/${slug}/slides/cover"));\nconst ${contentName} = dynamic(() => import("@/app/${slug}/slides.mdx"));\n\n`,
      "embed imports",
    ),
    ogp: insertOnce(
      original.ogp,
      "const SPECS: Spec[] = [\n",
      `  { slug: "${slug}", cover: "${kind === "personal" ? "burio" : "chi"}" },\n`,
      "OGP",
      true,
    ),
  };
  updated.home = insertOnce(
    updated.home,
    "const slides = [\n",
    `  { config: SLIDES_CONFIG["${slug}"], Cover: ${coverName} },\n`,
    "home slides",
    true,
  );
  updated.embed = insertOnce(
    updated.embed,
    "      default:\n        notFound();",
    `      case "${slug}":\n        return (\n          <>\n            <${coverName} />\n            <${contentName} />\n          </>\n        );\n`,
    "embed switch",
  );
  let targetCreated = false;
  let assetsCreated = false;
  try {
    await mkdir(target, { recursive: false });
    targetCreated = true;
    await mkdir(join(target, "slides"));
    for (const [name, content] of Object.entries(slideFiles(slug, kind))) {
      await writeFile(
        join(target, name),
        formatSource(`apps/web/src/app/${slug}/${name}`, content),
        { flag: "wx" },
      );
    }
    await mkdir(assets);
    assetsCreated = true;
    await mkdir(join(assets, "assets"));
    await writeFile(join(assets, "assets/.gitkeep"), "", { flag: "wx" });
    for (const [key, path] of Object.entries(paths)) {
      await writeFile(path, formatSource(path.slice(root.length + 1), updated[key]));
    }
  } catch (error) {
    for (const [key, path] of Object.entries(paths)) await writeFile(path, original[key]);
    if (targetCreated) await rm(target, { recursive: true, force: true });
    if (assetsCreated) await rm(assets, { recursive: true, force: true });
    throw error;
  }
  return target;
}

if (process.argv[1] && fileURLToPath(import.meta.url) === process.argv[1]) {
  const kind = process.argv[2];
  let slug = process.argv[3];
  if (process.argv.length > 4) {
    console.error("slug は1つだけ指定してください");
    process.exitCode = 1;
  } else {
    if (!slug) {
      const rl = createInterface({ input: process.stdin, output: process.stdout });
      slug = (await rl.question("Presentation slug: ")).trim();
      rl.close();
    }
    try {
      const target = await createSlide(ROOT, slug, kind);
      console.log(`Created ${target}`);
    } catch (error) {
      console.error(error.message);
      process.exitCode = 1;
    }
  }
}
