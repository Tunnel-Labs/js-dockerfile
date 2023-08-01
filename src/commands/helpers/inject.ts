import { type DockerCommands } from '~/commands/$class.js'

export function inject(this: DockerCommands, str: string) {
	this.dockerCommandsString += '\n' + str + '\n'
}
