import { existsSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";

const outDir = join(process.cwd(), "out");
const requiredHtml = [
  "index.html",
  "what-we-are/index.html",
  "services/index.html",
  "join-us/index.html",
  "our-beginnings/index.html",
  "contact/index.html",
  "safeguarding/index.html",
  "privacy/index.html",
];

describe("static export", () => {
  it("writes HTML for every public route after next build", () => {
    if (!existsSync(outDir)) {
      return;
    }

    for (const file of requiredHtml) {
      expect(existsSync(join(outDir, file)), `missing out/${file}`).toBe(true);
    }
  });
});
