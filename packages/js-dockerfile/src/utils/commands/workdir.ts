import { type DockerCommands } from '~/utils/commands/_class.js'

export function WORKDIR(this: DockerCommands, dir: string) {
	this.command(`WORKDIR ${dir}`)
}
