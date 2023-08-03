import type { Dockerfile } from '~/classes/*.js'

export function ONBUILD(this: Dockerfile, instruction: string): string {
	return this.instruction('ONBUILD', instruction)
}
