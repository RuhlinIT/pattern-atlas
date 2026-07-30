import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const mediaPlayerStateExamples: PatternLanguageExample[] = [
  {
    language: "TypeScript",
    code: `interface PlayerState {
  play(player: MediaPlayer): void;
  pause(player: MediaPlayer): void;
  stop(player: MediaPlayer): void;
  name(): string;
}


class MediaPlayer {
  private state: PlayerState;


  constructor() {
    this.state = new StoppedState();
  }


  setState(state: PlayerState): void {
    this.state = state;
  }


  play(): void {
    this.state.play(this);
  }


  pause(): void {
    this.state.pause(this);
  }


  stop(): void {
    this.state.stop(this);
  }


  getStateName(): string {
    return this.state.name();
  }
}


class PlayingState implements PlayerState {
  play(player: MediaPlayer): void {
    console.log("Already playing");
  }


  pause(player: MediaPlayer): void {
    player.setState(new PausedState());
  }


  stop(player: MediaPlayer): void {
    player.setState(new StoppedState());
  }


  name(): string {
    return "Playing";
  }
}


class PausedState implements PlayerState {
  play(player: MediaPlayer): void {
    player.setState(new PlayingState());
  }


  pause(player: MediaPlayer): void {
    console.log("Already paused");
  }


  stop(player: MediaPlayer): void {
    player.setState(new StoppedState());
  }


  name(): string {
    return "Paused";
  }
}


class StoppedState implements PlayerState {
  play(player: MediaPlayer): void {
    player.setState(new PlayingState());
  }


  pause(player: MediaPlayer): void {
    console.log("Cannot pause when stopped");
  }


  stop(player: MediaPlayer): void {
    console.log("Already stopped");
  }


  name(): string {
    return "Stopped";
  }
}


const player = new MediaPlayer();
console.log(player.getStateName());
player.play();
console.log(player.getStateName());
player.pause();
console.log(player.getStateName());
player.stop();
console.log(player.getStateName());`,
    explanation:
      "The media player changes how controls behave depending on whether it is stopped, playing, or paused.",
  },
  {
    language: "Java",
    code: `interface PlayerState {
    void play(MediaPlayer player);
    void pause(MediaPlayer player);
    void stop(MediaPlayer player);
    String name();
}


class MediaPlayer {
    private PlayerState state;


    public MediaPlayer() {
        this.state = new StoppedState();
    }


    public void setState(PlayerState state) {
        this.state = state;
    }


    public void play() {
        this.state.play(this);
    }


    public void pause() {
        this.state.pause(this);
    }


    public void stop() {
        this.state.stop(this);
    }


    public String getStateName() {
        return this.state.name();
    }
}


class PlayingState implements PlayerState {
    public void play(MediaPlayer player) {
        System.out.println("Already playing");
    }


    public void pause(MediaPlayer player) {
        player.setState(new PausedState());
    }


    public void stop(MediaPlayer player) {
        player.setState(new StoppedState());
    }


    public String name() {
        return "Playing";
    }
}


class PausedState implements PlayerState {
    public void play(MediaPlayer player) {
        player.setState(new PlayingState());
    }


    public void pause(MediaPlayer player) {
        System.out.println("Already paused");
    }


    public void stop(MediaPlayer player) {
        player.setState(new StoppedState());
    }


    public String name() {
        return "Paused";
    }
}


class StoppedState implements PlayerState {
    public void play(MediaPlayer player) {
        player.setState(new PlayingState());
    }


    public void pause(MediaPlayer player) {
        System.out.println("Cannot pause when stopped");
    }


    public void stop(MediaPlayer player) {
        System.out.println("Already stopped");
    }


    public String name() {
        return "Stopped";
    }
}


MediaPlayer player = new MediaPlayer();
System.out.println(player.getStateName());
player.play();
System.out.println(player.getStateName());
player.pause();
System.out.println(player.getStateName());
player.stop();
System.out.println(player.getStateName());`,
    explanation:
      "The Java media player example moves playback behavior into dedicated state classes for playing, paused, and stopped modes.",
  },
  {
    language: "Python",
    code: `from abc import ABC, abstractmethod


class PlayerState(ABC):
    @abstractmethod
    def play(self, player: "MediaPlayer") -> None:
        pass


    @abstractmethod
    def pause(self, player: "MediaPlayer") -> None:
        pass


    @abstractmethod
    def stop(self, player: "MediaPlayer") -> None:
        pass


    @abstractmethod
    def name(self) -> str:
        pass


class MediaPlayer:
    def __init__(self) -> None:
        self.state: PlayerState = StoppedState()


    def set_state(self, state: PlayerState) -> None:
        self.state = state


    def play(self) -> None:
        self.state.play(self)


    def pause(self) -> None:
        self.state.pause(self)


    def stop(self) -> None:
        self.state.stop(self)


    def get_state_name(self) -> str:
        return self.state.name()


class PlayingState(PlayerState):
    def play(self, player: MediaPlayer) -> None:
        print("Already playing")


    def pause(self, player: MediaPlayer) -> None:
        player.set_state(PausedState())


    def stop(self, player: MediaPlayer) -> None:
        player.set_state(StoppedState())


    def name(self) -> str:
        return "Playing"


class PausedState(PlayerState):
    def play(self, player: MediaPlayer) -> None:
        player.set_state(PlayingState())


    def pause(self, player: MediaPlayer) -> None:
        print("Already paused")


    def stop(self, player: MediaPlayer) -> None:
        player.set_state(StoppedState())


    def name(self) -> str:
        return "Paused"


class StoppedState(PlayerState):
    def play(self, player: MediaPlayer) -> None:
        player.set_state(PlayingState())


    def pause(self, player: MediaPlayer) -> None:
        print("Cannot pause when stopped")


    def stop(self, player: MediaPlayer) -> None:
        print("Already stopped")


    def name(self) -> str:
        return "Stopped"


player = MediaPlayer()
print(player.get_state_name())
player.play()
print(player.get_state_name())
player.pause()
print(player.get_state_name())
player.stop()
print(player.get_state_name())`,
    explanation:
      "The Python media player example uses the current state to determine what each control does at runtime.",
  },
  {
    language: "Angular",
    code: `interface PlayerState {
  play(player: MediaPlayer): void;
  pause(player: MediaPlayer): void;
  stop(player: MediaPlayer): void;
  name(): string;
}


class MediaPlayer {
  private state: PlayerState;


  constructor() {
    this.state = new StoppedState();
  }


  setState(state: PlayerState): void {
    this.state = state;
  }


  play(): void {
    this.state.play(this);
  }


  pause(): void {
    this.state.pause(this);
  }


  stop(): void {
    this.state.stop(this);
  }


  getStateName(): string {
    return this.state.name();
  }
}


class PlayingState implements PlayerState {
  play(player: MediaPlayer): void {
    console.log("Already playing");
  }


  pause(player: MediaPlayer): void {
    player.setState(new PausedState());
  }


  stop(player: MediaPlayer): void {
    player.setState(new StoppedState());
  }


  name(): string {
    return "Playing";
  }
}


class PausedState implements PlayerState {
  play(player: MediaPlayer): void {
    player.setState(new PlayingState());
  }


  pause(player: MediaPlayer): void {
    console.log("Already paused");
  }


  stop(player: MediaPlayer): void {
    player.setState(new StoppedState());
  }


  name(): string {
    return "Paused";
  }
}


class StoppedState implements PlayerState {
  play(player: MediaPlayer): void {
    player.setState(new PlayingState());
  }


  pause(player: MediaPlayer): void {
    console.log("Cannot pause when stopped");
  }


  stop(player: MediaPlayer): void {
    console.log("Already stopped");
  }


  name(): string {
    return "Stopped";
  }
}


const player = new MediaPlayer();
console.log(player.getStateName());
player.play();
console.log(player.getStateName());
player.pause();
console.log(player.getStateName());
player.stop();
console.log(player.getStateName());`,
    explanation:
      "The Angular media player example lets each state decide how playback controls should behave.",
  },
  {
    language: "React",
    code: `import React, { useMemo } from "react";


interface PlayerState {
  play(player: MediaPlayer): void;
  pause(player: MediaPlayer): void;
  stop(player: MediaPlayer): void;
  name(): string;
}


class MediaPlayer {
  private state: PlayerState;


  constructor() {
    this.state = new StoppedState();
  }


  setState(state: PlayerState): void {
    this.state = state;
  }


  play(): void {
    this.state.play(this);
  }


  pause(): void {
    this.state.pause(this);
  }


  stop(): void {
    this.state.stop(this);
  }


  getStateName(): string {
    return this.state.name();
  }
}


class PlayingState implements PlayerState {
  play(player: MediaPlayer): void {
    console.log("Already playing");
  }


  pause(player: MediaPlayer): void {
    player.setState(new PausedState());
  }


  stop(player: MediaPlayer): void {
    player.setState(new StoppedState());
  }


  name(): string {
    return "Playing";
  }
}


class PausedState implements PlayerState {
  play(player: MediaPlayer): void {
    player.setState(new PlayingState());
  }


  pause(player: MediaPlayer): void {
    console.log("Already paused");
  }


  stop(player: MediaPlayer): void {
    player.setState(new StoppedState());
  }


  name(): string {
    return "Paused";
  }
}


class StoppedState implements PlayerState {
  play(player: MediaPlayer): void {
    player.setState(new PlayingState());
  }


  pause(player: MediaPlayer): void {
    console.log("Cannot pause when stopped");
  }


  stop(player: MediaPlayer): void {
    console.log("Already stopped");
  }


  name(): string {
    return "Stopped";
  }
}


function PlayerPreview({ player }: { player: MediaPlayer }) {
  return <p>{player.getStateName()}</p>;
}


export function App() {
  const player = useMemo(() => new MediaPlayer(), []);


  useMemo(() => {
    player.play();
  }, [player]);


  return (
    <main>
      <h1>Media Player State</h1>
      <PlayerPreview player={player} />
    </main>
  );
}`,
    explanation:
      "The React example displays the current playback state while state objects control playback transitions.",
  },
  {
    language: "React_Native",
    code: `import React, { useMemo } from "react";
import { SafeAreaView, Text, View } from "react-native";


interface PlayerState {
  play(player: MediaPlayer): void;
  pause(player: MediaPlayer): void;
  stop(player: MediaPlayer): void;
  name(): string;
}


class MediaPlayer {
  private state: PlayerState;


  constructor() {
    this.state = new StoppedState();
  }


  setState(state: PlayerState): void {
    this.state = state;
  }


  play(): void {
    this.state.play(this);
  }


  pause(): void {
    this.state.pause(this);
  }


  stop(): void {
    this.state.stop(this);
  }


  getStateName(): string {
    return this.state.name();
  }
}


class PlayingState implements PlayerState {
  play(player: MediaPlayer): void {
    console.log("Already playing");
  }


  pause(player: MediaPlayer): void {
    player.setState(new PausedState());
  }


  stop(player: MediaPlayer): void {
    player.setState(new StoppedState());
  }


  name(): string {
    return "Playing";
  }
}


class PausedState implements PlayerState {
  play(player: MediaPlayer): void {
    player.setState(new PlayingState());
  }


  pause(player: MediaPlayer): void {
    console.log("Already paused");
  }


  stop(player: MediaPlayer): void {
    player.setState(new StoppedState());
  }


  name(): string {
    return "Paused";
  }
}


class StoppedState implements PlayerState {
  play(player: MediaPlayer): void {
    player.setState(new PlayingState());
  }


  pause(player: MediaPlayer): void {
    console.log("Cannot pause when stopped");
  }


  stop(player: MediaPlayer): void {
    console.log("Already stopped");
  }


  name(): string {
    return "Stopped";
  }
}


function PlayerPreview({ player }: { player: MediaPlayer }) {
  return (
    <View>
      <Text>{player.getStateName()}</Text>
    </View>
  );
}


export function App() {
  const player = useMemo(() => new MediaPlayer(), []);


  useMemo(() => {
    player.play();
  }, [player]);


  return (
    <SafeAreaView style={{ flex: 1, justifyContent: "center", padding: 24 }}>
      <View style={{ gap: 16 }}>
        <Text style={{ fontSize: 24, fontWeight: "600" }}>Media Player State</Text>
        <PlayerPreview player={player} />
      </View>
    </SafeAreaView>
  );
}`,
    explanation:
      "The React Native example shows the player’s current playback mode while the state classes handle control behavior.",
  },
  {
    language: "C#",
    code: `using System;


public interface IPlayerState
{
    void Play(MediaPlayer player);
    void Pause(MediaPlayer player);
    void Stop(MediaPlayer player);
    string Name();
}


public class MediaPlayer
{
    private IPlayerState _state;


    public MediaPlayer()
    {
        _state = new StoppedState();
    }


    public void SetState(IPlayerState state)
    {
        _state = state;
    }


    public void Play()
    {
        _state.Play(this);
    }


    public void Pause()
    {
        _state.Pause(this);
    }


    public void Stop()
    {
        _state.Stop(this);
    }


    public string GetStateName()
    {
        return _state.Name();
    }
}


public class PlayingState : IPlayerState
{
    public void Play(MediaPlayer player)
    {
        Console.WriteLine("Already playing");
    }


    public void Pause(MediaPlayer player)
    {
        player.SetState(new PausedState());
    }


    public void Stop(MediaPlayer player)
    {
        player.SetState(new StoppedState());
    }


    public string Name()
    {
        return "Playing";
    }
}


public class PausedState : IPlayerState
{
    public void Play(MediaPlayer player)
    {
        player.SetState(new PlayingState());
    }


    public void Pause(MediaPlayer player)
    {
        Console.WriteLine("Already paused");
    }


    public void Stop(MediaPlayer player)
    {
        player.SetState(new StoppedState());
    }


    public string Name()
    {
        return "Paused";
    }
}


public class StoppedState : IPlayerState
{
    public void Play(MediaPlayer player)
    {
        player.SetState(new PlayingState());
    }


    public void Pause(MediaPlayer player)
    {
        Console.WriteLine("Cannot pause when stopped");
    }


    public void Stop(MediaPlayer player)
    {
        Console.WriteLine("Already stopped");
    }


    public string Name()
    {
        return "Stopped";
    }
}


var player = new MediaPlayer();
Console.WriteLine(player.GetStateName());
player.Play();
Console.WriteLine(player.GetStateName());
player.Pause();
Console.WriteLine(player.GetStateName());
player.Stop();
Console.WriteLine(player.GetStateName());`,
    explanation:
      "The C# media player example encapsulates playback behavior in state classes and lets the player switch between them.",
  },
  {
    language: ".NET",
    code: `using System;
using Microsoft.Extensions.DependencyInjection;


public interface IPlayerState
{
    void Play(MediaPlayer player);
    void Pause(MediaPlayer player);
    void Stop(MediaPlayer player);
    string Name();
}


public class MediaPlayer
{
    private IPlayerState _state;


    public MediaPlayer()
    {
        _state = new StoppedState();
    }


    public void SetState(IPlayerState state)
    {
        _state = state;
    }


    public void Play()
    {
        _state.Play(this);
    }


    public void Pause()
    {
        _state.Pause(this);
    }


    public void Stop()
    {
        _state.Stop(this);
    }


    public string GetStateName()
    {
        return _state.Name();
    }
}


public class PlayingState : IPlayerState
{
    public void Play(MediaPlayer player)
    {
        Console.WriteLine("Already playing");
    }


    public void Pause(MediaPlayer player)
    {
        player.SetState(new PausedState());
    }


    public void Stop(MediaPlayer player)
    {
        player.SetState(new StoppedState());
    }


    public string Name()
    {
        return "Playing";
    }
}


public class PausedState : IPlayerState
{
    public void Play(MediaPlayer player)
    {
        player.SetState(new PlayingState());
    }


    public void Pause(MediaPlayer player)
    {
        Console.WriteLine("Already paused");
    }


    public void Stop(MediaPlayer player)
    {
        player.SetState(new StoppedState());
    }


    public string Name()
    {
        return "Paused";
    }
}


public class StoppedState : IPlayerState
{
    public void Play(MediaPlayer player)
    {
        player.SetState(new PlayingState());
    }


    public void Pause(MediaPlayer player)
    {
        Console.WriteLine("Cannot pause when stopped");
    }


    public void Stop(MediaPlayer player)
    {
        Console.WriteLine("Already stopped");
    }


    public string Name()
    {
        return "Stopped";
    }
}


var services = new ServiceCollection();
services.AddSingleton<MediaPlayer>();

var provider = services.BuildServiceProvider();
var player = provider.GetRequiredService<MediaPlayer>();


Console.WriteLine(player.GetStateName());
player.Play();
Console.WriteLine(player.GetStateName());
player.Pause();
Console.WriteLine(player.GetStateName());
player.Stop();
Console.WriteLine(player.GetStateName());`,
    explanation:
      "The .NET media player example resolves the player through dependency injection while the state objects determine how the controls behave.",
  },
];
