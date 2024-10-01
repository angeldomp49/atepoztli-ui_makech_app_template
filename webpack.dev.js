const {merge} = require("webpack-merge");
const common = require("./webpack.common");
const path = require("node:path");

module.exports = merge(common, {
    mode: 'development',
    devtool: "inline-source-map",
    devServer: {
        devMiddleware: {
            writeToDisk: true,
        },
        server: 'http',
        host: 'localhost',
        port: 8280,
        static: {
            directory: path.resolve(__dirname, "public"),
            publicPath: "/"
        },
        historyApiFallback: true,
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                exclude: /node_modules/,
                use: [
                    "style-loader",
                    {
                        loader: "css-loader",
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: "sass-loader",
                        options: {
                            sourceMap: true
                        }
                    }
                ],
            }
        ],
    }
});