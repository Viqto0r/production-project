import path from 'path'
import { type BuildPaths } from '../build/types/config'
import type RuleSetRule from 'webpack'
import type webpack from 'webpack'
import { buildCssLoader } from '../build/loaders/buildCssLoader'

export default ({ config }: { config: webpack.Configuration }) => {
  const paths: BuildPaths = {
    build: '',
    entry: '',
    html: '',
    src: path.resolve(__dirname, '../../src'),
  }
  config.resolve.modules.push(paths.src)
  config.resolve.extensions.push('ts', 'tsx')
  config.module.rules = config.module.rules.map((rule: RuleSetRule) => {
    if (/svg/.test(rule.test)) {
      return { ...rule, exclude: /\.svg$/i }
    }

    return rule
  })

  config.module.rules.push(
    { test: /\.svg$/i, issuer: /\.[jt]sx?$/, use: ['@svgr/webpack'] },
    buildCssLoader(true)
  )
  return config
}
