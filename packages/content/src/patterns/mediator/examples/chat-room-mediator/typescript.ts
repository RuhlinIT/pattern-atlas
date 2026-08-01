import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const typescript: PatternLanguageExample = {
  language: "typescript",
  title: "Chat room mediator",
  code: "interface ChatMediator {\n  sendMessage(message: string, user: User): void;\n  registerUser(user: User): void;\n}\n\n\nclass User {\n  constructor(\n    public name: string,\n    private mediator: ChatMediator\n  ) {}\n\n\n  send(message: string): void {\n    this.mediator.sendMessage(message, this);\n  }\n\n\n  receive(message: string): void {\n    console.log(`${this.name} received: ${message}`);\n  }\n}\n\n\nclass ChatRoom implements ChatMediator {\n  private users: User[] = [];\n\n\n  registerUser(user: User): void {\n    this.users.push(user);\n  }\n\n\n  sendMessage(message: string, user: User): void {\n    for (const participant of this.users) {\n      if (participant !== user) {\n        participant.receive(`${user.name}: ${message}`);\n      }\n    }\n  }\n}\n\n\nconst chatRoom = new ChatRoom();\nconst alice = new User(\"Alice\", chatRoom);\nconst bob = new User(\"Bob\", chatRoom);\nconst clara = new User(\"Clara\", chatRoom);\n\n\nchatRoom.registerUser(alice);\nchatRoom.registerUser(bob);\nchatRoom.registerUser(clara);\n\n\nalice.send(\"Hello everyone!\");\nbob.send(\"Hi Alice!\");",
  explanation: "The chat room mediator routes messages between users so they do not need direct references to one another.",
};
