import type { Dockerfile } from '~/classes/$.js'

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
		const flags: Record<string, string> = {}
		if (options?.interval) {
			flags.interval = options.interval
		}

		if (options?.timeout) {
			flags.timeout = options.timeout
		}

		if (options?.startPeriod) {
			flags['start-period'] = options.startPeriod
		}

		if (options?.startInterval) {
			flags['start-interval'] = options.startInterval
		}

		if (options?.retries) {
			flags.retries = options.retries
		}

		return this.instruction('HEALTHCHECK', `CMD ${command!}`, flags)
	}
}
