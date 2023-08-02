import { Dockerfile } from "~/index.js";

export function SHELL(this: Dockerfile, args: string[]): string {
	return this.instruction("SHELL", args);
}