import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const applicationConfigSingletonExamples: PatternLanguageExample[] = [
  {
    language: "TypeScript",
    code: `class AppConfig {
  private static instance: AppConfig;


  private constructor(
    public readonly appName: string,
    public readonly environment: string,
  ) {}


  static getInstance(): AppConfig {
    if (!AppConfig.instance) {
      AppConfig.instance = new AppConfig("Atlas App", "production");
    }


    return AppConfig.instance;
  }
}


const configA = AppConfig.getInstance();
const configB = AppConfig.getInstance();


console.log(configA === configB);
console.log(configA.appName);`,
    explanation:
      "The config singleton ensures the application reads one shared settings instance instead of creating a new configuration object everywhere.",
  },
  {
    language: "Java",
    code: `class AppConfig {
    private static AppConfig instance;


    private final String appName;
    private final String environment;


    private AppConfig(String appName, String environment) {
        this.appName = appName;
        this.environment = environment;
    }


    public static AppConfig getInstance() {
        if (instance == null) {
            instance = new AppConfig("Atlas App", "production");
        }


        return instance;
    }


    public String getAppName() {
        return appName;
    }


    public String getEnvironment() {
        return environment;
    }
}


AppConfig configA = AppConfig.getInstance();
AppConfig configB = AppConfig.getInstance();


System.out.println(configA == configB);
System.out.println(configA.getAppName());`,
    explanation:
      "The application config singleton guarantees one shared settings object for the entire runtime.",
  },
  {
    language: "Python",
    code: `class AppConfig:
    _instance = None


    def __new__(cls):
        if cls._instance is None:
            cls._instance = super().__new__(cls)
            cls._instance.app_name = "Atlas App"
            cls._instance.environment = "production"
        return cls._instance


config_a = AppConfig()
config_b = AppConfig()


print(config_a is config_b)
print(config_a.app_name)`,
    explanation:
      "The config singleton provides one shared settings instance so the app does not repeatedly rebuild configuration state.",
  },
  {
    language: "Angular",
    code: `class AppConfig {
  private static instance: AppConfig;


  private constructor(
    public readonly appName: string,
    public readonly environment: string,
  ) {}


  static getInstance(): AppConfig {
    if (!AppConfig.instance) {
      AppConfig.instance = new AppConfig("Atlas App", "production");
    }


    return AppConfig.instance;
  }
}


const configA = AppConfig.getInstance();
const configB = AppConfig.getInstance();


console.log(configA === configB);
console.log(configA.appName);`,
    explanation:
      "The Angular example uses a singleton configuration object so the same settings are shared consistently across the app.",
  },
  {
    language: "React",
    code: `import React, { useMemo } from "react";


class AppConfig {
  private static instance: AppConfig;


  private constructor(
    public readonly appName: string,
    public readonly environment: string,
  ) {}


  static getInstance(): AppConfig {
    if (!AppConfig.instance) {
      AppConfig.instance = new AppConfig("Atlas App", "production");
    }


    return AppConfig.instance;
  }
}


function ConfigPreview() {
  const config = useMemo(() => AppConfig.getInstance(), []);


  return (
    <div>
      <p>{config.appName}</p>
      <p>{config.environment}</p>
    </div>
  );
}


export function App() {
  return (
    <main>
      <h1>Application Config</h1>
      <ConfigPreview />
    </main>
  );
}`,
    explanation:
      "The React example accesses one shared config instance so components can read the same environment values without re-creating the object.",
  },
  {
    language: "React_Native",
    code: `import React, { useMemo } from "react";
import { SafeAreaView, Text, View } from "react-native";


class AppConfig {
  private static instance: AppConfig;


  private constructor(
    public readonly appName: string,
    public readonly environment: string,
  ) {}


  static getInstance(): AppConfig {
    if (!AppConfig.instance) {
      AppConfig.instance = new AppConfig("Atlas App", "production");
    }


    return AppConfig.instance;
  }
}


function ConfigPreview() {
  const config = useMemo(() => AppConfig.getInstance(), []);


  return (
    <View>
      <Text>{config.appName}</Text>
      <Text>{config.environment}</Text>
    </View>
  );
}


export function App() {
  return (
    <SafeAreaView style={{ flex: 1, justifyContent: "center", padding: 24 }}>
      <View style={{ gap: 16 }}>
        <Text style={{ fontSize: 24, fontWeight: "600" }}>Application Config</Text>
        <ConfigPreview />
      </View>
    </SafeAreaView>
  );
}`,
    explanation:
      "The React Native example uses a singleton configuration object to keep shared settings available throughout the app.",
  },
  {
    language: "C#",
    code: `using System;


public class AppConfig
{
    private static AppConfig _instance;


    public string AppName { get; }
    public string Environment { get; }


    private AppConfig(string appName, string environment)
    {
        AppName = appName;
        Environment = environment;
    }


    public static AppConfig GetInstance()
    {
        if (_instance == null)
        {
            _instance = new AppConfig("Atlas App", "production");
        }


        return _instance;
    }
}


var configA = AppConfig.GetInstance();
var configB = AppConfig.GetInstance();


Console.WriteLine(configA == configB);
Console.WriteLine(configA.AppName);`,
    explanation:
      "The config singleton ensures the application only has one shared settings instance at a time.",
  },
  {
    language: ".NET",
    code: `using System;
using Microsoft.Extensions.DependencyInjection;


public class AppConfig
{
    private static AppConfig _instance;


    public string AppName { get; }
    public string Environment { get; }


    private AppConfig(string appName, string environment)
    {
        AppName = appName;
        Environment = environment;
    }


    public static AppConfig GetInstance()
    {
        if (_instance == null)
        {
            _instance = new AppConfig("Atlas App", "production");
        }


        return _instance;
    }
}


var services = new ServiceCollection();
services.AddSingleton(AppConfig.GetInstance());


var provider = services.BuildServiceProvider();
var configA = provider.GetRequiredService<AppConfig>();
var configB = provider.GetRequiredService<AppConfig>();


Console.WriteLine(configA == configB);
Console.WriteLine(configA.AppName);`,
    explanation:
      "The .NET example uses one shared configuration object so the runtime resolves the same instance wherever it is needed.",
  },
];
