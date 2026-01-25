import type { Metadata, Viewport } from "next";
import { getSlideBySlug, getAllSlideSlugs } from "@/config/slides";

interface LayoutProps {
  children: React.ReactNode;
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllSlideSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const slide = getSlideBySlug(slug);

  if (!slide) {
    return {
      title: "Slide not found",
    };
  }

  return {
    title: `${slide.title} | Embed`,
    description: slide.description,
    robots: {
      index: false, // 埋め込みページはインデックスしない
      follow: false,
    },
  };
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default async function EmbedLayout({ children }: LayoutProps) {
  return (
    <div className="fixed inset-0 h-dvh w-full overflow-hidden bg-black">
      {children}
    </div>
  );
}
