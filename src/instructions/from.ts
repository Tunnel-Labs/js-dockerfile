import type { Dockerfile } from "~/classes/*.js";

interface FromOptions {
  as?: string;
}

export function FROM(
  this: Dockerfile,
  from: string,
  options?: FromOptions
): string {
  if (options?.as !== undefined) {
    return this.instruction("FROM", `${from} AS ${options.as}`);
  } else {
    return this.instruction("FROM", from);
  }
}
