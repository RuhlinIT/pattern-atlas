import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const java: PatternLanguageExample = {
  language: "java",
  title: "Device setup",
  code: `class PairingService {
    boolean pair() { return true; }
}

class ConfigService {
    boolean configure() { return true; }
}

class HealthService {
    boolean check() { return true; }
}

class DeviceSetupFacade {
    private final PairingService pairing;
    private final ConfigService config;
    private final HealthService health;

    DeviceSetupFacade(PairingService pairing, ConfigService config, HealthService health) {
        this.pairing = pairing;
        this.config = config;
        this.health = health;
    }

    boolean setupDevice() {
        if (!pairing.pair()) return false;
        if (!config.configure()) return false;
        return health.check();
    }
}

class Example {
    public static void main(String[] args) {
        DeviceSetupFacade facade = new DeviceSetupFacade(
            new PairingService(),
            new ConfigService(),
            new HealthService()
        );
        facade.setupDevice();
    }
}
`,
  explanation:
    "Coordinate pairing, configuration, and health checks behind one setup method.",
};