const path = require('path');
const webpack = require('webpack');
const webpackDevServer = require('webpack-dev-server');
const args = require('yargs').argv;

const contentBase = './src/client';
const port = 8080;

const serverConfig = {
  devtool: 'eval',
  entry: [
    'webpack-dev-server/client?http://localhost:' + port,
    'webpack/hot/only-dev-server',
    './src/client/containers/Root.js',
  ],
  output: {
    path: path.join(__dirname, contentBase),
    publicPath: contentBase,
    filename: 'bundle.js',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(args.env || 'development'),
      },
    }),
  ],
  module: {
    loaders: [{
      test: [/\.jsx$/, /\.js$/],
      loaders: ['react-hot', 'babel?presets[]=react,presets[]=es2015'],
      include: path.join(__dirname, contentBase),
    }, {
      test: /\.jpg$/,
      loader: 'file-loader?prefix=assets/images/',
    }, {
      test: /\.png$/,
      loader: 'file-loader?prefix=assets/images/',
    }, {
      test: /\.ico/,
      loader: 'file-loader?prefix=assets/images/',
    }, {
      test: /\.json$/,
      loader: 'json-loader',
    }],
  },
};

new webpackDevServer(webpack(serverConfig), {
  contentBase: contentBase,
  stats: {
    colors: true,
  },
}).listen(port, '0.0.0.0', err => {
});
