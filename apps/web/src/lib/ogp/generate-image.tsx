import { ImageResponse } from "next/og";
import { loadOgpFonts } from "@/lib/ogp/load-fonts";

export interface OGPImageParams {
  title: string;
  subtitle?: string;
  gradient?: [string, string];
  author?: string;
  backgroundImage?: string;
  backgroundSize?: "cover" | "contain";
}

export const gradientPresets = {
  purple: ["#667eea", "#764ba2"] as [string, string],
  pink: ["#f093fb", "#f5576c"] as [string, string],
  dark: ["#000000", "#434343"] as [string, string],
  blue: ["#4facfe", "#00f2fe"] as [string, string],
  orange: ["#fa709a", "#fee140"] as [string, string],
  green: ["#11998e", "#38ef7d"] as [string, string],
  red: ["#ff416c", "#ff4b2b"] as [string, string],
  teal: ["#0cebeb", "#20e3b2"] as [string, string],
} as const;

export async function generateOGPImage({
  title,
  subtitle,
  gradient = gradientPresets.purple,
  author,
  backgroundImage,
  backgroundSize = "cover",
}: OGPImageParams): Promise<ImageResponse> {
  const backgroundStyle = backgroundImage
    ? {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: backgroundSize,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }
    : {
        background: `linear-gradient(135deg, ${gradient[0]} 0%, ${gradient[1]} 100%)`,
      };

  // 背景画像がある場合はテキストシャドウを追加して視認性を向上
  const textShadow = backgroundImage ? "2px 2px 8px rgba(0, 0, 0, 0.8)" : "none";

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        fontFamily: '"Source Sans Pro", "Noto Sans JP", sans-serif',
        fontSize: 64,
        ...backgroundStyle,
      }}
    >
      <div
        style={{
          display: backgroundImage ? "none" : "flex",
          fontSize: 32,
          opacity: 0.8,
          marginBottom: 16,
        }}
      >
        mySlides
      </div>
      <div
        style={{
          display: "flex",
          fontSize: 72,
          fontWeight: "bold",
          textAlign: "center",
          padding: "0 48px",
          lineHeight: 1.2,
          textShadow,
        }}
      >
        {title}
      </div>
      <div
        style={{
          display: subtitle ? "flex" : "none",
          fontSize: 28,
          opacity: backgroundImage ? 1 : 0.7,
          marginTop: 24,
          textShadow,
        }}
      >
        {subtitle || ""}
      </div>
      <div
        style={{
          display: author ? "flex" : "none",
          fontSize: 24,
          opacity: backgroundImage ? 1 : 0.6,
          marginTop: 16,
          textShadow,
        }}
      >
        {author ? `by ${author}` : ""}
      </div>
    </div>,
    {
      width: 1200,
      height: 630,
      fonts: await loadOgpFonts(),
    },
  );
}
