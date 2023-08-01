import { type Promisable } from 'type-fest'

import { DockerCommands } from '~/commands/$class.js'

export async function dockerCommands(
	callback: (d: DockerCommands) => Promisable<void>
): Promise<string> {
	const dockerCommands = DockerCommands.create()
	await callback(dockerCommands)
	return dockerCommands.dockerCommandsString
}
