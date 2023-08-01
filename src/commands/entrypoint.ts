import { type DockerCommands } from '~/commands/$class.js'

export function ENTRYPOINT(
	this: DockerCommands,
	commandOrCommands: string[] | string
): string {
	if (Array.isArray(commandOrCommands)) {
		const commands = commandOrCommands
		return this.command(`ENTRYPOINT ${JSON.stringify(commands)}`)
	} else {
		const command = commandOrCommands
		return this.command(`ENTRYPOINT ${command}`)
	}
}
