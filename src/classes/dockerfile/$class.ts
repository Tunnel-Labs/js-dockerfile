/* eslint-disable @typescript-eslint/no-redeclare */

import * as instructions from '~/instructions/index.js'

class DockerfileClass {
	static create() {
		const self = new DockerfileClass() as Dockerfile
		return self
	}

	document = ''

	private constructor() {
		Object.assign(this, instructions)
	}

	toString() {
		return this.document
	}
}

export type Dockerfile = DockerfileClass & typeof instructions
export const Dockerfile = DockerfileClass
