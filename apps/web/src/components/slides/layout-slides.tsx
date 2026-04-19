import type { ReactNode } from "react";

/* ============================================
 * グラデーションテーマ定義
 * ============================================ */
const gradientThemes = {
  blue: "slide-bg-gradient-blue",
  purple: "slide-bg-gradient-purple",
  green: "slide-bg-gradient-green",
  orange: "slide-bg-gradient-orange",
  dark: "slide-bg-gradient-dark",
  sunset: "slide-bg-gradient-sunset",
  ocean: "slide-bg-gradient-ocean",
} as const;

export type GradientTheme = keyof typeof gradientThemes;

/* ============================================
 * セクション区切りスライド
 * 大きなタイトルとグラデーション背景で章の区切りを明示
 * ============================================ */
interface SectionDividerSlideProps {
  title: string;
  subtitle?: string;
  theme?: GradientTheme;
  children?: ReactNode;
}

export function SectionDividerSlide({
  title,
  subtitle,
  theme = "purple",
  children,
}: SectionDividerSlideProps) {
  return (
    <section>
      <div
        className={`${gradientThemes[theme]} flex h-full flex-col items-center justify-center px-16`}
      >
        <h1 className="text-center text-white">{title}</h1>
        {subtitle && <p className="mt-4 text-center text-2xl text-gray-300">{subtitle}</p>}
        <hr className="slide-divider mt-8 w-48" />
        {children && <div className="mt-8 text-gray-200">{children}</div>}
      </div>
    </section>
  );
}

/* ============================================
 * 2カラムスライド
 * 左右にコンテンツを配置するレイアウト
 * ============================================ */
interface TwoColumnSlideProps {
  title?: string;
  left: ReactNode;
  right: ReactNode;
  /** 左カラムの幅比率 (デフォルト: "1/2") */
  leftWidth?: "1/3" | "1/2" | "2/3";
  theme?: GradientTheme;
  backgroundImage?: string;
}

const widthClasses = {
  "1/3": { left: "w-[33%]", right: "w-[64%]" },
  "1/2": { left: "w-[48%]", right: "w-[48%]" },
  "2/3": { left: "w-[64%]", right: "w-[33%]" },
} as const;

export function TwoColumnSlide({
  title,
  left,
  right,
  leftWidth = "1/2",
  theme,
  backgroundImage,
}: TwoColumnSlideProps) {
  const bgProps = backgroundImage
    ? {
        "data-background-image": backgroundImage,
        "data-background-size": "contain" as const,
      }
    : {};

  return (
    <section {...bgProps}>
      <div
        className={`${theme ? gradientThemes[theme] : ""} flex h-full flex-col justify-center px-12`}
      >
        {title && <h2 className="mb-8 text-left text-white">{title}</h2>}
        <div className="flex items-start justify-between gap-8">
          <div className={`${widthClasses[leftWidth].left} text-left`}>{left}</div>
          <div className={`${widthClasses[leftWidth].right} text-left`}>{right}</div>
        </div>
      </div>
    </section>
  );
}

/* ============================================
 * 引用スライド
 * 印象的な引用文を表示する
 * ============================================ */
interface QuoteSlideProps {
  quote: string;
  author?: string;
  source?: string;
  theme?: GradientTheme;
}

export function QuoteSlide({ quote, author, source, theme = "dark" }: QuoteSlideProps) {
  return (
    <section>
      <div
        className={`${gradientThemes[theme]} flex h-full flex-col items-center justify-center px-20`}
      >
        <div className="slide-quote max-w-4xl text-white">{quote}</div>
        {(author || source) && (
          <div className="mt-8 text-right text-gray-400">
            {author && <span className="text-lg">--- {author}</span>}
            {source && <span className="ml-2 text-base italic">{source}</span>}
          </div>
        )}
      </div>
    </section>
  );
}

/* ============================================
 * 画像＋テキストスライド
 * 片側に大きな画像、もう片側にテキスト
 * ============================================ */
interface ImageTextSlideProps {
  title?: string;
  imageSrc: string;
  imageAlt?: string;
  /** 画像の配置位置 */
  imagePosition?: "left" | "right";
  children: ReactNode;
  theme?: GradientTheme;
}

export function ImageTextSlide({
  title,
  imageSrc,
  imageAlt = "",
  imagePosition = "right",
  children,
  theme = "dark",
}: ImageTextSlideProps) {
  const imageEl = (
    <div className="flex w-[45%] items-center justify-center">
      <img
        src={imageSrc}
        alt={imageAlt}
        className="max-h-[70vh] rounded-xl object-contain shadow-2xl"
      />
    </div>
  );

  const textEl = (
    <div className="flex w-[50%] flex-col justify-center text-left">
      {title && <h2 className="mb-6 text-white">{title}</h2>}
      <div className="text-gray-200">{children}</div>
    </div>
  );

  return (
    <section>
      <div
        className={`${gradientThemes[theme]} flex h-full items-center justify-center gap-12 px-12`}
      >
        {imagePosition === "left" ? (
          <>
            {imageEl}
            {textEl}
          </>
        ) : (
          <>
            {textEl}
            {imageEl}
          </>
        )}
      </div>
    </section>
  );
}

/* ============================================
 * 比較スライド
 * 2つの項目を並べて比較するレイアウト
 * ============================================ */
interface ComparisonSlideProps {
  title?: string;
  leftLabel: string;
  rightLabel: string;
  left: ReactNode;
  right: ReactNode;
  theme?: GradientTheme;
}

export function ComparisonSlide({
  title,
  leftLabel,
  rightLabel,
  left,
  right,
  theme = "dark",
}: ComparisonSlideProps) {
  return (
    <section>
      <div
        className={`${gradientThemes[theme]} flex h-full flex-col items-center justify-center px-12`}
      >
        {title && <h2 className="mb-10 text-center text-white">{title}</h2>}
        <div className="flex w-full items-start justify-center gap-8">
          <div className="slide-card w-[44%]">
            <h3 className="mb-4 text-center text-xl font-bold text-white">{leftLabel}</h3>
            <hr className="slide-divider-accent mb-6" />
            <div className="text-left text-gray-200">{left}</div>
          </div>
          <div className="flex items-center self-center px-2 text-3xl font-bold text-gray-500">
            vs
          </div>
          <div className="slide-card w-[44%]">
            <h3 className="mb-4 text-center text-xl font-bold text-white">{rightLabel}</h3>
            <hr className="slide-divider-accent mb-6" />
            <div className="text-left text-gray-200">{right}</div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================
 * ステップスライド
 * 手順や流れを番号付きで表示
 * ============================================ */
interface Step {
  title: string;
  description?: string;
}

interface StepsSlideProps {
  title?: string;
  steps: Step[];
  theme?: GradientTheme;
}

export function StepsSlide({ title, steps, theme = "dark" }: StepsSlideProps) {
  return (
    <section>
      <div
        className={`${gradientThemes[theme]} flex h-full flex-col items-center justify-center px-16`}
      >
        {title && <h2 className="mb-10 text-center text-white">{title}</h2>}
        <div className="flex w-full max-w-5xl flex-col gap-6">
          {steps.map((step, i) => (
            <div key={`step-${step.title}`} className="flex items-center gap-6 fragment">
              <div className="slide-step-number">{i + 1}</div>
              <div className="text-left">
                <h3 className="text-xl font-bold text-white">{step.title}</h3>
                {step.description && (
                  <p className="mt-1 text-base text-gray-400">{step.description}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================
 * グラデーションカバースライド
 * R2画像不要で使える見出しスライド
 * ============================================ */
interface GradientCoverSlideProps {
  title: string;
  subtitle?: string;
  author?: string;
  event?: string;
  date?: string;
  theme?: GradientTheme;
}

export function GradientCoverSlide({
  title,
  subtitle,
  author,
  event,
  date,
  theme = "blue",
}: GradientCoverSlideProps) {
  return (
    <section>
      <div className={`${gradientThemes[theme]} flex h-full flex-col justify-between px-16 py-20`}>
        <div className="flex flex-1 flex-col items-start justify-center">
          {event && <span className="slide-badge slide-badge-blue mb-6">{event}</span>}
          <h1 className="text-left leading-tight text-white">{title}</h1>
          {subtitle && <p className="mt-4 text-left text-2xl text-gray-300">{subtitle}</p>}
        </div>
        <div className="flex items-end justify-between">
          {author && <p className="text-lg text-gray-400">{author}</p>}
          {date && <p className="text-base text-gray-500">{date}</p>}
        </div>
      </div>
    </section>
  );
}

/* ============================================
 * カード一覧スライド
 * 複数の項目をカードで並べて表示
 * ============================================ */
interface CardItem {
  title: string;
  description?: string;
  icon?: ReactNode;
}

interface CardGridSlideProps {
  title?: string;
  cards: CardItem[];
  /** カラム数 (デフォルト: 3) */
  columns?: 2 | 3 | 4;
  theme?: GradientTheme;
}

const columnClasses = {
  2: "grid-cols-2",
  3: "grid-cols-3",
  4: "grid-cols-4",
} as const;

export function CardGridSlide({ title, cards, columns = 3, theme = "dark" }: CardGridSlideProps) {
  return (
    <section>
      <div
        className={`${gradientThemes[theme]} flex h-full flex-col items-center justify-center px-12`}
      >
        {title && <h2 className="mb-10 text-center text-white">{title}</h2>}
        <div className={`grid ${columnClasses[columns]} w-full max-w-5xl gap-6`}>
          {cards.map((card) => (
            <div key={card.title} className="slide-card text-left fragment">
              {card.icon && <div className="mb-3 text-3xl">{card.icon}</div>}
              <h3 className="mb-2 text-lg font-bold text-white">{card.title}</h3>
              {card.description && <p className="text-sm text-gray-400">{card.description}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
