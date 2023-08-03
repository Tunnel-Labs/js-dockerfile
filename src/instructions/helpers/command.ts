import type { Dockerfile } from '~/classes/index.js'

export function command(this: Dockerfile, cmd: string) {
	const commandString = cmd + '\n'
	this.document += commandString
	return commandString
}
