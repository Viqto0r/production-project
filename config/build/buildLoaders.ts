import type webpack from 'webpack'
import { type BuildOptions } from './types/config'
import { buildCssLoader } from './loaders/buildCssLoader'

export const buildLoaders = ({
  isDev,
}: BuildOptions): webpack.RuleSetRule[] => {
  const typescriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  }

  const babelLoader = {
    test: /\.(?:jsx?|mjs|cjs|tsx?)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env'],
      },
    },
  }

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

  return [babelLoader, typescriptLoader, cssLoader, svgLoader, fileLoader]
}
