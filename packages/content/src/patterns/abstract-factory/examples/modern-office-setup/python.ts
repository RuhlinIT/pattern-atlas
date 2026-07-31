import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const python: PatternLanguageExample = {
  language: "python",
  title: "Modern office setup",
  code: `from abc import ABC, abstractmethod

class Desk(ABC):
    @abstractmethod
    def sit_at(self) -> str:
        pass

class Chair(ABC):
    @abstractmethod
    def sit_on(self) -> str:
        pass

class Cabinet(ABC):
    @abstractmethod
    def store(self) -> str:
        pass

class OfficeFactory(ABC):
    @abstractmethod
    def create_desk(self) -> Desk:
        pass

    @abstractmethod
    def create_chair(self) -> Chair:
        pass

    @abstractmethod
    def create_cabinet(self) -> Cabinet:
        pass

class ModernDesk(Desk):
    def sit_at(self) -> str:
        return "Sitting at a glass desk"

class ModernChair(Chair):
    def sit_on(self) -> str:
        return "Sitting on an ergonomic mesh chair"

class ModernCabinet(Cabinet):
    def store(self) -> str:
        return "Storing files in a minimalist cabinet"

class ClassicDesk(Desk):
    def sit_at(self) -> str:
        return "Sitting at a wooden desk"

class ClassicChair(Chair):
    def sit_on(self) -> str:
        return "Sitting on a cushioned wooden chair"

class ClassicCabinet(Cabinet):
    def store(self) -> str:
        return "Storing files in a traditional cabinet"

class ModernOfficeFactory(OfficeFactory):
    def create_desk(self) -> Desk:
        return ModernDesk()

    def create_chair(self) -> Chair:
        return ModernChair()

    def create_cabinet(self) -> Cabinet:
        return ModernCabinet()

class ClassicOfficeFactory(OfficeFactory):
    def create_desk(self) -> Desk:
        return ClassicDesk()

    def create_chair(self) -> Chair:
        return ClassicChair()

    def create_cabinet(self) -> Cabinet:
        return ClassicCabinet()

class OfficeSetup:
    def __init__(self, factory: OfficeFactory) -> None:
        self.factory = factory

    def describe(self) -> str:
        desk = self.factory.create_desk()
        chair = self.factory.create_chair()
        cabinet = self.factory.create_cabinet()
        return " | ".join([desk.sit_at(), chair.sit_on(), cabinet.store()])

office = OfficeSetup(ModernOfficeFactory())
print(office.describe())`,
  explanation:
    "The modern office factory creates a related family of furniture objects, keeping the selected style consistent across the entire setup.",
};
