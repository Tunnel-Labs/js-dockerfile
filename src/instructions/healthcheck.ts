import type { Dockerfile } from '~/classes/index.js'

interface HealthcheckInstructionOptions {
	interval?: string
	timeout?: string
	startPeriod?: string
	startInterval?: string
	retries?: string
}

export function HEALTHCHECK(this: Dockerfile, type: 'NONE'): string
export function HEALTHCHECK(
	this: Dockerfile,
	type: 'CMD',
	command: string,
	options?: HealthcheckInstructionOptions
): string
export function HEALTHCHECK(
	this: Dockerfile,
	type: 'CMD' | 'NONE',
	command?: string,
	options?: HealthcheckInstructionOptions
): string {
	if (type === 'NONE') {
		return this.instruction('HEALTHCHECK', 'NONE')
	} else {
		const flags: string[] = []
		if (options?.interval) {
			flags.push(`--interval=${options.interval}`)
		}

		if (options?.timeout) {
			flags.push(`--timeout=${options.timeout}`)
		}

		if (options?.startPeriod) {
			flags.push(`--start-period=${options.startPeriod}`)
		}

		if (options?.startInterval) {
			flags.push(`--start-interval=${options.startInterval}`)
		}

		if (options?.retries) {
			flags.push(`--retries=${options.retries}`)
		}

		return this.instruction('HEALTHCHECK', `${flags.join(' ')} CMD ${command!}`)
	}
}
