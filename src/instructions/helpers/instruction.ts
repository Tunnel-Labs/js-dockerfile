import { Dockerfile } from "~/classes/*.js";

export function instruction(
  this: Dockerfile,
  instruction: string,
  args: string | number
) {
  return this.command(`${instruction} ${args}`);
}
