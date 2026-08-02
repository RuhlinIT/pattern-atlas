import type { PatternRecord } from "@atlas-patterns/schemas";
import { meta } from "./meta";
import { scenarios } from "./scenarios";
import { normalizeExamples } from "../normalize-examples";

import { typescript as fileSystemCompositeTypescript } from "./examples/file-system-composite/typescript";
import { java as fileSystemCompositeJava } from "./examples/file-system-composite/java";
import { python as fileSystemCompositePython } from "./examples/file-system-composite/python";

import { typescript as menuCompositeTypescript } from "./examples/menu-composite/typescript";
import { react as menuCompositeReact } from "./examples/menu-composite/react";
import { angular as menuCompositeAngular } from "./examples/menu-composite/angular";

import { typescript as organizationChartCompositeTypescript } from "./examples/organization-chart-composite/typescript";
import { java as organizationChartCompositeJava } from "./examples/organization-chart-composite/java";

import { typescript as dashboardWidgetTreeTypescript } from "./examples/dashboard-widget-tree/typescript";
import { react as dashboardWidgetTreeReact } from "./examples/dashboard-widget-tree/react";

import { typescript as permissionGroupHierarchyTypescript } from "./examples/permission-group-hierarchy/typescript";
import { java as permissionGroupHierarchyJava } from "./examples/permission-group-hierarchy/java";

import { typescript as sceneGraphCompositeTypescript } from "./examples/scene-graph-composite/typescript";
import { react as sceneGraphCompositeReact } from "./examples/scene-graph-composite/react";

const fileSystemCompositeExamples = normalizeExamples({
  typescript: fileSystemCompositeTypescript,
  java: fileSystemCompositeJava,
  python: fileSystemCompositePython,
});

const menuCompositeExamples = normalizeExamples({
  typescript: menuCompositeTypescript,
  react: menuCompositeReact,
  angular: menuCompositeAngular,
});

const organizationChartCompositeExamples = normalizeExamples({
  typescript: organizationChartCompositeTypescript,
  java: organizationChartCompositeJava,
});

const dashboardWidgetTreeExamples = normalizeExamples({
  typescript: dashboardWidgetTreeTypescript,
  react: dashboardWidgetTreeReact,
});

const permissionGroupHierarchyExamples = normalizeExamples({
  typescript: permissionGroupHierarchyTypescript,
  java: permissionGroupHierarchyJava,
});

const sceneGraphCompositeExamples = normalizeExamples({
  typescript: sceneGraphCompositeTypescript,
  react: sceneGraphCompositeReact,
});

export const compositePattern: PatternRecord = {
  ...meta,
  problem:
    "A system needs to treat individual objects and groups of objects uniformly, but the hierarchy becomes difficult to manage with separate code paths.",
  tradeoffs: [
    "Can make the design more abstract and harder to follow.",
    "May require careful handling of operations that only apply to some nodes in the tree.",
    "Makes recursive tree operations and client code much simpler.",
  ],
  platforms: ["web", "backend", "mobile", "ui kits", "cross-platform systems"],
  integrationNotes:
    "Composite is useful when a hierarchy of nested objects should expose a common interface, such as files and folders, menus and submenus, org charts, widget trees, or scene graphs.",
  scenarios,
  scenarioExamples: {
    "file-system-composite": fileSystemCompositeExamples,
    "menu-composite": menuCompositeExamples,
    "organization-chart-composite": organizationChartCompositeExamples,
    "dashboard-widget-tree": dashboardWidgetTreeExamples,
    "permission-group-hierarchy": permissionGroupHierarchyExamples,
    "scene-graph-composite": sceneGraphCompositeExamples,
  },
  variants: [
    {
      slug: "composite-transparent",
      title: "Transparent composite",
      stackArea: "backend",
      language: "typescript",
      summary:
        "Expose the same operations on both leaf and composite nodes so clients can treat every node identically.",
      intent:
        "Make the tree feel uniform to callers.",
      problem:
        "Client code becomes verbose when it must branch on node type everywhere.",
      solution:
        "Use a uniform interface across leaves and containers, even if some methods are no-ops for leaves.",
      dependencies: ["composite"],
      relatedVariants: ["composite-safe", "composite-iterable"],
      examplePatternSlugs: ["composite"],
      notes:
        "Good when simplicity of traversal matters more than strict separation of leaf and branch behavior.",
    },
    {
      slug: "composite-safe",
      title: "Safe composite",
      stackArea: "frontend",
      language: "java",
      summary:
        "Keep child-management operations only on composite nodes so leaves stay simpler and safer.",
      intent:
        "Avoid exposing meaningless tree operations on leaf nodes.",
      problem:
        "A fully uniform API can make leaf objects look like containers even when they are not.",
      solution:
        "Limit child manipulation to composite nodes while keeping shared read-only behavior common.",
      dependencies: ["composite"],
      relatedVariants: ["composite-transparent", "composite-iterable"],
      examplePatternSlugs: ["composite"],
      notes:
        "Useful when you want clearer boundaries between leaves and branches.",
    },
    {
      slug: "composite-iterable",
      title: "Iterable composite",
      stackArea: "integration",
      language: "typescript",
      summary:
        "Traverse composite trees through iteration so callers can process all nodes without writing recursion themselves.",
      intent:
        "Make tree traversal simple and reusable.",
      problem:
        "Recursive traversal code is often duplicated across features.",
      solution:
        "Expose an iterator or generator that walks the composite tree in a consistent order.",
      dependencies: ["composite"],
      relatedVariants: ["composite-transparent", "composite-safe"],
      examplePatternSlugs: ["composite"],
      notes:
        "Useful for search, filtering, rendering, and batch operations on tree nodes.",
    },
  ],
  realWorldExamples: [
    {
      title: "File browsers",
      description:
        "File browsers often work with files and folders in the same tree structure, even though folders can contain more items.",
    },
    {
      title: "Menu systems",
      description:
        "UI menus frequently use nested submenus that behave like a single menu item from the client’s perspective.",
    },
    {
      title: "Org charts",
      description:
        "Organizations commonly model employees and managers in a hierarchy where managers contain subordinate nodes.",
    },
  ],
};