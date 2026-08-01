import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const java: PatternLanguageExample = {
  language: "java",
  title: "Application config singleton",
  code: "class AppConfig {\n    private static AppConfig instance;\n\n\n    private final String appName;\n    private final String environment;\n\n\n    private AppConfig(String appName, String environment) {\n        this.appName = appName;\n        this.environment = environment;\n    }\n\n\n    public static AppConfig getInstance() {\n        if (instance == null) {\n            instance = new AppConfig(\"Atlas App\", \"production\");\n        }\n\n\n        return instance;\n    }\n\n\n    public String getAppName() {\n        return appName;\n    }\n\n\n    public String getEnvironment() {\n        return environment;\n    }\n}\n\n\nAppConfig configA = AppConfig.getInstance();\nAppConfig configB = AppConfig.getInstance();\n\n\nSystem.out.println(configA == configB);\nSystem.out.println(configA.getAppName());",
  explanation: "The application config singleton guarantees one shared settings object for the entire runtime.",
};
