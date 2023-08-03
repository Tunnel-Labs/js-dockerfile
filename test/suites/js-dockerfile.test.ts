import { expect, test } from 'vitest'

import { Dockerfile } from '~/index.js'

test('js-dockerfile', () => {
	const d = Dockerfile.create()
	d.ENV('foo', 'bar')
	expect(d.toString()).toEqual('ENV foo=bar\n')
})
