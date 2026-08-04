import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const java = {
  language: "java",
  code: `class AppBootstrapFacade {
  private final ConfigService config;
  private final HealthCheckService health;
  private final Logger logger;

  AppBootstrapFacade(ConfigService config, HealthCheckService health, Logger logger) {
    this.config = config;
    this.health = health;
    this.logger = logger;
  }

  BootResult boot() {
    logger.info("Boot starting");
    config.load();
    health.verify();
    logger.info("Boot complete");
    return new BootResult("ready");
  }
}
`,
} satisfies PatternLanguageExample;