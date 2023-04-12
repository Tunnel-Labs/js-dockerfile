import { type DockerCommands } from '~/utils/commands/_class.js'

export function inject(this: DockerCommands, str: string) {
	this.dockerCommandsString += '\n' + str + '\n'
}
