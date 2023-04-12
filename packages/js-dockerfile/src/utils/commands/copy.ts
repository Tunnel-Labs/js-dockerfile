import { type DockerCommands } from '~/utils/commands/_class.js'

interface CopyCommandOptions {
	chown?: string
	chmod?: string
	from?: string
}

export function COPY(
	this: DockerCommands,
	files: string[],
	options?: CopyCommandOptions
): void
export function COPY(
	this: DockerCommands,
	src: string,
	dest?: string,
	maybeOptions?: CopyCommandOptions
): void
export function COPY(
	this: DockerCommands,
	filesOrSrc: string[] | string,
	destOrOptions?: string | CopyCommandOptions,
	maybeOptions?: CopyCommandOptions
): void {
	if (Array.isArray(filesOrSrc)) {
		const files = filesOrSrc
		for (const file of files) {
			this.COPY(file, file, maybeOptions)
		}

		return
	}

	const options =
		(typeof destOrOptions === 'object' ? destOrOptions : maybeOptions) ?? {}
	const dest = typeof destOrOptions === 'string' ? destOrOptions : filesOrSrc

	const flags = []
	if (options.chown !== undefined) {
		flags.push(`--chown=${options.chown}`)
	}

	if (options.chmod !== undefined) {
		flags.push(`--chmod=${options.chmod}`)
	}

	if (options.from !== undefined) {
		flags.push(`--from=${options.from}`)
	}

	const src = filesOrSrc
	this.command(`COPY ${flags.join(' ')} ${src} ${dest}`)
}
