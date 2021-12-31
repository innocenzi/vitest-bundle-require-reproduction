import path from 'path'
import { importFile } from './index'

async function load() {
	const filepath = path.resolve(__dirname, './tests/fixtures/file.ts')
	console.log(await importFile(filepath))
}

load()
