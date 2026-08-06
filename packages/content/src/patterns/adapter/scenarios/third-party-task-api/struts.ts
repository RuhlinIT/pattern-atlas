import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const struts = {
  language: "java",
  code: `import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

interface Task {
    String getId();
    String getDescription();
    boolean isCompleted();
}

class ExternalTask {
    private final String id;
    private final String desc;
    private final int complete;

    ExternalTask(String id, String desc, int complete) {
        this.id = id;
        this.desc = desc;
        this.complete = complete;
    }

    String getId() {
        return id;
    }

    String getDesc() {
        return desc;
    }

    int getComplete() {
        return complete;
    }
}

class InternalTask implements Task {
    private final String id;
    private final String description;
    private final boolean completed;

    InternalTask(String id, String description, boolean completed) {
        this.id = id;
        this.description = description;
        this.completed = completed;
    }

    public String getId() {
        return id;
    }

    public String getDescription() {
        return description;
    }

    public boolean isCompleted() {
        return completed;
    }
}

class TaskAdapter {
    static Task fromExternal(ExternalTask task) {
        return new InternalTask(
            task.getId(),
            task.getDesc(),
            task.getComplete() == 1
        );
    }

    static List<Task> fromExternalList(List<ExternalTask> tasks) {
        return tasks.stream()
            .map(TaskAdapter::fromExternal)
            .collect(Collectors.toList());
    }
}

class TaskService {
    List<Task> getTasks() {
        List<ExternalTask> externalTasks = Arrays.asList(
            new ExternalTask("1", "Finish report", 1),
            new ExternalTask("2", "Call client", 0)
        );

        return TaskAdapter.fromExternalList(externalTasks);
    }
}
`,
} satisfies PatternLanguageExample;