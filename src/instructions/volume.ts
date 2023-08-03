import type { Dockerfile } from '~/classes/*.js'

export function VOLUME(this: Dockerfile, volumes: string | string[]) {
	return this.instruction('VOLUME', volumes)
}
