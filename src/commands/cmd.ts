import { type DockerCommands } from "~/commands/$class.js";

export function CMD(this: DockerCommands, command: string): string {
  return this.command(`CMD ${command}`);
}
