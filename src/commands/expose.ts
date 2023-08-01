import { type DockerCommands } from '~/commands/$class.js'

/**
	@param port - Might be a string in case it's an environment variable
*/
export function EXPOSE(this: DockerCommands, port: number | string): string {
	return this.command(`EXPOSE ${port}`)
}
