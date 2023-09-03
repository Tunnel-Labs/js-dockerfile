import type { Dockerfile } from '~/classes/$.js'

interface FromInstructionOptions {
	as?: string
	platform?: string
}

export function FROM(
	this: Dockerfile,
	from: string,
	options?: FromInstructionOptions
): string {
	const flags: Record<string, string> = {}

	if (options?.platform !== undefined) {
		flags.platform = options.platform
	}

	if (options?.as === undefined) {
		return this.instruction('FROM', from, flags)
	} else {
		return this.instruction('FROM', `${from} AS ${options.as}`, flags)
	}
}
