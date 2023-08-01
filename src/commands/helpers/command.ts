import { type DockerCommands } from "~/commands/$class.js";

export function command(this: DockerCommands, cmd: string) {
  const commandString = cmd + "\n";
  this.dockerCommandsString += commandString;
  return commandString;
}
