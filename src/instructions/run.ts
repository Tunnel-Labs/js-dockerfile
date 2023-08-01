import type { Dockerfile } from "~/classes/*.js";

export function RUN(
  this: Dockerfile,
  commandOrCommands: string | string[]
): string {
  const command = [commandOrCommands].flat().join(" ");
  return this.instruction("RUN", command);
}
