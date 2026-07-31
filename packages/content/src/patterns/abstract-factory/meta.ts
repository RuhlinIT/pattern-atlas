import type { PatternMeta } from '@atlas-patterns/schemas';

export const meta: PatternMeta = {
  slug: 'abstract-factory',
  name: 'Abstract Factory',
  category: 'creational',
  summary:
    'Provides an interface for creating families of related or dependent objects without specifying their concrete classes.',
  intent:
    'Use Abstract Factory when you need to create matching families of objects that should vary together.',
  difficulty: 'intermediate',
  tags: [
    'object creation',
    'families of objects',
    'interface-based design',
    'dependency isolation',
  ],
  relatedPatterns: ['factory-method', 'builder', 'prototype'],
  aliases: [],
  order: 1,
  icon: '🏭',
  prerequisites: [
    'interfaces and abstract classes',
    'polymorphism',
    'basic dependency injection concepts',
  ],
  bestFor: [
    'swapping entire families of UI components',
    'supporting multiple product variants',
    'isolating concrete implementation changes',
  ],
  languages: [
    'typescript',
    'java',
    'python',
    'angular',
    'react',
    'react-native',
    'csharp',
    'dotnet',
  ],
};