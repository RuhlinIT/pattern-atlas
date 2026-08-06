import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const azureStreamAnalytics = {
  language: "javascript",
  code: `function adaptTask(taskId, title, status) {
    return {
        id: String(taskId),
        description: String(title),
        isCompleted: status === "done"
    };
}

function normalizeTask(record) {
    if (!record) {
        return null;
    }

    return adaptTask(
        record.task_id,
        record.title,
        record.status
    );
}

/*
Azure Stream Analytics query:

WITH normalized_tasks AS (
    SELECT
        udf.normalizeTask(input) AS task
    FROM
        third_party_tasks AS input
)

SELECT
    task.id AS id,
    task.description AS description,
    task.isCompleted AS isCompleted
INTO
    normalized_tasks_output
FROM
    normalized_tasks
WHERE
    task IS NOT NULL;
*/
`,
} satisfies PatternLanguageExample;