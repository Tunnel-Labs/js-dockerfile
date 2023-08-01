import { type DockerCommands } from '~/commands/$class.js'

export function USER(this: DockerCommands, uid: string, gid?: string): string {
	if (gid === undefined) {
		return this.command(`USER ${uid}`)
	} else {
		return this.command(`USER ${uid}:${gid}`)
	}
}
