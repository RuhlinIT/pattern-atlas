import type { PatternRecord } from "@atlas-patterns/schemas";
import { DecoratorPattern } from "./DecoratorPattern";
import { StrategyPattern } from "./StrategyPattern";
import { ObserverPattern } from "./ObserverPattern";
import { FacadePattern } from "./FacadePattern";
import { AdapterPattern } from "./AdapterPattern";
import { CommandPattern } from "./CommandPattern";
import { FactoryMethodPattern } from "./FactoryMethodPattern";
import { BuilderPattern } from "./BuilderPattern";
import { AbstractFactoryPattern } from "./AbstractFactoryPattern";

export {
  AbstractFactoryPattern,
  AdapterPattern,
  BuilderPattern,
  DecoratorPattern,
  StrategyPattern,
  ObserverPattern,
  FacadePattern,
  CommandPattern,
  FactoryMethodPattern,
}

export const patterns: PatternRecord[] = [
  AbstractFactoryPattern,
  AdapterPattern,
  BuilderPattern,
  StrategyPattern,
  DecoratorPattern,
  ObserverPattern,
  FacadePattern,
  CommandPattern,
  FactoryMethodPattern
];
