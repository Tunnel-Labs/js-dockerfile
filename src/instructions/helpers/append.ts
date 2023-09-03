import type { Dockerfile } from '~/classes/$.js'

export function append(this: Dockerfile, str: string): string {
	this.document += str
	return str
}
