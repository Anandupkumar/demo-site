import ReactMarkdown from "react-markdown";

type MarkdownBodyProps = {
  content: string
};

export function MarkdownBody({ content }: MarkdownBodyProps) {
  return (
    <div className="prose-church">
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
}
