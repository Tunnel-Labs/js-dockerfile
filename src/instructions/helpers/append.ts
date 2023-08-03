import type { Dockerfile } from '~/classes/index.js'

export function append(this: Dockerfile, str: string) {
	this.document += str
}
