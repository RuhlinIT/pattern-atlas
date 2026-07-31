import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const java: PatternLanguageExample = {
  language: "java",
  title: "Modern office setup",
  code: `interface Desk {
    String sitAt();
}

interface Chair {
    String sitOn();
}

interface Cabinet {
    String store();
}

interface OfficeFactory {
    Desk createDesk();
    Chair createChair();
    Cabinet createCabinet();
}

class ModernDesk implements Desk {
    public String sitAt() {
        return "Sitting at a glass desk";
    }
}

class ModernChair implements Chair {
    public String sitOn() {
        return "Sitting on an ergonomic mesh chair";
    }
}

class ModernCabinet implements Cabinet {
    public String store() {
        return "Storing files in a minimalist cabinet";
    }
}

class ClassicDesk implements Desk {
    public String sitAt() {
        return "Sitting at a wooden desk";
    }
}

class ClassicChair implements Chair {
    public String sitOn() {
        return "Sitting on a cushioned wooden chair";
    }
}

class ClassicCabinet implements Cabinet {
    public String store() {
        return "Storing files in a traditional cabinet";
    }
}

class ModernOfficeFactory implements OfficeFactory {
    public Desk createDesk() {
        return new ModernDesk();
    }

    public Chair createChair() {
        return new ModernChair();
    }

    public Cabinet createCabinet() {
        return new ModernCabinet();
    }
}

class ClassicOfficeFactory implements OfficeFactory {
    public Desk createDesk() {
        return new ClassicDesk();
    }

    public Chair createChair() {
        return new ClassicChair();
    }

    public Cabinet createCabinet() {
        return new ClassicCabinet();
    }
}

class OfficeSetup {
    private final OfficeFactory factory;

    public OfficeSetup(OfficeFactory factory) {
        this.factory = factory;
    }

    public String describe() {
        Desk desk = factory.createDesk();
        Chair chair = factory.createChair();
        Cabinet cabinet = factory.createCabinet();

        return desk.sitAt() + " | " + chair.sitOn() + " | " + cabinet.store();
    }
}

OfficeSetup office = new OfficeSetup(new ModernOfficeFactory());
System.out.println(office.describe());`,
  explanation:
    "The abstract factory keeps all office furniture consistent within the selected style, so the client does not need to know which concrete classes are being created.",
};
