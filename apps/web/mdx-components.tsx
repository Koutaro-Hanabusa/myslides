import type { MDXComponents } from "mdx/types";
import { CodeBlock } from "@/components/slides";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    pre: ({ children }) => <>{children}</>,
    code: ({ className, children, ...props }) => {
      if (typeof children === "string" && className?.startsWith("language-")) {
        return (
          <CodeBlock lang={className.replace("language-", "")} code={children.replace(/\n$/, "")} />
        );
      }
      return (
        <code className="myslides-inline-code" {...props}>
          {children}
        </code>
      );
    },
  };
}
