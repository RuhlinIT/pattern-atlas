import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const coldfusion = {
  language: "coldfusion",
  code: `<cfcomponent displayname="TaskAdapter">

    <cffunction name="fromExternal" access="public" returntype="struct">
        <cfargument name="task" type="struct" required="true">

        <cfreturn {
            id = arguments.task.id,
            description = arguments.task.desc,
            isCompleted = arguments.task.complete EQ 1
        }>
    </cffunction>

    <cffunction name="fromExternalList" access="public" returntype="array">
        <cfargument name="tasks" type="array" required="true">

        <cfset var adapted = []>

        <cfloop array="#arguments.tasks#" index="task">
            <cfset arrayAppend(adapted, fromExternal(task))>
        </cfloop>

        <cfreturn adapted>
    </cffunction>

</cfcomponent>

<cfscript>
externalTasks = [
    {
        id = "1",
        desc = "Finish report",
        complete = 1
    },
    {
        id = "2",
        desc = "Call client",
        complete = 0
    }
];

adapter = new TaskAdapter();
tasks = adapter.fromExternalList(externalTasks);

writeOutput(arrayLen(tasks));
</cfscript>
`,
} satisfies PatternLanguageExample;