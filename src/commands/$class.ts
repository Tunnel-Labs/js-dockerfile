/* eslint-disable @typescript-eslint/no-redeclare */

import * as commands from './$commands.js'

class DockerCommandsClass {
	static create() {
		const dockerCommands = new DockerCommandsClass() as DockerCommandsClass &
			typeof commands
		Object.assign(dockerCommands, commands)
		return dockerCommands
	}

	dockerCommandsString = ''

	private constructor() {
		// noop
	}
}

export const DockerCommands = DockerCommandsClass
export type DockerCommands = DockerCommandsClass & typeof commands
