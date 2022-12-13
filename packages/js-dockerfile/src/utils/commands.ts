import { type Promisable } from 'type-fest'

export class DockerCommands {
	dockerCommandsString = ''

	RUN(commandOrCommands: string | string[]) {
		const command = [commandOrCommands].flat().join(' ')
		this.command(`RUN ${command}`)
	}

	FROM(from: string) {
		this.command(`FROM ${from}`)
	}

	ARG(arg: string) {
		this.command(`ARG ${arg}`)
	}

	ENV(key: string, value: string) {
		this.command(`ENV ${key}=${value}`)
	}

	WORKDIR(dir: string) {
		this.command(`RUN mkdir -p ${dir}`)
		this.command(`WORKDIR ${dir}`)
	}

	CMD(command: string) {
		this.command(`CMD ${command}`)
	}

	EXPOSE(port: number) {
		this.command(`EXPOSE ${port}`)
	}

	COPY(files: string[]): void
	COPY(src: string, dest?: string): void
	COPY(filesOrSrc: string[] | string, dest?: string) {
		if (Array.isArray(filesOrSrc)) {
			const files = filesOrSrc
			for (const file of files) {
				this.COPY(file, file)
			}

			return
		}

		const src = filesOrSrc
		this.command(`COPY ${src} ${dest ?? src}`)
	}

	comment(commentString: string) {
		this.dockerCommandsString += '# ' + commentString
	}

	command(cmd: string) {
		this.dockerCommandsString += '\n' + cmd + '\n'
	}

	inject(str: string) {
		this.dockerCommandsString += '\n' + str + '\n'
	}
}

export async function dockerCommands(
	callback: (d: DockerCommands) => Promisable<void>
): Promise<string> {
	const dockerCommands = new DockerCommands()
	await callback(dockerCommands)
	return dockerCommands.dockerCommandsString
}
