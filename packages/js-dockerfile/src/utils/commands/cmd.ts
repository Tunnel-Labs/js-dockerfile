import { type DockerCommands } from '~/utils/commands/_class.js'

export function CMD(this: DockerCommands, command: string) {
	this.command(`CMD ${command}`)
}
