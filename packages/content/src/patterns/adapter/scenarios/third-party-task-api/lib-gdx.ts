import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const libGdx = {
  language: "java",
  code: `import com.badlogic.gdx.ApplicationAdapter;
import com.badlogic.gdx.Gdx;
import com.badlogic.gdx.graphics.GL20;
import com.badlogic.gdx.graphics.g2d.BitmapFont;
import com.badlogic.gdx.graphics.g2d.SpriteBatch;
import java.util.ArrayList;
import java.util.List;

class Task {
    final String id;
    final String description;
    final boolean isCompleted;

    Task(String id, String description, boolean isCompleted) {
        this.id = id;
        this.description = description;
        this.isCompleted = isCompleted;
    }
}

class ExternalTask {
    final String id;
    final String desc;
    final int complete;

    ExternalTask(String id, String desc, int complete) {
        this.id = id;
        this.desc = desc;
        this.complete = complete;
    }
}

class TaskAdapter {
    static Task fromExternal(ExternalTask task) {
        return new Task(task.id, task.desc, task.complete == 1);
    }

    static List<Task> fromExternalList(List<ExternalTask> tasks) {
        List<Task> adapted = new ArrayList<>();
        for (ExternalTask task : tasks) {
            adapted.add(fromExternal(task));
        }
        return adapted;
    }
}

public class TaskGame extends ApplicationAdapter {
    private SpriteBatch batch;
    private BitmapFont font;
    private List<Task> tasks;

    private List<ExternalTask> fetchTasks() {
        List<ExternalTask> externalTasks = new ArrayList<>();
        externalTasks.add(new ExternalTask("1", "Finish report", 1));
        externalTasks.add(new ExternalTask("2", "Call client", 0));
        return externalTasks;
    }

    @Override
    public void create() {
        batch = new SpriteBatch();
        font = new BitmapFont();
        tasks = TaskAdapter.fromExternalList(fetchTasks());
    }

    @Override
    public void render() {
        Gdx.gl.glClearColor(1, 1, 1, 1);
        Gdx.gl.glClear(GL20.GL_COLOR_BUFFER_BIT);

        batch.begin();
        font.draw(batch, "Tasks:", 20, 200);
        for (int i = 0; i < tasks.size(); i++) {
            Task task = tasks.get(i);
            font.draw(batch, task.description + (task.isCompleted ? " ✓" : " ✗"), 20, 170 - (i * 30));
        }
        batch.end();
    }
}
`,
} satisfies PatternLanguageExample;