import { type DockerCommands } from '~/index.js'

export function ENV(this: DockerCommands, key: string, value: string) {
	this.command(`ENV ${key}=${value}`)
}
