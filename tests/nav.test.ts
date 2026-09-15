import { describe, expect, it } from "vitest";
import { footerNav, mainNav } from "@/lib/nav";

describe("site navigation", () => {
  it("lists the public pages in menu order", () => {
    expect(mainNav.map((item) => item.href)).toEqual([
      "/what-we-are/",
      "/services/",
      "/join-us/",
      "/our-beginnings/",
      "/contact/",
    ]);
  });

  it("keeps safeguarding and privacy in the footer only", () => {
    expect(footerNav.map((item) => item.href)).toEqual([
      "/safeguarding/",
      "/privacy/",
    ]);
  });
});
