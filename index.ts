import { bundleRequire } from "bundle-require"

interface Options {
	test: 'foo' | 'bar'
}

export function defineConfig(options: Options) {
	return options
}

export async function importFile(filepath: string) {
	const result = await bundleRequire({ filepath })

	return result.mod.default ?? result.mod
}
