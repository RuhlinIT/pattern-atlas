import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const visualBasic = {
  language: "vbnet",
  code: `Imports System
Imports System.Collections.Generic

Public Interface ITask
    ReadOnly Property Id As String
    ReadOnly Property Description As String
    ReadOnly Property IsCompleted As Boolean
End Interface

Public Class ExternalTask
    Public Property Id As String
    Public Property Desc As String
    Public Property Complete As Integer
End Class

Public Class TaskItem
    Implements ITask

    Public ReadOnly Property Id As String Implements ITask.Id
    Public ReadOnly Property Description As String Implements ITask.Description
    Public ReadOnly Property IsCompleted As Boolean Implements ITask.IsCompleted

    Public Sub New(id As String, description As String, isCompleted As Boolean)
        Me.Id = id
        Me.Description = description
        Me.IsCompleted = isCompleted
    End Sub
End Class

Public Class TaskAdapter
    Public Function FromExternal(task As ExternalTask) As ITask
        Return New TaskItem(task.Id, task.Desc, task.Complete = 1)
    End Function

    Public Function FromExternalList(tasks As List(Of ExternalTask)) As List(Of ITask)
        Dim adapted As New List(Of ITask)()

        For Each task In tasks
            adapted.Add(FromExternal(task))
        Next

        Return adapted
    End Function
End Class

Public Class TaskApiService
    Public Function GetTasks() As List(Of ExternalTask)
        Return New List(Of ExternalTask) From {
            New ExternalTask With {.Id = "1", .Desc = "Finish report", .Complete = 1},
            New ExternalTask With {.Id = "2", .Desc = "Call client", .Complete = 0}
        }
    End Function
End Class
`,
} satisfies PatternLanguageExample;