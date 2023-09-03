import type { Dockerfile } from '~/classes/$.js'

// prettier-ignore
interface RunInstructionOptions {
  mount?:
	| {
			/**
				This mount type allows binding files or directories to the build container. A bind mount is read-only by default.
			*/
			type: 'bind',
			/**
				Mount path.
			*/
			target: string;
			/**
				Source path in the `from`. Defaults to the root of the `from`.
			*/
			source?: string;
			/**
				Build stage or image name for the root of the source. Defaults to the build context.
			*/
			from?: string
			/**
				Allow writes on the mount. Written data will be discarded.
			*/
			readwrite?: boolean
		}
	| {
			/**
				This mount type allows the build container to cache directories for compilers and package managers.
			*/
			type: 'cache',
			/**
				Optional ID to identify separate/different caches. Defaults to value for `target`.
			*/
			id?: string
			/**
				Mount path.
			*/
			target: string
			/**
				Read-only if set.
			*/
			readonly?: boolean
			/**
				One of `shared`, `private`, or `locked`. Defaults to `shared`. A `shared` cache mount can be used concurrently by multiple writers. `private` creates a new mount if there are multiple writers. `locked` pauses the second writer until the first one releases the mount.
			*/
			sharing?: 'shared' | 'private' | 'locked',
			/**
				Build stage to use as a base of the cache mount. Defaults to empty directory.
			*/
			from?: string,
			/**
				File mode for new cache directory in octal. Default `0755`.
				@default 0755
			*/
			mode?: number,
			/**
				User ID for new cache directory. Default `0`.
				@default 0
			*/
			uid?: number
			/**
				Group ID for new cache directory. Default `0`.
				@default 0
			*/
			gid?: number
		}
		| {
			/**
				This mount type allows mounting tmpfs in the build container.
			*/
			type: 'tmpfs',
			/**
				Mount path.
			*/
			target: string;
			/**
				Specify an upper limit on the size of the filesystem.
			*/
			size?: number;
		}
		| {
				/**
					This mount type allows the build container to access secure files such as private keys without baking them into the image.
				*/
				type: 'secret',
				/**
					ID of the secret. Defaults to basename of the target path.
				*/
				id?: string;
				/**
					Mount path. Defaults to `/run/secrets/` + `id`.
				*/
				target?: string;
				/**
					If set to `true`, the instruction errors out when the secret is unavailable. Defaults to `false`.
					@default false
				*/
				required?: boolean;
				/**
					File mode for secret file in octal. Default `0`.
					@default 0
				*/
				mode?: number;
				/**
					User ID for secret file. Default `0`.
					@default 0
				*/
				uid?: number;
				/**
					Group ID for secret file. Default `0`.
					@default 0
				*/
				gid?: number;
			};
	network?: 'default' | 'host' | 'none',
	security?: 'insecure' | 'sandbox'
}

export function RUN(
	this: Dockerfile,
	commandOrCommands: string | string[],
	options?: RunInstructionOptions
): string {
	const command = [commandOrCommands].flat().join(' ')

	const flags: Record<string, string> = {}

	if (options?.mount !== undefined) {
		let mountFlag = `${options.mount.type}`
		for (const [option, value] of Object.entries(options.mount)) {
			if (option === 'type') continue
			mountFlag += `,${option}=${String(value)}`
		}

		flags.mount = mountFlag
	}

	if (options?.network !== undefined) {
		flags.network = options.network
	}

	if (options?.security !== undefined) {
		flags.security = options.security
	}

	return this.instruction('RUN', command, flags)
}
