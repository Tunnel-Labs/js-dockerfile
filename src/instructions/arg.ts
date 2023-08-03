import type { Dockerfile } from '~/classes/index.js'

export function ARG(
	this: Dockerfile,
	arg: string,
	value?: string | number
): string {
	if (value === undefined) {
		return this.instruction('ARG', arg)
	} else {
		return this.instruction('ARG', `${arg}=${value}`)
	}
}
