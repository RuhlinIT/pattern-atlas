import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const react: PatternLanguageExample = {
  language: "react",
  title: "Device setup",
  code: `type SetupButtonProps = {
  onSetup: () => void;
};

export function SetupButton({ onSetup }: SetupButtonProps) {
  return <button onClick={onSetup}>Setup device</button>;
}

type StatusProps = {
  ready: boolean;
};

export function SetupStatus({ ready }: StatusProps) {
  return <div>{ready ? "Device ready" : "Device not ready"}</div>;
}

export function DeviceSetupPanel() {
  const handleSetup = () => {
    console.log("pairing, configuring, and checking health");
  };

  return (
    <section>
      <SetupButton onSetup={handleSetup} />
      <SetupStatus ready={true} />
    </section>
  );
}`,
  explanation:
    "Coordinate pairing, configuration, and health checks behind one setup method.",
};