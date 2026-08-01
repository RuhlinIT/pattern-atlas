import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const java: PatternLanguageExample = {
  language: "java",
  title: "File storage",
  code: "interface DataSource {\n    void writeData(String data);\n}\n\nclass FileDataSource implements DataSource {\n    public void writeData(String data) {\n        System.out.println(\"Writing file: \" + data);\n    }\n}\n\nabstract class DataSourceDecorator implements DataSource {\n    protected final DataSource wrappee;\n\n    public DataSourceDecorator(DataSource wrappee) {\n        this.wrappee = wrappee;\n    }\n\n    public void writeData(String data) {\n        wrappee.writeData(data);\n    }\n}\n\nclass CompressionDecorator extends DataSourceDecorator {\n    public CompressionDecorator(DataSource wrappee) {\n        super(wrappee);\n    }\n\n    public void writeData(String data) {\n        String compressed = \"compressed(\" + data + \")\";\n        super.writeData(compressed);\n    }\n}\n\nclass EncryptionDecorator extends DataSourceDecorator {\n    public EncryptionDecorator(DataSource wrappee) {\n        super(wrappee);\n    }\n\n    public void writeData(String data) {\n        String encrypted = \"encrypted(\" + data + \")\";\n        super.writeData(encrypted);\n    }\n}\n\nDataSource source =\n    new EncryptionDecorator(new CompressionDecorator(new FileDataSource()));\n\nsource.writeData(\"Quarterly report\");",
  explanation: "The base writer focuses on persistence, while decorators add optional transformation steps before writing.",
};
