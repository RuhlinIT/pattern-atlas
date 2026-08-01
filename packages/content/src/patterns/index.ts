import type { PatternRecord } from "@atlas-patterns/schemas";
import { adapterPattern } from "./adapter";
import { builderPattern } from "./builder";
import { commandPattern } from "./command";
import { decoratorPattern } from "./decorator";
import { facadePattern } from "./facade";
import { factoryMethodPattern } from "./factory-method";
import { interpreterPattern } from './interpreter';
import { iteratorPattern } from './iterator';
import { mediatorPattern } from './mediator';
import { observerPattern } from "./observer";
import { statePattern } from './state';
import { strategyPattern } from "./strategy";
import { VisitorPattern } from './VisitorPattern';
// import { AbstractFactoryPattern } from "./AbstractFactoryPattern";
import { abstractFactoryPattern } from './abstract-factory';
import { bridgePattern } from "./bridge";
import { chainOfResponsibilityPattern } from "./chain-of-responsibility";
import { compositePattern } from "./composite";
import { flyweightPattern } from "./flyweight";
import { mementoPattern } from './memento';
import { prototypePattern } from "./prototype";
import { proxyPattern } from "./proxy";
import { singletonPattern } from "./singleton";
import { templateMethodPattern } from './template-method';

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
  mediatorPattern,
  mementoPattern,
  observerPattern,
  prototypePattern,
  proxyPattern,
  singletonPattern,
  statePattern,
  strategyPattern,
  templateMethodPattern,
  VisitorPattern
};

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
  mediatorPattern,
  mementoPattern,
  observerPattern,
  prototypePattern,
  proxyPattern,
  singletonPattern,
  statePattern,
  strategyPattern,
  templateMethodPattern,
  VisitorPattern,
];
