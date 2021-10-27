/* global module, __dirname */

const path = require('path')
const webpack = require('webpack')
path.appDirectory = path.resolve(__dirname, 'javascript')

module.exports = (env, argv) => {
  const inProduction = argv.mode === 'production'
  const inDevelopment = argv.mode === 'development'

  const settings = {
    entry: './javascript/index.jsx',
    plugins: [],
    watchOptions: {ignored: /node_modules/},
    module: {
      rules: [
        {
          test: /\.jsx?/,
          include: path.appDirectory,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react'],
            },
          },
        },
      ],
    },
  }
  if (inDevelopment) {
    const BrowserSyncPlugin = require('browser-sync-webpack-plugin')
    settings.plugins.push(
      new BrowserSyncPlugin({
        host: 'localhost',
        notify: false,
        port: 3000,
        files: ['./javascript/dist/signature.js'],
        proxy: 'localhost/signature',
      })
    )
    settings.output = {
      path: path.join(path.appDirectory, 'dist'),
      filename: 'signature.js',
    }
    settings.devtool = 'inline-source-map'
  }

  if (inProduction) {
    settings.plugins.push(
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('production'),
      })
    )
    settings.output = {
      path: path.join(path.appDirectory, 'dist'),
      filename: 'signature.min.js',
    }
  }
  return settings
}
