import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const typescript: PatternLanguageExample = {
  language: "typescript",
  title: "Configuration assembly",
  code: `type AppConfig = {
  env: string;
  apiUrl: string;
  featureFlags: Record<string, boolean>;
};

class ConfigBuilder {
  private config: AppConfig = {
    env: "development",
    apiUrl: "",
    featureFlags: {},
  };

  env(env: string) {
    this.config.env = env;
    return this;
  }

  apiUrl(apiUrl: string) {
    this.config.apiUrl = apiUrl;
    return this;
  }

  flag(name: string, enabled: boolean) {
    this.config.featureFlags[name] = enabled;
    return this;
  }

  build() {
    return this.config;
  }
}

const config = new ConfigBuilder()
  .env("production")
  .apiUrl("https://api.example.com")
  .flag("newDashboard", true)
  .build();`,
  explanation:
    "Builder is useful for configuration because the final object often depends on many optional environment-specific values.",
};