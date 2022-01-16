import adapter from '@sveltejs/adapter-node'
import preprocess from 'svelte-preprocess'
import { loadModules } from '../common/index.js'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: preprocess(),
  kit: {
    adapter: adapter({ handle404: false }),
    target: '#svelte',
    vite: {
      plugins: [loadModules('@gauben/users')],
    },
  },
}

export default config
