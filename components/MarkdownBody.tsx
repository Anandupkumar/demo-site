import { isValidElement, type ReactNode } from "react";
import ReactMarkdown from "react-markdown";

type MarkdownBodyProps = {
  content: string
};

const CREED_LINE = "one Lord. one faith. one baptism";

function textOf(node: ReactNode): string {
  if (typeof node === "string" || typeof node === "number") {
    return String(node);
  }
  if (Array.isArray(node)) {
    return node.map(textOf).join("");
  }
  if (isValidElement<{ children?: ReactNode }>(node)) {
    return textOf(node.props.children);
  }
  return "";
}

export function MarkdownBody({ content }: MarkdownBodyProps) {
  return (
    <div className="prose-church">
      <ReactMarkdown
        components={{
          p({ children }) {
            if (textOf(children).trim() === CREED_LINE) {
              return (
                <p className="mx-auto mt-4 w-fit max-w-full font-heading text-[1.5rem] leading-[1.15] text-ink">
                  {children}
                  <span
                    className="mt-3 block h-[2.5px] w-full bg-gold"
                    aria-hidden="true"
                  />
                </p>
              );
            }

            return <p>{children}</p>;
          },
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
