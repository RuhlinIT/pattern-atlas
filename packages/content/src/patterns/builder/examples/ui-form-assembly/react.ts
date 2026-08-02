import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const react: PatternLanguageExample = {
  language: "react",
  title: "UI form assembly",
  code: `type FormField = {
  name: string;
  label: string;
  required: boolean;
};

type FormConfig = {
  title: string;
  fields: FormField[];
  submitLabel: string;
};

function buildFormConfig(): FormConfig {
  return {
    title: "Profile setup",
    fields: [
      { name: "email", label: "Email", required: true },
      { name: "timezone", label: "Timezone", required: false },
    ],
    submitLabel: "Save profile",
  };
}

export function ProfileForm() {
  const form = buildFormConfig();

  return (
    <form>
      <h2>{form.title}</h2>
      {form.fields.map((field) => (
        <label key={field.name}>
          {field.label}
          <input name={field.name} required={field.required} />
        </label>
      ))}
      <button type="submit">{form.submitLabel}</button>
    </form>
  );
}`,
  explanation:
    "In React, a builder-like assembly step can prepare a consistent form configuration before rendering.",
};