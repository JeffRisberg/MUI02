const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode: 'development',
    entry: {
        javascript: "./src/index.js"
    },
    output: {
        path: __dirname + "/dist",
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
            },
            {test: /\.js$/, exclude: /node_modules/,
             use: ["babel-loader"]},
            {test: /\.jsx$/, exclude: /node_modules/,
             use: ["babel-loader"]},
            {test: /\.(jpe?g|png|gif|svg)$/i,
             use: ["file-loader?name=/public/icons/[name].[ext]"]}
        ]
    },
    plugins: [
        //new webpack.IgnorePlugin(/^(buffertools)$/), // unwanted "deeper" dependency
        new MiniCssExtractPlugin({filename: 'public/style.css'})
    ]
};
