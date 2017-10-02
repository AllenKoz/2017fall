const path = require('path');
require("./main.scss");

module.exports = {
  entry: './jquery-mockup/src/navigation.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'jquery-mock/dist')
  },
  module: {
    rules: [{
        test: /\.scss$/,
        use: [{
            loader: "style-loader" // creates style nodes from JS strings
        }, {
            loader: "css-loader" // translates CSS into CommonJS
        }, {
            loader: "sass-loader" // compiles Sass to CSS
        }]
    }]
}
};
