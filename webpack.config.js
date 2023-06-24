const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "development",
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
}