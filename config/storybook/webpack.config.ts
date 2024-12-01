import path from 'path'
import { type BuildPaths } from '../build/types/config'
import type webpack from 'webpack'
import { buildCssLoader } from '../build/loaders/buildCssLoader'
import { DefinePlugin } from 'webpack'

export default ({ config }: { config: webpack.Configuration }) => {
  const paths: BuildPaths = {
    build: '',
    entry: '',
    html: '',
    src: path.resolve(__dirname, '../../src'),
    locales: '',
    buildLocales: '',
  }

  config?.resolve?.modules?.push(paths.src)
  config?.resolve?.extensions?.push('ts', 'tsx')

  if (config?.module?.rules) {
    // @ts-expect-error
    config.module.rules = config.module.rules.map((rule: { test: string }) => {
      // eslint-disable-next-line
      if (/svg/.test(rule.test)) {
        return { ...rule, exclude: /\.svg$/i }
      }

      return rule
    })

    config.module.rules.push(
      { test: /\.svg$/i, issuer: /\.[jt]sx?$/, use: ['@svgr/webpack'] },
      buildCssLoader(true)
    )

    config?.plugins?.push(
      new DefinePlugin({
        __IS_DEV__: JSON.stringify(true),
        __API__: JSON.stringify('http://localhost:8000/'),
        __PROJECT__: JSON.stringify('storybook'),
      })
    )
  }

  return config
}
