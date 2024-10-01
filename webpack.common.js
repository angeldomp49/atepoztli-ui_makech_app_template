const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: [
        "./src/index.ts"
    ],
    output: {
        filename: "index.js",
        path: path.resolve(__dirname, "public"),
        library: {
            type: "commonjs-static",
        }
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                use: "babel-loader",
                exclude: /node_modules/
            }
        ],
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx"]
    },
    target: "web",
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        })
    ]
};