const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");


module.exports = {
    mode: "production",
    entry: {
     bundle: path.resolve(__dirname, "./src/index.js")

},
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: '[name].js',
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
                
              },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
          title: 'Sweet Slice',
          filename: "index.html",
          template: "src/template.html"
        }),
      ],
      optimization: {
        minimizer: [
          "...",
          new ImageMinimizerPlugin({
            minimizer: {
              implementation: ImageMinimizerPlugin.squooshMinify,
              options: {
                // Your options for `squoosh`
              },
            },
          }),
        ],
      },
}