import type { Dockerfile } from '~/classes/index.js'

export function append(this: Dockerfile, str: string): string {
	this.document += str
	return str
}
