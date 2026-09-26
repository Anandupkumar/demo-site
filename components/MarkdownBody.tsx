import { isValidElement, type ReactNode } from "react";
import ReactMarkdown from "react-markdown";

type MarkdownBodyProps = {
  content: string
  uppercaseHeadings?: boolean
};

const CREED_LINE = "one Lord. one faith. one baptism.";
const WORSHIP_LINE = "Our worship is to the Lord Jesus Christ.";
const SCRIPTURE_REF =
  /^(?:(?:\d+\s)?[A-Za-z]+(?:\s[A-Za-z]+)*\s+\d+:\d+(?:-\d+)?)(?:;\s*(?:(?:\d+\s)?[A-Za-z]+(?:\s[A-Za-z]+)*\s+\d+:\d+(?:-\d+)?))*\.?$/;

function isScriptureRef(text: string): boolean {
  return SCRIPTURE_REF.test(text.trim());
}

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

export function MarkdownBody({ content, uppercaseHeadings = false }: MarkdownBodyProps) {
  const headingClass = uppercaseHeadings ? "uppercase tracking-[0.04em]" : undefined;

  return (
    <div className="prose-church">
      <ReactMarkdown
        components={{
          h2({ children }) {
            const heading = textOf(children);
            const section = /open brethren in practice/i.test(heading)
              ? "practice"
              : /apostolic in doctrine/i.test(heading)
                ? "doctrine"
                : undefined;

            return (
              <h2
                className={[
                  headingClass,
                  section === "doctrine" ? "whitespace-nowrap" : undefined,
                ]
                  .filter(Boolean)
                  .join(" ") || undefined}
                data-section={section}
              >
                {children}
              </h2>
            );
          },
          h3({ children }) {
            return <h3 className={headingClass}>{children}</h3>;
          },
          p({ children }) {
            if (textOf(children).trim() === CREED_LINE) {
              return (
                <p className="creed-line mx-auto mt-2 w-fit max-w-full whitespace-nowrap font-heading text-xl uppercase leading-[1.15] tracking-[0.04em] sm:text-2xl">
                  <span className="block [font-size:0.58em]">{children}</span>
                  <span
                    className="mx-auto mt-3 block h-[2.5px] w-1/2 bg-gold-deep"
                    aria-hidden="true"
                  />
                </p>
              );
            }

            if (textOf(children).trim() === WORSHIP_LINE) {
              return <p className="worship-line">{children}</p>;
            }

            if (isScriptureRef(textOf(children))) {
              return <p className="scripture-line">{children}</p>;
            }

            return <p>{children}</p>;
          },
          em({ children }) {
            if (isScriptureRef(textOf(children))) {
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
