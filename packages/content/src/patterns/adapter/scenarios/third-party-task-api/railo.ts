import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const railo = {
  language: "railo",
  code: `<cfscript>
component displayname="TaskAdapter" {

    public struct function fromExternal(required struct task) {
        return {
            id: arguments.task.id,
            description: arguments.task.desc,
            isCompleted: arguments.task.complete == 1
        };
    }

    public array function fromExternalList(required array tasks) {
        var adapted = [];

        for (var task in arguments.tasks) {
            arrayAppend(adapted, fromExternal(task));
        }

        return adapted;
    }
}

externalTasks = [
    {
        id: "1",
        desc: "Finish report",
        complete: 1
    },
    {
        id: "2",
        desc: "Call client",
        complete: 0
    }
];

adapter = new TaskAdapter();
tasks = adapter.fromExternalList(externalTasks);

writeOutput(arrayLen(tasks));
</cfscript>
`,
} satisfies PatternLanguageExample;