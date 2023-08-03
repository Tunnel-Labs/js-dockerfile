import type { Dockerfile } from '~/classes/*.js'

export function LABEL(this: Dockerfile, label: string, value: string): string
export function LABEL(this: Dockerfile, labels: Array<[string, string]>): string
export function LABEL(
	this: Dockerfile,
	labelOrLabels: string | Array<[string, string]>,
	value?: string
): string {
	if (Array.isArray(labelOrLabels)) {
		const labels = labelOrLabels
		if (labels.length === 0) return ''

		let labelsCommand = 'LABEL'
		for (const [label, value] of labels) {
			labelsCommand += ` ${label}=${value}`
		}

		return this.command(labelsCommand)
	} else {
		const label = labelOrLabels
		return this.instruction('LABEL', `${label}=${value!}`)
	}
}
