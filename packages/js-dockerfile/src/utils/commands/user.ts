import { type DockerCommands } from '~/utils/commands/_class.js'

export function USER(this: DockerCommands, uid: string, gid?: string) {
	if (gid === undefined) {
		this.command(`USER ${uid}`)
	} else {
		this.command(`USER ${uid}:${gid}`)
	}
}
