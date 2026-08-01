import type { PatternLanguage, PatternLanguageExample } from "@atlas-patterns/schemas";
import { normalizeExamples } from "../../normalize-examples";

import { angular } from "./angular";
import { csharp } from "./csharp";
import { dotnet } from "./dotnet";
import { java } from "./java";
import { python } from "./python";
import { reactNative } from "./react-native";
import { react } from "./react";
import { typescript } from "./typescript";

export const paymentGatewayIntegrationExamples = normalizeExamples({
  angular,
  csharp,
  dotnet,
  java,
  python,
  "react-native": reactNative,
  react,
  typescript,
});