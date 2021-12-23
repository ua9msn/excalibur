const path = require('path');
const pkg = require('./package.json');

const config = {
  entry: __dirname + '/src/index.ts',
  mode: "production",
  devtool: false,
  output: {
    path: __dirname + '/lib',
    filename: pkg.name + '.js',
    library: {
      type: "commonjs"
    },
    globalObject: 'typeof self !== \'undefined\' ? self : this',
  },
  module: {
    rules: [
      {
        test: /(\.js|ts)$/,
        loader: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    modules: [path.resolve('./node_modules'), path.resolve('./src')],
    extensions: ['.json', '.js', '.ts']
  }
};

module.exports = config;
