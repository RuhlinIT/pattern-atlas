import type { PatternLanguageExample } from "@atlas-patterns/schemas";

class PairingService {
  pair() {
    return true;
  }
}

class ConfigService {
  configure() {
    return true;
  }
}

class HealthService {
  check() {
    return true;
  }
}

class DeviceSetupFacade {
  constructor(
    private pairing: PairingService,
    private config: ConfigService,
    private health: HealthService,
  ) {}

  setupDevice() {
    if (!this.pairing.pair()) return false;
    if (!this.config.configure()) return false;
    return this.health.check();
  }
}

export const typescript: PatternLanguageExample = {
  language: "typescript",
  title: "Device setup",
  code: `class PairingService {
  pair() {
    return true;
  }
}

class ConfigService {
  configure() {
    return true;
  }
}

class HealthService {
  check() {
    return true;
  }
}

class DeviceSetupFacade {
  constructor(
    private pairing: PairingService,
    private config: ConfigService,
    private health: HealthService,
  ) {}

  setupDevice() {
    if (!this.pairing.pair()) return false;
    if (!this.config.configure()) return false;
    return this.health.check();
  }
}

const facade = new DeviceSetupFacade(
  new PairingService(),
  new ConfigService(),
  new HealthService(),
);
facade.setupDevice();`,
  explanation:
    "Coordinate pairing, configuration, and health checks behind one setup method.",
};