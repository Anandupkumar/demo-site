import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const contentDir = path.join(process.cwd(), "content");

export type Meeting = {
  name: string
  day: string
  time: string
  description: string
};

export type SiteConfig = {
  name: string
  shortName: string
  motto: string
  verse: string
  verseReference: string
  location: string
  town: string
  city: string
  address: string
  postcode: string
  phone: string
  email: string
  charityNumber: string
  mapQuery: string
  confession: string
  hope: string
  timesNote: string
  welcome: string[]
  gatherings: Meeting[]
};

export type PageDoc = {
  slug: string
  title: string
  description: string
  body: string
};

export type Gathering = {
  slug: string
  title: string
  day: string
  time: string
  order: number
  summary: string
  image: string
  imageAlt: string
  body: string
};

export type Post = {
  slug: string
  title: string
  date: string
  excerpt: string
  author: string
  tags: string[]
  draft: boolean
  body: string
};

export const REQUIRED_PAGE_SLUGS = [
  "about",
  "visit",
  "gatherings",
  "gospel",
  "safeguarding",
  "privacy",
  "contact",
] as const;

function asString(value: unknown, fallback = ""): string {
  return typeof value === "string" ? value : fallback;
}

function asStringArray(value: unknown): string[] {
  if (!Array.isArray(value)) return [];
  return value.filter((item): item is string => typeof item === "string");
}

function asMeetings(value: unknown): Meeting[] {
  if (!Array.isArray(value)) return [];
  return value.map((item) => {
    const row = item as Record<string, unknown>;
    return {
      name: asString(row.name),
      day: asString(row.day),
      time: asString(row.time),
      description: asString(row.description),
    };
  });
}

export function parseSiteMarkdown(raw: string): SiteConfig {
  const { data } = matter(raw);
  const name = asString(data.name);
  const motto = asString(data.motto);
  const verseReference = asString(data.verseReference);
  const welcome = asStringArray(data.welcome);
  const gatherings = asMeetings(data.gatherings);

  if (!name || !motto || !verseReference) {
    throw new Error("site.md is missing name, motto, or verseReference");
  }
  if (welcome.length === 0) {
    throw new Error("site.md must include a welcome array");
  }
  if (gatherings.length === 0) {
    throw new Error("site.md must include at least one gathering");
  }

  return {
    name,
    shortName: asString(data.shortName, name),
    motto,
    verse: asString(data.verse),
    verseReference,
    location: asString(data.location),
    town: asString(data.town),
    city: asString(data.city),
    address: asString(data.address),
    postcode: asString(data.postcode),
    phone: asString(data.phone),
    email: asString(data.email),
    charityNumber: asString(data.charityNumber),
    mapQuery: asString(data.mapQuery, asString(data.location)),
    confession: asString(data.confession),
    hope: asString(data.hope),
    timesNote: asString(data.timesNote),
    welcome,
    gatherings,
  };
}

export function parsePageMarkdown(slug: string, raw: string): PageDoc {
  const { data, content } = matter(raw);
  const title = asString(data.title);
  const body = content.trim();

  if (!title || !body) {
    throw new Error(`Page "${slug}" is missing title or body`);
  }

  return {
    slug,
    title,
    description: asString(data.description),
    body,
  };
}

export function parseGatheringMarkdown(slug: string, raw: string): Gathering {
  const { data, content } = matter(raw);
  const title = asString(data.title);
  const body = content.trim();

  if (!title || !body) {
    throw new Error(`Gathering "${slug}" is missing title or body`);
  }

  return {
    slug,
    title,
    day: asString(data.day),
    time: asString(data.time),
    order: typeof data.order === "number" ? data.order : 99,
    summary: asString(data.summary),
    image: asString(data.image),
    imageAlt: asString(data.imageAlt, title),
    body,
  };
}

export function parsePostMarkdown(slug: string, raw: string): Post {
  const { data, content } = matter(raw);
  return {
    slug,
    title: asString(data.title),
    date: asString(data.date),
    excerpt: asString(data.excerpt),
    author: asString(data.author),
    tags: asStringArray(data.tags),
    draft: Boolean(data.draft),
    body: content.trim(),
  };
}

export function getSiteConfig(): SiteConfig {
  const raw = fs.readFileSync(path.join(contentDir, "site.md"), "utf8");
  return parseSiteMarkdown(raw);
}

export function getPage(slug: string): PageDoc {
  const file = path.join(contentDir, "pages", `${slug}.md`);
  return parsePageMarkdown(slug, fs.readFileSync(file, "utf8"));
}

export function getGatherings(): Gathering[] {
  const dir = path.join(contentDir, "gatherings");
  return fs
    .readdirSync(dir)
    .filter((file) => file.endsWith(".md"))
    .map((file) => {
      const slug = file.replace(/\.md$/, "");
      return parseGatheringMarkdown(
        slug,
        fs.readFileSync(path.join(dir, file), "utf8"),
      );
    })
    .sort((a, b) => a.order - b.order);
}

export function getPublishedPosts(): Post[] {
  const dir = path.join(contentDir, "posts");
  if (!fs.existsSync(dir)) return [];

  return fs
    .readdirSync(dir)
    .filter((file) => file.endsWith(".md"))
    .map((file) => {
      const slug = file.replace(/\.md$/, "");
      return parsePostMarkdown(slug, fs.readFileSync(path.join(dir, file), "utf8"));
    })
    .filter((post) => post.title && !post.draft)
    .sort((a, b) => b.date.localeCompare(a.date));
}

export function mapsUrl(query: string): string {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

export function mapsEmbedUrl(query: string): string {
  return `https://maps.google.com/maps?q=${encodeURIComponent(query)}&output=embed`;
}
