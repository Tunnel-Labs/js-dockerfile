import type { Dockerfile } from "~/classes/*.js";

export function CMD(this: Dockerfile, command: string): string {
  return this.instruction("CMD", command);
}
