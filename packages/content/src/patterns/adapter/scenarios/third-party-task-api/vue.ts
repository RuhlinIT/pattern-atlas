import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const vue = {
  language: "typescript",
  code: `import { computed, ref, onMounted } from "vue";

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

export function useTasks() {
  const tasks = ref<Task[]>([]);
  const loading = ref(false);

  const completedTasks = computed(() =>
    tasks.value.filter((task) => task.isCompleted)
  );

  async function loadTasks() {
    loading.value = true;
    const externalTasks = await fetchTasks();
    tasks.value = TaskAdapter.fromExternalList(externalTasks);
    loading.value = false;
  }

  onMounted(loadTasks);

  return {
    tasks,
    loading,
    completedTasks,
    loadTasks,
  };
}
`,
} satisfies PatternLanguageExample;