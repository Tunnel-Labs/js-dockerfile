/* eslint-disable @typescript-eslint/no-redeclare */

import type * as commands from './_commands.js'

class DockerCommandsClass {
	static create() {
		const dockerCommands = new DockerCommandsClass() as DockerCommandsClass &
			typeof commands
		Object.assign(this, dockerCommands)
		return dockerCommands
	}

	dockerCommandsString = ''

	private constructor() {
		// noop
	}
}

export const DockerCommands = DockerCommandsClass
export type DockerCommands = DockerCommandsClass & typeof commands
