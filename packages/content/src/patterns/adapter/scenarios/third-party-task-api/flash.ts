import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const flash = {
  language: "actionscript",
  code: `package {

    public class Task {
        public var id:String;
        public var description:String;
        public var isCompleted:Boolean;

        public function Task(
            id:String,
            description:String,
            isCompleted:Boolean
        ) {
            this.id = id;
            this.description = description;
            this.isCompleted = isCompleted;
        }
    }

    public class ExternalTask {
        public var task_id:String;
        public var title:String;
        public var status:String;

        public function ExternalTask(
            task_id:String,
            title:String,
            status:String
        ) {
            this.task_id = task_id;
            this.title = title;
            this.status = status;
        }
    }

    public class TaskAdapter {
        public static function fromExternal(
            task:ExternalTask
        ):Task {
            return new Task(
                task.task_id,
                task.title,
                task.status == "done"
            );
        }

        public static function fromExternalList(
            tasks:Array
        ):Array {
            var adapted:Array = [];

            for each (var task:ExternalTask in tasks) {
                adapted.push(fromExternal(task));
            }

            return adapted;
        }
    }

    public class TaskService {
        public function getTasks():Array {
            var externalTasks:Array = [
                new ExternalTask(
                    "1",
                    "Finish report",
                    "done"
                ),
                new ExternalTask(
                    "2",
                    "Call client",
                    "open"
                )
            ];

            return TaskAdapter.fromExternalList(externalTasks);
        }
    }
}
`,
} satisfies PatternLanguageExample;