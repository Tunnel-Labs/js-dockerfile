import { type DockerCommands } from '~/utils/commands/_class.js'

export function comment(this: DockerCommands, commentString: string) {
	this.dockerCommandsString += '# ' + commentString
}
