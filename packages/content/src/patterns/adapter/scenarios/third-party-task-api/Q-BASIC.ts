import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const Q_BASIC = {
  language: "qbasic",
  code: `TYPE Task
    Id AS STRING
    Description AS STRING
    IsCompleted AS INTEGER
END TYPE

TYPE ExternalTask
    Id AS STRING
    Desc AS STRING
    Complete AS INTEGER
END TYPE

FUNCTION AdaptTask (externalTask AS ExternalTask) AS Task
    DIM adapted AS Task

    adapted.Id = externalTask.Id
    adapted.Description = externalTask.Desc
    adapted.IsCompleted = (externalTask.Complete = 1)

    AdaptTask = adapted
END FUNCTION

SUB AdaptTaskList (externalTasks() AS ExternalTask, adaptedTasks() AS Task)
    FOR i = LBOUND(externalTasks) TO UBOUND(externalTasks)
        adaptedTasks(i) = AdaptTask(externalTasks(i))
    NEXT i
END SUB

DIM externalTasks(1 TO 2) AS ExternalTask
DIM adaptedTasks(1 TO 2) AS Task

externalTasks(1).Id = "1"
externalTasks(1).Desc = "Finish report"
externalTasks(1).Complete = 1

externalTasks(2).Id = "2"
externalTasks(2).Desc = "Call client"
externalTasks(2).Complete = 0

CALL AdaptTaskList(externalTasks(), adaptedTasks())

FOR i = LBOUND(adaptedTasks) TO UBOUND(adaptedTasks)
    PRINT adaptedTasks(i).Description;
    IF adaptedTasks(i).IsCompleted THEN
        PRINT " - COMPLETED"
    ELSE
        PRINT " - PENDING"
    END IF
NEXT i

END
`,
} satisfies PatternLanguageExample;