import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const loggerTransportExamples: PatternLanguageExample[] = [
  {
    language: "TypeScript",
    code: `interface LoggerTransport {
                        write(message: string): void;
                    }


                    class ConsoleTransport implements LoggerTransport {
                        write(message: string): void {
                            console.log(\`[console] \${message}\`);
                        }
                    }


                    class FileTransport implements LoggerTransport {
                        write(message: string): void {
                            console.log(\`[file] \${message}\`);
                        }
                    }


                    abstract class Logger {
                        abstract createTransport(): LoggerTransport;


                        log(message: string): void {
                            const transport = this.createTransport();
                            transport.write(message);
                        }
                    }


                    class DevelopmentLogger extends Logger {
                        createTransport(): LoggerTransport {
                            return new ConsoleTransport();
                        }
                    }


                    class BatchJobLogger extends Logger {
                        createTransport(): LoggerTransport {
                            return new FileTransport();
                        }
                    }


                    const logger: Logger = new DevelopmentLogger();
                    logger.log("Application started");`,
    explanation:
      "The logger keeps the logging workflow consistent, while concrete logger types choose the transport through the factory method.",
  },
  {
    language: "Java",
    code: `interface LoggerTransport {
                        void write(String message);
                    }


                    class ConsoleTransport implements LoggerTransport {
                        public void write(String message) {
                            System.out.println("[console] " + message);
                        }
                    }


                    class FileTransport implements LoggerTransport {
                        public void write(String message) {
                            System.out.println("[file] " + message);
                        }
                    }


                    abstract class Logger {
                        abstract LoggerTransport createTransport();


                        public void log(String message) {
                            LoggerTransport transport = createTransport();
                            transport.write(message);
                        }
                    }


                    class DevelopmentLogger extends Logger {
                        LoggerTransport createTransport() {
                            return new ConsoleTransport();
                        }
                    }


                    class BatchJobLogger extends Logger {
                        LoggerTransport createTransport() {
                            return new FileTransport();
                        }
                    }


                    Logger logger = new DevelopmentLogger();
                    logger.log("Application started");`,
    explanation:
      "The factory method separates the logging workflow from the decision about which concrete transport should be instantiated.",
  },
  {
    language: "Python",
    code: `from abc import ABC, abstractmethod


                    class LoggerTransport(ABC):
                        @abstractmethod
                        def write(self, message: str) -> None:
                            pass


                    class ConsoleTransport(LoggerTransport):
                        def write(self, message: str) -> None:
                            print(f"[console] {message}")


                    class FileTransport(LoggerTransport):
                        def write(self, message: str) -> None:
                            print(f"[file] {message}")


                    class Logger(ABC):
                        @abstractmethod
                        def create_transport(self) -> LoggerTransport:
                            pass


                        def log(self, message: str) -> None:
                            transport = self.create_transport()
                            transport.write(message)


                    class DevelopmentLogger(Logger):
                        def create_transport(self) -> LoggerTransport:
                            return ConsoleTransport()


                    class BatchJobLogger(Logger):
                        def create_transport(self) -> LoggerTransport:
                            return FileTransport()


                    logger: Logger = DevelopmentLogger()
                    logger.log("Application started")`,
    explanation:
      "The logger defines the common logging process, while subclasses decide which transport object should be created for each context.",
  },
  {
    language: "Angular",
    code: `import { Injectable } from '@angular/core';


                    interface LoggerTransport {
                        write(message: string): void;
                    }


                    class ConsoleTransport implements LoggerTransport {
                        write(message: string): void {
                            console.log(\`[console] \${message}\`);
                        }
                    }


                    class FileTransport implements LoggerTransport {
                        write(message: string): void {
                            console.log(\`[file] \${message}\`);
                        }
                    }


                    @Injectable({ providedIn: 'root' })
                    abstract class Logger {
                        abstract createTransport(): LoggerTransport;


                        log(message: string): void {
                            const transport = this.createTransport();
                            transport.write(message);
                        }
                    }


                    @Injectable({ providedIn: 'root' })
                    class DevelopmentLogger extends Logger {
                        createTransport(): LoggerTransport {
                            return new ConsoleTransport();
                        }
                    }


                    @Injectable({ providedIn: 'root' })
                    class BatchJobLogger extends Logger {
                        createTransport(): LoggerTransport {
                            return new FileTransport();
                        }
                    }`,
    explanation:
      "The Angular logger service preserves one logging flow while environment-specific services choose the concrete transport to create.",
  },
  {
    language: "React",
    code: `import React, { useMemo } from "react";

interface LoggerTransport {
  write(message: string): void;
}

class ConsoleTransport implements LoggerTransport {
  write(message: string): void {
    console.log(\`[console] \${message}\`);
  }
}

class FileTransport implements LoggerTransport {
  write(message: string): void {
    console.log(\`[file] \${message}\`);
  }
}

abstract class Logger {
  abstract createTransport(): LoggerTransport;

  log(message: string): void {
    const transport = this.createTransport();
    transport.write(message);
  }
}

class DevelopmentLogger extends Logger {
  createTransport(): LoggerTransport {
    return new ConsoleTransport();
  }
}

class BatchJobLogger extends Logger {
  createTransport(): LoggerTransport {
    return new FileTransport();
  }
}

function LogButton({ logger }: { logger: Logger }) {
  return <button onClick={() => logger.log("Application started")}>Log event</button>;
}

export function App() {
  const logger = useMemo(() => new DevelopmentLogger(), []);

  return (
    <main>
      <h1>Logger Transport</h1>
      <LogButton logger={logger} />
    </main>
  );
}`,
    explanation:
      "The React example keeps the logging workflow in the base class while the concrete logger selects the transport through the factory method.",
  },
  {
    language: "React_Native",
    code: `import React, { useMemo } from "react";
import { Pressable, SafeAreaView, Text, View } from "react-native";

interface LoggerTransport {
  write(message: string): void;
}

class ConsoleTransport implements LoggerTransport {
  write(message: string): void {
    console.log(\`[console] \${message}\`);
  }
}

class FileTransport implements LoggerTransport {
  write(message: string): void {
    console.log(\`[file] \${message}\`);
  }
}

abstract class Logger {
  abstract createTransport(): LoggerTransport;

  log(message: string): void {
    const transport = this.createTransport();
    transport.write(message);
  }
}

class DevelopmentLogger extends Logger {
  createTransport(): LoggerTransport {
    return new ConsoleTransport();
  }
}

class BatchJobLogger extends Logger {
  createTransport(): LoggerTransport {
    return new FileTransport();
  }
}

function LogButton({ logger }: { logger: Logger }) {
  return (
    <Pressable
      onPress={() => logger.log("Application started")}
      style={{ padding: 12, backgroundColor: "#111827", borderRadius: 8 }}
    >
      <Text style={{ color: "#fff", textAlign: "center" }}>Log event</Text>
    </Pressable>
  );
}

export function App() {
  const logger = useMemo(() => new DevelopmentLogger(), []);

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: "center", padding: 24 }}>
      <View style={{ gap: 16 }}>
        <Text style={{ fontSize: 24, fontWeight: "600" }}>Logger Transport</Text>
        <LogButton logger={logger} />
      </View>
    </SafeAreaView>
  );
}`,
    explanation:
      "The React Native version uses the same factory method structure, but exposes logging through a mobile-friendly pressable control.",
  },
  {
    language: "C#",
    code: `using System;

public interface ILoggerTransport
{
    void Write(string message);
}

public class ConsoleTransport : ILoggerTransport
{
    public void Write(string message)
    {
        Console.WriteLine($"[console] {message}");
    }
}

public class FileTransport : ILoggerTransport
{
    public void Write(string message)
    {
        Console.WriteLine($"[file] {message}");
    }
}

public abstract class Logger
{
    public abstract ILoggerTransport CreateTransport();

    public void Log(string message)
    {
        var transport = CreateTransport();
        transport.Write(message);
    }
}

public class DevelopmentLogger : Logger
{
    public override ILoggerTransport CreateTransport()
    {
        return new ConsoleTransport();
    }
}

public class BatchJobLogger : Logger
{
    public override ILoggerTransport CreateTransport()
    {
        return new FileTransport();
    }
}

Logger logger = new DevelopmentLogger();
logger.Log("Application started");`,
    explanation:
      "The C# example keeps the logging process stable while subclasses decide whether the factory method returns console or file transport.",
  },
  {
    language: ".NET",
    code: `using System;
using Microsoft.Extensions.DependencyInjection;

public interface ILoggerTransport
{
    void Write(string message);
}

public class ConsoleTransport : ILoggerTransport
{
    public void Write(string message)
    {
        Console.WriteLine($"[console] {message}");
    }
}

public class FileTransport : ILoggerTransport
{
    public void Write(string message)
    {
        Console.WriteLine($"[file] {message}");
    }
}

public abstract class Logger
{
    public abstract ILoggerTransport CreateTransport();

    public void Log(string message)
    {
        var transport = CreateTransport();
        transport.Write(message);
    }
}

public class DevelopmentLogger : Logger
{
    public override ILoggerTransport CreateTransport()
    {
        return new ConsoleTransport();
    }
}

public class BatchJobLogger : Logger
{
    public override ILoggerTransport CreateTransport()
    {
        return new FileTransport();
    }
}

var services = new ServiceCollection();
services.AddSingleton<Logger, DevelopmentLogger>();

var provider = services.BuildServiceProvider();
var logger = provider.GetRequiredService<Logger>();
logger.Log("Application started");`,
    explanation:
      "The .NET version shows the same factory method pattern with dependency injection, so the logging workflow stays consistent while the transport choice is deferred to the concrete logger.",
  },
];
