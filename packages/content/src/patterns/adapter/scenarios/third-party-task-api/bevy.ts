import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const bevy = {
  language: "rust",
  code: `use bevy::prelude::*;

#[derive(Debug, Clone)]
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

#[derive(Resource)]
struct Tasks(pub Vec<Task>);

fn setup(mut commands: Commands) {
    let tasks = TaskAdapter::from_external_list(&fetch_tasks());
    commands.insert_resource(Tasks(tasks));
}

fn draw_tasks(tasks: Res<Tasks>, mut commands: Commands, asset_server: Res<AssetServer>) {
    let font = asset_server.load("fonts/FiraSans-Bold.ttf");

    commands.spawn(Camera2dBundle::default());

    for (i, task) in tasks.0.iter().enumerate() {
        commands.spawn(TextBundle {
            text: Text::from_section(
                format!("{} {}", task.description, if task.is_completed { "✓" } else { "✗" }),
                TextStyle {
                    font: font.clone(),
                    font_size: 24.0,
                    color: Color::BLACK,
                },
            ),
            style: Style {
                position_type: PositionType::Absolute,
                left: Val::Px(20.0),
                top: Val::Px(20.0 + (i as f32 * 30.0)),
                ..default()
            },
            ..default()
        });
    }
}

fn main() {
    App::new()
        .add_plugins(DefaultPlugins)
        .add_systems(Startup, setup)
        .add_systems(Startup, draw_tasks)
        .run();
}
`,
} satisfies PatternLanguageExample;