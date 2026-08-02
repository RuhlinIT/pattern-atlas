import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const react: PatternLanguageExample = {
  language: "react",
  title: "Character creation",
  code: `type Character = {
  name: string;
  className: string;
  stats: {
    strength: number;
    agility: number;
    intelligence: number;
  };
};

function buildCharacter(): Character {
  return {
    name: "Astra",
    className: "Mage",
    stats: {
      strength: 4,
      agility: 7,
      intelligence: 12,
    },
  };
}

export function CharacterSheet() {
  const character = buildCharacter();

  return (
    <section>
      <h2>{character.name}</h2>
      <p>{character.className}</p>
      <ul>
        <li>Strength: {character.stats.strength}</li>
        <li>Agility: {character.stats.agility}</li>
        <li>Intelligence: {character.stats.intelligence}</li>
      </ul>
    </section>
  );
}`,
  explanation:
    "A builder-like step can prepare a complete character object before rendering a sheet or profile.",
};