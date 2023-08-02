import type { Dockerfile } from "~/classes/*.js";

interface FromInstructionOptions {
  as?: string;
}

export function FROM(
  this: Dockerfile,
  from: string,
  options?: FromInstructionOptions
): string {
  if (options?.as !== undefined) {
    return this.instruction("FROM", `${from} AS ${options.as}`);
  } else {
    return this.instruction("FROM", from);
  }
}
