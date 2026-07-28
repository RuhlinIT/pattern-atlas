import type { PatternRecord } from "@atlas-patterns/schemas";
import { patterns } from "./patterns";

export function getPatternBySlug(slug: string): PatternRecord | undefined {
  return patterns.find((pattern) => pattern.slug === slug);
}