import { readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import {
  REQUIRED_PAGE_SLUGS,
  getGatherings,
  getPage,
  getPublishedPosts,
  getSiteConfig,
  parseSiteMarkdown,
} from "@/lib/content";

describe("site content", () => {
  it("parses locked church identity from site.md", () => {
    const site = getSiteConfig();

    expect(site.name).toBe("Manchester Apostolic Brethren Church");
    expect(site.motto).toMatch(/Gathered unto His Name/i);
    expect(site.verseReference).toMatch(/Matthew 18:20/i);
    expect(site.location).toMatch(/Atherton/);
    expect(site.confession).toMatch(/Jesus Christ is our God/);
    expect(site.welcome.length).toBeGreaterThan(0);
    expect(site.gatherings.length).toBeGreaterThan(0);
  });

  it("rejects site markdown that is missing required fields", () => {
    expect(() => parseSiteMarkdown("---\nname: Only name\n---\n")).toThrow(
      /missing name, motto, or verseReference/,
    );
  });

  it("loads every required page", () => {
    for (const slug of REQUIRED_PAGE_SLUGS) {
      const page = getPage(slug);
      expect(page.title.length).toBeGreaterThan(0);
      expect(page.body.length).toBeGreaterThan(0);
    }
  });

  it("loads ordered gatherings", () => {
    const gatherings = getGatherings();
    expect(gatherings.length).toBeGreaterThan(0);
    expect(gatherings.map((item) => item.order)).toEqual(
      [...gatherings.map((item) => item.order)].sort((a, b) => a - b),
    );
    expect(readFileSync(join(process.cwd(), "content/site.md"), "utf8")).toContain(
      "Manchester Apostolic Brethren Church",
    );
  });

  it("exposes an empty published-posts list until blogs are added", () => {
    expect(getPublishedPosts()).toEqual([]);
  });
});
