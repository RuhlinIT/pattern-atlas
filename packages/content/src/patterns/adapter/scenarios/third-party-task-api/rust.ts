import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const rust = {
  language: "rust",
  code: `#[derive(Debug, Clone)]
struct Task {
    id: String,
    description: String,
    is_completed: bool,
}

#[derive(Debug, Clone)]
struct ExternalTask {
    id: String,
    desc: String,
    complete: i32,
}

trait TaskAdaptable {
    fn from_external(&self, task: &ExternalTask) -> Task;
    fn from_external_list(&self, tasks: &[ExternalTask]) -> Vec<Task>;
}

struct TaskAdapter;

impl TaskAdaptable for TaskAdapter {
    fn from_external(&self, task: &ExternalTask) -> Task {
        Task {
            id: task.id.clone(),
            description: task.desc.clone(),
            is_completed: task.complete == 1,
        }
    }

    fn from_external_list(&self, tasks: &[ExternalTask]) -> Vec<Task> {
        tasks.iter().map(|task| self.from_external(task)).collect()
    }
}

struct TaskService<A: TaskAdaptable> {
    adapter: A,
}

impl<A: TaskAdaptable> TaskService<A> {
    fn new(adapter: A) -> Self {
        Self { adapter }
    }

    fn get_tasks(&self) -> Vec<Task> {
        let external_tasks = vec![
            ExternalTask {
                id: "1".to_string(),
                desc: "Finish report".to_string(),
                complete: 1,
            },
            ExternalTask {
                id: "2".to_string(),
                desc: "Call client".to_string(),
                complete: 0,
            },
        ];

        self.adapter.from_external_list(&external_tasks)
    }
}

fn main() {
    let service = TaskService::new(TaskAdapter);
    let tasks = service.get_tasks();
    println!("{:?}", tasks.len());
}
`,
} satisfies PatternLanguageExample;