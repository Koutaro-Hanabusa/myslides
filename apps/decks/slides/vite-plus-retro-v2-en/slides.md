---
theme: "none"
title: "We Tried Adopting Vite+ Into Our Design System at Breakneck Speed"
titleTemplate: "%s | Vue Fes Japan 2026"
lang: "en"
favicon: "/assets/favicon.ico"
seoMeta:
  ogTitle: "We Tried Adopting Vite+ Into Our Design System at Breakneck Speed"
  ogDescription: "Slides presented at Vue Fes Japan 2026 by Burio @burio_16"
  ogImage: "https://slide.burio16.com/vite-plus-retro-v2/en/og-image.png"
  ogUrl: "https://slide.burio16.com/vite-plus-retro-v2/en/"
  twitterCard: "summary_large_image"
  twitterTitle: "We Tried Adopting Vite+ Into Our Design System at Breakneck Speed"
  twitterDescription: "Slides presented at Vue Fes Japan 2026 by Burio @burio_16"
  twitterImage: "https://slide.burio16.com/vite-plus-retro-v2/en/og-image.png"
  twitterSite: "@burio_16"
  twitterUrl: "https://slide.burio16.com/vite-plus-retro-v2/en/"
layout: cover
canvasWidth: 1920
aspectRatio: "16/9"
routerMode: "hash"
wakeLock: false
preloadImages: false
transition: "slide-left"
download: false
drawings: { "enabled": false }
fonts: { "sans": "Source Sans Pro, Helvetica, sans-serif", "mono": "monospace", "provider": "none" }
defaults: { "layout": "default" }
highlighter: "shiki"
background: "/slides/templates/4830e1037835.png"
contentClass: "large-type"
mdc: true
---

### Vue Fes Japan 2026

# We Tried Adopting Vite+ Into Our <br>Design System at Breakneck Speed

### Burio @burio_16

---
background: "/slides/templates/af4e26a78715.png"
contentClass: "large-type"
layout: content
---

## About This Translation

- This English version was translated with generative AI.
- It may contain translation errors or awkward wording.
- Please refer to the [Japanese version](https://slide.burio16.com/vite-plus-retro-v2) if anything is unclear.

---
background: "/slides/templates/af4e26a78715.png"
contentClass: "large-type"
layout: profile
color: white
---

## About Me

- Burio [@burio_16](https://x.com/burio_16)
- Frontend Engineer at SEN, Corp.
- I love tacos and Tottenham Hotspur FC
- I don’t usually write Vue code!

::photo::

![Photo of Burio](/slides/react-three-fiber/assets/burio.png){width="500" height="500" class="natural-image"}

---
background: "/slides/templates/af4e26a78715.png"
contentClass: "large-type statement-prose"
layout: statement
---

# What Is Vite+?

---
background: "/slides/templates/af4e26a78715.png"
contentClass: "large-type"
layout: content
---

## What Is Vite+?

- A unified toolchain that brings together [test](https://viteplus.dev/guide/test) / [lint](https://viteplus.dev/guide/lint) / [fmt](https://viteplus.dev/guide/fmt) / [task](https://viteplus.dev/guide/run) and more
- Built on [Vite](https://vite.dev/) / [Vitest](https://vitest.dev/) / [Oxlint](https://oxc.rs/docs/guide/usage/linter.html) / [Oxfmt](https://oxc.rs/docs/guide/usage/formatter.html) / [Vite Task](https://viteplus.dev/guide/run), all by VoidZero
- Released on March 13, 2026 ([official website](https://viteplus.dev/))

---
background: "/slides/templates/af4e26a78715.png"
contentClass: "large-type"
layout: content
---

## The Problem Vite+ Solves

- Other languages commonly have unified toolchains
- JavaScript offers many tools, so setups tend to vary by environment ([Why Vite+?](https://viteplus.dev/guide/why))

---
background: "/slides/templates/af4e26a78715.png"
contentClass: "large-type statement-prose"
layout: statement
---

# Where Did We Adopt It?

---
background: "/slides/templates/af4e26a78715.png"
contentClass: "large-type"
layout: content
---

## Our Internal Design System

- We are building a design system in-house
- It is a Vite + Vitest + Oxlint + Oxfmt monorepo, with Turborepo for tasks
- → Its toolset almost completely overlapped with Vite+
- It was still pre-production and easy to try

---
background: "/slides/templates/af4e26a78715.png"
contentClass: "large-type statement-prose"
layout: statement
---

# Migrated at Breakneck Speed<br>(By Our Standards)

---
background: "/slides/templates/af4e26a78715.png"
contentClass: "large-type statement-prose"
layout: statement
---

# Manager:<br>“As long as it builds,<br>isn't that enough?”

---
background: "/slides/templates/af4e26a78715.png"
contentClass: "large-type statement-prose"
layout: statement
---

# Then Let's Do It!

---
background: "/slides/templates/af4e26a78715.png"
contentClass: "large-type statement-prose"
layout: statement
---

# Breakneck Speed!!<br>(By Our Standards)![Vite+ migration PR #135: removed Turborepo, unified the toolchain, and merged 25 commits into main](/slides/vite-plus-retro/assets/pr-135.png){width="1069" height="254" style="margin:1.5rem auto 0;display:block;width:1600px;height:auto;max-width:100%;max-height:520px;border-radius:8px"}Vite+ 0.1.13

---
background: "/slides/templates/af4e26a78715.png"
contentClass: "large-type statement-prose"
layout: statement
---

# How Did It Go?

---
background: "/slides/templates/af4e26a78715.png"
contentClass: "large-type"
layout: content
---

## Win 1: vp migrate Is Excellent

- A command for migrating an existing project to Vite+
- Updates dependencies, imports, and config together while unifying the existing tools
- Also migrated CI to [`voidzero-dev/setup-vp`](https://viteplus.dev/guide/ci)
- See [vp migrate](https://viteplus.dev/guide/migrate)

---
background: "/slides/templates/af4e26a78715.png"
contentClass: "large-type"
layout: content
---

## Win 2: Configuration in One Place

<CodePanel language="ts">

```ts
// vite.config.ts (from the actual project)
export default defineConfig({
  test:   { … },  // Vitest
  fmt:    { … },  // Oxfmt
  lint:   { … },  // Oxlint
  run:    { … },  // cached task runner
});
```

</CodePanel>

- [test](https://viteplus.dev/config/test) / [staged](https://viteplus.dev/config/staged) / [fmt](https://viteplus.dev/config/fmt) / [run](https://viteplus.dev/config/run) / [lint](https://viteplus.dev/config/lint) all live in [`vite.config.ts`](https://viteplus.dev/config/)
- [`vp lint`](https://viteplus.dev/guide/lint#type-aware-linting) even runs type-aware linting with oxlint-tsgolint

---
background: "/slides/templates/af4e26a78715.png"
contentClass: "large-type"
layout: content
---

## Win 3: Better Library Builds with vp pack

<SlideGroup class="grid grid-cols-2 gap-4">

<CodePanel language="ts">

```ts
// packages/hoge/vite.config.ts
pack: {
  entry: ["./src/index.ts"],
  format: ["esm", "cjs"],
  dts: true,        // generate type declarations
  sourcemap: true,
  minify: true,
  deps: {
    alwaysBundle: ["clsx", "tailwind-merge", "dayjs"],
  },
}
```

</CodePanel>

<CodePanel language="text">

```text
             Before              After
             vp build(Vite/lib)  vp pack(tsdown)
  ESM gzip    117KB         →     36KB   (459KB→144KB)
  CJS gzip    102KB         →     36KB   (340KB→148KB)
  build       ~1.59s        →     ~1.0s
  types       vite-plugin-dts →    built into tsdown
```

</CodePanel>

</SlideGroup>

- Migrated from [`vp build`](https://viteplus.dev/guide/build) (Vite Library Mode) to [vp pack](https://viteplus.dev/guide/pack) (tsdown)
- [`dts: true`](https://viteplus.dev/config/pack) generates type declarations with no need to install or configure `vite-plugin-dts`
- Measured with the migration configuration: gzipped ESM 117KB → 36KB (~1/3); build time ~1.59s → ~1.0s (April)

---
background: "/slides/templates/af4e26a78715.png"
contentClass: "large-type statement-prose"
layout: statement
---

# Of Course, We Hit Some Pain Points

---
background: "/slides/templates/af4e26a78715.png"
contentClass: "large-type"
layout: content
---

## Pain 1: lefthook Was Not Migrated

- During [`vp migrate`](https://viteplus.dev/guide/migrate#git-hook-tools), lefthook was not migrated automatically; we only got a warning
- We missed it and our [pre-commit hook](https://viteplus.dev/guide/commit-hooks) broke, so we fixed the config manually

---
background: "/slides/templates/af4e26a78715.png"
contentClass: "large-type"
layout: content
---

## It Was by Design

- We opened [issue #1854](https://github.com/voidzero-dev/vite-plus/issues/1854) thinking it was a bug → it was already in the [RFC](https://github.com/voidzero-dev/vite-plus/blob/main/rfcs/config-and-staged-commands.md#migration-edge-cases)
- The maintainers also added it to the [Migration Guide](https://viteplus.dev/guide/migrate#git-hook-tools) via [PR #1901](https://github.com/voidzero-dev/vite-plus/pull/1901)

![The RFC's Migration Edge Cases explicitly say that simple-git-hooks, lefthook, and yorkie warn and skip](/slides/vite-plus-retro-v2/assets/migration-edge-cases.png){width="1057" height="422" style="margin:1rem auto;display:block;width:1500px;height:auto;max-width:100%;max-height:600px;border-radius:8px"}

---
background: "/slides/templates/af4e26a78715.png"
contentClass: "large-type"
layout: content
---

## Pain 2: The Astro Build Broke

- Our Astro 6 documentation site failed to build with `Not implemented`
- `overrides.vite` replaced even Astro 6's Vite 7 with Vite 8
- The [Dev Toolbar](https://docs.astro.build/en/guides/dev-toolbar/) used an API unsupported by Vite 8 at the time
- Removing the override restored Astro 6 to Vite 7 and fixed the build

---
background: "/slides/templates/af4e26a78715.png"
contentClass: "large-type"
layout: content
---

## Reproducing and Comparing the Minimal Setup

| Astro | Vite+ | Build Result |
| --- | --- | --- |
| 6.1.10 | Not used (Vite 7.3.3) | Success |
| 6.1.10 | 0.1.19 | Failure (`Not implemented`) |
| 7.0.0-beta.3 | 0.1.19 | Success |
| 7.0.0-beta.3 | 0.1.24 | Success |

In this minimal setup, upgrading to the Astro 7 beta succeeded even while staying on Vite+ 0.1.19.
When Vite+ was enabled, the `vite` override was applied. The test used no integrations and a single page.

[Reproduction code and instructions (GitHub)](https://github.com/Koutaro-Hanabusa/astro-vite-plus-repro)

---
background: "/slides/templates/af4e26a78715.png"
contentClass: "large-type"
layout: content
---

## Takeaways

- The experience is excellent: every setting can live in [`vite.config.ts`](https://viteplus.dev/config/)
- It also prompted us to read the OSS spec more carefully
- Vite+ 1.0 was released on September 28, completing the toolchain

---
background: "/slides/templates/af4e26a78715.png"
contentClass: "large-type statement-prose"
layout: statement
---

# Let's Go All In on Vite+

---
background: "/slides/templates/af4e26a78715.png"
contentClass: "large-type statement-prose"
layout: statement
---

# As an Aside

---
background: "/slides/templates/af4e26a78715.png"
contentClass: "large-type"
layout: content
---

## Vite Task: Automatic Caching

<CodePanel language="text">

```text
$ vp run -r build      # second run (no changes)
  ~/packages/hoge$     vp pack  ◉ cache hit, replaying
  ~/packages/fuga$      tsc ...   ◉ cache hit, replaying
  ~/packages/piyo$ vp pack  ◉ cache hit, replaying
  ──────────────────────────────────────
  vp run: 4/5 cache hit (80%), 27.38s saved
  ↑ Only ui-preview (Astro) rewrites its input, so it is not cached
```

</CodePanel>

- [Automatically tracks](https://viteplus.dev/guide/automatic-data-tracking) files used by a task; if nothing changes, it skips execution and [replays the result](https://viteplus.dev/guide/cache)
- In our measurement, 4/5 tasks hit the cache, saving 27.38 seconds
- This article provides an excellent explanation:
  - [https://zenn.dev/herp_inc/articles/strange-task-runner](https://zenn.dev/herp_inc/articles/strange-task-runner)

---
background: "/slides/templates/af4e26a78715.png"
contentClass: "large-type"
layout: content
---

## You Don't Need a Vite App

![mySlides migration PR #220: migrated to Vite+, unified the toolchain, changed 26 files with 10,366 additions and 285 deletions](/slides/vite-plus-retro/assets/pr-220.png){width="1200" height="600" style="margin:0 auto 1rem;display:block;width:1000px;height:auto;max-width:100%;max-height:500px;border-radius:8px"}

- In our initial adoption, we migrated to Vite+ while keeping Next.js's `next build` ([PR #220](https://github.com/Koutaro-Hanabusa/myslides/pull/220))
- You can adopt Vite+ without moving your app build to Vite
- We unified [lint](https://viteplus.dev/guide/lint) / [fmt](https://viteplus.dev/guide/fmt) / [task](https://viteplus.dev/guide/run) / [staged](https://viteplus.dev/guide/commit-hooks) under `vp`; the existing build still runs through [`vp run build`](https://viteplus.dev/guide/run#built-in-commands-vs-scripts)
