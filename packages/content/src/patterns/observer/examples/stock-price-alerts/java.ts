import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const java: PatternLanguageExample = {
  language: "java",
  title: "Stock price alerts",
  code: "import java.util.ArrayList;\nimport java.util.List;\n\ninterface Observer {\n    void update(double price);\n}\n\nclass Stock {\n    private final List<Observer> observers = new ArrayList<>();\n    private double price;\n\n    public Stock(double price) {\n        this.price = price;\n    }\n\n    public void subscribe(Observer observer) {\n        observers.add(observer);\n    }\n\n    public void unsubscribe(Observer observer) {\n        observers.remove(observer);\n    }\n\n    public void setPrice(double price) {\n        this.price = price;\n        notifyObservers();\n    }\n\n    private void notifyObservers() {\n        for (Observer observer : observers) {\n            observer.update(price);\n        }\n    }\n}\n\nclass PriceDisplay implements Observer {\n    public void update(double price) {\n        System.out.println(\"Display updated: \" + price);\n    }\n}\n\nclass PriceAlert implements Observer {\n    public void update(double price) {\n        if (price > 100) {\n            System.out.println(\"Alert: stock price is \" + price);\n        }\n    }\n}\n\nStock stock = new Stock(95);\nstock.subscribe(new PriceDisplay());\nstock.subscribe(new PriceAlert());\nstock.setPrice(105);",
  explanation: "The subject keeps a dynamic list of observers and pushes updates to each one when its state changes.",
};
