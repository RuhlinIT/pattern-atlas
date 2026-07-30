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
  {
    language: "React",
    code: `import React, { useMemo } from "react";

type UserRecord = {
  id: number;
  name: string;
};

interface UserDirectory {
  listUsers(): UserRecord[];
}

class CsvUserSource {
  fetchRows(): string[] {
    return ["1,Ada Lovelace", "2,Grace Hopper"];
  }
}

class CsvUserAdapter implements UserDirectory {
  constructor(private source: CsvUserSource) {}

  listUsers(): UserRecord[] {
    return this.source.fetchRows().map((row) => {
      const [id, name] = row.split(",");
      return { id: Number(id), name };
    });
  }
}

function UserList({ directory }: { directory: UserDirectory }) {
  const users = useMemo(() => directory.listUsers(), [directory]);

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          {user.name} (#{user.id})
        </li>
      ))}
    </ul>
  );
}

export function App() {
  const directory = useMemo(() => new CsvUserAdapter(new CsvUserSource()), []);

  return (
    <main>
      <h1>User Directory</h1>
      <UserList directory={directory} />
    </main>
  );
}`,
    explanation:
      "The React component depends on a directory interface, while the adapter converts CSV rows into structured user records behind the scenes.",
  },
  {
    language: "React_Native",
    code: `import React, { useMemo } from "react";
import { FlatList, SafeAreaView, Text, View } from "react-native";

type UserRecord = {
  id: number;
  name: string;
};

interface UserDirectory {
  listUsers(): UserRecord[];
}

class CsvUserSource {
  fetchRows(): string[] {
    return ["1,Ada Lovelace", "2,Grace Hopper"];
  }
}

class CsvUserAdapter implements UserDirectory {
  constructor(private source: CsvUserSource) {}

  listUsers(): UserRecord[] {
    return this.source.fetchRows().map((row) => {
      const [id, name] = row.split(",");
      return { id: Number(id), name };
    });
  }
}

function UserDirectoryList({ directory }: { directory: UserDirectory }) {
  const users = useMemo(() => directory.listUsers(), [directory]);

  return (
    <FlatList
      data={users}
      keyExtractor={(item) => String(item.id)}
      renderItem={({ item }) => (
        <View style={{ paddingVertical: 8 }}>
          <Text style={{ fontSize: 16 }}>{item.name}</Text>
          <Text style={{ color: "#666" }}>ID: {item.id}</Text>
        </View>
      )}
    />
  );
}

export function App() {
  const directory = useMemo(() => new CsvUserAdapter(new CsvUserSource()), []);

  return (
    <SafeAreaView style={{ flex: 1, padding: 16 }}>
      <Text style={{ fontSize: 24, fontWeight: "600", marginBottom: 12 }}>
        User Directory
      </Text>
      <UserDirectoryList directory={directory} />
    </SafeAreaView>
  );
}`,
    explanation:
      "The React Native example uses the same adapter idea, but renders the adapted data with mobile-friendly components instead of HTML elements.",
  },
  {
    language: "C#",
    code: `using System;
using System.Collections.Generic;
using System.Linq;

public interface IUserDirectory
{
    List<UserRecord> ListUsers();
}

public class CsvUserSource
{
    public List<string> FetchRows()
    {
        return new List<string> { "1,Ada Lovelace", "2,Grace Hopper" };
    }
}

public class UserRecord
{
    public int Id { get; }
    public string Name { get; }

    public UserRecord(int id, string name)
    {
        Id = id;
        Name = name;
    }
}

public class CsvUserAdapter : IUserDirectory
{
    private readonly CsvUserSource _source;

    public CsvUserAdapter(CsvUserSource source)
    {
        _source = source;
    }

    public List<UserRecord> ListUsers()
    {
        return _source.FetchRows()
            .Select(row =>
            {
                var parts = row.Split(',');
                return new UserRecord(int.Parse(parts[0]), parts[1]);
            })
            .ToList();
    }
}

var directory = new CsvUserAdapter(new CsvUserSource());
Console.WriteLine(directory.ListUsers().Count);`,
    explanation:
      "The C# adapter converts raw CSV rows into structured user records that the rest of the application can consume through a clean interface.",
  },
  {
    language: ".NET",
    code: `using System;
using System.Collections.Generic;
using System.Linq;

public interface IUserDirectory
{
    List<UserRecord> ListUsers();
}

public class CsvUserSource
{
    public List<string> FetchRows()
    {
        return new List<string> { "1,Ada Lovelace", "2,Grace Hopper" };
    }
}

public record UserRecord(int Id, string Name);

public class CsvUserAdapter : IUserDirectory
{
    private readonly CsvUserSource _source;

    public CsvUserAdapter(CsvUserSource source)
    {
        _source = source;
    }

    public List<UserRecord> ListUsers()
    {
        return _source.FetchRows()
            .Select(row =>
            {
                var parts = row.Split(',');
                return new UserRecord(int.Parse(parts[0]), parts[1]);
            })
            .ToList();
    }
}

IUserDirectory directory = new CsvUserAdapter(new CsvUserSource());
Console.WriteLine(string.Join(", ", directory.ListUsers().Select(u => u.Name)));`,
    explanation:
      "The .NET version uses a record for the user model and an adapter to translate legacy CSV data into the structured interface expected by application code.",
  },
];
