var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist')
    },
    compress: true,
    port: 3003
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Simple Sign Up',
      template: 'public/index.html'
    })
  ],
  module: {
    rules: [
      {
        test: /\.(jsx?)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        exclude: path.resolve(__dirname, './src/styles'),
        use: [
          "style-loader",
          "sass-loader",
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
              modules: true,
            },
          },
        ],
        include: /\.module\.(css|scss)$/,
      },
      {
        test: /\.(css|scss)$/,
        include: path.resolve(__dirname, 'src/**.(css|scss)'),
        use: ["style-loader", "css-loader", "sass-loader"],
        exclude: /\.module\.(css|scss)$/,
      },
      {
        test: /\.scss$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" },
          { loader: "sass-loader" }
        ]
      },
    ]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.bundle.js'
  },
  stats: {
    dependentModules: false
  }
}
