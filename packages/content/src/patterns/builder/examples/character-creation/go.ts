import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const go: PatternLanguageExample = {
  language: "go",
  title: "Character creation",
  code: `package main

type Stats struct {
    Strength    int
    Agility     int
    Intelligence int
}

type Character struct {
    Name     string
    ClassName string
    Stats    Stats
}

type CharacterBuilder struct {
    character Character
}

func NewCharacterBuilder() *CharacterBuilder {
    return &CharacterBuilder{character: Character{Stats: Stats{}}}
}

func (b *CharacterBuilder) Name(name string) *CharacterBuilder {
    b.character.Name = name
    return b
}

func (b *CharacterBuilder) ClassName(className string) *CharacterBuilder {
    b.character.ClassName = className
    return b
}

func (b *CharacterBuilder) Strength(value int) *CharacterBuilder {
    b.character.Stats.Strength = value
    return b
}

func (b *CharacterBuilder) Agility(value int) *CharacterBuilder {
    b.character.Stats.Agility = value
    return b
}

func (b *CharacterBuilder) Intelligence(value int) *CharacterBuilder {
    b.character.Stats.Intelligence = value
    return b
}

func (b *CharacterBuilder) Build() Character {
    return b.character
}

func main() {
    hero := NewCharacterBuilder().Name("Astra").ClassName("Mage").Strength(4).Agility(7).Intelligence(12).Build()
    _ = hero
}`,
  explanation:
    "Builder is useful for character creation when the final object has several optional or class-dependent fields.",
};