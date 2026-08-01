import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const react: PatternLanguageExample = {
  language: "react",
  title: "Game save memento",
  code: "import React, { useMemo } from \"react\";\n\n\nclass GameMemento {\n  constructor(\n    public readonly level: number,\n    public readonly score: number,\n    public readonly lives: number\n  ) {}\n}\n\n\nclass Game {\n  private level = 1;\n  private score = 0;\n  private lives = 3;\n\n\n  play(points: number): void {\n    this.score += points;\n  }\n\n\n  advanceLevel(): void {\n    this.level += 1;\n  }\n\n\n  loseLife(): void {\n    this.lives -= 1;\n  }\n\n\n  save(): GameMemento {\n    return new GameMemento(this.level, this.score, this.lives);\n  }\n\n\n  restore(memento: GameMemento): void {\n    this.level = memento.level;\n    this.score = memento.score;\n    this.lives = memento.lives;\n  }\n\n\n  status(): string {\n    return `Level ${this.level}, Score ${this.score}, Lives ${this.lives}`;\n  }\n}\n\n\nfunction GamePreview({ game }: { game: Game }) {\n  return <p>{game.status()}</p>;\n}\n\n\nexport function App() {\n  const game = useMemo(() => new Game(), []);\n\n\n  useMemo(() => {\n    game.play(100);\n    game.advanceLevel();\n  }, [game]);\n\n\n  return (\n    <main>\n      <h1>Game Save Memento</h1>\n      <GamePreview game={game} />\n    </main>\n  );\n}",
  explanation: "The React example treats the game as the originator and uses mementos to preserve progress snapshots.",
};
