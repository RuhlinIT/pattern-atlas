import { meta } from './meta';
import { scenarios } from './scenarios';

import { modernOfficeSetupExamples } from './examples/modern-office-setup';
import { uiComponentSuiteExamples } from './examples/ui-component-suite';
import { vehicleFamilyFactoryExamples } from './examples/vehicle-family-factory';

import type { PatternRecord } from '@atlas-patterns/schemas';

export const abstractFactoryPattern: PatternRecord = {
  ...meta,
  scenarios,
  scenarioExamples: {
    'modern-office-setup': modernOfficeSetupExamples,
    'ui-component-suite': uiComponentSuiteExamples,
    'vehicle-family-factory': vehicleFamilyFactoryExamples,
  },
};