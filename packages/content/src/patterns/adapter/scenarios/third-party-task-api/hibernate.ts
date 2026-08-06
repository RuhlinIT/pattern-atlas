import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const hibernate = {
  language: "java",
  code: `import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import org.hibernate.Session;
import org.hibernate.SessionFactory;

public final class TaskAdapterExample {

    public record ExternalTask(
        String taskId,
        String title,
        String status
    ) {}

    public record Task(
        String id,
        String description,
        boolean isCompleted
    ) {}

    @Entity
    @Table(name = "tasks")
    public static class TaskEntity {
        @Id
        private String id;

        @Column(nullable = false)
        private String title;

        @Column(nullable = false)
        private String status;

        protected TaskEntity() {
        }

        public TaskEntity(
            String id,
            String title,
            String status
        ) {
            this.id = id;
            this.title = title;
            this.status = status;
        }

        public String getId() {
            return id;
        }

        public String getTitle() {
            return title;
        }

        public String getStatus() {
            return status;
        }
    }

    public static final class TaskAdapter {

        public static TaskEntity toEntity(
            ExternalTask externalTask
        ) {
            return new TaskEntity(
                externalTask.taskId(),
                externalTask.title(),
                externalTask.status()
            );
        }

        public static Task fromEntity(
            TaskEntity entity
        ) {
            return new Task(
                entity.getId(),
                entity.getTitle(),
                "done".equals(entity.getStatus())
            );
        }
    }

    public static Task save(
        SessionFactory sessionFactory,
        ExternalTask externalTask
    ) {
        try (Session session = sessionFactory.openSession()) {
            session.beginTransaction();

            TaskEntity entity =
                TaskAdapter.toEntity(externalTask);

            session.persist(entity);
            session.getTransaction().commit();

            return TaskAdapter.fromEntity(entity);
        }
    }
}
`,
} satisfies PatternLanguageExample;