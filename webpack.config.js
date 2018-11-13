const merge = require('webpack-merge');

const webpack = require("webpack");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const miniCssExtractPlugin = require('mini-css-extract-plugin');

const commonConfig = require('./webpack.common.config.js');

const proConfig = {
    devtool: 'cheap-module-source-map',
    mode: "production",
    module: {
        rules: [{
            test: /\.css$/,
            use: [
                miniCssExtractPlugin.loader,
                {
                    loader: 'css-loader',
                    options: {
                        url: false
                    }
                }
            ]
        }],
    },
    plugins: [
        new CleanWebpackPlugin(['dist/*.*']),
        new UglifyJSPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new miniCssExtractPlugin({
            filename: '[name].[contenthash:5].css',
            allChunks: true
        })
    ]
};

module.exports = merge(commonConfig, proConfig);