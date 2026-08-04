import type { PatternLanguageExample } from "@atlas-patterns/schemas";

interface Storage {
  write(name: string, data: string): void;
}

class FileStorage implements Storage {
  write(name: string, data: string) {
    console.log(`store ${name}: ${data}`);
  }
}

class CompressionStorage implements Storage {
  constructor(private wrapped: Storage) {}
  write(name: string, data: string) {
    this.wrapped.write(name, `[compressed] ${data}`);
  }
}

class EncryptionStorage implements Storage {
  constructor(private wrapped: Storage) {}
  write(name: string, data: string) {
    this.wrapped.write(name, `[encrypted] ${data}`);
  }
}

export const typescript: PatternLanguageExample = {
  language: "typescript",
  title: "File storage",
  code: `interface Storage {
  write(name: string, data: string): void;
}

class FileStorage implements Storage {
  write(name: string, data: string) {
    console.log(\`store \${name}: \${data}\`);
  }
}

class CompressionStorage implements Storage {
  constructor(private wrapped: Storage) {}
  write(name: string, data: string) {
    this.wrapped.write(name, \`[compressed] \${data}\`);
  }
}

class EncryptionStorage implements Storage {
  constructor(private wrapped: Storage) {}
  write(name: string, data: string) {
    this.wrapped.write(name, \`[encrypted] \${data}\`);
  }
}

const storage = new CompressionStorage(new EncryptionStorage(new FileStorage()));
storage.write("a.txt", "hello world");`,
  explanation:
    "Layer compression and encryption around storage before the base write operation runs.",
};