import { afterEach, describe, expect, it } from "vitest";
import { asset } from "@/lib/asset";

describe("asset", () => {
  const original = process.env.NEXT_PUBLIC_BASE_PATH;

  afterEach(() => {
    if (original === undefined) {
      delete process.env.NEXT_PUBLIC_BASE_PATH;
    } else {
      process.env.NEXT_PUBLIC_BASE_PATH = original;
    }
  });

  it("keeps root paths for local static hosting", () => {
    delete process.env.NEXT_PUBLIC_BASE_PATH;
    expect(asset("/images/open-bible.jpg")).toBe("/images/open-bible.jpg");
  });

  it("prefixes GitHub Pages project base path", () => {
    process.env.NEXT_PUBLIC_BASE_PATH = "/demo-site";
    expect(asset("/images/open-bible.jpg")).toBe(
      "/demo-site/images/open-bible.jpg",
    );
  });
});
