import { isValidElement, type ReactNode } from "react";
import ReactMarkdown from "react-markdown";

type MarkdownBodyProps = {
  content: string
};

const CREED_LINE = "one Lord. one faith. one baptism.";
const SCRIPTURE_REFS = new Set([
  "Matthew 28:19; Acts 2:38",
  "Colossians 2:9",
  "Acts 14:23",
  "1 Corinthians 14:26",
  "1 Timothy 2:12",
  "Acts 20:7",
  "1 Corinthians 11:28",
  "Matthew 15:9",
  "Ephesians 4:5",
  "John 17:3; 1 Corinthians 8:6; 1 Timothy 3:16",
  "Ephesians 4:6",
  "1 John 5:20",
  "Philippians 2:6-8; Colossians 2:9; Galatians 4:4; Luke 1:35; John 4:24",
  "Galatians 4:6",
  "Romans 8:16; Ephesians 4:30; John 16:13",
  "Acts 2:38; Acts 8:16; Acts 10:48; Acts 19:5; Acts 22:16; Romans 6:3",
]);

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
                    className="mt-3 block h-[2.5px] w-full bg-gold-deep"
                    aria-hidden="true"
                  />
                </p>
              );
            }

            return <p>{children}</p>;
          },
          em({ children }) {
            if (SCRIPTURE_REFS.has(textOf(children).trim())) {
              return (
                <em className="mt-1 block text-[0.85em]">{children}</em>
              );
            }

            return <em>{children}</em>;
          },
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
