import { createSlideMetadata } from "@/lib/slides/config";

export const metadata = createSlideMetadata("vite-plus-retro-v2/en");

export default function EnglishLayout({ children }: { children: React.ReactNode }) {
  return (
    <div lang="en" className="h-full w-full">
      {children}
    </div>
  );
}
