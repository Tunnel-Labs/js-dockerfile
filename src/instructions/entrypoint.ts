import type { Dockerfile } from "~/classes/*.js";

export function ENTRYPOINT(
  this: Dockerfile,
  commandOrCommands: string[] | string
): string {
  if (Array.isArray(commandOrCommands)) {
    const commands = commandOrCommands;
    return this.instruction("ENTRYPOINT", JSON.stringify(commands));
  } else {
    const command = commandOrCommands;
    return this.instruction("ENTRYPOINT", command);
  }
}
