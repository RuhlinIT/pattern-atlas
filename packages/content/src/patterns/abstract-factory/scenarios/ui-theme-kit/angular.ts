import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const angular = {
  language: "angular",
  code: `import { Component, Injectable, InjectionToken, inject } from "@angular/core";

interface ThemeButton {
  classes(): string;
  label(text: string): string;
}

interface ThemeCard {
  classes(): string;
  sectionTitle(title: string): string;
}

interface ThemeInput {
  classes(): string;
  placeholder(text: string): string;
}

interface ThemeFactory {
  createButton(): ThemeButton;
  createCard(): ThemeCard;
  createInput(): ThemeInput;
}

class LightThemeButton implements ThemeButton {
  classes(): string {
    return "rounded bg-white px-4 py-2 text-slate-900 shadow";
  }

  label(text: string): string {
    return "Light " + text;
  }
}

class LightThemeCard implements ThemeCard {
  classes(): string {
    return "rounded-xl border border-slate-200 bg-white p-6 shadow-sm";
  }

  sectionTitle(title: string): string {
    return title + " · Light";
  }
}

class LightThemeInput implements ThemeInput {
  classes(): string {
    return "w-full rounded border border-slate-300 bg-white px-3 py-2 text-slate-900";
  }

  placeholder(text: string): string {
    return "Light " + text;
  }
}

class DarkThemeButton implements ThemeButton {
  classes(): string {
    return "rounded bg-slate-800 px-4 py-2 text-white shadow";
  }

  label(text: string): string {
    return "Dark " + text;
  }
}

class DarkThemeCard implements ThemeCard {
  classes(): string {
    return "rounded-xl border border-slate-700 bg-slate-900 p-6 text-white shadow-sm";
  }

  sectionTitle(title: string): string {
    return title + " · Dark";
  }
}

class DarkThemeInput implements ThemeInput {
  classes(): string {
    return "w-full rounded border border-slate-600 bg-slate-800 px-3 py-2 text-white";
  }

  placeholder(text: string): string {
    return "Dark " + text;
  }
}

@Injectable({ providedIn: "root" })
class LightThemeFactory implements ThemeFactory {
  createButton(): ThemeButton {
    return new LightThemeButton();
  }

  createCard(): ThemeCard {
    return new LightThemeCard();
  }

  createInput(): ThemeInput {
    return new LightThemeInput();
  }
}

@Injectable({ providedIn: "root" })
class DarkThemeFactory implements ThemeFactory {
  createButton(): ThemeButton {
    return new DarkThemeButton();
  }

  createCard(): ThemeCard {
    return new DarkThemeCard();
  }

  createInput(): ThemeInput {
    return new DarkThemeInput();
  }
}

export const THEME_FACTORY = new InjectionToken<ThemeFactory>("THEME_FACTORY");

@Component({
  selector: "app-theme-preview",
  standalone: true,
  template: \`
    <section [class]="cardClasses">
      <h2 class="mb-4 text-lg font-semibold">{{ title }}</h2>

      <input
        [class]="inputClasses"
        [placeholder]="inputPlaceholder"
      />

      <button class="mt-4" [class]="buttonClasses">
        {{ buttonLabel }}
      </button>
    </section>
  \`,
})
export class ThemePreviewComponent {
  private readonly factory = inject(THEME_FACTORY);

  private readonly button = this.factory.createButton();
  private readonly card = this.factory.createCard();
  private readonly input = this.factory.createInput();

  readonly title = this.card.sectionTitle("Theme kit");
  readonly cardClasses = this.card.classes();
  readonly inputClasses = this.input.classes();
  readonly inputPlaceholder = this.input.placeholder("Search components");
  readonly buttonClasses = this.button.classes();
  readonly buttonLabel = this.button.label("Apply theme");
}

@Component({
  selector: "app-root",
  standalone: true,
  imports: [ThemePreviewComponent],
  providers: [
    {
      provide: THEME_FACTORY,
      useClass: DarkThemeFactory,
    },
  ],
  template: \`
    <main class="min-h-screen bg-slate-950 p-8">
      <app-theme-preview />
    </main>
  \`,
})
export class AppComponent {}
`,
} satisfies PatternLanguageExample;