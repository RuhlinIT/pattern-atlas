import type { PatternVariant } from "@atlas-patterns/schemas";

export function PatternVariantCard({ variant }: { variant: PatternVariant }) {
  return (
    <article className="rounded-xl border border-slate-700 bg-slate-900 p-4 text-slate-100 shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-wide text-sky-400">
            {variant.layer}
          </p>
          <h3 className="mt-1 text-lg font-semibold text-slate-50">
            {variant.title}
          </h3>
        </div>
        <span className="rounded-full border border-slate-600 px-2 py-1 text-xs text-slate-300">
          {variant.language}
        </span>
      </div>

      <p className="mt-3 text-sm text-slate-300">{variant.summary}</p>

      {variant.intent ? (
        <p className="mt-3 text-sm text-slate-200">
          <strong className="text-slate-100">Intent:</strong> {variant.intent}
        </p>
      ) : null}

      {variant.problem ? (
        <p className="mt-2 text-sm text-slate-200">
          <strong className="text-slate-100">Problem:</strong> {variant.problem}
        </p>
      ) : null}

      {variant.solution ? (
        <p className="mt-2 text-sm text-slate-200">
          <strong className="text-slate-100">Solution:</strong> {variant.solution}
        </p>
      ) : null}

      {variant.notes ? (
        <p className="mt-2 text-sm text-slate-400">{variant.notes}</p>
      ) : null}
    </article>
  );
}