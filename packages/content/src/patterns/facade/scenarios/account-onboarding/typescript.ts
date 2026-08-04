import type { PatternLanguageExample } from "@atlas-patterns/schemas";

class AccountService {
  create(email: string) {
    return email.length > 0;
  }
}

class ProfileService {
  setup(userId: string) {
    return userId.length > 0;
  }
}

class WelcomeService {
  send(userId: string) {
    return userId.length > 0;
  }
}

class OnboardingFacade {
  constructor(
    private accounts: AccountService,
    private profiles: ProfileService,
    private welcome: WelcomeService,
  ) {}

  onboard(email: string) {
    if (!this.accounts.create(email)) return false;
    if (!this.profiles.setup(email)) return false;
    return this.welcome.send(email);
  }
}

export const typescript: PatternLanguageExample = {
  language: "typescript",
  title: "Account onboarding",
  code: `class AccountService {
  create(email: string) {
    return email.length > 0;
  }
}

class ProfileService {
  setup(userId: string) {
    return userId.length > 0;
  }
}

class WelcomeService {
  send(userId: string) {
    return userId.length > 0;
  }
}

class OnboardingFacade {
  constructor(
    private accounts: AccountService,
    private profiles: ProfileService,
    private welcome: WelcomeService,
  ) {}

  onboard(email: string) {
    if (!this.accounts.create(email)) return false;
    if (!this.profiles.setup(email)) return false;
    return this.welcome.send(email);
  }
}

new OnboardingFacade(new AccountService(), new ProfileService(), new WelcomeService()).onboard("a@example.com");`,
  explanation: "Coordinate signup, profile setup, and welcome messaging through one onboarding entry point.",
};