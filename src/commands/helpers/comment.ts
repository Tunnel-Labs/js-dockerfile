import { type DockerCommands } from '~/commands/$class.js'

export function comment(this: DockerCommands, commentString: string) {
	this.dockerCommandsString += '# ' + commentString
}
