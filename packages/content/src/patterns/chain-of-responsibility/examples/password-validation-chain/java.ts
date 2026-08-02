import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const java: PatternLanguageExample = {
  language: "java",
  title: "Password validation chain",
  code: `class PasswordRequest {
    String password;
    PasswordRequest(String password) { this.password = password; }
}

abstract class PasswordValidator {
    private PasswordValidator next;

    public PasswordValidator setNext(PasswordValidator next) {
        this.next = next;
        return next;
    }

    public String handle(PasswordRequest request) {
        return next == null ? null : next.handle(request);
    }
}

class LengthValidator extends PasswordValidator {
    @Override
    public String handle(PasswordRequest request) {
        if (request.password.length() < 12) return "Password must be at least 12 characters.";
        return super.handle(request);
    }
}

class NumberValidator extends PasswordValidator {
    @Override
    public String handle(PasswordRequest request) {
        if (!request.password.matches(".*[0-9].*")) return "Password must include a number.";
        return super.handle(request);
    }
}

class SpecialCharValidator extends PasswordValidator {
    @Override
    public String handle(PasswordRequest request) {
        if (!request.password.matches(".*[!@#$%^&*].*")) return "Password must include a special character.";
        return super.handle(request);
    }
}

PasswordValidator chain = new LengthValidator();
chain.setNext(new NumberValidator()).setNext(new SpecialCharValidator());
String result = chain.handle(new PasswordRequest("example"));`,
  explanation:
    "A validation chain keeps password rules isolated and easy to extend.",
};