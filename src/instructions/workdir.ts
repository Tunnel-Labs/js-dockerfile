import type { Dockerfile } from '~/classes/*.js'

export function WORKDIR(this: Dockerfile, dir: string): string {
	return this.instruction('WORKDIR', dir)
}
