export const buildBabelLoader = () => ({
  test: /\.(?:jsx?|mjs|cjs|tsx?)$/,
  exclude: /node_modules/,
  use: {
    loader: 'babel-loader',
    options: {
      presets: ['@babel/preset-env'],
    },
  },
})
