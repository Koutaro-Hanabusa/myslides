---
theme: "none"
title: "react-three-fiber"
layout: "migrated"
canvasWidth: 1920
aspectRatio: "16/9"
routerMode: "hash"
wakeLock: false
preloadImages: false
transition: "slide-left"
download: false
drawings: { "enabled": false }
fonts: { "sans": "Source Sans Pro, Helvetica, sans-serif", "mono": "monospace", "provider": "none" }
defaults: { "layout": "migrated" }
highlighter: "shiki"
background: "/slides/templates/ce83e2a9c143.png"
legacyHash: "0/0"
---

<div class="slide-body"><div class="text-left"><h3>React Tokyo ミートアップ#11</h3><br><h1 class="leading-tight">WebGL入門<br>Three.jsで良さげなプロフィールサイト作ってみた</h1><br><h3>ぶりお @burio_16</h3></div></div>

---
background: "/slides/templates/1e9b011d7127.png"
legacyHash: "1/0"
---

<div class="slide-body"><div class="flex h-full flex-row items-center justify-evenly"><img :src="'/slides/react-three-fiber/assets/burio.png'" alt="ぶりおの写真" width="500" height="500" class="r-stretch"><div class="flex flex-col"><h2 class="text-black">自己紹介</h2><div class="space-y-2 text-left text-black md:space-y-4 lg:space-y-6 [&amp;_ul]:list-disc [&amp;_ul]:space-y-2 [&amp;_ul]:pl-6 md:[&amp;_ul]:space-y-4 lg:[&amp;_ul]:space-y-6"><ul><li>ぶりお <a href="https://x.com/burio_16">@burio_16</a></li><li>千株式会社システム開発部(25卒)</li><li>社内向け管理画面を開発</li><li>タコスとTottenham Hotspur FCが大好き</li></ul></div></div></div></div>

---
background: "/slides/templates/1e8424e4716c.png"
legacyHash: "2/0"
---

<div class="slide-body"></div>

---
background: "/slides/templates/02c1527ee49d.png"
legacyHash: "3/0"
---

<div class="slide-body"></div>

---
background: "/slides/react-three-fiber/assets/20251114_React_Tokyo.png"
backgroundColor: "#000"
legacyHash: "4/0"
---

<div class="slide-body"></div>

---
background: "/slides/react-three-fiber/assets/20251114_React_Tokyo (1).png"
backgroundColor: "#000"
legacyHash: "5/0"
---

<div class="slide-body"></div>

---
background: "/slides/react-three-fiber/assets/20251114_React_Tokyo (2).png"
backgroundColor: "#000"
legacyHash: "6/0"
---

<div class="slide-body"></div>

---
background: "/slides/react-three-fiber/assets/20251114_React_Tokyo (3).png"
backgroundColor: "#000"
legacyHash: "7/0"
---

<div class="slide-body"></div>

---
background: "/slides/react-three-fiber/assets/20251114_React_Tokyo (4).png"
backgroundColor: "#000"
legacyHash: "8/0"
---

<div class="slide-body"></div>

---
background: "/slides/react-three-fiber/assets/20251114_React_Tokyo (5).png"
backgroundColor: "#000"
legacyHash: "9/0"
---

<div class="slide-body"></div>

---
background: "/slides/react-three-fiber/assets/20251114_React_Tokyo (6).png"
backgroundColor: "#000"
legacyHash: "10/0"
---

<div class="slide-body"></div>

---
background: "/slides/react-three-fiber/assets/20251114_React_Tokyo (7).png"
backgroundColor: "#000"
legacyHash: "11/0"
---

<div class="slide-body"></div>

---
background: "/slides/react-three-fiber/assets/20251114_React_Tokyo (8).png"
backgroundColor: "#000"
legacyHash: "12/0"
---

<div class="slide-body"></div>

---
background: "/slides/react-three-fiber/assets/20251114_React_Tokyo (9).png"
backgroundColor: "#000"
legacyHash: "13/0"
---

<div class="slide-body"></div>

---
background: "/slides/react-three-fiber/assets/20251114_React_Tokyo (10).png"
backgroundColor: "#000"
legacyHash: "14/0"
---

<div class="slide-body"></div>

---
background: "/slides/react-three-fiber/assets/20251114_React_Tokyo (11).png"
backgroundColor: "#000"
legacyHash: "15/0"
---

<div class="slide-body"></div>

---
background: "/slides/react-three-fiber/assets/20251114_React_Tokyo (12).png"
backgroundColor: "#000"
legacyHash: "16/0"
---

<div class="slide-body"></div>

---
background: "/slides/react-three-fiber/assets/20251114_React_Tokyo (13).png"
backgroundColor: "#000"
legacyHash: "17/0"
---

<div class="slide-body"></div>

---
background: "/slides/react-three-fiber/assets/20251114_React_Tokyo (14).png"
backgroundColor: "#000"
legacyHash: "18/0"
---

<div class="slide-body"></div>

---
background: "/slides/react-three-fiber/assets/20251114_React_Tokyo (15).png"
backgroundColor: "#000"
legacyHash: "19/0"
---

<div class="slide-body"></div>

---
background: "/slides/react-three-fiber/assets/20251114_React_Tokyo (16).png"
backgroundColor: "#000"
legacyHash: "20/0"
---

<div class="slide-body"></div>

---
background: "/slides/react-three-fiber/assets/20251114_React_Tokyo (17).png"
backgroundColor: "#000"
legacyHash: "21/0"
---

<div class="slide-body"></div>

---
background: "/slides/react-three-fiber/assets/20251114_React_Tokyo (18).png"
backgroundColor: "#000"
legacyHash: "22/0"
---

<div class="slide-body"></div>

---
background: "/slides/react-three-fiber/assets/20251114_React_Tokyo (19).png"
backgroundColor: "#000"
legacyHash: "23/0"
---

<div class="slide-body"></div>

---
background: "/slides/react-three-fiber/assets/20251114_React_Tokyo (20).png"
backgroundColor: "#000"
legacyHash: "24/0"
---

<div class="slide-body"></div>

---
background: "/slides/react-three-fiber/assets/20251114_React_Tokyo (21).png"
backgroundColor: "#000"
legacyHash: "25/0"
---

<div class="slide-body"></div>

---
background: "/slides/react-three-fiber/assets/20251114_React_Tokyo (22).png"
backgroundColor: "#000"
legacyHash: "26/0"
---

<div class="slide-body"></div>

---
background: "/slides/react-three-fiber/assets/20251114_React_Tokyo (23).png"
backgroundColor: "#000"
legacyHash: "27/0"
---

<div class="slide-body"></div>

---
background: "/slides/react-three-fiber/assets/20251114_React_Tokyo (24).png"
backgroundColor: "#000"
legacyHash: "28/0"
---

<div class="slide-body"></div>

---
background: "/slides/react-three-fiber/assets/20251114_React_Tokyo (25).png"
backgroundColor: "#000"
legacyHash: "29/0"
---

<div class="slide-body"></div>

---
background: "/slides/react-three-fiber/assets/20251114_React_Tokyo (26).png"
backgroundColor: "#000"
legacyHash: "30/0"
---

<div class="slide-body"></div>

---
background: "/slides/react-three-fiber/assets/20251114_React_Tokyo (27).png"
backgroundColor: "#000"
legacyHash: "31/0"
---

<div class="slide-body"></div>

---
background: "/slides/react-three-fiber/assets/20251114_React_Tokyo (28).png"
backgroundColor: "#000"
legacyHash: "32/0"
---

<div class="slide-body"></div>

---
background: "/slides/react-three-fiber/assets/20251114_React_Tokyo (29).png"
backgroundColor: "#000"
legacyHash: "33/0"
---

<div class="slide-body"></div>

---
background: "/slides/react-three-fiber/assets/20251114_React_Tokyo (30).png"
backgroundColor: "#000"
legacyHash: "34/0"
---

<div class="slide-body"></div>

---
background: "/slides/react-three-fiber/assets/20251114_React_Tokyo (31).png"
backgroundColor: "#000"
legacyHash: "35/0"
---

<div class="slide-body"></div>

---
background: "/slides/templates/fa74e1541fa0.png"
legacyHash: "36/0"
---

<div class="slide-body"></div>
