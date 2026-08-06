import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const luau = {
  language: "luau",
  code: `type Task = {
	id: string,
	description: string,
	isCompleted: boolean,
}

type ExternalTask = {
	id: string,
	desc: string,
	complete: number,
}

local TaskAdapter = {}

function TaskAdapter.fromExternal(task: ExternalTask): Task
	return {
		id = task.id,
		description = task.desc,
		isCompleted = task.complete == 1,
	}
end

function TaskAdapter.fromExternalList(tasks: { ExternalTask }): { Task }
	local adapted = {}
	for _, task in ipairs(tasks) do
		table.insert(adapted, TaskAdapter.fromExternal(task))
	end
	return adapted
end

local function fetchTasks(): { ExternalTask }
	return {
		{ id = "1", desc = "Finish report", complete = 1 },
		{ id = "2", desc = "Call client", complete = 0 },
	}
end

local tasks = TaskAdapter.fromExternalList(fetchTasks())
print(#tasks)
`,
} satisfies PatternLanguageExample;