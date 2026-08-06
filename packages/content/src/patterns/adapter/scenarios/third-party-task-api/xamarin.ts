import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const xamarin = {
  language: "csharp",
  code: `using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

public interface ITask
{
    string Id { get; }
    string Description { get; }
    bool IsCompleted { get; }
}

public class ExternalTask
{
    public string Id { get; set; } = string.Empty;
    public string Desc { get; set; } = string.Empty;
    public int Complete { get; set; }
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
        return new TaskItem(
            task.Id,
            task.Desc,
            task.Complete == 1
        );
    }

    public List<ITask> FromExternalList(List<ExternalTask> tasks)
    {
        return tasks.Select(FromExternal).ToList();
    }
}

public class TaskApiService
{
    public Task<List<ExternalTask>> GetTasksAsync()
    {
        var tasks = new List<ExternalTask>
        {
            new ExternalTask { Id = "1", Desc = "Finish report", Complete = 1 },
            new ExternalTask { Id = "2", Desc = "Call client", Complete = 0 }
        };

        return Task.FromResult(tasks);
    }
}

public class TaskService
{
    private readonly TaskApiService _api;
    private readonly TaskAdapter _adapter;

    public TaskService(TaskApiService api, TaskAdapter adapter)
    {
        _api = api;
        _adapter = adapter;
    }

    public async Task<List<ITask>> GetTasksAsync()
    {
        var externalTasks = await _api.GetTasksAsync();
        return _adapter.FromExternalList(externalTasks);
    }
}
`,
} satisfies PatternLanguageExample;