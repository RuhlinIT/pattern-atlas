import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const apacheStorm = {
  language: "java",
  code: `import
    org.apache.storm.task.OutputCollector;
import
    org.apache.storm.task.TopologyContext;
import
    org.apache.storm.topology.BasicOutputCollector;
import
    org.apache.storm.topology.OutputFieldsDeclarer;
import
    org.apache.storm.topology.base.BaseBasicBolt;
import
    org.apache.storm.tuple.Fields;
import
    org.apache.storm.tuple.Tuple;
import
    org.apache.storm.tuple.Values;

import java.util.Map;

public final class TaskAdapterBolt
    extends BaseBasicBolt {

    @Override
    public void execute(
        Tuple input,
        BasicOutputCollector collector
    ) {
        String taskId = input.getStringByField(
            "task_id"
        );

        String title = input.getStringByField(
            "title"
        );

        String status = input.getStringByField(
            "status"
        );

        boolean isCompleted =
            "done".equals(status);

        collector.emit(
            new Values(
                taskId,
                title,
                isCompleted
            )
        );
    }

    @Override
    public void declareOutputFields(
        OutputFieldsDeclarer declarer
    ) {
        declarer.declare(
            new Fields(
                "id",
                "description",
                "isCompleted"
            )
        );
    }
}
`,
} satisfies PatternLanguageExample;