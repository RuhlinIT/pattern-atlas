import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const actixWeb = {
  language: "rust",
  code: `use actix_web::{get, App, HttpServer, Responder};
use serde::Serialize;

#[derive(Debug, Clone, Serialize)]
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

struct TaskAdapter;

impl TaskAdapter {
    fn from_external(task: &ExternalTask) -> Task {
        Task {
            id: task.id.clone(),
            description: task.desc.clone(),
            is_completed: task.complete == 1,
        }
    }

    fn from_external_list(tasks: &[ExternalTask]) -> Vec<Task> {
        tasks.iter().map(Self::from_external).collect()
    }
}

fn fetch_tasks() -> Vec<ExternalTask> {
    vec![
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
    ]
}

#[get("/tasks")]
async fn list_tasks() -> impl Responder {
    let tasks = TaskAdapter::from_external_list(&fetch_tasks());
    actix_web::web::Json(tasks)
}

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    HttpServer::new(|| App::new().service(list_tasks))
        .bind(("127.0.0.1", 3000))?
        .run()
        .await
}
`,
} satisfies PatternLanguageExample;