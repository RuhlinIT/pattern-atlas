import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const unrealEngine = {
  language: "cpp",
  code: `#include "CoreMinimal.h"
#include "Containers/Array.h"

struct FTask
{
    FString Id;
    FString Description;
    bool bIsCompleted;
};

struct FExternalTask
{
    FString Id;
    FString Desc;
    int32 Complete;
};

class FTaskAdapter
{
public:
    static FTask FromExternal(const FExternalTask& Task)
    {
        return FTask{
            Task.Id,
            Task.Desc,
            Task.Complete == 1
        };
    }

    static TArray<FTask> FromExternalList(const TArray<FExternalTask>& Tasks)
    {
        TArray<FTask> Adapted;
        Adapted.Reserve(Tasks.Num());

        for (const FExternalTask& Task : Tasks)
        {
            Adapted.Add(FromExternal(Task));
        }

        return Adapted;
    }
};

class FTaskService
{
public:
    TArray<FTask> GetTasks() const
    {
        TArray<FExternalTask> ExternalTasks;
        ExternalTasks.Add({TEXT("1"), TEXT("Finish report"), 1});
        ExternalTasks.Add({TEXT("2"), TEXT("Call client"), 0});

        return FTaskAdapter::FromExternalList(ExternalTasks);
    }
};
`,
} satisfies PatternLanguageExample;