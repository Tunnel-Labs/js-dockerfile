import { type DockerCommands } from '~/utils/commands/_class.js'

export function FROM(this: DockerCommands, from: string) {
	this.command(`FROM ${from}`)
}
