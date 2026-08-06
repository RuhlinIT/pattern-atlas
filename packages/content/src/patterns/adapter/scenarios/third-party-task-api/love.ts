import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const love = {
  language: "lua",
  code: `local TaskAdapter = {}

function TaskAdapter.fromExternal(task)
	return {
		id = task.id,
		description = task.desc,
		isCompleted = task.complete == 1
	}
end

function TaskAdapter.fromExternalList(tasks)
	local adapted = {}
	for _, task in ipairs(tasks) do
		table.insert(adapted, TaskAdapter.fromExternal(task))
	end
	return adapted
end

local function fetchTasks()
	return {
		{ id = "1", desc = "Finish report", complete = 1 },
		{ id = "2", desc = "Call client", complete = 0 }
	}
end

local tasks = TaskAdapter.fromExternalList(fetchTasks())

function love.draw()
	love.graphics.print("Tasks:", 20, 20)
	for i, task in ipairs(tasks) do
		local line = task.description .. " " .. (task.isCompleted and "✓" or "✗")
		love.graphics.print(line, 20, 20 + i * 24)
	end
end
`,
} satisfies PatternLanguageExample;