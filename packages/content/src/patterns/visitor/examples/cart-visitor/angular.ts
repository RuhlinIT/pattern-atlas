import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const angular: PatternLanguageExample = {
  language: "angular",
  title: "Cart visitor",
  code: "interface CartVisitor {\n  visitBook(book: Book): number;\n  visitFruit(fruit: Fruit): number;\n}\n\n\ninterface CartItem {\n  accept(visitor: CartVisitor): number;\n}\n\n\nclass Book implements CartItem {\n  constructor(\n    public price: number,\n    public isbn: string\n  ) {}\n\n\n  accept(visitor: CartVisitor): number {\n    return visitor.visitBook(this);\n  }\n}\n\n\nclass Fruit implements CartItem {\n  constructor(\n    public pricePerKg: number,\n    public weight: number,\n    public name: string\n  ) {}\n\n\n  accept(visitor: CartVisitor): number {\n    return visitor.visitFruit(this);\n  }\n}\n\n\nclass ShoppingCartVisitor implements CartVisitor {\n  visitBook(book: Book): number {\n    return book.price > 50 ? book.price - 5 : book.price;\n  }\n\n\n  visitFruit(fruit: Fruit): number {\n    return fruit.pricePerKg * fruit.weight;\n  }\n}\n\n\nconst items: CartItem[] = [\n  new Book(20, \"1234\"),\n  new Book(100, \"5678\"),\n  new Fruit(10, 2, \"Banana\"),\n  new Fruit(5, 5, \"Apple\")\n];\n\n\nconst visitor = new ShoppingCartVisitor();\nconst total = items.reduce((sum, item) => sum + item.accept(visitor), 0);\n\n\nconsole.log(total);",
  explanation: "The Angular cart visitor keeps pricing behavior separate from the product classes and calculates the cart total through the visitor.",
};
