import { type Dockerfile } from '~/classes/$.js'

export function instruction(
	this: Dockerfile,
	instruction: string,
	args: string | number | string[],
	flags?: Record<string, string>
) {
	if (Array.isArray(args)) {
		args = this.toJsonArray(args)
	}

	if (flags !== undefined && Object.keys(flags).length > 0) {
		return this.command(
			`${instruction} ${Object.entries(flags)
				.map(([key, value]) => `--${key}=${value}`)
				.join(' ')} ${args}`
		)
	} else {
		return this.command(`${instruction} ${args}`)
	}
}
