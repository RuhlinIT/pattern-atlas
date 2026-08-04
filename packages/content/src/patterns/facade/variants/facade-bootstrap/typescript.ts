import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const typescript = {
  language: "typescript",
  code: `type Logger = { info(message: string): void };
type ConfigService = { load(): Promise<void> };
type HealthCheckService = { verify(): Promise<void> };

class AppBootstrapFacade {
  constructor(
    private config: ConfigService,
    private health: HealthCheckService,
    private logger: Logger,
  ) {}

  async boot() {
    this.logger.info("Boot starting");
    await this.config.load();
    await this.health.verify();
    this.logger.info("Boot complete");
    return { status: "ready" };
  }
}
`,
} satisfies PatternLanguageExample;