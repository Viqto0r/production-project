import type webpack from 'webpack'
import { type BuildOptions } from './types/config'
import { buildCssLoader } from './loaders/buildCssLoader'
import { buildBabelLoader } from './loaders/buildBabelLoader'

export const buildLoaders = ({
  isDev,
}: BuildOptions): webpack.RuleSetRule[] => {
  const codeBabelLoader = buildBabelLoader()
  const tsxCodeBabelLoader = buildBabelLoader(true)
  const cssLoader = buildCssLoader(isDev)

  const svgLoader = {
    test: /\.svg$/i,
    issuer: /\.[jt]sx?$/,
    use: ['@svgr/webpack'],
  }

  const fileLoader = {
    test: /\.(png|jpe?g|gif|woff2?)$/i,
    use: [
      {
        loader: 'file-loader',
      },
    ],
  }

  return [codeBabelLoader, tsxCodeBabelLoader, cssLoader, svgLoader, fileLoader]
}
