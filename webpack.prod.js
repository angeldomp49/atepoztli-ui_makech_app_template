const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const {merge} = require("webpack-merge");
const common = require("./webpack.common");

module.exports = merge(common, {
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                exclude: /node_modules/,
                use: [
                    MiniCssExtractPlugin.loader,
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
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "index.css"
        })
    ]
});