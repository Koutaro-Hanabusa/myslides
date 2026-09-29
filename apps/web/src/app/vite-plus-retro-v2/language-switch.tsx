"use client";

interface LanguageSwitchProps {
  href: string;
  label: string;
}

export default function LanguageSwitch({ href, label }: LanguageSwitchProps) {
  return (
    <a
      href={href}
      onClick={(event) => {
        event.currentTarget.href = `${href}${window.location.hash}`;
      }}
      className="fixed right-4 top-4 z-50 rounded bg-black/70 px-3 py-1.5 text-sm text-white no-underline hover:bg-black/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
    >
      {label}
    </a>
  );
}
