import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const typescript: PatternLanguageExample = {
  language: "typescript",
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

class FormBuilder {
  private config: FormConfig = {
    title: "",
    fields: [],
    submitLabel: "Submit",
  };

  title(title: string) {
    this.config.title = title;
    return this;
  }

  addField(field: FormField) {
    this.config.fields.push(field);
    return this;
  }

  submitLabel(label: string) {
    this.config.submitLabel = label;
    return this;
  }

  build() {
    return this.config;
  }
}

const form = new FormBuilder()
  .title("Profile setup")
  .addField({ name: "email", label: "Email", required: true })
  .addField({ name: "timezone", label: "Timezone", required: false })
  .submitLabel("Save profile")
  .build();`,
  explanation:
    "A builder fits staged UI assembly because the form can be configured progressively based on workflow state.",
};