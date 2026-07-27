import type { Metadata } from "next";
import { PageHeader, SectionCard } from "@atlas-patterns/ui";

export const metadata: Metadata = {
  title: "Settings",
};

const settingsAreas = [
  "Theme and display preferences",
  "Preferred languages and frameworks",
  "Comparison defaults",
  "Publishing and documentation workflow",
];

export default function SettingsPage() {
  return (
    <section className="page">
      <PageHeader
        eyebrow="Workspace"
        title="Settings"
        description="A lightweight placeholder for user preferences, comparison defaults, and future publication workflow controls."
      />

      <SectionCard title="Planned settings">
        <ul className="list">
          {settingsAreas.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </SectionCard>
    </section>
  );
}