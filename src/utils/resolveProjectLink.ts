/**
 * resolveProjectLink
 *
 * Reads a project link string from page.json and returns either:
 *   - the original URL (if active)
 *   - the correct internal error route (if flagged or empty)
 *
 * Supports i18n locales: "en" | "es" | "pt-BR"
 *
 * Usage:
 *   const href = resolveProjectLink(project.link, locale)
 *   <a href={href}>...</a>
 *
 *   OR with the hook:
 *   const href = useProjectLink(project.link)
 */

export type Locale = "en" | "es" | "pt-BR";

const ERROR_FLAGS: Record<string, string> = {
  "451": "/region-blocked",
  "404": "/not-found",
  "410": "/deactivated",
  "403": "/forbidden",
};

const GEO_BLOCKED_DOMAINS = ["vida-plus-sepia.vercel.app", "https://aureadesign.vercel.app/"];

export function resolveProjectLink(link: string, locale: Locale): string {
  const localePrefix = locale === "en" ? "/en" : locale === "es" ? "/es" : "/pt-BR";

  // 1. Empty link → 404
  if (!link || link.trim() === "") {
    return `${localePrefix}/not-found`;
  }

  const trimmed = link.trim();

  // 2. Explicit error flag ("451", "403", "410", "404")
  if (ERROR_FLAGS[trimmed]) {
    return `${localePrefix}${ERROR_FLAGS[trimmed]}`;
  }

  // 3. Valid URL — check if domain is geo-blocked
  try {
    const url = new URL(trimmed);
    const isGeoBlocked = GEO_BLOCKED_DOMAINS.some((domain) =>
      url.hostname.includes(domain)
    );
    if (isGeoBlocked) {
      return `${localePrefix}/region-blocked`;
    }
  } catch {
    // Not a valid URL → 404
    return `${localePrefix}/not-found`;
  }

  // 4. Active link → return as-is (external URL)
  return trimmed;
}

export function isErrorRoute(href: string): boolean {
  return (
    href.includes("/not-found")      ||
    href.includes("/forbidden")      ||
    href.includes("/deactivated")    ||
    href.includes("/region-blocked")
  );
}

export type ErrorType = "404" | "403" | "410" | "451" | null;

export function getErrorType(href: string): ErrorType {
  if (href.includes("/not-found"))      return "404";
  if (href.includes("/forbidden"))      return "403";
  if (href.includes("/deactivated"))    return "410";
  if (href.includes("/region-blocked")) return "451";
  return null;
}