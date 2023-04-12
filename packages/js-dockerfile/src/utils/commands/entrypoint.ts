import { type DockerCommands } from '~/utils/commands/_class.js'

export function ENTRYPOINT(
	this: DockerCommands,
	commandOrCommands: string[] | string
) {
	if (Array.isArray(commandOrCommands)) {
		const commands = commandOrCommands
		this.command(`ENTRYPOINT ${JSON.stringify(commands)}`)
	} else {
		const command = commandOrCommands
		this.command(`ENTRYPOINT ${command}`)
	}
}
