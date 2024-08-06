module.exports = {
  entry: './src/index.mjs',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/dist'
  },
  resolve: {
    extensions: ['.mjs']
  }
};
