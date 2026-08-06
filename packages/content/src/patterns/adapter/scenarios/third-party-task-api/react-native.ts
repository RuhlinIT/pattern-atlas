import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const reactNative = {
  language: "typescript",
  code: `import React, { useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";

type Task = {
  id: string;
  description: string;
  isCompleted: boolean;
};

type ExternalTask = {
  id: string;
  desc: string;
  complete: number;
};

class TaskAdapter {
  static fromExternal(task: ExternalTask): Task {
    return {
      id: task.id,
      description: task.desc,
      isCompleted: task.complete === 1,
    };
  }

  static fromExternalList(tasks: ExternalTask[]): Task[] {
    return tasks.map((task) => this.fromExternal(task));
  }
}

function fetchTasks(): Promise<ExternalTask[]> {
  return Promise.resolve([
    { id: "1", desc: "Finish report", complete: 1 },
    { id: "2", desc: "Call client", complete: 0 },
  ]);
}

export function TaskScreen() {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    fetchTasks().then((data) => {
      setTasks(TaskAdapter.fromExternalList(data));
    });
  }, []);

  return (
    <View>
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Text>
            {item.description} {item.isCompleted ? "✓" : "✗"}
          </Text>
        )}
      />
    </View>
  );
}
`,
} satisfies PatternLanguageExample;