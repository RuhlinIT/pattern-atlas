import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const java: PatternLanguageExample = {
  language: "java",
  title: "Java office factory",
  code: `interface Desk {
    String style();
    String material();
}

interface Chair {
    String style();
    String material();
}

interface Cabinet {
    String style();
    String material();
}

interface OfficeFactory {
    Desk createDesk();
    Chair createChair();
    Cabinet createCabinet();
}

class ModernOfficeFactory implements OfficeFactory {
    public Desk createDesk() {
        return new Desk() {
            public String style() { return "modern"; }
            public String material() { return "aluminum"; }
        };
    }

    public Chair createChair() {
        return new Chair() {
            public String style() { return "modern"; }
            public String material() { return "mesh"; }
        };
    }

    public Cabinet createCabinet() {
        return new Cabinet() {
            public String style() { return "modern"; }
            public String material() { return "steel"; }
        };
    }
}`,
  explanation:
    "The Java version creates a matching family of office objects with the same visual theme.",
};