import { type Promisable } from 'type-fest'

import { DockerCommands } from '~/utils/commands/_class.js'

export async function createDockerfile(
	callback: (d: DockerCommands) => Promisable<void>
): Promise<string> {
	const dockerCommandsInstance = new DockerCommands()
	await callback(dockerCommandsInstance)
	return (
		'# syntax=docker/dockerfile:1\n' +
		dockerCommandsInstance.dockerCommandsString
	)
}
