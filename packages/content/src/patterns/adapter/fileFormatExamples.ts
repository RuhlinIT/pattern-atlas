import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const fileFormatExamples: PatternLanguageExample[] = [
  {
    language: "TypeScript",
    code: `interface UserDirectory {
  listUsers(): { id: number; name: string }[];
}

class CsvUserSource {
  fetchRows(): string[] {
    return ["1,Ada Lovelace", "2,Grace Hopper"];
  }
}

class CsvUserAdapter implements UserDirectory {
  constructor(private source: CsvUserSource) {}

  listUsers(): { id: number; name: string }[] {
    return this.source.fetchRows().map((row) => {
      const [id, name] = row.split(",");
      return { id: Number(id), name };
    });
  }
}

const directory = new CsvUserAdapter(new CsvUserSource());
console.log(directory.listUsers());`,
    explanation:
      "The adapter converts raw CSV rows into the structured user records expected by the application.",
  },
  {
    language: "Java",
    code: `import java.util.ArrayList;
import java.util.List;

interface UserDirectory {
    List<UserRecord> listUsers();
}

class CsvUserSource {
    public List<String> fetchRows() {
        return List.of("1,Ada Lovelace", "2,Grace Hopper");
    }
}

class UserRecord {
    public final int id;
    public final String name;

    public UserRecord(int id, String name) {
        this.id = id;
        this.name = name;
    }
}

class CsvUserAdapter implements UserDirectory {
    private final CsvUserSource source;

    public CsvUserAdapter(CsvUserSource source) {
        this.source = source;
    }

    public List<UserRecord> listUsers() {
        List<UserRecord> users = new ArrayList<>();

        for (String row : source.fetchRows()) {
            String[] parts = row.split(",");
            users.add(new UserRecord(Integer.parseInt(parts[0]), parts[1]));
        }

        return users;
    }
}

UserDirectory directory = new CsvUserAdapter(new CsvUserSource());
System.out.println(directory.listUsers().size());`,
    explanation:
      "The adapter shields the rest of the app from raw CSV parsing by exposing the structured directory interface it already expects.",
  },
  {
    language: "Python",
    code: `from abc import ABC, abstractmethod

class UserDirectory(ABC):
    @abstractmethod
    def list_users(self) -> list[dict[str, object]]:
        pass

class CsvUserSource:
    def fetch_rows(self) -> list[str]:
        return ["1,Ada Lovelace", "2,Grace Hopper"]

class CsvUserAdapter(UserDirectory):
    def __init__(self, source: CsvUserSource) -> None:
        self.source = source

    def list_users(self) -> list[dict[str, object]]:
        users = []

        for row in self.source.fetch_rows():
            user_id, name = row.split(",")
            users.append({"id": int(user_id), "name": name})

        return users

directory = CsvUserAdapter(CsvUserSource())
print(directory.list_users())`,
    explanation:
      "The adapter translates legacy row data into the structured records that client code can consume consistently.",
  },
  {
    language: "Angular",
    code: `import { Injectable } from '@angular/core';


  type UserRecord = {
    id: number;
    name: string;
  };


  abstract class UserDirectory {
    abstract listUsers(): UserRecord[];
  }


  @Injectable({ providedIn: 'root' })
  class CsvUserSource {
    fetchRows(): string[] {
      return ['1,Ada Lovelace', '2,Grace Hopper'];
    }
  }


  @Injectable({ providedIn: 'root' })
  class CsvUserAdapter extends UserDirectory {
    constructor(private source: CsvUserSource) {
      super();
    }


    listUsers(): UserRecord[] {
      return this.source.fetchRows().map((row) => {
        const [id, name] = row.split(',');
        return { id: Number(id), name };
      });
    }
  }`,
    explanation:
      "The Angular adapter service converts CSV rows into the structured user records expected by the rest of the application.",
  },
];
