import { type Dockerfile } from '~/index.js'

export function newline(this: Dockerfile, numNewlines = 1) {
	return this.append('\n'.repeat(numNewlines))
}
