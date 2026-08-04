import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const typescript = {
  language: "typescript",
  code: `type DeviceService = { ready(): Promise<boolean> };
type SessionService = { start(): Promise<void> };

type UIFlow = { open(): Promise<{ status: string }> };

class UiShellFacade implements UIFlow {
  constructor(private device: DeviceService, private session: SessionService) {}

  async open() {
    const deviceReady = await this.device.ready();
    if (!deviceReady) return { status: "blocked" };
    await this.session.start();
    return { status: "ready" };
  }
}
`,
} satisfies PatternLanguageExample;