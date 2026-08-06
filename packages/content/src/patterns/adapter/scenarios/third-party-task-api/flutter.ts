import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const flutter = {
  language: "dart",
  code: `import 'package:flutter/material.dart';

class Task {
  final String id;
  final String description;
  final bool isCompleted;

  Task({
    required this.id,
    required this.description,
    required this.isCompleted,
  });
}

class ExternalTask {
  final String id;
  final String desc;
  final int complete;

  ExternalTask({
    required this.id,
    required this.desc,
    required this.complete,
  });
}

class TaskAdapter {
  static Task fromExternal(ExternalTask task) {
    return Task(
      id: task.id,
      description: task.desc,
      isCompleted: task.complete == 1,
    );
  }

  static List<Task> fromExternalList(List<ExternalTask> tasks) {
    return tasks.map(fromExternal).toList();
  }
}

Future<List<ExternalTask>> fetchTasks() async {
  return [
    ExternalTask(id: "1", desc: "Finish report", complete: 1),
    ExternalTask(id: "2", desc: "Call client", complete: 0),
  ];
}

class TaskListScreen extends StatefulWidget {
  const TaskListScreen({super.key});

  @override
  State<TaskListScreen> createState() => _TaskListScreenState();
}

class _TaskListScreenState extends State<TaskListScreen> {
  List<Task> tasks = [];

  @override
  void initState() {
    super.initState();
    loadTasks();
  }

  Future<void> loadTasks() async {
    final externalTasks = await fetchTasks();
    setState(() {
      tasks = TaskAdapter.fromExternalList(externalTasks);
    });
  }

  @override
  Widget build(BuildContext context) {
    return ListView(
      children: tasks
          .map(
            (task) => ListTile(
              title: Text(task.description),
              trailing: Text(task.isCompleted ? '✓' : '✗'),
            ),
          )
          .toList(),
    );
  }
}
`,
} satisfies PatternLanguageExample;