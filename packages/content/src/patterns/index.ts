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
import { PrototypePattern } from "./PrototypePattern";
import { SingletonPattern } from "./SingletonPattern";
import { BridgePattern } from "./BridgePattern";
import { CompositePattern } from "./CompositePattern";
import { FlyweightPattern } from "./FlyweightPattern";

export {
  AbstractFactoryPattern,
  AdapterPattern,
  BridgePattern,
  BuilderPattern,
  CompositePattern,
  DecoratorPattern,
  FlyweightPattern,
  StrategyPattern,
  ObserverPattern,
  FacadePattern,
  CommandPattern,
  FactoryMethodPattern,
  PrototypePattern,
  SingletonPattern,
}

export const patterns: PatternRecord[] = [
  AbstractFactoryPattern,
  AdapterPattern,
  BridgePattern,
  BuilderPattern,
  CompositePattern,
  StrategyPattern,
  DecoratorPattern,
  FlyweightPattern,
  ObserverPattern,
  FacadePattern,
  CommandPattern,
  FactoryMethodPattern,
  PrototypePattern,
  SingletonPattern,
];
