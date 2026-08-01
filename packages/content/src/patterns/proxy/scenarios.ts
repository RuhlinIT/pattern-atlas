import type { PatternScenario } from "@atlas-patterns/schemas";

export const scenarios: readonly PatternScenario[] = [
  {
    "slug": "virtual-image-proxy",
    "title": "Virtual image proxy",
    "summary": "An image viewer delays loading high-resolution images until they are actually displayed."
  },
  {
    "slug": "access-control-proxy",
    "title": "Access control proxy",
    "summary": "A secure resource proxy checks permissions before allowing sensitive operations."
  },
  {
    "slug": "remote-service-proxy",
    "title": "Remote service proxy",
    "summary": "A proxy wraps a remote service call so the client can interact with it like a local object."
  }
];
