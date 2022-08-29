// rollup.config.js
import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from 'rollup-plugin-typescript2'
import postCSS from 'rollup-plugin-postcss'
import pkg from './package.json'
import analyzer from 'rollup-plugin-visualizer'
import dts from 'rollup-plugin-dts'

const devMode = process.env.NODE_ENV === 'development'
console.log(`${devMode ? 'development' : 'production'} mode bundle`)

export default [
	{
		input: './index.ts',
		output: [
			{
				dir: pkg.main,
				format: 'cjs',
				sourcemap: devMode ? 'inline' : false,
			},
			{
				file: pkg.module,
				format: 'es',
				sourcemap: devMode ? 'inline' : false,
			},
		],
		external: [...Object.keys(pkg.peerDependencies || {})],
		plugins: [
			nodeResolve(),
			commonjs(),
			typescript({
				typescript: require('typescript'),
			}),
			postCSS({
				plugins: [require('autoprefixer')],
				extract: true,
			}),
			// bundleSize(),
			analyzer(),
		],
	},
	{
		input: './dist/esm/index.d.ts',
		output: [{ file: './dist/types/index.d.ts', format: 'esm' }],
		external: [/\.css$/],
		plugins: [dts()],
	},
]
