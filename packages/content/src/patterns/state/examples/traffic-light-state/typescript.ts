import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const typescript: PatternLanguageExample = {
  language: "typescript",
  title: "Traffic light state",
  code: "interface TrafficLightState {\n  next(light: TrafficLight): void;\n  name(): string;\n}\n\n\nclass TrafficLight {\n  private state: TrafficLightState;\n\n\n  constructor() {\n    this.state = new RedState();\n  }\n\n\n  setState(state: TrafficLightState): void {\n    this.state = state;\n  }\n\n\n  change(): void {\n    this.state.next(this);\n  }\n\n\n  getStateName(): string {\n    return this.state.name();\n  }\n}\n\n\nclass RedState implements TrafficLightState {\n  next(light: TrafficLight): void {\n    light.setState(new GreenState());\n  }\n\n\n  name(): string {\n    return \"Red\";\n  }\n}\n\n\nclass GreenState implements TrafficLightState {\n  next(light: TrafficLight): void {\n    light.setState(new YellowState());\n  }\n\n\n  name(): string {\n    return \"Green\";\n  }\n}\n\n\nclass YellowState implements TrafficLightState {\n  next(light: TrafficLight): void {\n    light.setState(new RedState());\n  }\n\n\n  name(): string {\n    return \"Yellow\";\n  }\n}\n\n\nconst light = new TrafficLight();\nconsole.log(light.getStateName());\nlight.change();\nconsole.log(light.getStateName());\nlight.change();\nconsole.log(light.getStateName());\nlight.change();\nconsole.log(light.getStateName());",
  explanation: "The traffic light switches behavior based on its current state, with each state object controlling the next transition.",
};
