import type { Metadata } from "next";
import { MarkdownPage } from "@/components/MarkdownPage";
import { getPage } from "@/lib/content";

const page = getPage("what-we-are");

export const metadata: Metadata = {
  title: page.title,
  description: [page.description, page.accent].filter(Boolean).join(" "),
};

export default function WhatWeArePage() {
  return <MarkdownPage slug="what-we-are" />;
}
