import type { Dockerfile } from '~/classes/*.js'

export function append(this: Dockerfile, str: string) {
	this.document += str
}
