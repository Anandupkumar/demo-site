import type { Metadata } from "next";
import { MarkdownPage } from "@/components/MarkdownPage";
import { getPage } from "@/lib/content";

const page = getPage("safeguarding");

export const metadata: Metadata = {
  title: page.title,
  description: page.description,
};

export default function SafeguardingPage() {
  return <MarkdownPage slug="safeguarding" />;
}
