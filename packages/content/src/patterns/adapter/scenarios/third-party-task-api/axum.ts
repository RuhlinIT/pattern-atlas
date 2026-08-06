import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const axum = {
  language: "rust",
  code: `use axum::{routing::get, Json, Router};
use serde::Serialize;
use std::net::SocketAddr;

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

async fn list_tasks() -> Json<Vec<Task>> {
    let tasks = TaskAdapter::from_external_list(&fetch_tasks());
    Json(tasks)
}

#[tokio::main]
async fn main() {
    let app = Router::new().route("/tasks", get(list_tasks));

    let addr = SocketAddr::from(([127, 0, 0, 1], 3000));
    let listener = tokio::net::TcpListener::bind(addr).await.unwrap();
    axum::serve(listener, app).await.unwrap();
}
`,
} satisfies PatternLanguageExample;
