import { type DockerCommands } from "~/commands/$class.js";

export function ARG(this: DockerCommands, arg: string, value?: string): string {
  if (value === undefined) {
    return this.command(`ARG ${arg}`);
  } else {
    return this.command(`ARG ${arg}=${value}`);
  }
}
