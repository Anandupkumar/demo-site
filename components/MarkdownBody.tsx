import { Fragment, isValidElement, type ReactNode } from "react";
import ReactMarkdown from "react-markdown";

type MarkdownBodyProps = {
  content: string
  uppercaseHeadings?: boolean
  underlineHeadings?: boolean
  className?: string
};

const EXAMINE_LINE = "let a man examine himself.";
const SAVIOUR_LINE = "Lord and Saviour Jesus Christ.";
const CREED_LINE = "one Lord. one faith. one baptism.";
const WORSHIP_LINE = "Our worship is to the Lord Jesus Christ.";
const HEAD_LINE = "Autonomous local church with Christ as Head.";
const REVEALED_LINE = "One God who has fully revealed Himself in Jesus Christ.";
const SECTION_RULE =
  "section-rule mx-auto mt-3 block h-[2.5px] bg-gold-deep";
const SCRIPTURE_REF =
  /^(?:(?:\d+\s)?[A-Za-z]+(?:\s[A-Za-z]+)*\s+\d+:\d+(?:-\d+)?)(?:;\s*(?:(?:\d+\s)?[A-Za-z]+(?:\s[A-Za-z]+)*\s+\d+:\d+(?:-\d+)?))*\.?$/;

function isScriptureRef(text: string): boolean {
  return SCRIPTURE_REF.test(text.trim());
}

function withGodLine(children: ReactNode): ReactNode {
  const nodes = Array.isArray(children) ? children : [children];
  const result: ReactNode[] = [];

  for (let index = 0; index < nodes.length; index += 1) {
    const node = nodes[index];
    if (typeof node === "string" && node.includes("is the Lord Jesus Christ.")) {
      const splitAt = node.lastIndexOf("is the Lord Jesus Christ.");
      if (splitAt > 0) result.push(node.slice(0, splitAt));
      result.push(
        <span key="lord" className="block whitespace-nowrap sm:inline">
          {node.slice(splitAt)}
        </span>,
      );
      continue;
    }
    if (isValidElement(node) && textOf(node).includes("He is the true God")) {
      result.push(
        <span key="true-god" className="block whitespace-nowrap sm:inline">
          {node}
        </span>,
      );
      continue;
    }
    result.push(<Fragment key={index}>{node}</Fragment>);
  }

  return result;
}

function withExamineLine(children: ReactNode): ReactNode {
  const nodes = Array.isArray(children) ? children : [children];
  const result: ReactNode[] = [];

  for (let index = 0; index < nodes.length; index += 1) {
    const node = nodes[index];
    if (typeof node === "string" && node.includes("but ")) {
      const splitAt = node.lastIndexOf("but ");
      result.push(node.slice(0, splitAt));
      result.push(
        <span key="examine" className="block whitespace-nowrap sm:inline">
          {node.slice(splitAt)}
          {nodes[index + 1]}
        </span>,
      );
      index += 1;
      continue;
    }
    result.push(<Fragment key={index}>{node}</Fragment>);
  }

  return result;
}

function withMobileLine(node: ReactNode, phrase: string): ReactNode {
  if (typeof node === "string") {
    const index = node.lastIndexOf(phrase);
    if (index === -1) return node;
    return (
      <>
        {node.slice(0, index)}
        <span className="block sm:inline">{node.slice(index)}</span>
      </>
    );
  }
  if (Array.isArray(node)) {
    return node.map((child, index) => (
      <Fragment key={index}>{withMobileLine(child, phrase)}</Fragment>
    ));
  }
  return node;
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

export function MarkdownBody({
  content,
  uppercaseHeadings = false,
  underlineHeadings = false,
  className,
}: MarkdownBodyProps) {
  const headingClass = uppercaseHeadings ? "uppercase tracking-[0.04em]" : undefined;

  return (
    <div className={["prose-church", className].filter(Boolean).join(" ")}>
      <ReactMarkdown
        components={{
          h2({ children }) {
            const heading = textOf(children);
            const section = /open brethren in practice/i.test(heading)
              ? "practice"
              : /apostolic in doctrine/i.test(heading)
                ? "doctrine"
                : undefined;
            const showRule =
              section === "practice" ||
              section === "doctrine" ||
              underlineHeadings;

            return (
              <h2
                className={[
                  headingClass,
                  showRule ? "mx-auto w-fit max-w-full" : undefined,
                  section === "practice" || section === "doctrine"
                    ? "whitespace-nowrap"
                    : undefined,
                ]
                  .filter(Boolean)
                  .join(" ") || undefined}
                data-section={section}
              >
                {children}
                {showRule ? (
                  <span
                    className={SECTION_RULE}
                    aria-hidden="true"
                  />
                ) : null}
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
                </p>
              );
            }

            if (textOf(children).trim().startsWith(HEAD_LINE)) {
              const nodes = Array.isArray(children) ? children : [children];
              const refs = nodes.filter((node) => isScriptureRef(textOf(node)));
              return (
                <p>
                  Autonomous local church with{" "}
                  <span className="block sm:inline">Christ as Head.</span>
                  {refs}
                </p>
              );
            }

            if (textOf(children).trim() === WORSHIP_LINE) {
              return <p className="worship-line">{children}</p>;
            }

            if (isScriptureRef(textOf(children))) {
              return <p className="scripture-line">{children}</p>;
            }

            if (textOf(children).includes("is the Lord Jesus Christ.")) {
              return <p>{withGodLine(children)}</p>;
            }

            if (textOf(children).includes(EXAMINE_LINE)) {
              return <p>{withExamineLine(children)}</p>;
            }

            if (textOf(children).includes(SAVIOUR_LINE)) {
              return <p>{withMobileLine(children, SAVIOUR_LINE)}</p>;
            }

            return <p>{children}</p>;
          },
          strong({ children }) {
            if (textOf(children).includes(REVEALED_LINE)) {
              return (
                <>
                  <br className="sm:hidden" />
                  <strong>{children}</strong>
                </>
              );
            }

            return <strong>{children}</strong>;
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
