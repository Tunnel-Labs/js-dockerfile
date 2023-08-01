import { type DockerCommands } from '~/commands/$class.js'

export function WORKDIR(this: DockerCommands, dir: string): string {
	return this.command(`WORKDIR ${dir}`)
}
