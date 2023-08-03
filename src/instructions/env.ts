import type { Dockerfile } from '~/classes/*.js'

export function ENV(this: Dockerfile, key: string, value: string): string {
	return this.instruction('ENV', `${key}=${value}`)
}
