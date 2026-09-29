import type { ReactNode } from "react";
import { SelfIntroductionSlideLayout } from "./self-introduction-slide";

const R2_BASE = process.env.NEXT_PUBLIC_R2_BASE_URL;

export const BG_PERSONAL_CONTENT = `${R2_BASE}/burioSlide/content.png`;

interface PersonalHeadingSlideProps {
  children: ReactNode;
}

/** 個人テンプレ - 見出しスライド */
export function PersonalHeadingSlide({ children }: PersonalHeadingSlideProps) {
  return (
    <section data-background-image={BG_PERSONAL_CONTENT} data-background-size="contain">
      <div className="flex h-full items-center justify-center">
        <h1 className="whitespace-pre-line text-center">{children}</h1>
      </div>
    </section>
  );
}

interface PersonalContentSlideProps {
  title?: ReactNode;
  children: ReactNode;
  align?: "left" | "center";
  aside?: ReactNode;
}

/** 個人テンプレ - コンテンツスライド */
export function PersonalContentSlide({
  title,
  children,
  align = "left",
  aside,
}: PersonalContentSlideProps) {
  const textAlignClass = align === "center" ? "text-center" : "text-left";

  return (
    <section
      className={aside ? "h-full" : undefined}
      data-background-image={BG_PERSONAL_CONTENT}
      data-background-size="contain"
    >
      <div className={`flex h-full flex-col justify-center${aside ? " w-1/2 pr-12" : ""}`}>
        {title && <h2 className={`${textAlignClass} text-white`}>{title}</h2>}
        <div className={`${textAlignClass} text-white`}>{children}</div>
      </div>
      {aside && (
        <aside className="absolute right-0 top-1/2 aspect-square w-1/2 -translate-y-1/2">
          {aside}
        </aside>
      )}
    </section>
  );
}

interface PersonalSelfIntroductionSlideProps {
  children: ReactNode;
  title?: string;
  imageAlt?: string;
}

/** 個人テンプレ - 自己紹介スライド */
export function PersonalSelfIntroductionSlide({
  children,
  title,
  imageAlt,
}: PersonalSelfIntroductionSlideProps) {
  return (
    <SelfIntroductionSlideLayout
      backgroundImage={BG_PERSONAL_CONTENT}
      textColorClassName="text-white"
      title={title}
      imageAlt={imageAlt}
    >
      {children}
    </SelfIntroductionSlideLayout>
  );
}
