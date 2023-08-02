import type { Dockerfile } from "~/classes/*.js";

export function STOPSIGNAL(this: Dockerfile, signal: string): string {
  return this.instruction("STOPSIGNAL", signal);
}
