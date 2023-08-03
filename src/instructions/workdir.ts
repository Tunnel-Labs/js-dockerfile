import type { Dockerfile } from '~/classes/index.js'

export function WORKDIR(this: Dockerfile, dir: string): string {
	return this.instruction('WORKDIR', dir)
}
