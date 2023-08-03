import type { Dockerfile } from '~/classes/index.js'

interface CopyInstructionOptions {
	chown?: string
	chmod?: string
	from?: string
	link?: boolean
}

export function COPY(
	this: Dockerfile,
	src: string | string[],
	dest: string,
	options?: CopyInstructionOptions
): string {
	const flags = []
	if (options?.chown !== undefined) {
		flags.push(`--chown=${options.chown}`)
	}

	if (options?.chmod !== undefined) {
		flags.push(`--chmod=${options.chmod}`)
	}

	if (options?.from !== undefined) {
		flags.push(`--from=${options.from}`)
	}

	if (options?.link !== undefined) {
		flags.push(`--link=${String(options.link)}`)
	}

	// If any path contains whitespace
	const paths = [...[src].flat(), dest]
	const hasWhitespace = paths.some((path) => /\s/.test(path))

	if (hasWhitespace) {
		return this.instruction(
			'COPY',
			`${flags.join(' ')} ${this.toJsonArray(paths)}`
		)
	} else {
		return this.instruction('COPY', `${flags.join(' ')} ${paths.join(' ')}`)
	}
}
