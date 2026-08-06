import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const langChain = {
  language: "typescript",
  code: `import { ChatOpenAI } from "@langchain/openai";
import {
  ChatPromptTemplate,
} from "@langchain/core/prompts";
import { StringOutputParser } from
  "@langchain/core/output_parsers";

type Task = {
  id: string;
  description: string;
  isCompleted: boolean;
};

type ExternalTask = {
  task_id: string;
  title: string;
  status: "open" | "done";
};

type TaskSummary = {
  summary: string;
  taskCount: number;
  completedCount: number;
};

class TaskAdapter {
  static fromExternal(task: ExternalTask): Task {
    return {
      id: task.task_id,
      description: task.title,
      isCompleted: task.status === "done",
    };
  }

  static fromExternalList(
    tasks: ExternalTask[],
  ): Task[] {
    return tasks.map(TaskAdapter.fromExternal);
  }

  static toPromptInput(tasks: Task[]) {
    const completedCount = tasks.filter(
      (task) => task.isCompleted,
    ).length;

    const taskList = tasks
      .map((task) =>
        \`- \${task.description}: \${task.isCompleted
          ? "completed"
          : "pending"}\`,
      )
      .join("\\\\n");

    return {
      taskList,
      taskCount: String(tasks.length),
      completedCount: String(completedCount),
    };
  }

  static fromChainOutput(
    output: string,
    tasks: Task[],
  ): TaskSummary {
    return {
      summary: output,
      taskCount: tasks.length,
      completedCount: tasks.filter(
        (task) => task.isCompleted,
      ).length,
    };
  }
}

class TaskSummaryAdapter {
  private readonly chain;

  constructor() {
    const prompt = ChatPromptTemplate.fromTemplate(
      \`Summarize this task list in two sentences.
Total tasks: {taskCount}
Completed tasks: {completedCount}

Tasks:
{taskList}\`,
    );

    const model = new ChatOpenAI({
      model: "gpt-4o-mini",
      temperature: 0,
    });

    this.chain = prompt
      .pipe(model)
      .pipe(new StringOutputParser());
  }

  async summarize(
    externalTasks: ExternalTask[],
  ): Promise<TaskSummary> {
    const tasks =
      TaskAdapter.fromExternalList(externalTasks);

    const input = TaskAdapter.toPromptInput(tasks);
    const output = await this.chain.invoke(input);

    return TaskAdapter.fromChainOutput(
      output,
      tasks,
    );
  }
}

const externalTasks: ExternalTask[] = [
  {
    task_id: "1",
    title: "Finish report",
    status: "done",
  },
  {
    task_id: "2",
    title: "Call client",
    status: "open",
  },
];

const adapter = new TaskSummaryAdapter();

adapter.summarize(externalTasks).then(console.log);
`,
} satisfies PatternLanguageExample;