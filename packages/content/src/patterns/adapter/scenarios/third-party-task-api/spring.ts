import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const spring = {
  language: "java",
  code: `import org.springframework.stereotype.Service;
import java.util.Arrays;
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

@Service
class TaskAdapter {
    Task fromExternal(ExternalTask task) {
        return new InternalTask(
            task.getId(),
            task.getDesc(),
            task.getComplete() == 1
        );
    }

    List<Task> fromExternalList(List<ExternalTask> tasks) {
        return tasks.stream()
            .map(this::fromExternal)
            .collect(Collectors.toList());
    }
}

@Service
class TaskApiService {
    List<ExternalTask> getTasks() {
        return Arrays.asList(
            new ExternalTask("1", "Finish report", 1),
            new ExternalTask("2", "Call client", 0)
        );
    }
}

@Service
class TaskService {
    private final TaskApiService api;
    private final TaskAdapter adapter;

    TaskService(TaskApiService api, TaskAdapter adapter) {
        this.api = api;
        this.adapter = adapter;
    }

    List<Task> getTasks() {
        List<ExternalTask> externalTasks = api.getTasks();
        return adapter.fromExternalList(externalTasks);
    }
}
`,
} satisfies PatternLanguageExample;