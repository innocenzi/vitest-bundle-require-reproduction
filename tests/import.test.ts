import path from 'path'
import { it, assert } from 'vitest'
import { importFile } from '../index'

it('imports a .ts configuration file', async() => {
	const filepath = path.resolve(__dirname, './fixtures/file.ts')
	const preset = await importFile(filepath)

	assert.equal(JSON.stringify(preset), JSON.stringify({
		test: 'bar',
	}))
})
