import type { PatternLanguageExample } from "@atlas-patterns/schemas";

interface Beverage {
  cost(): number;
  description(): string;
}

class Espresso implements Beverage {
  cost() {
    return 3;
  }
  description() {
    return "Espresso";
  }
}

class Milk implements Beverage {
  constructor(private wrapped: Beverage) {}
  cost() {
    return this.wrapped.cost() + 1;
  }
  description() {
    return `${this.wrapped.description()}, milk`;
  }
}

class Mocha implements Beverage {
  constructor(private wrapped: Beverage) {}
  cost() {
    return this.wrapped.cost() + 2;
  }
  description() {
    return `${this.wrapped.description()}, mocha`;
  }
}

export const typescript: PatternLanguageExample = {
  language: "typescript",
  title: "Coffee customization",
  code: `interface Beverage {
  cost(): number;
  description(): string;
}

class Espresso implements Beverage {
  cost() {
    return 3;
  }
  description() {
    return "Espresso";
  }
}

class Milk implements Beverage {
  constructor(private wrapped: Beverage) {}
  cost() {
    return this.wrapped.cost() + 1;
  }
  description() {
    return \`\${this.wrapped.description()}, milk\`;
  }
}

class Mocha implements Beverage {
  constructor(private wrapped: Beverage) {}
  cost() {
    return this.wrapped.cost() + 2;
  }
  description() {
    return \`\${this.wrapped.description()}, mocha\`;
  }
}

const base = new Espresso();
const withMilk = new Milk(base);
const order = new Mocha(withMilk);
order.cost();
order.description();`,
  explanation:
    "Add toppings or extras by wrapping the base drink with optional cost and description layers.",
};