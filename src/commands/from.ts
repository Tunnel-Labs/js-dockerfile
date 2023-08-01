import { type DockerCommands } from '~/commands/$class.js'

export function FROM(this: DockerCommands, from: string): string {
	return this.command(`FROM ${from}`)
}
