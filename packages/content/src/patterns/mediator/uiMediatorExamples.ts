import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const uiMediatorExamples: PatternLanguageExample[] = [
  {
    language: "TypeScript",
    code: `interface DialogMediator {
  notify(sender: FormControl, event: string): void;
}


abstract class FormControl {
  constructor(protected mediator: DialogMediator) {}
}


class Checkbox extends FormControl {
  constructor(mediator: DialogMediator, public checked = false) {
    super(mediator);
  }


  toggle(): void {
    this.checked = !this.checked;
    this.mediator.notify(this, "toggle");
  }
}


class TextField extends FormControl {
  constructor(mediator: DialogMediator, public value = "") {
    super(mediator);
  }


  setValue(value: string): void {
    this.value = value;
    this.mediator.notify(this, "change");
  }
}


class SubmitButton extends FormControl {
  constructor(mediator: DialogMediator, public enabled = false) {
    super(mediator);
  }


  click(): void {
    if (this.enabled) {
      console.log("Form submitted");
    } else {
      console.log("Submit blocked");
    }
  }
}


class ProfileDialog implements DialogMediator {
  constructor(
    private newsletter: Checkbox,
    private nameField: TextField,
    private submitButton: SubmitButton
  ) {}


  notify(sender: FormControl, event: string): void {
    if (sender === this.nameField && event === "change") {
      this.submitButton.enabled = this.nameField.value.trim().length > 0;
    }


    if (sender === this.newsletter && event === "toggle") {
      console.log(\`Newsletter opted in: \${this.newsletter.checked}\`);
    }
  }
}


const placeholder = {} as DialogMediator;
const newsletter = new Checkbox(placeholder);
const nameField = new TextField(placeholder);
const submitButton = new SubmitButton(placeholder);


const dialog = new ProfileDialog(newsletter, nameField, submitButton);
newsletter.mediator = dialog;
nameField.mediator = dialog;
submitButton.mediator = dialog;


nameField.setValue("Alice");
submitButton.click();
newsletter.toggle();
submitButton.click();`,
    explanation:
      "The UI mediator coordinates form controls so they do not depend on each other directly, which keeps the dialog logic centralized.",
  },
  {
    language: "Java",
    code: `interface DialogMediator {
    void notify(FormControl sender, String event);
}


abstract class FormControl {
    protected final DialogMediator mediator;


    protected FormControl(DialogMediator mediator) {
        this.mediator = mediator;
    }
}


class Checkbox extends FormControl {
    private boolean checked = false;


    public Checkbox(DialogMediator mediator) {
        super(mediator);
    }


    public void toggle() {
        checked = !checked;
        mediator.notify(this, "toggle");
    }


    public boolean isChecked() {
        return checked;
    }
}


class TextField extends FormControl {
    private String value = "";


    public TextField(DialogMediator mediator) {
        super(mediator);
    }


    public void setValue(String value) {
        this.value = value;
        mediator.notify(this, "change");
    }


    public String getValue() {
        return value;
    }
}


class SubmitButton extends FormControl {
    private boolean enabled = false;


    public SubmitButton(DialogMediator mediator) {
        super(mediator);
    }


    public void click() {
        if (enabled) {
            System.out.println("Form submitted");
        } else {
            System.out.println("Submit blocked");
        }
    }


    public void setEnabled(boolean enabled) {
        this.enabled = enabled;
    }
}


class ProfileDialog implements DialogMediator {
    private final Checkbox newsletter;
    private final TextField nameField;
    private final SubmitButton submitButton;


    public ProfileDialog(Checkbox newsletter, TextField nameField, SubmitButton submitButton) {
        this.newsletter = newsletter;
        this.nameField = nameField;
        this.submitButton = submitButton;
    }


    public void notify(FormControl sender, String event) {
        if (sender == nameField && "change".equals(event)) {
            submitButton.setEnabled(!nameField.getValue().trim().isEmpty());
        }


        if (sender == newsletter && "toggle".equals(event)) {
            System.out.println("Newsletter opted in: " + newsletter.isChecked());
        }
    }
}


DialogMediator placeholder = new DialogMediator() {
    public void notify(FormControl sender, String event) {}
};


Checkbox newsletter = new Checkbox(placeholder);
TextField nameField = new TextField(placeholder);
SubmitButton submitButton = new SubmitButton(placeholder);


ProfileDialog dialog = new ProfileDialog(newsletter, nameField, submitButton);
newsletter.mediator = dialog;
nameField.mediator = dialog;
submitButton.mediator = dialog;


nameField.setValue("Alice");
submitButton.click();
newsletter.toggle();
submitButton.click();`,
    explanation:
      "The Java UI mediator keeps control interactions in one place so the controls remain independent and reusable.",
  },
  {
    language: "Python",
    code: `from abc import ABC, abstractmethod


class DialogMediator(ABC):
    @abstractmethod
    def notify(self, sender: "FormControl", event: str) -> None:
        pass


class FormControl:
    def __init__(self, mediator: DialogMediator) -> None:
        self.mediator = mediator


class Checkbox(FormControl):
    def __init__(self, mediator: DialogMediator, checked: bool = False) -> None:
        super().__init__(mediator)
        self.checked = checked


    def toggle(self) -> None:
        self.checked = not self.checked
        self.mediator.notify(self, "toggle")


class TextField(FormControl):
    def __init__(self, mediator: DialogMediator, value: str = "") -> None:
        super().__init__(mediator)
        self.value = value


    def set_value(self, value: str) -> None:
        self.value = value
        self.mediator.notify(self, "change")


class SubmitButton(FormControl):
    def __init__(self, mediator: DialogMediator, enabled: bool = False) -> None:
        super().__init__(mediator)
        self.enabled = enabled


    def click(self) -> None:
        if self.enabled:
            print("Form submitted")
        else:
            print("Submit blocked")


class ProfileDialog(DialogMediator):
    def __init__(self, newsletter: Checkbox, name_field: TextField, submit_button: SubmitButton) -> None:
        self.newsletter = newsletter
        self.name_field = name_field
        self.submit_button = submit_button


    def notify(self, sender: FormControl, event: str) -> None:
        if sender == self.name_field and event == "change":
            self.submit_button.enabled = len(self.name_field.value.strip()) > 0


        if sender == self.newsletter and event == "toggle":
            print(f"Newsletter opted in: {self.newsletter.checked}")


placeholder = ProfileDialog.__new__(ProfileDialog)
newsletter = Checkbox(placeholder)
name_field = TextField(placeholder)
submit_button = SubmitButton(placeholder)


dialog = ProfileDialog(newsletter, name_field, submit_button)
newsletter.mediator = dialog
name_field.mediator = dialog
submit_button.mediator = dialog


name_field.set_value("Alice")
submit_button.click()
newsletter.toggle()
submit_button.click()`,
    explanation:
      "The Python UI mediator manages the dependencies between controls centrally and keeps the form logic easy to maintain.",
  },
  {
    language: "Angular",
    code: `interface DialogMediator {
  notify(sender: FormControl, event: string): void;
}


abstract class FormControl {
  constructor(protected mediator: DialogMediator) {}
}


class Checkbox extends FormControl {
  constructor(mediator: DialogMediator, public checked = false) {
    super(mediator);
  }


  toggle(): void {
    this.checked = !this.checked;
    this.mediator.notify(this, "toggle");
  }
}


class TextField extends FormControl {
  constructor(mediator: DialogMediator, public value = "") {
    super(mediator);
  }


  setValue(value: string): void {
    this.value = value;
    this.mediator.notify(this, "change");
  }
}


class SubmitButton extends FormControl {
  constructor(mediator: DialogMediator, public enabled = false) {
    super(mediator);
  }


  click(): void {
    if (this.enabled) {
      console.log("Form submitted");
    } else {
      console.log("Submit blocked");
    }
  }
}


class ProfileDialog implements DialogMediator {
  constructor(
    private newsletter: Checkbox,
    private nameField: TextField,
    private submitButton: SubmitButton
  ) {}


  notify(sender: FormControl, event: string): void {
    if (sender === this.nameField && event === "change") {
      this.submitButton.enabled = this.nameField.value.trim().length > 0;
    }


    if (sender === this.newsletter && event === "toggle") {
      console.log(\`Newsletter opted in: \${this.newsletter.checked}\`);
    }
  }
}


const placeholder = {} as DialogMediator;
const newsletter = new Checkbox(placeholder);
const nameField = new TextField(placeholder);
const submitButton = new SubmitButton(placeholder);


const dialog = new ProfileDialog(newsletter, nameField, submitButton);
newsletter.mediator = dialog;
nameField.mediator = dialog;
submitButton.mediator = dialog;


nameField.setValue("Alice");
submitButton.click();
newsletter.toggle();
submitButton.click();`,
    explanation:
      "The Angular example centralizes UI coordination in a dialog mediator so controls stay focused on their own behavior.",
  },
  {
    language: "React",
    code: `import React, { useMemo } from "react";


interface DialogMediator {
  notify(sender: FormControl, event: string): void;
}


abstract class FormControl {
  constructor(protected mediator: DialogMediator) {}
}


class Checkbox extends FormControl {
  constructor(mediator: DialogMediator, public checked = false) {
    super(mediator);
  }


  toggle(): void {
    this.checked = !this.checked;
    this.mediator.notify(this, "toggle");
  }
}


class TextField extends FormControl {
  constructor(mediator: DialogMediator, public value = "") {
    super(mediator);
  }


  setValue(value: string): void {
    this.value = value;
    this.mediator.notify(this, "change");
  }
}


class SubmitButton extends FormControl {
  constructor(mediator: DialogMediator, public enabled = false) {
    super(mediator);
  }


  click(): void {
    if (this.enabled) {
      console.log("Form submitted");
    } else {
      console.log("Submit blocked");
    }
  }
}


class ProfileDialog implements DialogMediator {
  constructor(
    private newsletter: Checkbox,
    private nameField: TextField,
    private submitButton: SubmitButton
  ) {}


  notify(sender: FormControl, event: string): void {
    if (sender === this.nameField && event === "change") {
      this.submitButton.enabled = this.nameField.value.trim().length > 0;
    }


    if (sender === this.newsletter && event === "toggle") {
      console.log(\`Newsletter opted in: \${this.newsletter.checked}\`);
    }
  }
}


function DialogPreview() {
  return <p>Profile form is coordinated by a mediator</p>;
}


export function App() {
  const dialog = useMemo(() => {
    const placeholder = {} as DialogMediator;
    const newsletter = new Checkbox(placeholder);
    const nameField = new TextField(placeholder);
    const submitButton = new SubmitButton(placeholder);
    const profileDialog = new ProfileDialog(newsletter, nameField, submitButton);
    newsletter.mediator = profileDialog;
    nameField.mediator = profileDialog;
    submitButton.mediator = profileDialog;
    return { profileDialog, newsletter, nameField, submitButton };
  }, []);


  return (
    <main>
      <h1>UI Mediator</h1>
      <DialogPreview />
    </main>
  );
}`,
    explanation:
      "The React example uses a dialog mediator to coordinate form controls while keeping the UI components loosely coupled.",
  },
  {
    language: "React_Native",
    code: `import React, { useMemo } from "react";
import { SafeAreaView, Text, View } from "react-native";


interface DialogMediator {
  notify(sender: FormControl, event: string): void;
}


abstract class FormControl {
  constructor(protected mediator: DialogMediator) {}
}


class Checkbox extends FormControl {
  constructor(mediator: DialogMediator, public checked = false) {
    super(mediator);
  }


  toggle(): void {
    this.checked = !this.checked;
    this.mediator.notify(this, "toggle");
  }
}


class TextField extends FormControl {
  constructor(mediator: DialogMediator, public value = "") {
    super(mediator);
  }


  setValue(value: string): void {
    this.value = value;
    this.mediator.notify(this, "change");
  }
}


class SubmitButton extends FormControl {
  constructor(mediator: DialogMediator, public enabled = false) {
    super(mediator);
  }


  click(): void {
    if (this.enabled) {
      console.log("Form submitted");
    } else {
      console.log("Submit blocked");
    }
  }
}


class ProfileDialog implements DialogMediator {
  constructor(
    private newsletter: Checkbox,
    private nameField: TextField,
    private submitButton: SubmitButton
  ) {}


  notify(sender: FormControl, event: string): void {
    if (sender === this.nameField && event === "change") {
      this.submitButton.enabled = this.nameField.value.trim().length > 0;
    }


    if (sender === this.newsletter && event === "toggle") {
      console.log(\`Newsletter opted in: \${this.newsletter.checked}\`);
    }
  }
}


function DialogPreview() {
  return (
    <View>
      <Text>Profile form is coordinated by a mediator</Text>
    </View>
  );
}


export function App() {
  const dialog = useMemo(() => {
    const placeholder = {} as DialogMediator;
    const newsletter = new Checkbox(placeholder);
    const nameField = new TextField(placeholder);
    const submitButton = new SubmitButton(placeholder);
    const profileDialog = new ProfileDialog(newsletter, nameField, submitButton);
    newsletter.mediator = profileDialog;
    nameField.mediator = profileDialog;
    submitButton.mediator = profileDialog;
    return { profileDialog, newsletter, nameField, submitButton };
  }, []);


  return (
    <SafeAreaView style={{ flex: 1, justifyContent: "center", padding: 24 }}>
      <View style={{ gap: 16 }}>
        <Text style={{ fontSize: 24, fontWeight: "600" }}>UI Mediator</Text>
        <DialogPreview />
      </View>
    </SafeAreaView>
  );
}`,
    explanation:
      "The React Native example applies the mediator pattern to a form-like UI so control interactions remain centralized.",
  },
  {
    language: "C#",
    code: `using System;


public interface IDialogMediator
{
    void Notify(FormControl sender, string eventName);
}


public abstract class FormControl
{
    protected IDialogMediator Mediator;


    protected FormControl(IDialogMediator mediator)
    {
        Mediator = mediator;
    }
}


public class Checkbox : FormControl
{
    public bool Checked { get; private set; }


    public Checkbox(IDialogMediator mediator, bool checkedValue = false) : base(mediator)
    {
        Checked = checkedValue;
    }


    public void Toggle()
    {
        Checked = !Checked;
        Mediator.Notify(this, "toggle");
    }
}


public class TextField : FormControl
{
    public string Value { get; private set; } = "";


    public TextField(IDialogMediator mediator) : base(mediator) {}


    public void SetValue(string value)
    {
        Value = value;
        Mediator.Notify(this, "change");
    }
}


public class SubmitButton : FormControl
{
    public bool Enabled { get; set; }


    public SubmitButton(IDialogMediator mediator, bool enabled = false) : base(mediator)
    {
        Enabled = enabled;
    }


    public void Click()
    {
        Console.WriteLine(Enabled ? "Form submitted" : "Submit blocked");
    }
}


public class ProfileDialog : IDialogMediator
{
    private readonly Checkbox _newsletter;
    private readonly TextField _nameField;
    private readonly SubmitButton _submitButton;


    public ProfileDialog(Checkbox newsletter, TextField nameField, SubmitButton submitButton)
    {
        _newsletter = newsletter;
        _nameField = nameField;
        _submitButton = submitButton;
    }


    public void Notify(FormControl sender, string eventName)
    {
        if (sender == _nameField && eventName == "change")
        {
            _submitButton.Enabled = !string.IsNullOrWhiteSpace(_nameField.Value);
        }


        if (sender == _newsletter && eventName == "toggle")
        {
            Console.WriteLine($"Newsletter opted in: {_newsletter.Checked}");
        }
    }
}


var placeholder = (IDialogMediator)null;
var newsletter = new Checkbox(placeholder);
var nameField = new TextField(placeholder);
var submitButton = new SubmitButton(placeholder);


var dialog = new ProfileDialog(newsletter, nameField, submitButton);
typeof(FormControl).GetField("Mediator", System.Reflection.BindingFlags.NonPublic | System.Reflection.BindingFlags.Instance)?.SetValue(newsletter, dialog);
typeof(FormControl).GetField("Mediator", System.Reflection.BindingFlags.NonPublic | System.Reflection.BindingFlags.Instance)?.SetValue(nameField, dialog);
typeof(FormControl).GetField("Mediator", System.Reflection.BindingFlags.NonPublic | System.Reflection.BindingFlags.Instance)?.SetValue(submitButton, dialog);


nameField.SetValue("Alice");
submitButton.Click();
newsletter.Toggle();
submitButton.Click();`,
    explanation:
      "The C# UI mediator keeps control-to-control communication inside the dialog, which simplifies reuse and maintenance.",
  },
  {
    language: ".NET",
    code: `using System;
using Microsoft.Extensions.DependencyInjection;


public interface IDialogMediator
{
    void Notify(FormControl sender, string eventName);
}


public abstract class FormControl
{
    protected IDialogMediator Mediator;


    protected FormControl(IDialogMediator mediator)
    {
        Mediator = mediator;
    }
}


public class Checkbox : FormControl
{
    public bool Checked { get; private set; }


    public Checkbox(IDialogMediator mediator, bool checkedValue = false) : base(mediator)
    {
        Checked = checkedValue;
    }


    public void Toggle()
    {
        Checked = !Checked;
        Mediator.Notify(this, "toggle");
    }
}


public class TextField : FormControl
{
    public string Value { get; private set; } = "";


    public TextField(IDialogMediator mediator) : base(mediator) {}


    public void SetValue(string value)
    {
        Value = value;
        Mediator.Notify(this, "change");
    }
}


public class SubmitButton : FormControl
{
    public bool Enabled { get; set; }


    public SubmitButton(IDialogMediator mediator, bool enabled = false) : base(mediator)
    {
        Enabled = enabled;
    }


    public void Click()
    {
        Console.WriteLine(Enabled ? "Form submitted" : "Submit blocked");
    }
}


public class ProfileDialog : IDialogMediator
{
    private readonly Checkbox _newsletter;
    private readonly TextField _nameField;
    private readonly SubmitButton _submitButton;


    public ProfileDialog(Checkbox newsletter, TextField nameField, SubmitButton submitButton)
    {
        _newsletter = newsletter;
        _nameField = nameField;
        _submitButton = submitButton;
    }


    public void Notify(FormControl sender, string eventName)
    {
        if (sender == _nameField && eventName == "change")
        {
            _submitButton.Enabled = !string.IsNullOrWhiteSpace(_nameField.Value);
        }


        if (sender == _newsletter && eventName == "toggle")
        {
            Console.WriteLine($"Newsletter opted in: {_newsletter.Checked}");
        }
    }
}


var services = new ServiceCollection();
services.AddSingleton<IDialogMediator, ProfileDialog>();

var provider = services.BuildServiceProvider();
var mediator = provider.GetRequiredService<IDialogMediator>();

Console.WriteLine("Mediator registered and ready.");`,
    explanation:
      "The .NET example registers the dialog mediator as a service so the UI coordination logic can be injected and reused.",
  },
];
