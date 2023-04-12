import { type DockerCommands } from '~/utils/commands/_class.js'

export function command(this: DockerCommands, cmd: string) {
	this.dockerCommandsString += '\n' + cmd + '\n'
}
