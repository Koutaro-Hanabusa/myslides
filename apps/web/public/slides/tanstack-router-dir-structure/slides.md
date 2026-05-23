<!-- .slide: style="color: white;"-->

# 僕の考えた最強の<br />TanStack Router ディレクトリ構成<!-- .element: style="color: white;" -->

---

<!-- .slide: style="color: white; text-align: left;" -->

## 自己紹介<!-- .element: style="color: white;" -->

- ぶりお / @burio_16
- 所属・担当（ここに記入）
- 普段やっていること（ここに記入）

---

<!-- .slide: style="color: white; text-align: left;" -->

## アジェンダ<!-- .element: style="color: white;" -->

- TanStack Router のおさらい
- よくある構成と困りごと
- 僕の考えた最強の構成
- なぜこの形に落ち着いたか

---

<!-- .slide: style="color: white; text-align: left;" -->

## TanStack Router のおさらい<!-- .element: style="color: white;" -->

- ファイルベース / コードベースの 2 方式
- 型安全なルーティングが強み
- 採用したプロジェクトの前提（ここに記入）

---

<!-- .slide: style="color: white; text-align: left;" -->

## よくある構成と困りごと<!-- .element: style="color: white;" -->

- 困りごと 1（ここに記入）
- 困りごと 2（ここに記入）
- 困りごと 3（ここに記入）

---

<!-- .slide: style="color: white; text-align: left;" -->

## 僕の考えた最強の構成<!-- .element: style="color: white;" -->

```text
src/
├── routes/          # ルート定義（ファイルベース）
│   ├── __root.tsx
│   └── ...
├── features/        # 機能単位のロジック・UI
├── components/      # 共通UI
├── lib/             # ユーティリティ・API クライアント
└── ...
```

<!-- .element: style="color: white;" -->

---

<!-- .slide: style="color: white; text-align: left;" -->

## なぜこの形に落ち着いたか<!-- .element: style="color: white;" -->

- ポイント 1（ここに記入）
- ポイント 2（ここに記入）
- ポイント 3（ここに記入）

---

<!-- .slide: style="color: white; text-align: left;" -->

## まとめ<!-- .element: style="color: white;" -->

- routes は薄く、ロジックは features へ
- 迷ったら（ここに記入）

---

<!-- .slide: style="color: white;"-->

# ご清聴ありがとうございました<!-- .element: style="color: white;" -->
