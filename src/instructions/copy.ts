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
	const flags: Record<string, string> = {}
	if (options?.chown !== undefined) {
		flags.chown = options.chown
	}

	if (options?.chmod !== undefined) {
		flags.chmod = options.chmod
	}

	if (options?.from !== undefined) {
		flags.from = options.from
	}

	if (options?.link !== undefined) {
		flags.link = String(options.link)
	}

	// If any path contains whitespace
	const paths = [...[src].flat(), dest]
	const hasWhitespace = paths.some((path) => /\s/.test(path))

	if (hasWhitespace) {
		return this.instruction('COPY', paths, flags)
	} else {
		return this.instruction('COPY', paths, flags)
	}
}
