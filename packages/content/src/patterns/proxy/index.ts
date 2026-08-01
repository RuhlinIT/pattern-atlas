import type { PatternRecord } from "@atlas-patterns/schemas";

import { meta } from "./meta";
import { scenarios } from "./scenarios";

import { virtualImageProxyExamples } from "./examples/virtual-image-proxy";
import { accessControlProxyExamples } from "./examples/access-control-proxy";
import { remoteServiceProxyExamples } from "./examples/remote-service-proxy";

export const proxyPattern: PatternRecord = {
  ...meta,
  scenarios,
  scenarioExamples: {
    "virtual-image-proxy": virtualImageProxyExamples,
    "access-control-proxy": accessControlProxyExamples,
    "remote-service-proxy": remoteServiceProxyExamples,
  },
  realWorldExamples: [
  {
    "title": "Lazy-loaded media",
    "description": "Apps often defer loading large images or videos until a user actually views them."
  },
  {
    "title": "Security gateways",
    "description": "APIs and internal systems frequently use proxy layers to verify permissions before granting access."
  },
  {
    "title": "Remote API wrappers",
    "description": "Client libraries often act as proxies around remote services to hide networking details from callers."
  }
],
  tradeoffs: [
  "Adds another layer of indirection",
  "Can make the design more complex when the extra control is unnecessary"
],
  platforms: [
  "Web",
  "Backend",
  "Mobile",
  "UI kits",
  "Cross-platform systems"
],
  integrationNotes: "Proxy is useful for lazy loading, access control, caching, logging, and remote service wrappers.",
  problem: "A client needs to interact with an object indirectly because the real object may be expensive, sensitive, or remote.",
};
