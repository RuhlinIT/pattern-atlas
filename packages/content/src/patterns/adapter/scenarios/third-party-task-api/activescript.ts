import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const activescript = {
  language: "vbscript",
  code: `Class TaskAdapter

    Public Function FromExternal(externalTask)
        Dim task
        Set task = CreateObject("Scripting.Dictionary")

        task.Add "id", externalTask("task_id")
        task.Add "description", externalTask("title")
        task.Add "isCompleted", (externalTask("status") = "done")

        Set FromExternal = task
    End Function

    Public Function FromExternalList(externalTasks)
        Dim adapted
        Dim externalTask

        Set adapted = CreateObject("Scripting.Dictionary")

        For Each externalTask In externalTasks
            adapted.Add externalTask("task_id"), _
                FromExternal(externalTask)
        Next

        Set FromExternalList = adapted
    End Function

End Class

Function ExternalTask(id, title, status)
    Dim task
    Set task = CreateObject("Scripting.Dictionary")

    task.Add "task_id", id
    task.Add "title", title
    task.Add "status", status

    Set ExternalTask = task
End Function

Dim externalTasks
Dim adapter
Dim tasks

Set externalTasks = CreateObject("Scripting.Dictionary")
externalTasks.Add "1", ExternalTask( _
    "1", "Finish report", "done")
externalTasks.Add "2", ExternalTask( _
    "2", "Call client", "open")

Set adapter = New TaskAdapter
Set tasks = adapter.FromExternalList(externalTasks)

WScript.Echo tasks("1")("description")
WScript.Echo tasks("1")("isCompleted")
`,
} satisfies PatternLanguageExample;