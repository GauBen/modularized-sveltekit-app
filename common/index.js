/**
 * @param  {string[]} modules
 * @return {import('vite').Plugin}
 **/
export const loadModules = (...modules) => ({
  name: 'kit-module-loader',
  async configureServer({ middlewares }) {
    for (const { handler } of await Promise.all(
      modules.map((name) => import(`${name}/handler`))
    )) {
      middlewares.use(handler)
    }
  },
})
