import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const unity = {
  language: "csharp",
  code: `using System.Collections.Generic;
using UnityEngine;

public interface ITask
{
    string Id { get; }
    string Description { get; }
    bool IsCompleted { get; }
}

public class ExternalTask
{
    public string Id;
    public string Desc;
    public int Complete;
}

public class TaskItem : ITask
{
    public string Id { get; }
    public string Description { get; }
    public bool IsCompleted { get; }

    public TaskItem(string id, string description, bool isCompleted)
    {
        Id = id;
        Description = description;
        IsCompleted = isCompleted;
    }
}

public class TaskAdapter
{
    public ITask FromExternal(ExternalTask task)
    {
        return new TaskItem(task.Id, task.Desc, task.Complete == 1);
    }

    public List<ITask> FromExternalList(List<ExternalTask> tasks)
    {
        var adapted = new List<ITask>();
        foreach (var task in tasks)
        {
            adapted.Add(FromExternal(task));
        }
        return adapted;
    }
}

public class TaskService : MonoBehaviour
{
    private readonly TaskAdapter adapter = new TaskAdapter();

    private List<ExternalTask> FetchTasks()
    {
        return new List<ExternalTask>
        {
            new ExternalTask { Id = "1", Desc = "Finish report", Complete = 1 },
            new ExternalTask { Id = "2", Desc = "Call client", Complete = 0 }
        };
    }

    void Start()
    {
        var tasks = adapter.FromExternalList(FetchTasks());
        Debug.Log(tasks.Count);
    }
}
`,
} satisfies PatternLanguageExample;