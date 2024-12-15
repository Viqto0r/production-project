import babelRemovePropsPlugin from '../../babel/babelRemovePropsPlugin'

interface IBuildBabelLoaderProps {
  isTsx?: boolean
  isDev: boolean
}

export const buildBabelLoader = ({ isDev, isTsx }: IBuildBabelLoaderProps) => {
  const isProd = !isDev

  return {
    test: isTsx ? /\.(?:jsx|tsx)$/ : /\.(?:js|ts)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        cacheDirectory: true,
        presets: ['@babel/preset-env'],
        plugins: [
          ['@babel/plugin-transform-typescript', { isTsx }],
          '@babel/plugin-transform-runtime',
          isTsx &&
            isProd && [babelRemovePropsPlugin, { props: ['data-testid'] }],
        ].filter(Boolean),
      },
    },
  }
}
