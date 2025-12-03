# スライドスタイルガイド

## 基本ルール

スライドはReveal.js（1920x1080基準）で動作するため、**すべてのサイズはビューポート相対単位（vw）を使用**する。

---

## テキストサイズ

| 用途 | クラス | 説明 |
|------|--------|------|
| 見出し（h1） | `text-[3vw]` | メインタイトル、大見出し |
| 小見出し（h2） | `text-[2.5vw]` | セクションタイトル |
| 本文・サブテキスト（h3, p） | `text-[2vw]` | 補足情報、著者名など |
| 補足（small） | `text-[1.5vw]` | 注釈、キャプション |

---

## マージン・パディング

| 用途 | クラス | 説明 |
|------|--------|------|
| 小さい余白 | `mt-[1vw]` / `p-[1vw]` | 要素間の最小余白 |
| 中程度の余白 | `mt-[2vw]` / `p-[2vw]` | 一般的な要素間余白 |
| 大きい余白 | `mt-[5vw]` / `p-[5vw]` | セクション間の余白 |
| 特大余白 | `mt-[10vw]`〜`mt-[12vw]` | ページ下部への配置など |

---

## 色の指定

Reveal.jsテーマがTailwindの色を上書きする場合があるため、**`!`プレフィックスで`!important`を付与**する。

```tsx
// NG: テーマに上書きされる可能性
className="text-blue-500"

// OK: 確実に適用される
className="!text-blue-500"
```

---

## 使用例

```tsx
export default function ExampleSlide() {
  return (
    <section
      data-background-image="..."
      data-background-size="contain"
    >
      <div className="text-left">
        {/* 小見出し */}
        <h3 className="block text-[2vw]">イベント名</h3>

        {/* メインタイトル */}
        <h1 className="text-[3vw] leading-tight mt-[2vw]">
          タイトル
        </h1>

        {/* 著者名（下部に配置） */}
        <h3 className="mt-[12vw] text-[2vw] !text-blue-600">
          著者名 @handle
        </h3>
      </div>
    </section>
  );
}
```

---

## 禁止事項

- `px`単位の使用（例: `text-[32px]`, `mt-[200px]`）
- `rem`単位の使用
- Tailwindのプリセットサイズ（例: `text-xl`, `mt-4`）

---

## 背景画像

```tsx
// 常にcontainを使用してアスペクト比を維持
data-background-size="contain"
```
