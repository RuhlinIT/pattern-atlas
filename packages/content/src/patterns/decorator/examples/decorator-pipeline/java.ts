import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const java: PatternLanguageExample = {
  language: "java",
  title: "Pipeline decorator",
  code: `interface Processor {
    String process(String input);
}

class BaseProcessor implements Processor {
    public String process(String input) {
        return input;
    }
}

class CompressionProcessor implements Processor {
    private final Processor wrapped;
    CompressionProcessor(Processor wrapped) { this.wrapped = wrapped; }
    public String process(String input) {
        return wrapped.process("compressed:" + input);
    }
}
`,
  explanation: "Treat each decorator as a transformation step in a processing pipeline.",
};