import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const godot = {
  language: "gdscript",
  code: `extends Node2D

class_name TaskAdapter

func from_external(task: Dictionary) -> Dictionary:
	return {
		"id": task["id"],
		"description": task["desc"],
		"isCompleted": task["complete"] == 1
	}

func from_external_list(tasks: Array) -> Array:
	var adapted: Array = []
	for task in tasks:
		adapted.append(from_external(task))
	return adapted


func fetch_tasks() -> Array:
	return [
		{"id": "1", "desc": "Finish report", "complete": 1},
		{"id": "2", "desc": "Call client", "complete": 0}
	]


func _ready() -> void:
	var tasks = from_external_list(fetch_tasks())
	for task in tasks:
		print("%s %s" % [task["description"], task["isCompleted"]])
`,
} satisfies PatternLanguageExample;