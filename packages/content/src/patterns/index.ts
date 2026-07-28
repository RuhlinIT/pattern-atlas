import type { PatternRecord } from "@atlas-patterns/schemas";
import { DecoratorPattern } from "./DecoratorPattern";
import { StrategyPattern } from "./StrategyPattern";
import { ObserverPattern } from "./ObserverPattern";
import { FacadePattern } from "./FacadePattern";
import { AdapterPattern } from "./AdapterPattern";
import { CommandPattern } from "./CommandPattern";

export {
  AdapterPattern,
  DecoratorPattern,
  StrategyPattern,
  ObserverPattern,
  FacadePattern,
  CommandPattern,
} from "./index";

export const patterns: PatternRecord[] = [
  AdapterPattern,
  StrategyPattern,
  DecoratorPattern,
  ObserverPattern,
  FacadePattern,
  CommandPattern,
];
