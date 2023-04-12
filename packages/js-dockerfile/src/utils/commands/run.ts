import { type DockerCommands } from '~/utils/commands/_class.js'

export function RUN(
	this: DockerCommands,
	commandOrCommands: string | string[]
) {
	const command = [commandOrCommands].flat().join(' ')
	this.command(`RUN ${command}`)
}
