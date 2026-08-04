import type { PatternLanguageExample } from "@atlas-patterns/schemas";

interface ButtonLike {
  render(): string;
}

class BaseButton implements ButtonLike {
  render() {
    return "button";
  }
}

class AccessibleButton implements ButtonLike {
  constructor(private wrapped: ButtonLike) {}
  render() {
    return `${this.wrapped.render()} aria-label="submit"`;
  }
}

export const typescript: PatternLanguageExample = {
  language: "typescript",
  title: "UI accessibility enhancement",
  code: `interface ButtonLike {
  render(): string;
}

class BaseButton implements ButtonLike {
  render() {
    return "button";
  }
}

class AccessibleButton implements ButtonLike {
  constructor(private wrapped: ButtonLike) {}
  render() {
    return \`\${this.wrapped.render()} aria-label=\"submit\"\`;
  }
}

new AccessibleButton(new BaseButton()).render();`,
  explanation:
    "Add accessibility metadata and behavior without changing the underlying UI component.",
};