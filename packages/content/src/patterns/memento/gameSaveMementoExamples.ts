import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const gameSaveMementoExamples: PatternLanguageExample[] = [
  {
    language: "TypeScript",
    code: `class GameMemento {
  constructor(
    public readonly level: number,
    public readonly score: number,
    public readonly lives: number
  ) {}
}


class Game {
  private level = 1;
  private score = 0;
  private lives = 3;


  play(points: number): void {
    this.score += points;
  }


  advanceLevel(): void {
    this.level += 1;
  }


  loseLife(): void {
    this.lives -= 1;
  }


  save(): GameMemento {
    return new GameMemento(this.level, this.score, this.lives);
  }


  restore(memento: GameMemento): void {
    this.level = memento.level;
    this.score = memento.score;
    this.lives = memento.lives;
  }


  status(): string {
    return \`Level \${this.level}, Score \${this.score}, Lives \${this.lives}\`;
  }
}


class SaveManager {
  private saves: GameMemento[] = [];


  save(state: GameMemento): void {
    this.saves.push(state);
  }


  load(index: number): GameMemento | null {
    return this.saves[index] ?? null;
  }
}


const game = new Game();
const saveManager = new SaveManager();


game.play(100);
game.advanceLevel();
saveManager.save(game.save());


game.play(50);
game.loseLife();
saveManager.save(game.save());


console.log(game.status());


const loaded = saveManager.load(0);
if (loaded) {
  game.restore(loaded);
}


console.log(game.status());`,
    explanation:
      "The game save memento stores level, score, and lives so the game can return to a previous checkpoint without exposing its internals.",
  },
  {
    language: "Java",
    code: `class GameMemento {
    private final int level;
    private final int score;
    private final int lives;


    public GameMemento(int level, int score, int lives) {
        this.level = level;
        this.score = score;
        this.lives = lives;
    }


    public int getLevel() {
        return level;
    }


    public int getScore() {
        return score;
    }


    public int getLives() {
        return lives;
    }
}


class Game {
    private int level = 1;
    private int score = 0;
    private int lives = 3;


    public void play(int points) {
        score += points;
    }


    public void advanceLevel() {
        level += 1;
    }


    public void loseLife() {
        lives -= 1;
    }


    public GameMemento save() {
        return new GameMemento(level, score, lives);
    }


    public void restore(GameMemento memento) {
        level = memento.getLevel();
        score = memento.getScore();
        lives = memento.getLives();
    }


    public String status() {
        return "Level " + level + ", Score " + score + ", Lives " + lives;
    }
}


class SaveManager {
    private final java.util.List<GameMemento> saves = new java.util.ArrayList<>();


    public void save(GameMemento state) {
        saves.add(state);
    }


    public GameMemento load(int index) {
        return index >= 0 && index < saves.size() ? saves.get(index) : null;
    }
}


Game game = new Game();
SaveManager saveManager = new SaveManager();


game.play(100);
game.advanceLevel();
saveManager.save(game.save());


game.play(50);
game.loseLife();
saveManager.save(game.save());


System.out.println(game.status());


GameMemento loaded = saveManager.load(0);
if (loaded != null) {
    game.restore(loaded);
}


System.out.println(game.status());`,
    explanation:
      "The Java game example uses mementos as save points so the player state can be restored later.",
  },
  {
    language: "Python",
    code: `class GameMemento:
    def __init__(self, level: int, score: int, lives: int) -> None:
        self.level = level
        self.score = score
        self.lives = lives


class Game:
    def __init__(self) -> None:
        self.level = 1
        self.score = 0
        self.lives = 3


    def play(self, points: int) -> None:
        self.score += points


    def advance_level(self) -> None:
        self.level += 1


    def lose_life(self) -> None:
        self.lives -= 1


    def save(self) -> GameMemento:
        return GameMemento(self.level, self.score, self.lives)


    def restore(self, memento: GameMemento) -> None:
        self.level = memento.level
        self.score = memento.score
        self.lives = memento.lives


    def status(self) -> str:
        return f"Level {self.level}, Score {self.score}, Lives {self.lives}"


class SaveManager:
    def __init__(self) -> None:
        self.saves: list[GameMemento] = []


    def save(self, state: GameMemento) -> None:
        self.saves.append(state)


    def load(self, index: int) -> GameMemento | None:
        return self.saves[index] if 0 <= index < len(self.saves) else None


game = Game()
save_manager = SaveManager()


game.play(100)
game.advance_level()
save_manager.save(game.save())


game.play(50)
game.lose_life()
save_manager.save(game.save())


print(game.status())


loaded = save_manager.load(0)
if loaded:
    game.restore(loaded)


print(game.status())`,
    explanation:
      "The Python game save example preserves checkpoints as mementos and restores the game from any stored snapshot.",
  },
  {
    language: "Angular",
    code: `class GameMemento {
  constructor(
    public readonly level: number,
    public readonly score: number,
    public readonly lives: number
  ) {}
}


class Game {
  private level = 1;
  private score = 0;
  private lives = 3;


  play(points: number): void {
    this.score += points;
  }


  advanceLevel(): void {
    this.level += 1;
  }


  loseLife(): void {
    this.lives -= 1;
  }


  save(): GameMemento {
    return new GameMemento(this.level, this.score, this.lives);
  }


  restore(memento: GameMemento): void {
    this.level = memento.level;
    this.score = memento.score;
    this.lives = memento.lives;
  }


  status(): string {
    return \`Level \${this.level}, Score \${this.score}, Lives \${this.lives}\`;
  }
}


class SaveManager {
  private saves: GameMemento[] = [];


  save(state: GameMemento): void {
    this.saves.push(state);
  }


  load(index: number): GameMemento | null {
    return this.saves[index] ?? null;
  }
}


const game = new Game();
const saveManager = new SaveManager();


game.play(100);
game.advanceLevel();
saveManager.save(game.save());


game.play(50);
game.loseLife();
saveManager.save(game.save());


console.log(game.status());


const loaded = saveManager.load(0);
if (loaded) {
  game.restore(loaded);
}


console.log(game.status());`,
    explanation:
      "The Angular game example keeps save data in immutable mementos so gameplay progress can be restored later.",
  },
  {
    language: "React",
    code: `import React, { useMemo } from "react";


class GameMemento {
  constructor(
    public readonly level: number,
    public readonly score: number,
    public readonly lives: number
  ) {}
}


class Game {
  private level = 1;
  private score = 0;
  private lives = 3;


  play(points: number): void {
    this.score += points;
  }


  advanceLevel(): void {
    this.level += 1;
  }


  loseLife(): void {
    this.lives -= 1;
  }


  save(): GameMemento {
    return new GameMemento(this.level, this.score, this.lives);
  }


  restore(memento: GameMemento): void {
    this.level = memento.level;
    this.score = memento.score;
    this.lives = memento.lives;
  }


  status(): string {
    return \`Level \${this.level}, Score \${this.score}, Lives \${this.lives}\`;
  }
}


function GamePreview({ game }: { game: Game }) {
  return <p>{game.status()}</p>;
}


export function App() {
  const game = useMemo(() => new Game(), []);


  useMemo(() => {
    game.play(100);
    game.advanceLevel();
  }, [game]);


  return (
    <main>
      <h1>Game Save Memento</h1>
      <GamePreview game={game} />
    </main>
  );
}`,
    explanation:
      "The React example treats the game as the originator and uses mementos to preserve progress snapshots.",
  },
  {
    language: "React_Native",
    code: `import React, { useMemo } from "react";
import { SafeAreaView, Text, View } from "react-native";


class GameMemento {
  constructor(
    public readonly level: number,
    public readonly score: number,
    public readonly lives: number
  ) {}
}


class Game {
  private level = 1;
  private score = 0;
  private lives = 3;


  play(points: number): void {
    this.score += points;
  }


  advanceLevel(): void {
    this.level += 1;
  }


  loseLife(): void {
    this.lives -= 1;
  }


  save(): GameMemento {
    return new GameMemento(this.level, this.score, this.lives);
  }


  restore(memento: GameMemento): void {
    this.level = memento.level;
    this.score = memento.score;
    this.lives = memento.lives;
  }


  status(): string {
    return \`Level \${this.level}, Score \${this.score}, Lives \${this.lives}\`;
  }
}


function GamePreview({ game }: { game: Game }) {
  return (
    <View>
      <Text>{game.status()}</Text>
    </View>
  );
}


export function App() {
  const game = useMemo(() => new Game(), []);


  useMemo(() => {
    game.play(100);
    game.advanceLevel();
  }, [game]);


  return (
    <SafeAreaView style={{ flex: 1, justifyContent: "center", padding: 24 }}>
      <View style={{ gap: 16 }}>
        <Text style={{ fontSize: 24, fontWeight: "600" }}>Game Save Memento</Text>
        <GamePreview game={game} />
      </View>
    </SafeAreaView>
  );
}`,
    explanation:
      "The React Native example shows the current game status while mementos preserve checkpoints behind the scenes.",
  },
  {
    language: "C#",
    code: `using System;
using System.Collections.Generic;


public class GameMemento
{
    public int Level { get; }
    public int Score { get; }
    public int Lives { get; }


    public GameMemento(int level, int score, int lives)
    {
        Level = level;
        Score = score;
        Lives = lives;
    }
}


public class Game
{
    private int _level = 1;
    private int _score = 0;
    private int _lives = 3;


    public void Play(int points)
    {
        _score += points;
    }


    public void AdvanceLevel()
    {
        _level += 1;
    }


    public void LoseLife()
    {
        _lives -= 1;
    }


    public GameMemento Save()
    {
        return new GameMemento(_level, _score, _lives);
    }


    public void Restore(GameMemento memento)
    {
        _level = memento.Level;
        _score = memento.Score;
        _lives = memento.Lives;
    }


    public string Status()
    {
        return $"Level {_level}, Score {_score}, Lives {_lives}";
    }
}


public class SaveManager
{
    private readonly List<GameMemento> _saves = new List<GameMemento>();


    public void Save(GameMemento state)
    {
        _saves.Add(state);
    }


    public GameMemento Load(int index)
    {
        return index >= 0 && index < _saves.Count ? _saves[index] : null;
    }
}


var game = new Game();
var saveManager = new SaveManager();


game.Play(100);
game.AdvanceLevel();
saveManager.Save(game.Save());


game.Play(50);
game.LoseLife();
saveManager.Save(game.Save());


Console.WriteLine(game.Status());


var loaded = saveManager.Load(0);
if (loaded != null)
{
    game.Restore(loaded);
}


Console.WriteLine(game.Status());`,
    explanation:
      "The C# game save example stores progress snapshots as mementos and restores them through the originator.",
  },
  {
    language: ".NET",
    code: `using System;
using System.Collections.Generic;
using Microsoft.Extensions.DependencyInjection;


public class GameMemento
{
    public int Level { get; }
    public int Score { get; }
    public int Lives { get; }


    public GameMemento(int level, int score, int lives)
    {
        Level = level;
        Score = score;
        Lives = lives;
    }
}


public class Game
{
    private int _level = 1;
    private int _score = 0;
    private int _lives = 3;


    public void Play(int points)
    {
        _score += points;
    }


    public void AdvanceLevel()
    {
        _level += 1;
    }


    public void LoseLife()
    {
        _lives -= 1;
    }


    public GameMemento Save()
    {
        return new GameMemento(_level, _score, _lives);
    }


    public void Restore(GameMemento memento)
    {
        _level = memento.Level;
        _score = memento.Score;
        _lives = memento.Lives;
    }


    public string Status()
    {
        return $"Level {_level}, Score {_score}, Lives {_lives}";
    }
}


public class SaveManager
{
    private readonly List<GameMemento> _saves = new List<GameMemento>();


    public void Save(GameMemento state)
    {
        _saves.Add(state);
    }


    public GameMemento Load(int index)
    {
        return index >= 0 && index < _saves.Count ? _saves[index] : null;
    }
}


var services = new ServiceCollection();
services.AddSingleton<Game>();
services.AddSingleton<SaveManager>();

var provider = services.BuildServiceProvider();
var game = provider.GetRequiredService<Game>();
var saveManager = provider.GetRequiredService<SaveManager>();


game.Play(100);
game.AdvanceLevel();
saveManager.Save(game.Save());


game.Play(50);
game.LoseLife();
saveManager.Save(game.Save());


Console.WriteLine(game.Status());


var loaded = saveManager.Load(0);
if (loaded != null)
{
    game.Restore(loaded);
}


Console.WriteLine(game.Status());`,
    explanation:
      "The .NET example wires the game originator and save manager through dependency injection while keeping checkpoint data encapsulated.",
  },
];
