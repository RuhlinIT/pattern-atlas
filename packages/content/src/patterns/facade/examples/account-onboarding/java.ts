import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const java: PatternLanguageExample = {
  language: "java",
  title: "Account onboarding",
  code: `class AccountService {
    boolean create(String email) {
        return email != null && !email.isEmpty();
    }
}

class ProfileService {
    boolean setup(String userId) {
        return userId != null && !userId.isEmpty();
    }
}

class WelcomeService {
    boolean send(String userId) {
        return userId != null && !userId.isEmpty();
    }
}

class OnboardingFacade {
    private final AccountService accountService;
    private final ProfileService profileService;
    private final WelcomeService welcomeService;

    OnboardingFacade(
        AccountService accountService,
        ProfileService profileService,
        WelcomeService welcomeService
    ) {
        this.accountService = accountService;
        this.profileService = profileService;
        this.welcomeService = welcomeService;
    }

    boolean onboard(String email) {
        if (!accountService.create(email)) return false;
        if (!profileService.setup(email)) return false;
        return welcomeService.send(email);
    }
}

class Example {
    public static void main(String[] args) {
        OnboardingFacade facade = new OnboardingFacade(
            new AccountService(),
            new ProfileService(),
            new WelcomeService()
        );
        facade.onboard("a@example.com");
    }
}`,
  explanation:
    "Coordinate account creation, profile setup, and welcome messaging through one onboarding entry point.",
};