import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const angular: PatternLanguageExample = {
  language: "angular",
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

class CharacterService {
  buildCharacter(): Character {
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
}

export class CharacterComponent {
  character = new CharacterService().buildCharacter();
}`,
  explanation:
    "A builder-like service can assemble a complete character model for Angular components to consume.",
};