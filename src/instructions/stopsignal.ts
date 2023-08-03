import type { Dockerfile } from '~/classes/index.js'

export function STOPSIGNAL(this: Dockerfile, signal: string): string {
	return this.instruction('STOPSIGNAL', signal)
}
