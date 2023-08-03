import type { Dockerfile } from '~/classes/index.js'

/**
	@param port - Might be a string in case it's an environment variable
*/
export function EXPOSE(this: Dockerfile, port: number | string): string {
	return this.instruction('EXPOSE', port)
}
