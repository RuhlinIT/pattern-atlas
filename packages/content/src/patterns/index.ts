import { VisitorPattern } from './VisitorPattern';
import { StatePattern } from './StatePattern';
import { MediatorPattern } from './MediatorPattern';
import { IteratorPattern } from './IteratorPattern';
import { InterpreterPattern } from './InterpreterPattern';
import type { PatternRecord } from "@atlas-patterns/schemas";
import { DecoratorPattern } from "./DecoratorPattern";
import { StrategyPattern } from "./StrategyPattern";
import { ObserverPattern } from "./ObserverPattern";
import { FacadePattern } from "./FacadePattern";
import { adapterPattern } from "./adapter";
import { commandPattern } from "./command";
import { FactoryMethodPattern } from "./FactoryMethodPattern";
import { builderPattern } from "./builder";
// import { AbstractFactoryPattern } from "./AbstractFactoryPattern";
import { abstractFactoryPattern } from './abstract-factory';
import { PrototypePattern } from "./PrototypePattern";
import { SingletonPattern } from "./SingletonPattern";
import { bridgePattern } from "./bridge";
import { CompositePattern } from "./CompositePattern";
import { FlyweightPattern } from "./FlyweightPattern";
import { ProxyPattern } from "./ProxyPattern";
import { chainOfResponsibilityPattern } from "./chain-of-responsibility";
import { MementoPattern } from './MementoPattern';
import { TemplateMethodPattern } from './TemplateMethodPattern';

export {
  abstractFactoryPattern,
  adapterPattern,
  bridgePattern,
  builderPattern,
  chainOfResponsibilityPattern,
  commandPattern,
  CompositePattern,
  DecoratorPattern,
  FacadePattern,
  FactoryMethodPattern,
  FlyweightPattern,
  InterpreterPattern,
  IteratorPattern,
  MediatorPattern,
  MementoPattern,
  ObserverPattern,
  PrototypePattern,
  ProxyPattern,
  SingletonPattern,
  StatePattern,
  StrategyPattern,
  TemplateMethodPattern,
  VisitorPattern,
}

export const patterns: PatternRecord[] = [
  abstractFactoryPattern,
  adapterPattern,
  bridgePattern,
  builderPattern,
  chainOfResponsibilityPattern,
  commandPattern,
  CompositePattern,
  DecoratorPattern,
  FacadePattern,
  FactoryMethodPattern,
  FlyweightPattern,
  InterpreterPattern,
  IteratorPattern,
  MediatorPattern,
  MementoPattern,
  ObserverPattern,
  PrototypePattern,
  ProxyPattern,
  SingletonPattern,
  StatePattern,
  StrategyPattern,
  TemplateMethodPattern,
  VisitorPattern,
];
