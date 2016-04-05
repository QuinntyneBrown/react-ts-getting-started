module.exports = {
  entry: './main.tsx',
  output: {
    filename: "./dist/bundle.js"
  },
  resolve: {
    extensions:['','.webpack.js','.web,js','.ts','.tsx','.js']
  },
  module: {
    loaders: [
        {
          test: /\.tsx$/, loader: "ts-loader"
        },
        {
          test: /\.css$/, exclude: [/node_modules/], loader: "style-loader!css-loader"
        }
    ]
  }

}
