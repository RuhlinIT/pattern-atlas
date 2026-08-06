import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const salesforce = {
  language: "apex",
  code: `public interface Task {
    String getId();
    String getDescription();
    Boolean isCompleted();
}

public class ExternalTask {
    public String id;
    public String desc;
    public Integer complete;

    public ExternalTask(String id, String desc, Integer complete) {
        this.id = id;
        this.desc = desc;
        this.complete = complete;
    }
}

public class InternalTask implements Task {
    private String id;
    private String description;
    private Boolean completed;

    public InternalTask(
        String id,
        String description,
        Boolean completed
    ) {
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

    public Boolean isCompleted() {
        return completed;
    }
}

public class TaskAdapter {
    public static Task fromExternal(ExternalTask task) {
        return new InternalTask(
            task.id,
            task.desc,
            task.complete == 1
        );
    }

    public static List<Task> fromExternalList(
        List<ExternalTask> tasks
    ) {
        List<Task> adapted = new List<Task>();

        for (ExternalTask task : tasks) {
            adapted.add(fromExternal(task));
        }

        return adapted;
    }
}

public class TaskService {
    public static List<Task> getTasks() {
        List<ExternalTask> externalTasks = new List<ExternalTask>{
            new ExternalTask('1', 'Finish report', 1),
            new ExternalTask('2', 'Call client', 0)
        };

        return TaskAdapter.fromExternalList(externalTasks);
    }
}
`,
} satisfies PatternLanguageExample;