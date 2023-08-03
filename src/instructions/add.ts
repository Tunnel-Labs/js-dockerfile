import { type Dockerfile } from '~/index.js'

interface AddInstructionOptions {
	checksum?: string
	keepGitDir?: boolean
	chown?: string
	chmod?: string
	link?: boolean
}

export function ADD(
	this: Dockerfile,
	src: string | string[],
	dest: string,
	options?: AddInstructionOptions
): string {
	const flags: Record<string, string> = {}

	if (options?.checksum !== undefined) {
		flags.checksum = options.checksum
	}

	if (options?.keepGitDir !== undefined) {
		flags['keep-git-dir'] = String(options.keepGitDir)
	}

	if (options?.chown !== undefined) {
		flags.chown = options.chown
	}

	if (options?.chmod !== undefined) {
		flags.chmod = options.chmod
	}

	if (options?.link !== undefined) {
		flags.link = String(options.link)
	}

	// If any path contains whitespace
	const paths = [...[src].flat(), dest]
	const hasWhitespace = paths.some((path) => /\s/.test(path))

	if (hasWhitespace) {
		return this.instruction('ADD', paths, flags)
	} else {
		return this.instruction('ADD', paths, flags)
	}
}
