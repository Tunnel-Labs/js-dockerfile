import type { Dockerfile } from '~/classes/index.js'

export function directive(this: Dockerfile, directiveString: string): string {
	let directiveLine: string

	if (directiveString.startsWith('#')) {
		directiveLine = directiveString
	} else {
		directiveLine = '# ' + directiveString
	}

	// Directives must always be at the top of a Dockerfile
	this.document = directiveLine + '\n' + this.document

	return directiveLine
}
