import { Children, cloneElement, isValidElement, type ReactNode } from "react";

/* ============================================
 * スライド内部で使えるインナーコンポーネント集
 * MDX内でインポートして使う部品
 * ============================================ */

/* --- Highlight: テキストハイライト --- */

type HighlightColor = "red" | "blue" | "green" | "orange" | "purple" | "pink" | "yellow";

const highlightColors: Record<HighlightColor, string> = {
  red: "#dc2626",
  blue: "#3b82f6",
  green: "#22c55e",
  orange: "#f97316",
  purple: "#a855f7",
  pink: "#ec4899",
  yellow: "#eab308",
};

interface HighlightProps {
  children: ReactNode;
  color?: HighlightColor;
  /** 太字にする (デフォルト: true) */
  bold?: boolean;
}

/** テキストをカラーハイライトする */
export function Highlight({ children, color = "red", bold = true }: HighlightProps) {
  return (
    <span style={{ color: highlightColors[color] }} className={bold ? "font-bold" : ""}>
      {children}
    </span>
  );
}

/* --- Badge: インラインバッジ/タグ --- */

type BadgeColor = "blue" | "green" | "purple" | "orange" | "red" | "gray";

const badgeStyles: Record<BadgeColor, string> = {
  blue: "slide-badge slide-badge-blue",
  green: "slide-badge slide-badge-green",
  purple: "slide-badge slide-badge-purple",
  orange: "slide-badge slide-badge-orange",
  red: "slide-badge slide-badge-orange",
  gray: "slide-badge",
};

interface BadgeProps {
  children: ReactNode;
  color?: BadgeColor;
}

/** インラインのバッジ/タグ */
export function Badge({ children, color = "blue" }: BadgeProps) {
  return <span className={badgeStyles[color]}>{children}</span>;
}

/* --- Callout: コールアウトボックス --- */

type CalloutVariant = "info" | "warning" | "success" | "danger";

const calloutClasses: Record<CalloutVariant, string> = {
  info: "slide-callout",
  warning: "slide-callout-warning",
  success: "slide-callout-success",
  danger: "slide-callout-danger",
};

interface CalloutProps {
  children: ReactNode;
  variant?: CalloutVariant;
  title?: string;
}

/** コールアウト/注意書きボックス */
export function Callout({ children, variant = "info", title }: CalloutProps) {
  return (
    <div className={calloutClasses[variant]}>
      {title && <div className="mb-2 font-bold">{title}</div>}
      <div>{children}</div>
    </div>
  );
}

/* --- Card: カードコンテナ --- */

type CardVariant = "glass" | "light" | "accent";

const cardClasses: Record<CardVariant, string> = {
  glass: "slide-card",
  light: "slide-card-light",
  accent: "slide-card-accent",
};

interface CardProps {
  children: ReactNode;
  variant?: CardVariant;
}

/** カードコンテナ */
export function Card({ children, variant = "glass" }: CardProps) {
  return <div className={cardClasses[variant]}>{children}</div>;
}

/* --- Figure: キャプション付き画像 --- */

interface FigureProps {
  src: string;
  alt?: string;
  caption?: string;
  /** 最大高さ (デフォルト: "500px") */
  maxHeight?: string;
}

/** キャプション付き画像 */
export function Figure({ src, alt = "", caption, maxHeight = "500px" }: FigureProps) {
  return (
    <figure className="my-4 text-center">
      <img src={src} alt={alt} style={{ margin: "0 auto", display: "block", maxHeight }} />
      {caption && <figcaption className="mt-2 text-sm text-gray-400">{caption}</figcaption>}
    </figure>
  );
}

/* --- Columns: 2カラムレイアウト --- */

interface ColumnsProps {
  children: ReactNode;
  /** 左カラムの幅比率 */
  ratio?: "1:1" | "1:2" | "2:1" | "1:3" | "3:1";
  /** 垂直方向の揃え位置 */
  align?: "start" | "center" | "end";
}

const ratioClasses = {
  "1:1": { left: "w-[48%]", right: "w-[48%]" },
  "1:2": { left: "w-[33%]", right: "w-[64%]" },
  "2:1": { left: "w-[64%]", right: "w-[33%]" },
  "1:3": { left: "w-[24%]", right: "w-[73%]" },
  "3:1": { left: "w-[73%]", right: "w-[24%]" },
} as const;

const alignClasses = {
  start: "items-start",
  center: "items-center",
  end: "items-end",
} as const;

/** 2カラムレイアウトのラッパー (子要素は2つ渡す) */
export function Columns({ children, ratio = "1:1", align = "start" }: ColumnsProps) {
  const items = Children.toArray(children);
  return (
    <div className={`flex ${alignClasses[align]} justify-between gap-8`}>
      {items.map((child, index) => {
        if (isValidElement<ColumnProps>(child) && child.type === Column) {
          return cloneElement(child, {
            side: index === 0 ? "left" : "right",
            ratio: child.props.ratio ?? ratio,
          });
        }
        return child;
      })}
    </div>
  );
}

interface ColumnProps {
  children: ReactNode;
  /** "left" or "right" - Columns の ratio に応じた幅が適用される */
  side?: "left" | "right";
  /** ratio を親から受け取る代わりに直接指定 */
  ratio?: "1:1" | "1:2" | "2:1" | "1:3" | "3:1";
}

/** Columns 内の個別カラム */
export function Column({ children, side = "left", ratio = "1:1" }: ColumnProps) {
  const widthClass = ratioClasses[ratio][side === "left" ? "left" : "right"];
  return <div className={`${widthClass} text-left`}>{children}</div>;
}

/* --- CodeBlock: ファイル名付きコードブロック --- */

interface CodeBlockProps {
  children: ReactNode;
  filename?: string;
}

/** ファイル名付きコードブロック */
export function CodeBlock({ children, filename }: CodeBlockProps) {
  return (
    <div>
      {filename && <div className="slide-code-filename">{filename}</div>}
      <div className="slide-code">{children}</div>
    </div>
  );
}

/* --- Quote: インライン引用ブロック --- */

interface QuoteProps {
  children: ReactNode;
  author?: string;
}

/** 引用ブロック */
export function Quote({ children, author }: QuoteProps) {
  return (
    <div>
      <div className="slide-quote">{children}</div>
      {author && <div className="mt-2 text-right text-sm text-gray-400">--- {author}</div>}
    </div>
  );
}

/* --- Divider: 装飾的な区切り線 --- */

interface DividerProps {
  color?: "purple" | "blue";
}

/** 装飾的なグラデーション区切り線 */
export function Divider({ color = "purple" }: DividerProps) {
  return <hr className={color === "blue" ? "slide-divider-accent" : "slide-divider"} />;
}

/* --- StepList / Step: 番号付きステップ --- */

interface StepProps {
  number: number;
  title: string;
  children?: ReactNode;
}

/** 番号付きの1ステップ */
export function Step({ number, title, children }: StepProps) {
  return (
    <div className="flex items-start gap-4">
      <div className="slide-step-number">{number}</div>
      <div className="text-left">
        <div className="text-lg font-bold">{title}</div>
        {children && <div className="mt-1 text-base text-gray-400">{children}</div>}
      </div>
    </div>
  );
}

/* --- ProgressBar: プログレスバー --- */

interface ProgressBarProps {
  /** 0〜100 */
  value: number;
  label?: string;
}

/** プログレスバー */
export function ProgressBar({ value, label }: ProgressBarProps) {
  return (
    <div>
      {label && <div className="mb-1 text-sm">{label}</div>}
      <div className="slide-progress-bar">
        <div className="slide-progress-bar-fill" style={{ width: `${value}%` }} />
      </div>
    </div>
  );
}
