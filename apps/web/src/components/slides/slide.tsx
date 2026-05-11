import type { ReactNode } from "react";

const R2_BASE = process.env.NEXT_PUBLIC_R2_BASE_URL;
const TEMPLATE_PATH = "外部登壇資料テンプレ";

export const BG_HEADING = `${R2_BASE}/${TEMPLATE_PATH}/千_外部登壇スライド_見出し.png`;
export const BG_CONTENT = `${R2_BASE}/${TEMPLATE_PATH}/千_外部登壇スライド_本文.png`;
export const BG_CORPORATE_PHILOSOPHY = `${R2_BASE}/${TEMPLATE_PATH}/千_外部登壇スライド_企業理念.png`;
export const BG_BUSINESS_CONTENT = `${R2_BASE}/${TEMPLATE_PATH}/千_外部登壇スライド_事業内容.png`;
export const BG_BACK_COVER = `${R2_BASE}/${TEMPLATE_PATH}/千_外部登壇スライド_裏表紙.png`;

interface HeadingSlideProps {
  children: ReactNode;
  /** サブタイトル */
  subtitle?: string;
}

/** 見出しスライド - 大きなタイトル用 */
export function HeadingSlide({ children, subtitle }: HeadingSlideProps) {
  return (
    <section data-background-image={BG_HEADING} data-background-size="contain">
      <div className="flex h-full flex-col items-center justify-center">
        <h1 className="whitespace-pre-line text-center">{children}</h1>
        {subtitle && <p className="mt-4 text-center text-2xl text-gray-600">{subtitle}</p>}
      </div>
    </section>
  );
}

interface ContentSlideProps {
  title?: string;
  children: ReactNode;
  /** コンテンツをカードで囲む */
  card?: boolean;
}

/** コンテンツスライド - 本文用 */
export function ContentSlide({ title, children, card }: ContentSlideProps) {
  return (
    <section data-background-image={BG_CONTENT} data-background-size="contain">
      <div className="flex h-full flex-col justify-center px-8">
        {title && <h2 className="mb-4 text-left text-black">{title}</h2>}
        {card ? (
          <div className="slide-card-light text-left text-black">{children}</div>
        ) : (
          <div className="text-left text-black">{children}</div>
        )}
      </div>
    </section>
  );
}

/** 企業理念スライド */
export function CorporatePhilosophySlide() {
  return (
    <section data-background-image={BG_CORPORATE_PHILOSOPHY} data-background-size="contain">
      {/* コンテンツをここに追加 */}
    </section>
  );
}

/** 事業内容スライド */
export function BusinessContentSlide() {
  return (
    <section data-background-image={BG_BUSINESS_CONTENT} data-background-size="contain">
      {/* コンテンツをここに追加 */}
    </section>
  );
}

/** 裏表紙スライド (We are hiring!) */
export function BackCoverSlide() {
  return (
    <section data-background-image={BG_BACK_COVER} data-background-size="contain">
      {/* コンテンツをここに追加 */}
    </section>
  );
}
