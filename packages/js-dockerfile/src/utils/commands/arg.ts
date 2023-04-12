import { type DockerCommands } from '~/utils/commands/_class.js'

export function ARG(this: DockerCommands, arg: string) {
	this.command(`ARG ${arg}`)
}
