import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const babylonJs = {
  language: "typescript",
  code: `type Task = {
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

export async function createTaskOverlay(scene: any) {
  const externalTasks = await fetchTasks();
  const tasks = TaskAdapter.fromExternalList(externalTasks);

  tasks.forEach((task, index) => {
    const plane = BABYLON.MeshBuilder.CreatePlane(
      "task-" + task.id,
      { width: 2, height: 0.4 },
      scene
    );

    plane.position.y = 2 - index * 0.5;

    const texture = BABYLON.GUI.AdvancedDynamicTexture.CreateForMesh(plane);
    const text = new BABYLON.GUI.TextBlock();
    text.text = task.description + (task.isCompleted ? " ✓" : " ✗");
    text.color = "black";
    text.fontSize = 18;
    texture.addControl(text);
  });
}
`,
} satisfies PatternLanguageExample;