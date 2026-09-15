import type { Metadata } from "next";
import { MarkdownPage } from "@/components/MarkdownPage";
import { getPage } from "@/lib/content";

const page = getPage("our-beginnings");

export const metadata: Metadata = {
  title: page.title,
  description: page.description,
};

export default function OurBeginningsPage() {
  return <MarkdownPage slug="our-beginnings" />;
}
