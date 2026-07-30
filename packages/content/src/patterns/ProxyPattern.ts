import type { PatternRecord } from "@atlas-patterns/schemas";
import { virtualImageProxyExamples } from "./proxy/virtualImageProxyExamples";
import { accessControlProxyExamples } from "./proxy/accessControlProxyExamples";
import { remoteServiceProxyExamples } from "./proxy/remoteServiceProxyExamples";

export const ProxyPattern: PatternRecord = {
  slug: "proxy",
  name: "Proxy",
  category: "Structural",
  problem:
    "A client needs to interact with an object indirectly because the real object may be expensive, sensitive, or remote.",
  intent:
    "Provide a surrogate or placeholder for another object to control access to it.",
  tradeoffs: [
    "Adds another layer of indirection",
    "Can make the design more complex when the extra control is unnecessary",
  ],
  languages: [
    "TypeScript",
    "Java",
    "Python",
    "Angular",
    "React",
    "React_Native",
    "C#",
    ".NET",
  ],
  platforms: ["Web", "Backend", "Mobile", "UI kits", "Cross-platform systems"],
  integrationNotes:
    "Proxy is useful for lazy loading, access control, caching, logging, and remote service wrappers.",
  scenarios: [
    {
      slug: "virtual-image-proxy",
      title: "Virtual image proxy",
      summary:
        "An image viewer delays loading high-resolution images until they are actually displayed.",
      languageExamples: virtualImageProxyExamples,
    },
    {
      slug: "access-control-proxy",
      title: "Access control proxy",
      summary:
        "A secure resource proxy checks permissions before allowing sensitive operations.",
      languageExamples: accessControlProxyExamples,
    },
    {
      slug: "remote-service-proxy",
      title: "Remote service proxy",
      summary:
        "A proxy wraps a remote service call so the client can interact with it like a local object.",
      languageExamples: remoteServiceProxyExamples,
    },
  ],
  realWorldExamples: [
    {
      title: "Lazy-loaded media",
      description:
        "Apps often defer loading large images or videos until a user actually views them.",
    },
    {
      title: "Security gateways",
      description:
        "APIs and internal systems frequently use proxy layers to verify permissions before granting access.",
    },
    {
      title: "Remote API wrappers",
      description:
        "Client libraries often act as proxies around remote services to hide networking details from callers.",
    },
  ],
};
