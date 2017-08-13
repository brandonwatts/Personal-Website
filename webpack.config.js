module.exports = {
  entry: "./index.jsx",
  output: {
    path: __dirname,
    filename: "bundle.js",
    publicPath: "/static/"
  },
  module: {
    loaders: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loaders: ["babel-loader"]
      }, {
        test: /\.scss$/,
        loaders: [ 'style-loader', 'css-loader?sourceMap', 'sass-loader?sourceMap' ]
      }
    ]
  },
  devtool: '#source-map'
}
