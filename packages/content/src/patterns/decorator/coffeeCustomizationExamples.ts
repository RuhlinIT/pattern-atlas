import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const coffeeCustomizationExamples: PatternLanguageExample[] = [
  {
    language: "TypeScript",
    code: `interface Coffee {
  getDescription(): string;
  getCost(): number;
}

class SimpleCoffee implements Coffee {
  getDescription(): string {
    return "Simple coffee";
  }

  getCost(): number {
    return 3;
  }
}

abstract class CoffeeDecorator implements Coffee {
  constructor(protected coffee: Coffee) {}

  getDescription(): string {
    return this.coffee.getDescription();
  }

  getCost(): number {
    return this.coffee.getCost();
  }
}

class MilkDecorator extends CoffeeDecorator {
  getDescription(): string {
    return \`\${super.getDescription()}, milk\`;
  }

  getCost(): number {
    return super.getCost() + 1;
  }
}

class MochaDecorator extends CoffeeDecorator {
  getDescription(): string {
    return \`\${super.getDescription()}, mocha\`;
  }

  getCost(): number {
    return super.getCost() + 2;
  }
}

class WhipDecorator extends CoffeeDecorator {
  getDescription(): string {
    return \`\${super.getDescription()}, whip\`;
  }

  getCost(): number {
    return super.getCost() + 1;
  }
}

const order = new WhipDecorator(
  new MochaDecorator(new MilkDecorator(new SimpleCoffee())),
);

console.log(order.getDescription());
console.log(order.getCost());`,
    explanation:
      "Each add-on decorates the base coffee with extra description and pricing behavior, which avoids a subclass for every drink combination.",
  },
  {
    language: "Java",
    code: `interface Coffee {
    String getDescription();
    int getCost();
}

class SimpleCoffee implements Coffee {
    public String getDescription() {
        return "Simple coffee";
    }

    public int getCost() {
        return 3;
    }
}

abstract class CoffeeDecorator implements Coffee {
    protected final Coffee coffee;

    public CoffeeDecorator(Coffee coffee) {
        this.coffee = coffee;
    }

    public String getDescription() {
        return coffee.getDescription();
    }

    public int getCost() {
        return coffee.getCost();
    }
}

class MilkDecorator extends CoffeeDecorator {
    public MilkDecorator(Coffee coffee) {
        super(coffee);
    }

    public String getDescription() {
        return super.getDescription() + ", milk";
    }

    public int getCost() {
        return super.getCost() + 1;
    }
}

class MochaDecorator extends CoffeeDecorator {
    public MochaDecorator(Coffee coffee) {
        super(coffee);
    }

    public String getDescription() {
        return super.getDescription() + ", mocha";
    }

    public int getCost() {
        return super.getCost() + 2;
    }
}

class WhipDecorator extends CoffeeDecorator {
    public WhipDecorator(Coffee coffee) {
        super(coffee);
    }

    public String getDescription() {
        return super.getDescription() + ", whip";
    }

    public int getCost() {
        return super.getCost() + 1;
    }
}

Coffee order =
    new WhipDecorator(
        new MochaDecorator(
            new MilkDecorator(new SimpleCoffee())
        )
    );

System.out.println(order.getDescription());
System.out.println(order.getCost());`,
    explanation:
      "The drink remains a Coffee at every layer, so clients can treat simple and decorated drinks through the same interface.",
  },
  {
    language: "Python",
    code: `from abc import ABC, abstractmethod

class Coffee(ABC):
    @abstractmethod
    def get_description(self) -> str:
        pass

    @abstractmethod
    def get_cost(self) -> int:
        pass

class SimpleCoffee(Coffee):
    def get_description(self) -> str:
        return "Simple coffee"

    def get_cost(self) -> int:
        return 3

class CoffeeDecorator(Coffee):
    def __init__(self, coffee: Coffee) -> None:
        self.coffee = coffee

    def get_description(self) -> str:
        return self.coffee.get_description()

    def get_cost(self) -> int:
        return self.coffee.get_cost()

class MilkDecorator(CoffeeDecorator):
    def get_description(self) -> str:
        return f"{super().get_description()}, milk"

    def get_cost(self) -> int:
        return super().get_cost() + 1

class MochaDecorator(CoffeeDecorator):
    def get_description(self) -> str:
        return f"{super().get_description()}, mocha"

    def get_cost(self) -> int:
        return super().get_cost() + 2

class WhipDecorator(CoffeeDecorator):
    def get_description(self) -> str:
        return f"{super().get_description()}, whip"

    def get_cost(self) -> int:
        return super().get_cost() + 1

order = WhipDecorator(
    MochaDecorator(
        MilkDecorator(SimpleCoffee())
    )
)

print(order.get_description())
print(order.get_cost())`,
    explanation:
      "Decorators extend both description and cost behavior in layers while keeping the same Coffee abstraction.",
  },
  {
    language: "Angular",
    code: `interface Coffee {
  getDescription(): string;
  getCost(): number;
}


class SimpleCoffee implements Coffee {
  getDescription(): string {
    return 'Simple coffee';
  }


  getCost(): number {
    return 3;
  }
}


abstract class CoffeeDecorator implements Coffee {
  constructor(protected coffee: Coffee) {}


  getDescription(): string {
    return this.coffee.getDescription();
  }


  getCost(): number {
    return this.coffee.getCost();
  }
}


class MilkDecorator extends CoffeeDecorator {
  getDescription(): string {
    return \`\${super.getDescription()}, milk\`;
  }


  getCost(): number {
    return super.getCost() + 1;
  }
}


class MochaDecorator extends CoffeeDecorator {
  getDescription(): string {
    return \`\${super.getDescription()}, mocha\`;
  }


  getCost(): number {
    return super.getCost() + 2;
  }
}


class WhipDecorator extends CoffeeDecorator {
  getDescription(): string {
    return \`\${super.getDescription()}, whip\`;
  }


  getCost(): number {
    return super.getCost() + 1;
  }
}


const order = new WhipDecorator(
  new MochaDecorator(new MilkDecorator(new SimpleCoffee())),
);

console.log(order.getDescription());
console.log(order.getCost());`,
    explanation:
      "Each add-on wraps the coffee with extra behavior while preserving the same Coffee contract, so Angular code can compose drink variations without a subclass for every combination.",
  },
];
