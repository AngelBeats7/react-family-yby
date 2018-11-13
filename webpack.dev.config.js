const path = require("path");
const merge = require('webpack-merge');

const commonConfig = require('./webpack.common.config.js');

const devConfig = {
    devtool: 'inline-source-map',
    mode: "none",
    // 入口
    entry: {
        app: ['react-hot-loader/patch', path.join(__dirname, "src/index.js")]
    },
    // 输出到dist文件夹，输出文件名字为bundle.js
    output: {
        path: path.join(__dirname, "./dist"),
        filename: '[name].[hash].js',
        chunkFilename: '[name].[chunkhash].js'
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }],
    },
    devServer: {
        port: 8080,
        contentBase: path.join(__dirname, './dist'),
        historyApiFallback: true,
        host: '0.0.0.0'
    }
};

module.exports = merge({
    customizeArray(a, b, key) {
        /*entry.app不合并，全替换*/
        if (key === 'entry.app') {
            return b;
        }
        return undefined;
    }
})(commonConfig, devConfig);