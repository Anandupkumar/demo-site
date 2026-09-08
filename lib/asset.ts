/**
 * Prefix public files for GitHub Pages project URLs.
 * Next.js basePath does not rewrite plain <img src="/images/...">.
 */
export function asset(path: string): string {
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${base}${normalized}`;
}
