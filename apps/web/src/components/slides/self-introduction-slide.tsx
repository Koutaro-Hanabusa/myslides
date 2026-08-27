import Image from "next/image";
import type { ReactNode } from "react";

interface SelfIntroductionSlideLayoutProps {
  backgroundImage: string;
  children: ReactNode;
  textColorClassName: "text-black" | "text-white";
}

export function SelfIntroductionSlideLayout({
  backgroundImage,
  children,
  textColorClassName,
}: SelfIntroductionSlideLayoutProps) {
  return (
    <section data-background-image={backgroundImage} data-background-size="contain">
      <div className="flex h-full flex-row items-center justify-evenly">
        <Image
          src="/slides/react-three-fiber/assets/burio.png"
          alt="ぶりおの写真"
          width={500}
          height={500}
          className="r-stretch"
        />

        <div className="flex flex-col">
          <h2 className={textColorClassName}>自己紹介</h2>

          <div
            className={`space-y-2 text-left ${textColorClassName} md:space-y-4 lg:space-y-6 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6 md:[&_ul]:space-y-4 lg:[&_ul]:space-y-6`}
          >
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}
