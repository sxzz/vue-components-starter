import { defineConfig } from 'tsdown'
import Vue from 'unplugin-vue/rolldown'

export default defineConfig([
  {
    entry: ['./dist/types/index.d.ts'],
    dts: { dtsInput: true },
    onSuccess: 'rm -fr dist/types',
  },
  {
    entry: ['./src/index.ts'],
    target: 'node20.18',
    platform: 'neutral',
    plugins: [Vue({ isProduction: true })],
  },
])
