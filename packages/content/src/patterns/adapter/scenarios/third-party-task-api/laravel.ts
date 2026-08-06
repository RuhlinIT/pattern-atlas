import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const laravel = {
  language: "php",
  code: `<?php

interface Task {
    public function getId(): string;
    public function getDescription(): string;
    public function isCompleted(): bool;
}

class ExternalTask {
    public string $id;
    public string $desc;
    public int $complete;

    public function __construct(string $id, string $desc, int $complete) {
        $this->id = $id;
        $this->desc = $desc;
        $this->complete = $complete;
    }
}

class InternalTask implements Task {
    private string $id;
    private string $description;
    private bool $completed;

    public function __construct(string $id, string $description, bool $completed) {
        $this->id = $id;
        $this->description = $description;
        $this->completed = $completed;
    }

    public function getId(): string {
        return $this->id;
    }

    public function getDescription(): string {
        return $this->description;
    }

    public function isCompleted(): bool {
        return $this->completed;
    }
}

class TaskAdapter {
    public function fromExternal(ExternalTask $task): Task {
        return new InternalTask(
            $task->id,
            $task->desc,
            $task->complete === 1
        );
    }

    public function fromExternalList(array $tasks): array {
        return array_map(fn($task) => $this->fromExternal($task), $tasks);
    }
}

class TaskApiService {
    public function getTasks(): array {
        return [
            new ExternalTask("1", "Finish report", 1),
            new ExternalTask("2", "Call client", 0),
        ];
    }
}

class TaskService {
    private TaskApiService $api;
    private TaskAdapter $adapter;

    public function __construct(TaskApiService $api, TaskAdapter $adapter) {
        $this->api = $api;
        $this->adapter = $adapter;
    }

    public function getTasks(): array {
        $externalTasks = $this->api->getTasks();
        return $this->adapter->fromExternalList($externalTasks);
    }
}

$service = new TaskService(new TaskApiService(), new TaskAdapter());
echo count($service->getTasks()) . PHP_EOL;
`,
} satisfies PatternLanguageExample;