import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const loggerSingletonExamples: PatternLanguageExample[] = [
  {
    language: "TypeScript",
    code: `class Logger {
  private static instance: Logger;


  private constructor() {}


  static getInstance(): Logger {
    if (!Logger.instance) {
      Logger.instance = new Logger();
    }


    return Logger.instance;
  }


  log(message: string): void {
    console.log(\`LOG: \${message}\`);
  }
}


const loggerA = Logger.getInstance();
const loggerB = Logger.getInstance();


loggerA.log("Application started");
console.log(loggerA === loggerB);`,
    explanation:
      "The logger singleton provides one shared logging instance so every part of the app writes through the same output path.",
  },
  {
    language: "Java",
    code: `class Logger {
    private static Logger instance;


    private Logger() {}


    public static Logger getInstance() {
        if (instance == null) {
            instance = new Logger();
        }


        return instance;
    }


    public void log(String message) {
        System.out.println("LOG: " + message);
    }
}


Logger loggerA = Logger.getInstance();
Logger loggerB = Logger.getInstance();


loggerA.log("Application started");
System.out.println(loggerA == loggerB);`,
    explanation:
      "The logger singleton ensures every component uses the same logging object and formatting behavior.",
  },
  {
    language: "Python",
    code: `class Logger:
    _instance = None


    def __new__(cls):
        if cls._instance is None:
            cls._instance = super().__new__(cls)
        return cls._instance


    def log(self, message: str) -> None:
        print(f"LOG: {message}")


logger_a = Logger()
logger_b = Logger()


logger_a.log("Application started")
print(logger_a is logger_b)`,
    explanation:
      "The logger singleton keeps logging centralized so the application does not create separate logger objects in each module.",
  },
  {
    language: "Angular",
    code: `class Logger {
  private static instance: Logger;


  private constructor() {}


  static getInstance(): Logger {
    if (!Logger.instance) {
      Logger.instance = new Logger();
    }


    return Logger.instance;
  }


  log(message: string): void {
    console.log(\`LOG: \${message}\`);
  }
}


const loggerA = Logger.getInstance();
const loggerB = Logger.getInstance();


loggerA.log("Application started");
console.log(loggerA === loggerB);`,
    explanation:
      "The Angular example uses a singleton logger so all features emit messages through one shared service-like object.",
  },
  {
    language: "React",
    code: `import React, { useMemo } from "react";


class Logger {
  private static instance: Logger;


  private constructor() {}


  static getInstance(): Logger {
    if (!Logger.instance) {
      Logger.instance = new Logger();
    }


    return Logger.instance;
  }


  log(message: string): void {
    console.log(\`LOG: \${message}\`);
  }
}


function LoggerPreview() {
  const logger = useMemo(() => Logger.getInstance(), []);


  return <button onClick={() => logger.log("Button clicked")}>Log Event</button>;
}


export function App() {
  return (
    <main>
      <h1>Logger</h1>
      <LoggerPreview />
    </main>
  );
}`,
    explanation:
      "The React example uses one shared logger instance so UI events can be recorded consistently.",
  },
  {
    language: "React_Native",
    code: `import React, { useMemo } from "react";
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";


class Logger {
  private static instance: Logger;


  private constructor() {}


  static getInstance(): Logger {
    if (!Logger.instance) {
      Logger.instance = new Logger();
    }


    return Logger.instance;
  }


  log(message: string): void {
    console.log(\`LOG: \${message}\`);
  }
}


function LoggerPreview() {
  const logger = useMemo(() => Logger.getInstance(), []);


  return (
    <TouchableOpacity onPress={() => logger.log("Mobile button tapped")}>
      <Text>Log Event</Text>
    </TouchableOpacity>
  );
}


export function App() {
  return (
    <SafeAreaView style={{ flex: 1, justifyContent: "center", padding: 24 }}>
      <View style={{ gap: 16 }}>
        <Text style={{ fontSize: 24, fontWeight: "600" }}>Logger</Text>
        <LoggerPreview />
      </View>
    </SafeAreaView>
  );
}`,
    explanation:
      "The React Native example routes events through one shared logger instance so the mobile app keeps logging behavior consistent.",
  },
  {
    language: "C#",
    code: `using System;


public class Logger
{
    private static Logger _instance;


    private Logger() {}


    public static Logger GetInstance()
    {
        if (_instance == null)
        {
            _instance = new Logger();
        }


        return _instance;
    }


    public void Log(string message)
    {
        Console.WriteLine($"LOG: {message}");
    }
}


var loggerA = Logger.GetInstance();
var loggerB = Logger.GetInstance();


loggerA.Log("Application started");
Console.WriteLine(loggerA == loggerB);`,
    explanation:
      "The logger singleton centralizes output so one shared instance handles all log messages.",
  },
  {
    language: ".NET",
    code: `using System;
using Microsoft.Extensions.DependencyInjection;


public class Logger
{
    private static Logger _instance;


    private Logger() {}


    public static Logger GetInstance()
    {
        if (_instance == null)
        {
            _instance = new Logger();
        }


        return _instance;
    }


    public void Log(string message)
    {
        Console.WriteLine($"LOG: {message}");
    }
}


var services = new ServiceCollection();
services.AddSingleton(Logger.GetInstance());


var provider = services.BuildServiceProvider();
var loggerA = provider.GetRequiredService<Logger>();
var loggerB = provider.GetRequiredService<Logger>();


loggerA.Log("Application started");
Console.WriteLine(loggerA == loggerB);`,
    explanation:
      "The .NET example resolves a single logger instance from dependency injection so the whole application shares one logging pipeline.",
  },
];
