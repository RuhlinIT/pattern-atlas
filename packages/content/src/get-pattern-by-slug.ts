import { patterns } from "./patterns";

export function getPatternBySlug(slug: string) {
  return patterns.find((pattern) => pattern.slug === slug);
}