const NAME = "cookie_consent";
const SIX_MONTHS = 60 * 60 * 24 * 180;
// Scoped to the base path so other sites on the same github.io host don't share it.
const PATH = process.env.NEXT_PUBLIC_BASE_PATH || "/";

const listeners = new Set<() => void>();

export function subscribeConsent(listener: () => void) {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

export function hasConsent(): boolean {
  return document.cookie.split("; ").includes(`${NAME}=granted`);
}

export function acceptConsent() {
  const secure = location.protocol === "https:" ? "; Secure" : "";
  document.cookie = `${NAME}=granted; path=${PATH}; max-age=${SIX_MONTHS}; SameSite=Lax${secure}`;
  listeners.forEach((listener) => listener());
}
