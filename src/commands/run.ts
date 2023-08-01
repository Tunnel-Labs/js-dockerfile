import { type DockerCommands } from "~/commands/$class.js";

export function RUN(
  this: DockerCommands,
  commandOrCommands: string | string[]
): string {
  const command = [commandOrCommands].flat().join(" ");
  return this.command(`RUN ${command}`);
}
