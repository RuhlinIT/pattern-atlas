import { normalizeExamples } from "../../../normalize-examples";

import { typescript } from "./typescript";
import { java } from "./java";
import { python } from "./python";
import { angular } from "./angular";
import { react } from "./react";
import { reactNative } from "./react-native";
import { csharp } from "./csharp";
import { dotnet } from "./dotnet";

export const paymentProcessingExamples = normalizeExamples({
  "typescript": typescript,
  "java": java,
  "python": python,
  "angular": angular,
  "react": react,
  "react-native": reactNative,
  "csharp": csharp,
  "dotnet": dotnet,
});
