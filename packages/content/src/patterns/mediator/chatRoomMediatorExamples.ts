import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const chatRoomMediatorExamples: PatternLanguageExample[] = [
  {
    language: "TypeScript",
    code: `interface ChatMediator {
  sendMessage(message: string, user: User): void;
  registerUser(user: User): void;
}


class User {
  constructor(
    public name: string,
    private mediator: ChatMediator
  ) {}


  send(message: string): void {
    this.mediator.sendMessage(message, this);
  }


  receive(message: string): void {
    console.log(\`\${this.name} received: \${message}\`);
  }
}


class ChatRoom implements ChatMediator {
  private users: User[] = [];


  registerUser(user: User): void {
    this.users.push(user);
  }


  sendMessage(message: string, user: User): void {
    for (const participant of this.users) {
      if (participant !== user) {
        participant.receive(\`\${user.name}: \${message}\`);
      }
    }
  }
}


const chatRoom = new ChatRoom();
const alice = new User("Alice", chatRoom);
const bob = new User("Bob", chatRoom);
const clara = new User("Clara", chatRoom);


chatRoom.registerUser(alice);
chatRoom.registerUser(bob);
chatRoom.registerUser(clara);


alice.send("Hello everyone!");
bob.send("Hi Alice!");`,
    explanation:
      "The chat room mediator routes messages between users so they do not need direct references to one another.",
  },
  {
    language: "Java",
    code: `interface ChatMediator {
    void sendMessage(String message, User user);
    void registerUser(User user);
}


class User {
    private final String name;
    private final ChatMediator mediator;


    public User(String name, ChatMediator mediator) {
        this.name = name;
        this.mediator = mediator;
    }


    public String getName() {
        return name;
    }


    public void send(String message) {
        mediator.sendMessage(message, this);
    }


    public void receive(String message) {
        System.out.println(name + " received: " + message);
    }
}


class ChatRoom implements ChatMediator {
    private final java.util.List<User> users = new java.util.ArrayList<>();


    public void registerUser(User user) {
        users.add(user);
    }


    public void sendMessage(String message, User user) {
        for (User participant : users) {
            if (participant != user) {
                participant.receive(user.getName() + ": " + message);
            }
        }
    }
}


ChatRoom chatRoom = new ChatRoom();
User alice = new User("Alice", chatRoom);
User bob = new User("Bob", chatRoom);
User clara = new User("Clara", chatRoom);


chatRoom.registerUser(alice);
chatRoom.registerUser(bob);
chatRoom.registerUser(clara);


alice.send("Hello everyone!");
bob.send("Hi Alice!");`,
    explanation:
      "The Java chat room mediator centralizes message delivery and keeps users decoupled from one another.",
  },
  {
    language: "Python",
    code: `from abc import ABC, abstractmethod


class ChatMediator(ABC):
    @abstractmethod
    def send_message(self, message: str, user: "User") -> None:
        pass


    @abstractmethod
    def register_user(self, user: "User") -> None:
        pass


class User:
    def __init__(self, name: str, mediator: ChatMediator) -> None:
        self.name = name
        self.mediator = mediator


    def send(self, message: str) -> None:
        self.mediator.send_message(message, self)


    def receive(self, message: str) -> None:
        print(f"{self.name} received: {message}")


class ChatRoom(ChatMediator):
    def __init__(self) -> None:
        self.users: list[User] = []


    def register_user(self, user: User) -> None:
        self.users.append(user)


    def send_message(self, message: str, user: User) -> None:
        for participant in self.users:
            if participant != user:
                participant.receive(f"{user.name}: {message}")


chat_room = ChatRoom()
alice = User("Alice", chat_room)
bob = User("Bob", chat_room)
clara = User("Clara", chat_room)


chat_room.register_user(alice)
chat_room.register_user(bob)
chat_room.register_user(clara)


alice.send("Hello everyone!")
bob.send("Hi Alice!")`,
    explanation:
      "The Python chat room mediator handles message fan-out so participants only know about the mediator.",
  },
  {
    language: "Angular",
    code: `interface ChatMediator {
  sendMessage(message: string, user: User): void;
  registerUser(user: User): void;
}


class User {
  constructor(
    public name: string,
    private mediator: ChatMediator
  ) {}


  send(message: string): void {
    this.mediator.sendMessage(message, this);
  }


  receive(message: string): void {
    console.log(\`\${this.name} received: \${message}\`);
  }
}


class ChatRoom implements ChatMediator {
  private users: User[] = [];


  registerUser(user: User): void {
    this.users.push(user);
  }


  sendMessage(message: string, user: User): void {
    for (const participant of this.users) {
      if (participant !== user) {
        participant.receive(\`\${user.name}: \${message}\`);
      }
    }
  }
}


const chatRoom = new ChatRoom();
const alice = new User("Alice", chatRoom);
const bob = new User("Bob", chatRoom);
const clara = new User("Clara", chatRoom);


chatRoom.registerUser(alice);
chatRoom.registerUser(bob);
chatRoom.registerUser(clara);


alice.send("Hello everyone!");
bob.send("Hi Alice!");`,
    explanation:
      "The Angular example uses a chat room mediator to manage communication among users without direct dependencies.",
  },
  {
    language: "React",
    code: `import React, { useMemo } from "react";


interface ChatMediator {
  sendMessage(message: string, user: User): void;
  registerUser(user: User): void;
}


class User {
  constructor(
    public name: string,
    private mediator: ChatMediator
  ) {}


  send(message: string): void {
    this.mediator.sendMessage(message, this);
  }


  receive(message: string): void {
    console.log(\`\${this.name} received: \${message}\`);
  }
}


class ChatRoom implements ChatMediator {
  private users: User[] = [];


  registerUser(user: User): void {
    this.users.push(user);
  }


  sendMessage(message: string, user: User): void {
    for (const participant of this.users) {
      if (participant !== user) {
        participant.receive(\`\${user.name}: \${message}\`);
      }
    }
  }
}


function ChatPreview({ room }: { room: ChatRoom }) {
  return <p>Chat room is active</p>;
}


export function App() {
  const room = useMemo(() => new ChatRoom(), []);
  const alice = useMemo(() => new User("Alice", room), [room]);
  const bob = useMemo(() => new User("Bob", room), [room]);
  const clara = useMemo(() => new User("Clara", room), [room]);


  useMemo(() => {
    room.registerUser(alice);
    room.registerUser(bob);
    room.registerUser(clara);
  }, [room, alice, bob, clara]);


  return (
    <main>
      <h1>Chat Room Mediator</h1>
      <ChatPreview room={room} />
    </main>
  );
}`,
    explanation:
      "The React example keeps the chat routing logic inside the mediator while the UI remains unaware of user-to-user coupling.",
  },
  {
    language: "React_Native",
    code: `import React, { useMemo } from "react";
import { SafeAreaView, Text, View } from "react-native";


interface ChatMediator {
  sendMessage(message: string, user: User): void;
  registerUser(user: User): void;
}


class User {
  constructor(
    public name: string,
    private mediator: ChatMediator
  ) {}


  send(message: string): void {
    this.mediator.sendMessage(message, this);
  }


  receive(message: string): void {
    console.log(\`\${this.name} received: \${message}\`);
  }
}


class ChatRoom implements ChatMediator {
  private users: User[] = [];


  registerUser(user: User): void {
    this.users.push(user);
  }


  sendMessage(message: string, user: User): void {
    for (const participant of this.users) {
      if (participant !== user) {
        participant.receive(\`\${user.name}: \${message}\`);
      }
    }
  }
}


function ChatPreview() {
  return (
    <View>
      <Text>Chat room is active</Text>
    </View>
  );
}


export function App() {
  const room = useMemo(() => new ChatRoom(), []);
  const alice = useMemo(() => new User("Alice", room), [room]);
  const bob = useMemo(() => new User("Bob", room), [room]);
  const clara = useMemo(() => new User("Clara", room), [room]);


  useMemo(() => {
    room.registerUser(alice);
    room.registerUser(bob);
    room.registerUser(clara);
  }, [room, alice, bob, clara]);


  return (
    <SafeAreaView style={{ flex: 1, justifyContent: "center", padding: 24 }}>
      <View style={{ gap: 16 }}>
        <Text style={{ fontSize: 24, fontWeight: "600" }}>Chat Room Mediator</Text>
        <ChatPreview />
      </View>
    </SafeAreaView>
  );
}`,
    explanation:
      "The React Native example uses the same mediator-based chat logic while the interface just shows the active room state.",
  },
  {
    language: "C#",
    code: `using System;
using System.Collections.Generic;


public interface IChatMediator
{
    void SendMessage(string message, User user);
    void RegisterUser(User user);
}


public class User
{
    public string Name { get; }
    private readonly IChatMediator _mediator;


    public User(string name, IChatMediator mediator)
    {
        Name = name;
        _mediator = mediator;
    }


    public void Send(string message)
    {
        _mediator.SendMessage(message, this);
    }


    public void Receive(string message)
    {
        Console.WriteLine($"{Name} received: {message}");
    }
}


public class ChatRoom : IChatMediator
{
    private readonly List<User> _users = new List<User>();


    public void RegisterUser(User user)
    {
        _users.Add(user);
    }


    public void SendMessage(string message, User user)
    {
        foreach (var participant in _users)
        {
            if (participant != user)
            {
                participant.Receive($"{user.Name}: {message}");
            }
        }
    }
}


var chatRoom = new ChatRoom();
var alice = new User("Alice", chatRoom);
var bob = new User("Bob", chatRoom);
var clara = new User("Clara", chatRoom);


chatRoom.RegisterUser(alice);
chatRoom.RegisterUser(bob);
chatRoom.RegisterUser(clara);


alice.Send("Hello everyone!");
bob.Send("Hi Alice!");`,
    explanation:
      "The C# chat room mediator routes messages through a single coordination object instead of direct user references.",
  },
  {
    language: ".NET",
    code: `using System;
using System.Collections.Generic;
using Microsoft.Extensions.DependencyInjection;


public interface IChatMediator
{
    void SendMessage(string message, User user);
    void RegisterUser(User user);
}


public class User
{
    public string Name { get; }
    private readonly IChatMediator _mediator;


    public User(string name, IChatMediator mediator)
    {
        Name = name;
        _mediator = mediator;
    }


    public void Send(string message)
    {
        _mediator.SendMessage(message, this);
    }


    public void Receive(string message)
    {
        Console.WriteLine($"{Name} received: {message}");
    }
}


public class ChatRoom : IChatMediator
{
    private readonly List<User> _users = new List<User>();


    public void RegisterUser(User user)
    {
        _users.Add(user);
    }


    public void SendMessage(string message, User user)
    {
        foreach (var participant in _users)
        {
            if (participant != user)
            {
                participant.Receive($"{user.Name}: {message}");
            }
        }
    }
}


var services = new ServiceCollection();
services.AddSingleton<IChatMediator, ChatRoom>();

var provider = services.BuildServiceProvider();
var mediator = provider.GetRequiredService<IChatMediator>();

var alice = new User("Alice", mediator);
var bob = new User("Bob", mediator);
var clara = new User("Clara", mediator);


mediator.RegisterUser(alice);
mediator.RegisterUser(bob);
mediator.RegisterUser(clara);


alice.Send("Hello everyone!");
bob.Send("Hi Alice!");`,
    explanation:
      "The .NET example registers the chat mediator as a service so user communication remains centralized and reusable.",
  },
];
