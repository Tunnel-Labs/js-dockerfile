import { type DockerCommands } from '~/utils/commands/_class.js'

/**
	@param port - Might be a string in case it's an environment variable
*/
export function EXPOSE(this: DockerCommands, port: number | string) {
	this.command(`EXPOSE ${port}`)
}
