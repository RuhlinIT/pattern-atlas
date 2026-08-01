import { VisitorPattern } from './VisitorPattern';
import { StatePattern } from './StatePattern';
import { MediatorPattern } from './MediatorPattern';
import { iteratorPattern } from './iterator';
import { interpreterPattern } from './interpreter';
import type { PatternRecord } from "@atlas-patterns/schemas";
import { decoratorPattern } from "./decorator";
import { StrategyPattern } from "./StrategyPattern";
import { ObserverPattern } from "./ObserverPattern";
import { facadePattern } from "./facade";
import { adapterPattern } from "./adapter";
import { commandPattern } from "./command";
import { factoryMethodPattern } from "./factory-method";
import { builderPattern } from "./builder";
// import { AbstractFactoryPattern } from "./AbstractFactoryPattern";
import { abstractFactoryPattern } from './abstract-factory';
import { PrototypePattern } from "./PrototypePattern";
import { SingletonPattern } from "./SingletonPattern";
import { bridgePattern } from "./bridge";
import { compositePattern } from "./composite";
import { flyweightPattern } from "./flyweight";
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
  compositePattern,
  decoratorPattern,
  facadePattern,
  factoryMethodPattern,
  flyweightPattern,
  interpreterPattern,
  iteratorPattern,
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
  compositePattern,
  decoratorPattern,
  facadePattern,
  factoryMethodPattern,
  flyweightPattern,
  interpreterPattern,
  iteratorPattern,
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
