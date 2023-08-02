import { Dockerfile } from "~/classes/*.js";

export function instruction(
  this: Dockerfile,
  instruction: string,
  args: string | number | string[]
) {
  if (Array.isArray(args)) {
    args = "[" + args.map((arg) => JSON.stringify(arg)).join(", ") + "]";
  }

  return this.command(`${instruction} ${args}`);
}
