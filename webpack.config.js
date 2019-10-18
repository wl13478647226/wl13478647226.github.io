const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const autoprefixer = require('autoprefixer');

module.exports = {
    mode: 'development',
    entry: {
        'index': './src/js/index.js',
        'dashboard': './src/js/dashboard.js'
    },
    output: {
        // filename: 'js/[name].[chunkhash].js',
        filename: 'js/[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: '首页',
            filename: './index.html',
            template: './src/index.html',
            inject: true,
            hash: true,
            chunks: ['index'],
        }),
        new HtmlWebpackPlugin({
            title: '仪表盘',
            filename: './dashboard.html',
            template: './src/dashboard.html',
            inject: true,
            hash: true,
            chunks: ['dashboard'],
        }),
        new MiniCssExtractPlugin({
            // filename: "css/[name].[chunkhash].css"
            filename: "css/[name].css"
        }),
    ],
    devtool: 'inline-source-map',
    module: {
        rules: [{
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    {
                        loader: "postcss-loader",
                        options: {
                            plugins: [
                                autoprefixer({
                                    overrideBrowserslist: ['ie >= 8', 'Firefox >= 20', 'Safari >= 5', 'Android >= 4', 'Ios >= 6', 'last 4 version']
                                })
                            ]
                        }
                    }
                ]
            },
            {
                test: /\.sass$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    {
                        loader: "postcss-loader",
                        options: {
                            plugins: [
                                autoprefixer({
                                    overrideBrowserslist: ['ie >= 8', 'Firefox >= 20', 'Safari >= 5', 'Android >= 4', 'Ios >= 6', 'last 4 version']
                                })
                            ]
                        }
                    },
                    "sass-loader"
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: 'file-loader'
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: 'file-loader'
            }
        ]
    }
}