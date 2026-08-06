import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const jenkins = {
  language: "typescript",
  code: `type Task = {
  id: string;
  description: string;
  isCompleted: boolean;
};

type JenkinsJob = {
  name: string;
  url: string;
  color: string;
};

type JenkinsResponse = {
  jobs: JenkinsJob[];
};

class JenkinsTaskAdapter {
  static fromJob(job: JenkinsJob): Task {
    const isCompleted =
      job.color === "blue" ||
      job.color === "blue_anime";

    return {
      id: job.name,
      description: job.name,
      isCompleted,
    };
  }

  static fromResponse(
    response: JenkinsResponse,
  ): Task[] {
    return response.jobs.map(
      JenkinsTaskAdapter.fromJob,
    );
  }
}

class JenkinsClient {
  constructor(
    private readonly baseUrl: string,
  ) {}

  async getTasks(): Promise<Task[]> {
    const response = await fetch(
      \`\${this.baseUrl}/api/json?tree=jobs[name,url,color]\`,
    );

    if (!response.ok) {
      throw new Error(
        \`Jenkins request failed: \${response.status}\`,
      );
    }

    const payload =
      await response.json() as JenkinsResponse;

    return JenkinsTaskAdapter.fromResponse(payload);
  }
}

const client = new JenkinsClient(
  "https://jenkins.example.com",
);

client.getTasks().then((tasks) => {
  console.log(tasks);
});
`,
} satisfies PatternLanguageExample;