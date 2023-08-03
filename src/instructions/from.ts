import type { Dockerfile } from '~/classes/*.js'

interface FromInstructionOptions {
	as?: string
	platform?: string
}

export function FROM(
	this: Dockerfile,
	from: string,
	options?: FromInstructionOptions
): string {
	const flags: string[] = []

	if (options?.platform !== undefined) {
		flags.push(`--platform=${options.platform}`)
	}

	if (options?.as === undefined) {
		return this.instruction('FROM', `${flags.join(' ')} ${from}`)
	} else {
		return this.instruction(
			'FROM',
			`${flags.join(' ')} ${from} AS ${options.as}`
		)
	}
}
