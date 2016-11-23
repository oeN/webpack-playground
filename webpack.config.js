module.exports = {
  entry: './index.js',
  output: {
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: 'css' },
      { test: /\.coffee$/, loader: 'coffee-loader' },
      { test: /\.(js|es6)$/, exclude: /(node_modules)/, loader: 'babel-loader', query: { presets: ['es2015'] } }
    ]
  }
};
