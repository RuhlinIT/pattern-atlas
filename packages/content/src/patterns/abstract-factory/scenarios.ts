import type { PatternScenario } from '@atlas-patterns/schemas';

export const scenarios: readonly PatternScenario[] = [
  {
    slug: 'modern-office-setup',
    title: 'Modern office setup',
    summary:
      'A workplace factory creates matching desks, chairs, and cabinets for either a modern or classic office theme.',
    context:
      'A workplace product line needs to produce coordinated furniture sets for different office styles.',
    problem:
      'Concrete classes for each furniture type and style are tightly coupled, making it hard to swap families consistently.',
    solution:
      'Use an abstract factory to create a matching family of furniture objects from one interface.',
  },
  {
    slug: 'ui-component-suite',
    title: 'UI component suite',
    summary:
      'A design system factory provides related buttons, inputs, and cards for light or dark themes.',
    context:
      'A design system must generate consistent UI parts across themes and platforms.',
    problem:
      'If each widget is built independently, theme consistency breaks and implementation details leak into client code.',
    solution:
      'Use an abstract factory to create theme-specific UI component families.',
  },
  {
    slug: 'vehicle-family-factory',
    title: 'Vehicle family factory',
    summary:
      'A vehicle factory creates matching transport parts such as car, truck, and bike variants for different regions or fuel types.',
    context:
      'A mobility platform needs to assemble related vehicle variants for different markets.',
    problem:
      'Client code should not need to know the concrete vehicle class for each market or fuel configuration.',
    solution:
      'Use an abstract factory to return a compatible vehicle family from a single creation interface.',
  },
];