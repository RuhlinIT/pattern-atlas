import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const java: PatternLanguageExample = {
  language: "java",
  title: "Configuration assembly",
  code: `class AppConfig {
    String env = "development";
    String apiUrl;
    java.util.Map<String, Boolean> featureFlags = new java.util.HashMap<>();
}

class ConfigBuilder {
    private final AppConfig config = new AppConfig();

    ConfigBuilder env(String env) {
        config.env = env;
        return this;
    }

    ConfigBuilder apiUrl(String apiUrl) {
        config.apiUrl = apiUrl;
        return this;
    }

    ConfigBuilder flag(String name, boolean enabled) {
        config.featureFlags.put(name, enabled);
        return this;
    }

    AppConfig build() {
        return config;
    }
}

AppConfig config = new ConfigBuilder()
    .env("production")
    .apiUrl("https://api.example.com")
    .flag("newDashboard", true)
    .build();`,
  explanation:
    "A builder is a natural fit for configuration because settings are often assembled from multiple sources.",
};