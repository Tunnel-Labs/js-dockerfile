import type { Dockerfile } from '~/classes/index.js'

export function CMD(this: Dockerfile, command: string): string {
	return this.instruction('CMD', command)
}
