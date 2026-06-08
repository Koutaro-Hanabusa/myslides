import { highlight } from "sugar-high";

// sugar-high は JS ファミリ向け。それ以外は素のテキストで表示する。
const HIGHLIGHT_LANGS = new Set(["js", "jsx", "ts", "tsx", "mjs", "cjs", "json"]);

interface CodeBlockProps {
  code: string;
  lang?: string;
}

export function CodeBlock({ code, lang }: CodeBlockProps) {
  const normalizedLang = lang?.toLowerCase();
  const highlighted =
    normalizedLang && HIGHLIGHT_LANGS.has(normalizedLang) ? highlight(code) : null;

  return (
    <div className="sh-code">
      {lang && (
        <div className="sh-code__bar">
          <span className="sh-code__lang">{lang}</span>
        </div>
      )}
      <pre className="sh-code__pre">
        {highlighted ? (
          // biome-ignore lint/security/noDangerouslySetInnerHtml: sugar-high はエスケープ済みHTMLを返す
          <code dangerouslySetInnerHTML={{ __html: highlighted }} />
        ) : (
          <code>{code}</code>
        )}
      </pre>
    </div>
  );
}
