import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const java: PatternLanguageExample = {
  language: "java",
  title: "News publisher",
  code: "import java.util.ArrayList;\nimport java.util.List;\n\ninterface Subscriber {\n    void update(String headline);\n}\n\nclass NewsPublisher {\n    private final List<Subscriber> subscribers = new ArrayList<>();\n\n    public void subscribe(Subscriber subscriber) {\n        subscribers.add(subscriber);\n    }\n\n    public void publish(String headline) {\n        for (Subscriber subscriber : subscribers) {\n            subscriber.update(headline);\n        }\n    }\n}\n\nclass MobileAppSubscriber implements Subscriber {\n    public void update(String headline) {\n        System.out.println(\"Mobile app received: \" + headline);\n    }\n}\n\nclass EmailSubscriber implements Subscriber {\n    public void update(String headline) {\n        System.out.println(\"Email subscriber received: \" + headline);\n    }\n}\n\nclass WebSubscriber implements Subscriber {\n    public void update(String headline) {\n        System.out.println(\"Web subscriber received: \" + headline);\n    }\n}\n\nNewsPublisher publisher = new NewsPublisher();\npublisher.subscribe(new MobileAppSubscriber());\npublisher.subscribe(new EmailSubscriber());\npublisher.subscribe(new WebSubscriber());\npublisher.publish(\"New design patterns article is live\");",
  explanation: "The publishing logic stays simple because subscriber-specific behavior lives in observer implementations rather than inside the publisher.",
};
