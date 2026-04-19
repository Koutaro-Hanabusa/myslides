import type { ReactNode } from "react";

const R2_BASE = process.env.NEXT_PUBLIC_R2_BASE_URL;

export const BG_PERSONAL_CONTENT = `${R2_BASE}/burioSlide/content.png`;

type AccentColor = "blue" | "purple" | "green" | "orange" | "pink";

const accentBorderColors: Record<AccentColor, string> = {
  blue: "border-l-blue-500",
  purple: "border-l-purple-500",
  green: "border-l-green-500",
  orange: "border-l-orange-500",
  pink: "border-l-pink-500",
};

interface PersonalHeadingSlideProps {
  children: ReactNode;
  /** サブタイトル */
  subtitle?: string;
}

/** 個人テンプレ - 見出しスライド */
export function PersonalHeadingSlide({ children, subtitle }: PersonalHeadingSlideProps) {
  return (
    <section data-background-image={BG_PERSONAL_CONTENT} data-background-size="contain">
      <div className="flex h-full flex-col items-center justify-center">
        <h1 className="whitespace-pre-line text-center">{children}</h1>
        {subtitle && <p className="mt-4 text-center text-2xl text-gray-300">{subtitle}</p>}
      </div>
    </section>
  );
}

interface PersonalContentSlideProps {
  title?: string;
  children: ReactNode;
  /** アクセントカラー付き左ボーダーの表示 */
  accent?: AccentColor;
}

/** 個人テンプレ - コンテンツスライド */
export function PersonalContentSlide({ title, children, accent }: PersonalContentSlideProps) {
  return (
    <section data-background-image={BG_PERSONAL_CONTENT} data-background-size="contain">
      <div className="flex h-full flex-col justify-center px-8">
        {title && <h2 className="mb-4 text-left text-white">{title}</h2>}
        <div
          className={`text-left text-white ${accent ? `border-l-4 pl-6 ${accentBorderColors[accent]}` : ""}`}
        >
          {children}
        </div>
      </div>
    </section>
  );
}

interface PersonalCalloutSlideProps {
  title?: string;
  children: ReactNode;
  variant?: "info" | "warning" | "success" | "danger";
}

const calloutClasses = {
  info: "slide-callout",
  warning: "slide-callout-warning",
  success: "slide-callout-success",
  danger: "slide-callout-danger",
} as const;

/** 個人テンプレ - コールアウト付きスライド */
export function PersonalCalloutSlide({
  title,
  children,
  variant = "info",
}: PersonalCalloutSlideProps) {
  return (
    <section data-background-image={BG_PERSONAL_CONTENT} data-background-size="contain">
      <div className="flex h-full flex-col justify-center px-8">
        {title && <h2 className="mb-6 text-left text-white">{title}</h2>}
        <div className={calloutClasses[variant]}>
          <div className="text-white">{children}</div>
        </div>
      </div>
    </section>
  );
}
