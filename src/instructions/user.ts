import type { Dockerfile } from '~/classes/*.js'

export function USER(this: Dockerfile, uid: string, gid?: string): string {
	if (gid === undefined) {
		return this.instruction('USER', uid)
	} else {
		return this.instruction('USER', `${uid}:${gid}`)
	}
}
