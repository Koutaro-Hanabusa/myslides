"use client";

import dynamic from "next/dynamic";
import { useMemo } from "react";

// 各スライドを動的にインポート
const slideComponents: Record<string, React.ComponentType<{ embedded?: boolean }>> = {
  "better-t-stack": dynamic(() => import("@/app/better-t-stack/slide-content"), {
    loading: () => <SlideLoading />,
  }),
  "react-three-fiber": dynamic(() => import("@/app/react-three-fiber/slide-content"), {
    loading: () => <SlideLoading />,
  }),
  "tacotuesday": dynamic(() => import("@/app/tacotuesday/slide-content"), {
    loading: () => <SlideLoading />,
  }),
  "you-must-have-dotfiles": dynamic(() => import("@/app/you-must-have-dotfiles/slide-content"), {
    loading: () => <SlideLoading />,
  }),
};

function SlideLoading() {
  return (
    <div className="flex h-full w-full items-center justify-center bg-black">
      <div className="text-white text-lg">Loading...</div>
    </div>
  );
}

interface SlideLoaderProps {
  slug: string;
  embedded?: boolean;
}

export default function SlideLoader({ slug, embedded = false }: SlideLoaderProps) {
  const SlideComponent = useMemo(() => slideComponents[slug], [slug]);

  if (!SlideComponent) {
    return (
      <div className="flex h-full w-full items-center justify-center bg-black">
        <div className="text-white text-lg">Slide not found</div>
      </div>
    );
  }

  return <SlideComponent embedded={embedded} />;
}
