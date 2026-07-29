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
];
