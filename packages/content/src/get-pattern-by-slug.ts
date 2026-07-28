import type { PatternRecord } from "@atlas-patterns/schemas";
import { patternExporter } from "./patternExporter";

export function getPatternBySlug(slug: string): PatternRecord | undefined {
  return patternExporter.find((pattern) => pattern.slug === slug);
}